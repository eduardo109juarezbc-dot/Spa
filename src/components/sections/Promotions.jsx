import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import PromoCard from '../ui/PromoCard'
import { promos, categoryLabels } from '../../data/promos'

export default function Promotions() {
  const [active, setActive] = useState('all')

  const filters = [
    { key: 'all', label: 'Todos' },
    ...Object.entries(categoryLabels).map(([key, label]) => ({ key, label })),
  ]

  const visible = active === 'all' ? promos : promos.filter(p => p.category === active)

  return (
    <section id="promociones" className="py-20 px-4 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Ofertas Especiales"
          title="Promociones del Mes"
          subtitle="Aprovecha nuestras ofertas exclusivas y consiente tu imagen con los mejores precios."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`promo-filter-btn ${active === f.key ? 'active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visible.map(p => (
            <PromoCard key={`${p.category}-${p.name}`} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
