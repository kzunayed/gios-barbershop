import galleryImage from 'figma:asset/c80848bca01f3d072ae5ccf86081132cecbfe71d.png';
import traditionImage from 'figma:asset/275faa3aa8f2a049279a9e8c53cdc25cb6aef100.png';
import skinFadeImage from 'figma:asset/4b4e3399392044423b6969fee1f47b4af73f42b6.png';
import toolsImage from 'figma:asset/fd76b7bd37742df435d59064dfc2a3e71624ef17.png';
import shavingCreamImage from 'figma:asset/a65509ed6636e710a36178c08ab4c1ca52741c89.png';
import beardTrimImage from 'figma:asset/47feffedd2714f3fc7ba6bec270be5c53ab02495.png';

export function Gallery() {
  const images = [
    {
      url: galleryImage,
      caption: 'Our vintage interior',
    },
    {
      url: toolsImage,
      caption: 'Traditional tools of the trade',
    },
    {
      url: skinFadeImage,
      caption: 'Skin fades',
    },
    {
      url: traditionImage,
      caption: 'Where tradition meets style',
    },
    {
      url: shavingCreamImage,
      caption: 'Hot towel shave experience',
    },
    {
      url: beardTrimImage,
      caption: 'Precision beard sculpting',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[var(--espresso)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block border-b-2 border-[var(--gold)] pb-2 mb-4">
            <span className="text-[var(--gold)] tracking-widest text-sm">GALLERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[var(--cream)] mb-6">
            Our Craftsmanship
          </h2>
          <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-6"></div>
          <p className="text-[var(--cream)]/80 text-lg max-w-2xl mx-auto">
            Step inside our world of classic style, premium service, and timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[var(--cream)] text-lg">{image.caption}</p>
                  <div className="w-12 h-1 bg-[var(--gold)] mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}