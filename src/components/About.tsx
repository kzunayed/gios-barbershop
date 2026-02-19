import { DollarSign, Users, Tv } from 'lucide-react';
import aboutImage from 'figma:asset/275faa3aa8f2a049279a9e8c53cdc25cb6aef100.png';

export function About() {
  const features = [
    {
      icon: DollarSign,
      title: 'Affordable Prices',
      description: 'Quality cuts at prices that work for your budget.',
    },
    {
      icon: Users,
      title: 'Kid-Friendly',
      description: 'Welcoming environment for clients of all ages.',
    },
    {
      icon: Tv,
      title: 'Clean Shop with TVs',
      description: 'Comfortable, clean space with entertainment while you wait.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block border-b-2 border-[var(--gold)] pb-2 mb-4">
            <span className="text-[var(--gold)] tracking-widest text-sm">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[var(--espresso)] mb-6">
            Welcome to Gio Cutz
          </h2>
          <div className="w-24 h-1 bg-[var(--gold)] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--gold)]/10 rounded"></div>
            <img
              src={aboutImage}
              alt="Vintage barbershop"
              className="relative rounded shadow-2xl w-full"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-[var(--espresso)]/90 leading-relaxed">
              Gio Cutz is your neighborhood barbershop in Jamaica, Queens, focused on delivering quality haircuts
              and grooming services at prices that work for everyone.
            </p>
            <p className="text-lg text-[var(--espresso)]/90 leading-relaxed">
              We pride ourselves on maintaining a clean, welcoming shop with TVs for your entertainment.
              Whether you're bringing your kids for their first cut or need a fresh fade for yourself,
              we've got you covered.
            </p>
            <p className="text-lg text-[var(--espresso)]/90 leading-relaxed">
              Stop by or give us a call to schedule your appointment. We look forward to serving you.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded shadow-lg border-t-4 border-[var(--gold)] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[var(--espresso)] rounded-full flex items-center justify-center">
                  <feature.icon className="text-[var(--gold)]" size={32} />
                </div>
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-[var(--espresso)]/80 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}