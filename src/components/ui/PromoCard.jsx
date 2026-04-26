import { waUrl } from '../../utils/whatsapp'
import { categoryLabels } from '../../data/promos'

function toNum(s) { return parseInt(s.replace(/[$,]/g, '')) }

function discountPct(oldStr, newStr) {
  const a = toNum(oldStr), b = toNum(newStr)
  if (isNaN(a) || isNaN(b) || a <= b) return null
  return Math.round((a - b) / a * 100)
}

function savings(oldStr, newStr) {
  const a = toNum(oldStr), b = toNum(newStr)
  if (isNaN(a) || isNaN(b) || a <= b) return null
  return '$' + (a - b).toLocaleString('en-US')
}

export default function PromoCard({ category, name, img, price, oldPrice, note, whatsapp }) {
  const label = categoryLabels[category] || category
  const pct   = oldPrice ? discountPct(oldPrice, price) : null
  const saved = oldPrice ? savings(oldPrice, price)     : null

  return (
    <div className="card-premium overflow-hidden promo-card flex flex-col" data-category={category}>
      <div className="relative h-44">
        <img src={`/img/${img}`} alt={name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/10 to-transparent" />
        <span className="absolute bottom-3 left-3 text-xs text-gold font-semibold tracking-wider uppercase">{label}</span>
        {pct && (
          <span className="absolute top-3 right-3 bg-gold text-dark text-xs font-extrabold px-2.5 py-1 rounded-full leading-none">
            -{pct}%
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-base font-bold text-warm-white leading-tight mb-1">{name}</h3>
        <p className="text-warm-gray text-xs mb-3 leading-snug min-h-[2.5rem]">{note ?? ''}</p>
        <div className="mt-auto">
          {saved ? (
            <div className="flex items-end justify-between gap-2 mb-4">
              <div>
                <p className="price-old text-xs">{oldPrice}</p>
                <p className="price-tag text-xl leading-none">{price}</p>
              </div>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full whitespace-nowrap">
                Ahorras {saved}
              </span>
            </div>
          ) : (
            <p className="price-tag text-xl mb-4">{price}</p>
          )}
          <a href={waUrl(whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center text-sm">
            Agendar
          </a>
        </div>
      </div>
    </div>
  )
}
