import PriceCard from '../ui/PriceCard'
import PromoStrip from '../ui/PromoStrip'
import { CheckCircle } from 'lucide-react'

export default function ServiceSection({ service, index }) {
  const isEven = index % 2 === 0

  return (
    <section id={service.id} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${isEven ? '' : 'lg:grid-flow-dense'}`}>

          {/* Image */}
          <div className={`reveal${isEven ? '-left' : '-right'} ${isEven ? '' : 'lg:col-start-2'} min-h-72`}>
            <div className="relative rounded-2xl overflow-hidden h-full min-h-72">
              <img
                src={`/img/${service.img}`}
                alt={service.title}
                className={`absolute inset-0 w-full h-full object-cover ${service.imgPosition ?? 'object-center'}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content */}
          <div className={`reveal ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
            <p className="text-gold font-semibold tracking-widest uppercase text-xs mb-2">Servicio</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white-soft mb-4">{service.title}</h2>
            <div className="section-divider ml-0 mr-auto mb-6" />
            <p className="text-warm-gray leading-relaxed mb-6">{service.desc}</p>

            {/* Benefits */}
            {service.benefits && (
              <ul className="space-y-2 mb-8">
                {service.benefits.map(b => (
                  <li key={b} className="flex items-start gap-2 text-sm text-warm-light">
                    <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {/* Flat prices */}
            {service.prices && (
              <div className="card-premium p-5 mb-4">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Precios</p>
                <div>
                  {service.prices.map(p => (
                    <PriceCard key={p.name} {...p} />
                  ))}
                </div>
              </div>
            )}

            {/* Blocked prices (depilacion) */}
            {service.blocks && service.blocks.map(block => (
              <div key={block.subtitle} className="card-premium p-5 mb-4">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">{block.subtitle}</p>
                <div>
                  {block.prices.map(p => (
                    <PriceCard key={p.name} {...p} />
                  ))}
                </div>
              </div>
            ))}

            {/* Promos strip */}
            <PromoStrip promos={service.promos} />
          </div>
        </div>
      </div>
    </section>
  )
}
