import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { WA_GENERAL } from '../../utils/whatsapp'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const GOLD = { r: 201, g: 168, b: 76 }
    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.5 + 0.15,
      opacity: Math.random() * 0.6 + 0.25,
    }))
    const orbs = Array.from({ length: 6 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 180 + 80,
      opacity: Math.random() * 0.12 + 0.05,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      orbs.forEach(o => {
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r)
        g.addColorStop(0, `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${o.opacity})`)
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2)
        ctx.fill()
        o.x += o.dx; o.y += o.dy
        if (o.x < -o.r) o.x = canvas.width + o.r
        if (o.x > canvas.width + o.r) o.x = -o.r
        if (o.y < -o.r) o.y = canvas.height + o.r
        if (o.y > canvas.height + o.r) o.y = -o.r
      })

      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${p.opacity})`
        ctx.fill()
        p.y -= p.speed
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width }
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 reveal">
          Emiliano Zapata, Morelos
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white-soft mb-6 reveal">
          THE LOFT <span className="text-gradient-gold">&amp;</span> SPA PLY
        </h1>
        <p className="text-warm-gray text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed reveal">
          Tu destino de belleza y bienestar. Barbería, uñas, faciales, extensiones y más — todo en un mismo lugar exclusivo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
          <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Agendar Cita
          </a>
          <a href="#servicios" className="btn-outline-gold">
            Ver Servicios
          </a>
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
