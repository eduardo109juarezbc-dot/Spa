export default function SectionHeader({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">{eyebrow}</p>
      )}
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-white-soft mb-4">{title}</h2>
      <div className={`section-divider ${center ? '' : 'ml-0 mr-auto'}`} />
      {subtitle && (
        <p className="text-warm-gray max-w-2xl mx-auto mt-4 leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
