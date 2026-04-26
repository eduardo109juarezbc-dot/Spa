import { waUrl } from '../../utils/whatsapp'

function toNum(s) { return parseInt(s.replace(/[$,]/g, '')) }
function savings(oldStr, newStr) {
  const a = toNum(oldStr), b = toNum(newStr)
  if (isNaN(a) || isNaN(b) || a <= b) return null
  return (a - b).toLocaleString('en-US')
}
function discountPct(oldStr, newStr) {
  const a = toNum(oldStr), b = toNum(newStr)
  if (isNaN(a) || isNaN(b) || a <= b) return null
  return Math.round((a - b) / a * 100)
}

export default function PromoStrip({ promos }) {
  if (!promos?.length) return null
  return (
    <div className="mt-6 p-4 rounded-xl border border-gold/20 bg-dark-surface">
      <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Ofertas del mes</p>
      <div className="space-y-3">
        {promos.map((p) => {
          const saved = p.oldPrice ? savings(p.oldPrice, p.price) : null
          const pct   = p.oldPrice ? discountPct(p.oldPrice, p.price) : null
          return (
            <a
              key={p.name}
              href={waUrl(p.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-3 group"
            >
              <div className="flex-1 min-w-0">
                <p className="text-warm-light text-sm font-medium group-hover:text-gold transition-colors truncate">{p.name}</p>
                {p.note && <p className="text-warm-gray text-xs">{p.note}</p>}
              </div>
              <div className="text-right shrink-0">
                {p.oldPrice && <p className="price-old">{p.oldPrice}</p>}
                <p className="price-tag text-base">{p.price}</p>
                {saved && pct && (
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-full">
                    -{pct}% · Ahorras ${saved}
                  </span>
                )}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
