import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import ServicesGrid from './components/sections/ServicesGrid'
import ServiceSection from './components/sections/ServiceSection'
import Promotions from './components/sections/Promotions'
import WhyUs from './components/sections/WhyUs'
import Gallery from './components/sections/Gallery'
import Contact from './components/sections/Contact'
import WhatsAppFAB from './components/ui/WhatsAppFAB'
import { services } from './data/services'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    targets.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        {services.map((service, i) => (
          <ServiceSection key={service.id} service={service} index={i} />
        ))}
        <Promotions />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
