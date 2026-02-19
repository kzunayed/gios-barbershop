export function Footer() {
  return (
    <footer className="bg-[var(--black)] text-[var(--cream)] py-12 border-t-2 border-[var(--gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-[var(--gold)] mb-4 font-serif">Gio Cutz</h3>
            <p className="text-[var(--cream)]/70 leading-relaxed">
              Your neighborhood barbershop in Jamaica, Queens. Quality cuts, affordable prices, clean shop.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-[var(--gold)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[var(--cream)]/70 hover:text-[var(--gold)] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-[var(--cream)]/70 hover:text-[var(--gold)] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#location" className="text-[var(--cream)]/70 hover:text-[var(--gold)] transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg text-[var(--gold)] mb-4">Contact Us</h4>
            <ul className="space-y-2 text-[var(--cream)]/70">
              <li>88-18 Sutphin Blvd<br />Jamaica, NY 11435</li>
              <li className="pt-2">
                <a href="tel:+16466449891" className="hover:text-[var(--gold)] transition-colors">
                  (646) 644-9891
                </a>
              </li>
              <li className="pt-2">
                [Add email if needed]
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--gold)]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--cream)]/60 text-sm mb-4 md:mb-0">
            © 2026 Gio Cutz. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[var(--cream)]/60 hover:text-[var(--gold)] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[var(--cream)]/60 hover:text-[var(--gold)] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}