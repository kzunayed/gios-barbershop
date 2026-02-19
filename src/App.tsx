import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { Phone } from 'lucide-react';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navigation height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Services />
      <Gallery />
      <Location />
      <Footer />

      {/* Sticky Mobile Call Button */}
      <a
        href="tel:+16466449891"
        className="md:hidden fixed bottom-6 right-6 bg-[var(--gold)] text-[var(--espresso)] p-4 rounded-full shadow-2xl hover:bg-[var(--gold)]/90 transition-all duration-300 z-50 flex items-center gap-2"
        aria-label="Call Now"
      >
        <Phone size={24} />
        <span className="font-semibold">Call Now</span>
      </a>
    </div>
  );
}