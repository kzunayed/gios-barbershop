import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import mapImage from 'figma:asset/7f0422fa52c874aa1d2b60cf3c9fd88b2ce9ab46.png';

export function Location() {
  const hours = [
    { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 4:00 PM' },
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
            <img
              src={mapImage}
              alt="Andolini Barbershop Location Map"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[var(--gold)]">
              <div className="flex items-start space-x-4">
                <MapPin className="text-[var(--gold)] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl text-[var(--espresso)] mb-2">Address</h3>
                  <p className="text-[var(--espresso)]/80 leading-relaxed">
                    Note: High Street Northcote shop is temporarily closed for renovations, contact us for our home address
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
                    href="tel:0494643544"
                    className="text-[var(--espresso)]/80 hover:text-[var(--gold)] transition-colors text-lg"
                  >
                    0494 643 544
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[var(--gold)]">
              <div className="flex items-start space-x-4">
                <Mail className="text-[var(--gold)] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl text-[var(--espresso)] mb-2">Email</h3>
                  <a
                    href="mailto:andolinibarbershop@gmail.com"
                    className="text-[var(--espresso)]/80 hover:text-[var(--gold)] transition-colors"
                  >
                    andolinibarbershop@gmail.com
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
          <p className="text-[var(--cream)] text-lg mb-2">
            Free street parking available after 6 PM and on weekends
          </p>
          <p className="text-[var(--gold)] text-sm">
            Public parking garage located one block east on Mulberry Street
          </p>
        </div>
      </div>
    </section>
  );
}