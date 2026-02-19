import { MapPin, Phone, Clock } from 'lucide-react';

export function Location() {
  const hours = [
    { day: 'Monday - Friday', time: '[Confirm hours]' },
    { day: 'Saturday', time: '[Confirm hours]' },
    { day: 'Sunday', time: '[Confirm hours]' },
  ];

  return (
    <section id="location" className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block border-b-2 border-[var(--gold)] pb-2 mb-4">
            <span className="text-[var(--gold)] tracking-widest text-sm">VISIT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[var(--espresso)] mb-6">
            Location {'&'} Hours
          </h2>
          <div className="w-24 h-1 bg-[var(--gold)] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.0!2d-73.7962!3d40.7025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25dd6c6f5d5af%3A0x5a7c3e3d5e7c3e3d!2s88-18%20Sutphin%20Blvd%2C%20Jamaica%2C%20NY%2011435!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gio Cutz Location"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[var(--gold)]">
              <div className="flex items-start space-x-4">
                <MapPin className="text-[var(--gold)] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl text-[var(--espresso)] mb-2">Address</h3>
                  <p className="text-[var(--espresso)]/80 leading-relaxed">
                    88-18 Sutphin Blvd<br />
                    Jamaica, NY 11435
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[var(--gold)]">
              <div className="flex items-start space-x-4">
                <Phone className="text-[var(--gold)] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl text-[var(--espresso)] mb-2">Phone</h3>
                  <a
                    href="tel:+16466449891"
                    className="text-[var(--espresso)]/80 hover:text-[var(--gold)] transition-colors text-lg"
                  >
                    (646) 644-9891
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[var(--espresso)] p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <Clock className="text-[var(--gold)] mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="text-xl text-[var(--cream)] mb-4">Hours of Operation</h3>
                  <div className="space-y-3">
                    {hours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center pb-3 border-b border-[var(--gold)]/20 last:border-0"
                      >
                        <span className="text-[var(--cream)]/90">{schedule.day}</span>
                        <span className="text-[var(--gold)]">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[var(--espresso)] to-[var(--black)] rounded-lg p-8 text-center">
          <p className="text-[var(--cream)] text-lg">
            Call ahead for availability and to confirm hours.
          </p>
        </div>
      </div>
    </section>
  );
}