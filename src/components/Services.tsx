import { Check } from 'lucide-react';

export function Services() {
  const services = [
    {
      name: 'Classic Haircut',
      price: '$45',
      duration: '45 min',
      description: 'Precision cut with traditional techniques, includes hot towel treatment and styling.',
      features: ['Consultation', 'Precision Cut', 'Hot Towel', 'Style & Finish'],
    },
    {
      name: 'Traditional Straight Razor Shave',
      price: '$55',
      duration: '50 min',
      description: 'The ultimate shaving experience with hot towels, pre-shave oil, and luxury aftercare.',
      features: ['Hot Towel Prep', 'Pre-Shave Oil', 'Straight Razor Shave', 'Moisturizing Aftercare'],
      featured: true,
    },
    {
      name: 'Beard Trim & Shape',
      price: '$35',
      duration: '30 min',
      description: 'Expert beard sculpting and grooming to maintain your perfect look.',
      features: ['Trim & Shape', 'Edge Definition', 'Hot Towel', 'Beard Oil'],
    },
    {
      name: 'The Complete Gentleman',
      price: '$95',
      duration: '90 min',
      description: 'Our signature service combining haircut and straight razor shave.',
      features: ['Premium Haircut', 'Straight Razor Shave', 'Face Massage', 'Luxury Products'],
    },
    {
      name: 'Father & Son',
      price: '$75',
      duration: '60 min',
      description: 'A special package for fathers and sons to share the Andolini experience.',
      features: ['Two Haircuts', 'Side-by-Side Service', 'Hot Towels', 'Complimentary Photo'],
    },
    {
      name: 'Gray Blending',
      price: '$65',
      duration: '45 min',
      description: 'Natural-looking color treatment to subtly blend gray hair.',
      features: ['Color Consultation', 'Application', 'Haircut', 'Styling'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[var(--espresso)] to-[var(--black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block border-b-2 border-[var(--gold)] pb-2 mb-4">
            <span className="text-[var(--gold)] tracking-widest text-sm">SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[var(--cream)] mb-6">
            Services {'&'} Pricing
          </h2>
          <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-6"></div>
          <p className="text-[var(--cream)]/80 text-lg max-w-2xl mx-auto">
            Each service is performed with meticulous attention to detail, using premium products 
            and time-honored techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-[var(--cream)] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                service.featured ? 'ring-4 ring-[var(--gold)]' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0 bg-[var(--gold)] text-[var(--espresso)] px-4 py-1 text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl text-[var(--espresso)]">
                    {service.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl text-[var(--gold)]">{service.price}</div>
                    <div className="text-sm text-[var(--espresso)]/60">{service.duration}</div>
                  </div>
                </div>

                <p className="text-[var(--espresso)]/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="text-[var(--gold)] mr-3 flex-shrink-0" size={20} />
                      <span className="text-[var(--espresso)]/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-2 bg-gradient-to-r from-[var(--espresso)] via-[var(--gold)] to-[var(--espresso)]"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--cream)]/60 text-sm">
            * All services include complimentary beverage and consultation. Walk-ins welcome, appointments preferred.
          </p>
        </div>
      </div>
    </section>
  );
}
