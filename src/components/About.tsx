import { Scissors, Award, Users } from 'lucide-react';
import aboutImage from 'figma:asset/275faa3aa8f2a049279a9e8c53cdc25cb6aef100.png';

export function About() {
  const traditions = [
    {
      icon: Scissors,
      title: 'Master Craftsmanship',
      description: 'Three generations of barbers perfecting the art of traditional Italian grooming techniques.',
    },
    {
      icon: Award,
      title: 'Excellence Since 1947',
      description: 'Decades of dedication to providing the finest barbering services in the community.',
    },
    {
      icon: Users,
      title: 'Family Heritage',
      description: 'A legacy passed down from father to son, preserving timeless traditions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block border-b-2 border-[var(--gold)] pb-2 mb-4">
            <span className="text-[var(--gold)] tracking-widest text-sm">OUR STORY</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[var(--espresso)] mb-6">
            The Andolini Tradition
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
              In 1947, Giovanni Andolini brought his family's barbering tradition from the hills of Sicily to 
              create a sanctuary of style and sophistication. What started as a single chair in a small storefront 
              has grown into a beloved institution.
            </p>
            <p className="text-lg text-[var(--espresso)]/90 leading-relaxed">
              Today, his grandson Marco continues the legacy, blending old-world techniques with modern grooming 
              trends. Every haircut, every shave, every service is a testament to our commitment to excellence 
              and the personal touch that defines the Andolini experience.
            </p>
            <p className="text-lg text-[var(--espresso)]/90 leading-relaxed">
              We don't just cut hair—we preserve a tradition, honor our heritage, and build lasting relationships 
              with every gentleman who walks through our doors.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {traditions.map((tradition, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded shadow-lg border-t-4 border-[var(--gold)] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[var(--espresso)] rounded-full flex items-center justify-center">
                  <tradition.icon className="text-[var(--gold)]" size={32} />
                </div>
              </div>
              <h3 className="text-xl text-[var(--espresso)] mb-4 text-center">
                {tradition.title}
              </h3>
              <p className="text-[var(--espresso)]/80 text-center leading-relaxed">
                {tradition.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}