import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'location', label: 'Location' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--espresso)] border-b border-[var(--gold)]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2"
          >
            <div className="text-[var(--gold)]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5L25 15H15L20 5Z" fill="currentColor"/>
                <rect x="18" y="14" width="4" height="20" fill="currentColor"/>
                <path d="M12 34C12 31 15 28 20 28C25 28 28 31 28 34H12Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-2xl text-[var(--cream)] font-serif">Gio Cutz</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[var(--cream)] hover:text-[var(--gold)] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+16466449891"
              className="bg-[var(--gold)] text-[var(--espresso)] px-6 py-2 rounded hover:bg-[var(--gold)]/90 transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--cream)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--gold)]/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-[var(--cream)] hover:text-[var(--gold)] py-2 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+16466449891"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-[var(--gold)] text-[var(--espresso)] px-6 py-2 rounded hover:bg-[var(--gold)]/90 transition-all duration-300 mt-2 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}