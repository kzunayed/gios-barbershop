import heroImage from 'figma:asset/c80848bca01f3d072ae5ccf86081132cecbfe71d.png';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vintage barbershop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--espresso)]/80 via-[var(--espresso)]/60 to-[var(--espresso)]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="inline-block border-2 border-[var(--gold)] px-6 py-2 mb-6">
            <span className="text-[var(--gold)] tracking-widest text-sm">EST. 1947</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl text-[var(--cream)] mb-6 tracking-tight">
          Andolini Barbershop
        </h1>
        
        <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-6"></div>
        
        <p className="text-xl md:text-2xl text-[var(--cream)]/90 mb-8 max-w-2xl mx-auto">
          Where Italian heritage meets modern craftsmanship
        </p>
        
        <p className="text-[var(--cream)]/80 text-lg mb-10 max-w-2xl mx-auto">
          Experience the art of traditional barbering with contemporary luxury. 
          Three generations of master barbers serving our community with pride.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('booking')}
            className="bg-[var(--gold)] text-[var(--espresso)] px-8 py-4 rounded hover:bg-[var(--gold)]/90 transition-all duration-300 shadow-lg"
          >
            Book Your Appointment
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="bg-transparent border-2 border-[var(--cream)] text-[var(--cream)] px-8 py-4 rounded hover:bg-[var(--cream)]/10 transition-all duration-300"
          >
            View Services
          </button>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"></div>
    </section>
  );
}