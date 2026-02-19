import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-61646a0c/health", (c) => {
  return c.json({ status: "ok" });
});

// Appointment booking endpoint
app.post("/make-server-61646a0c/book-appointment", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, service, date, time, notes } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !date || !time) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Store the booking in the key-value store
    const bookingId = `booking_${Date.now()}`;
    const bookingData = {
      id: bookingId,
      name,
      email,
      phone,
      service,
      date,
      time,
      notes: notes || '',
      createdAt: new Date().toISOString(),
    };

    await kv.set(bookingId, bookingData);

    // Send email notification using Resend API
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.log('RESEND_API_KEY not configured. Booking saved but email not sent.');
      return c.json({ 
        success: true, 
        message: 'Booking saved successfully',
        bookingId,
        emailSent: false 
      });
    }

    // Format the email content
    const emailHtml = `
      <h2>New Appointment Booking</h2>
      <p><strong>Customer Details:</strong></p>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
      </ul>
      <p><strong>Appointment Details:</strong></p>
      <ul>
        <li>Service: ${service}</li>
        <li>Date: ${date}</li>
        <li>Time: ${time}</li>
        ${notes ? `<li>Notes: ${notes}</li>` : ''}
      </ul>
      <p>Booking ID: ${bookingId}</p>
    `;

    // Send email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Andolini Barbershop <onboarding@resend.dev>',
        to: ['andolinibarbershop@gmail.com'],
        subject: `New Appointment: ${name} - ${service}`,
        html: emailHtml,
      }),
    });

    const emailResult = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error('Email sending error:', emailResult);
      return c.json({ 
        success: true, 
        message: 'Booking saved but email failed to send',
        bookingId,
        emailSent: false,
        emailError: emailResult
      });
    }

    console.log('Appointment booked and email sent:', bookingId);

    return c.json({ 
      success: true, 
      message: 'Appointment booked successfully! We will contact you soon to confirm.',
      bookingId,
      emailSent: true 
    });

  } catch (error) {
    console.error('Error processing appointment booking:', error);
    return c.json({ 
      error: 'Failed to process appointment booking',
      details: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);