import { Instagram, Facebook, Music2, MapPin, Phone, Clock } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { contactInfo } from '../../data/contact'
import { waUrl } from '../../utils/whatsapp'

const iconMap = { Instagram, Facebook, Music2 }

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Encuéntranos"
          title="Contáctanos"
          subtitle="Estamos listos para atenderte. Agenda tu cita por WhatsApp o visítanos directamente."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Info cards */}
          <div className="space-y-5">
            <div className="card-premium p-6 reveal">
              <div className="flex items-center gap-3 mb-4">
                <Phone size={20} className="text-gold" />
                <h3 className="font-heading text-lg font-semibold text-white-soft">WhatsApp</h3>
              </div>
              <p className="text-warm-gray text-sm mb-4">Envíanos un mensaje y te respondemos a la brevedad.</p>
              <a
                href={waUrl('Información general')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="card-premium p-6 reveal">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-gold" />
                <h3 className="font-heading text-lg font-semibold text-white-soft">Horarios</h3>
              </div>
              <ul className="space-y-2">
                {contactInfo.hours.map(h => (
                  <li key={h.days} className="flex justify-between text-sm">
                    <span className="text-warm-gray">{h.days}</span>
                    <span className={h.time === 'Cerrado' ? 'text-warm-gray/50' : 'text-warm-light font-medium'}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-premium p-6 reveal">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={20} className="text-gold" />
                <h3 className="font-heading text-lg font-semibold text-white-soft">Ubicación</h3>
              </div>
              <p className="text-warm-gray text-sm mb-4">{contactInfo.address}</p>
              <div className="flex gap-3">
                {contactInfo.social.map(s => {
                  const Icon = iconMap[s.icon]
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-gold text-sm px-4 py-2"
                    >
                      {Icon && <Icon size={15} />}
                      {s.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal-right">
            <div className="rounded-2xl overflow-hidden border border-gold/15 h-full min-h-80">
              <iframe
                title="Ubicación THE LOFT & SPA PLY"
                src="https://maps.google.com/maps?q=Av+Paseos+del+Rio,+Paseos+del+Rio,+Benito+Juarez,+62766+Emiliano+Zapata,+Morelos,+Mexico&output=embed"
                width="100%"
                height="100%"
                className="min-h-80"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
