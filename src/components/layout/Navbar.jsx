import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { WA_GENERAL } from '../../utils/whatsapp'

const navLinks = [
  { href: '#servicios',    label: 'Servicios' },
  { href: '#promociones',  label: 'Promociones' },
  { href: '#galeria',      label: 'Galería' },
  { href: '#nosotros',     label: 'Nosotros' },
  { href: '#contacto',     label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar fixed top-0 left-0 right-0 z-30 px-4 py-3 ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <img src="/img/Logo.jpeg" alt="THE LOFT & SPA PLY" className="navbar-logo rounded-full object-cover" />
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-warm-gray hover:text-gold transition-colors text-sm font-medium tracking-wide">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm px-5 py-2.5">
              Agendar Cita
            </a>
          </div>

          <button
            className="lg:hidden text-warm-gray hover:text-gold p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={close}
      />

      {/* Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'active' : ''}`}>
        <div className="flex items-center justify-between p-5 border-b border-gold/20">
          <img src="/img/Logo.jpeg" alt="THE LOFT & SPA PLY" className="navbar-logo rounded-full object-cover" />
          <button onClick={close} className="text-warm-gray hover:text-gold p-1" aria-label="Cerrar menú">
            <X size={24} />
          </button>
        </div>
        <nav className="p-5 space-y-1">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="block py-3 px-4 text-warm-light hover:text-gold hover:bg-dark-card rounded-lg transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="p-5 border-t border-gold/20">
          <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center" onClick={close}>
            Agendar Cita
          </a>
        </div>
      </div>
    </>
  )
}
