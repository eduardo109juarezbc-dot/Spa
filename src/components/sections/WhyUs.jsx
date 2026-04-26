import { Award, Sparkles, Shield, Clock, MapPin, Star } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { whyUsItems } from '../../data/whyUs'

const iconMap = { Award, Sparkles, Shield, Clock, MapPin, Star }

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="¿Por qué elegirnos?"
          title="La Experiencia THE LOFT"
          subtitle="Más que un spa, un espacio donde la excelencia se vive en cada detalle."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsItems.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="card-premium p-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  {Icon && <Icon size={22} className="text-gold" />}
                </div>
                <h3 className="font-heading text-xl font-semibold text-white-soft mb-2">{item.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
