import SectionHeader from '../ui/SectionHeader'
import { galleryImages } from '../../data/gallery'

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 px-4 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Nuestro Trabajo"
          title="Galería"
          subtitle="Una muestra de la calidad y dedicación que ponemos en cada servicio."
        />
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryImages.map((img, i) => (
            <div key={img.src} className="break-inside-avoid overflow-hidden rounded-xl reveal" style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
              <img
                src={`/img/${img.src}`}
                alt={img.alt}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
