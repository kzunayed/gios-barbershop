export function Barbers() {
  const barbers = [
    {
      name: 'Marco Andolini',
      title: 'Master Barber & Owner',
      image: 'https://images.unsplash.com/photo-1747832512459-5566e6d0ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUyNzQyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      experience: '25 years',
      specialty: 'Classic cuts & straight razor shaves',
      bio: 'Third-generation barber carrying on his grandfather\'s legacy with passion and precision.',
    },
    {
      name: 'Antonio Russo',
      title: 'Senior Barber',
      image: 'https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjUyOTEzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      experience: '18 years',
      specialty: 'Modern styles & beard sculpting',
      bio: 'Blends contemporary trends with traditional Italian barbering techniques.',
    },
    {
      name: 'Giuseppe Romano',
      title: 'Master Barber',
      image: 'https://images.unsplash.com/photo-1762186540775-11c875d3f26d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYmFyYmVyJTIwdG9vbHN8ZW58MXx8fHwxNzY1MzIzMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      experience: '30 years',
      specialty: 'Traditional straight razor expert',
      bio: 'Trained in Naples, bringing authentic Italian barbering artistry to every service.',
    },
  ];

  return (
    <section id="barbers" className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block border-b-2 border-[var(--gold)] pb-2 mb-4">
            <span className="text-[var(--gold)] tracking-widest text-sm">THE TEAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[var(--espresso)] mb-6">
            Meet the Barbers
          </h2>
          <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-6"></div>
          <p className="text-[var(--espresso)]/80 text-lg max-w-2xl mx-auto">
            Our master barbers are artists dedicated to their craft, each bringing unique expertise 
            and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {barbers.map((barber, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-[var(--espresso)]/40 to-transparent opacity-60"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl text-[var(--cream)] mb-1">
                    {barber.name}
                  </h3>
                  <p className="text-[var(--gold)] mb-2">{barber.title}</p>
                  <div className="flex items-center space-x-4 text-sm text-[var(--cream)]/90">
                    <span>{barber.experience} experience</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t-4 border-[var(--gold)]">
                <p className="text-[var(--espresso)] mb-3">
                  <span className="text-[var(--gold)]">Specialty:</span> {barber.specialty}
                </p>
                <p className="text-[var(--espresso)]/80 leading-relaxed">
                  {barber.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-[var(--espresso)] rounded-lg p-8">
          <p className="text-[var(--cream)] text-lg mb-4">
            Our barbers are continually trained in the latest techniques while honoring traditional methods.
          </p>
          <p className="text-[var(--gold)]">
            Request your preferred barber when booking your appointment.
          </p>
        </div>
      </div>
    </section>
  );
}
