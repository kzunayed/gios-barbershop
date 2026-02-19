import { Check } from 'lucide-react';

export function Services() {
  const services = [
    {
      name: 'Haircut',
      price: 'Call for pricing',
      description: 'Professional haircut tailored to your style.',
      features: ['Consultation', 'Precision Cut', 'Style & Finish'],
    },
    {
      name: 'Fade',
      price: 'Call for pricing',
      description: 'Clean fade with attention to detail.',
      features: ['Consultation', 'Fade Cut', 'Edge Up', 'Finish'],
      featured: true,
    },
    {
      name: 'Lineup',
      price: 'Call for pricing',
      description: 'Sharp edge-up to keep your look fresh.',
      features: ['Edge Up', 'Neck Cleanup', 'Quick Service'],
    },
    {
      name: 'Beard Trim',
      price: 'Call for pricing',
      description: 'Professional beard trimming and shaping.',
      features: ['Trim & Shape', 'Edge Definition', 'Cleanup'],
    },
    {
      name: 'Kids Cut',
      price: 'Call for pricing',
      description: 'Patient, kid-friendly haircut service.',
      features: ['Kid-Friendly Approach', 'Haircut', 'Styling'],
    },
    {
      name: 'Full Service',
      price: 'Call for pricing',
      description: 'Complete grooming package.',
      features: ['Haircut', 'Beard Trim', 'Lineup', 'Full Styling'],
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
            Quality barbering services for all your grooming needs.
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
                <div className="mb-4">
                  <h3 className="text-2xl text-[var(--espresso)] mb-2">
                    {service.name}
                  </h3>
                  <div className="text-lg text-[var(--gold)]">{service.price}</div>
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
            * Walk-ins welcome. Call for current pricing and availability.
          </p>
        </div>
      </div>
    </section>
  );
}
