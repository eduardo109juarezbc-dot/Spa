import { waUrl } from '../../utils/whatsapp'

export default function PriceCard({ name, price, oldPrice, note, whatsapp }) {
  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-dark-border last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-warm-light text-sm font-medium">{name}</p>
        {note && <p className="text-warm-gray text-xs mt-0.5">{note}</p>}
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <div className="text-right">
          {oldPrice && <p className="price-old">{oldPrice}</p>}
          <p className="price-tag">{price}</p>
        </div>
        <a
          href={waUrl(whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-xs px-3 py-2 whitespace-nowrap"
        >
          Agendar
        </a>
      </div>
    </div>
  )
}
