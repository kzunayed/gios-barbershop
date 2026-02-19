import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    barber: '',
    date: '',
    time: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    'Classic Haircut',
    'Traditional Straight Razor Shave',
    'Beard Trim & Shape',
    'The Complete Gentleman',
    'Father & Son',
    'Gray Blending',
  ];

  const barbers = ['Marco Andolini', 'Antonio Russo', 'Ben Pratt', 'No Preference'];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-61646a0c/book-appointment`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage(data.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          barber: '',
          date: '',
          time: '',
          notes: '',
        });
      } else {
        setSubmitMessage('Something went wrong. Please call us at 0494 643 544 to book.');
        console.error('Booking error:', data);
      }
    } catch (error) {
      console.error('Error submitting appointment booking:', error);
      setSubmitMessage('Something went wrong. Please call us at 0494 643 544 to book.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-[var(--black)] to-[var(--espresso)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block border-b-2 border-[var(--gold)] pb-2 mb-4">
            <span className="text-[var(--gold)] tracking-widest text-sm">APPOINTMENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[var(--cream)] mb-6">
            Book Your Visit
          </h2>
          <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-6"></div>
          <p className="text-[var(--cream)]/80 text-lg">
            Reserve your spot with one of our master barbers. Walk-ins welcome based on availability.
          </p>
        </div>

        <div className="bg-[var(--cream)] rounded-lg shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-[var(--espresso)] mb-2">
                  <User size={20} className="mr-2 text-[var(--gold)]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[var(--espresso)]/20 rounded focus:border-[var(--gold)] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="flex items-center text-[var(--espresso)] mb-2">
                  <Phone size={20} className="mr-2 text-[var(--gold)]" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[var(--espresso)]/20 rounded focus:border-[var(--gold)] focus:outline-none transition-colors"
                  placeholder="0494643544"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center text-[var(--espresso)] mb-2">
                <Mail size={20} className="mr-2 text-[var(--gold)]" />
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[var(--espresso)]/20 rounded focus:border-[var(--gold)] focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-[var(--espresso)] mb-2">
                  <Calendar size={20} className="mr-2 text-[var(--gold)]" />
                  Service *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[var(--espresso)]/20 rounded focus:border-[var(--gold)] focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center text-[var(--espresso)] mb-2">
                  <User size={20} className="mr-2 text-[var(--gold)]" />
                  Preferred Barber
                </label>
                <select
                  value={formData.barber}
                  onChange={(e) => setFormData({ ...formData, barber: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[var(--espresso)]/20 rounded focus:border-[var(--gold)] focus:outline-none transition-colors"
                >
                  <option value="">Select a barber</option>
                  {barbers.map((barber) => (
                    <option key={barber} value={barber}>
                      {barber}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-[var(--espresso)] mb-2">
                  <Calendar size={20} className="mr-2 text-[var(--gold)]" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[var(--espresso)]/20 rounded focus:border-[var(--gold)] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center text-[var(--espresso)] mb-2">
                  <Clock size={20} className="mr-2 text-[var(--gold)]" />
                  Preferred Time *
                </label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[var(--espresso)]/20 rounded focus:border-[var(--gold)] focus:outline-none transition-colors"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center text-[var(--espresso)] mb-2">
                <Mail size={20} className="mr-2 text-[var(--gold)]" />
                Additional Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border-2 border-[var(--espresso)]/20 rounded focus:border-[var(--gold)] focus:outline-none transition-colors"
                placeholder="Any special requests or preferences?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[var(--gold)] text-[var(--espresso)] py-4 rounded hover:bg-[var(--gold)]/90 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Request Appointment'}
            </button>

            {submitMessage && (
              <div className="text-center p-4 bg-[var(--gold)]/10 rounded border border-[var(--gold)]/20">
                <p className="text-[var(--espresso)]">
                  {submitMessage}
                </p>
              </div>
            )}

            <p className="text-center text-[var(--espresso)]/60 text-sm">
              * Required fields. We'll confirm your appointment via phone or email within 24 hours.
            </p>
          </form>

          <div className="mt-8 pt-8 border-t-2 border-[var(--gold)]/20">
            <div className="text-center">
              <p className="text-[var(--espresso)] mb-2">
                Prefer to call? We'd love to hear from you!
              </p>
              <a
                href="tel:0494643544"
                className="text-2xl text-[var(--gold)] hover:text-[var(--gold)]/80 transition-colors"
              >
                0494 643 544
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}