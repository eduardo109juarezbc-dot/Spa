import SectionHeader from '../ui/SectionHeader'
import { services } from '../../data/services'

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-20 px-4 bg-dark-gradient">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Nuestros Servicios"
          title="Todo lo que necesitas"
          subtitle="Desde cortes y manicura hasta faciales de alta tecnología y armonización facial. Cada servicio en manos de profesionales certificados."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="card-premium overflow-hidden group reveal block"
            >
              <div className="cat-card-img h-40 md:h-48">
                <img
                  src={`/img/${s.img}`}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end p-4">
                  <h3 className="font-heading text-white-soft font-semibold text-base relative z-10">{s.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
