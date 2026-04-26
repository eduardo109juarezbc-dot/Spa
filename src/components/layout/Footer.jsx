import { Instagram, Facebook, Music2, MapPin, Phone } from 'lucide-react'
import { contactInfo } from '../../data/contact'
import { WA_GENERAL } from '../../utils/whatsapp'

const iconMap = { Instagram, Facebook, Music2 }

const footerLinks = [
  { href: '#servicios',   label: 'Servicios' },
  { href: '#promociones', label: 'Promociones' },
  { href: '#galeria',     label: 'Galería' },
  { href: '#nosotros',    label: 'Nosotros' },
  { href: '#contacto',    label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          <div>
            <img src="/img/Logo.jpeg" alt="THE LOFT & SPA PLY" className="h-16 w-16 rounded-full object-cover mb-4" />
            <p className="text-warm-gray text-sm leading-relaxed mb-4">
              Tu destino de belleza y bienestar en Emiliano Zapata, Morelos.
            </p>
            <div className="flex gap-3">
              {contactInfo.social.map(s => {
                const Icon = iconMap[s.icon]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-warm-gray hover:text-gold hover:border-gold/50 transition-colors"
                  >
                    {Icon && <Icon size={16} />}
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-warm-white font-semibold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              {footerLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-warm-gray hover:text-gold transition-colors text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-warm-white font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-warm-gray text-sm">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                {contactInfo.address}
              </li>
              <li className="flex items-start gap-2 text-warm-gray text-sm">
                <Phone size={16} className="mt-0.5 text-gold shrink-0" />
                <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 text-center text-warm-gray text-xs">
          © {new Date().getFullYear()} THE LOFT &amp; SPA PLY. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
