const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// ─── Data ─────────────────────────────────────────────────────────────────────

const categoryLabels = {
  barberia:     'Barbería',
  faciales:     'Faciales',
  unas:         'Uñas',
  lashista:     'Lashista & Cejas',
  armonizacion: 'Armonización Facial',
  keratina:     'Alaciados & Keratina',
  depilacion:   'Depilación',
  masajes:      'Masajes',
};

const promos = [
  // ── Barbería ──────────────────────────────────────────────────────────────
  { category: 'barberia', name: 'Corte Caballero', img: 'promo-barberia-abril.jpeg', price: '$160', whatsapp: 'Corte Caballero $160' },
  { category: 'barberia', name: 'ManiSpa para Hombre', img: 'promo-manispa-hombre.jpeg', note: 'Exfoliación, masaje y cutículas', price: '$100', oldPrice: '$200', whatsapp: 'ManiSpa para Hombre $100' },
  { category: 'barberia', name: 'Lunes y Martes de Consentirte', img: 'promo-lunes-martes.jpeg', note: 'Especiales de vacaciones', price: 'Desde $120', whatsapp: 'Promos Lunes y Martes' },
  // ── Faciales ──────────────────────────────────────────────────────────────
  { category: 'faciales', name: 'Facial Glow Essential', img: 'promo-faciales-abril.jpeg', price: '$350', whatsapp: 'Facial Glow Essential $350' },
  { category: 'faciales', name: 'Microneedling Skin Revive', img: 'promo-microneedling.jpeg', note: '4 sesiones · Bio-renovación total', price: '$999', oldPrice: '$3,400', whatsapp: 'Microneedling Skin Revive $999' },
  { category: 'faciales', name: 'Dermapen + PDRN Salmón', img: 'promo-dermapen-salmon.jpeg', note: 'Incluye limpieza profunda', price: '$999', oldPrice: '$1,500', whatsapp: 'Dermapen con PDRN de Salmón $999' },
  // ── Uñas ──────────────────────────────────────────────────────────────────
  { category: 'unas', name: 'Manicura y Pedicura', img: 'promo-maniarte-spa.jpeg', price: '$250', oldPrice: '$350', whatsapp: 'Manicura y Pedicura $250' },
  { category: 'unas', name: 'Gel Semipermanente', img: 'promo-pedi-spa.jpeg', note: 'Manos y pies', price: '$150', whatsapp: 'Gel Semipermanente $150' },
  { category: 'unas', name: 'Manicura Gel', img: 'promo-manicura-gel.jpeg', note: 'Nivelación · 1-2 tonos liso', price: '$180', whatsapp: 'Manicura Gel Semipermanente $180' },
  // ── Lashista ──────────────────────────────────────────────────────────────
  { category: 'lashista', name: 'Extensiones de Pestañas', img: 'promo-aplicacion-pestanas.jpeg', note: 'Cualquier aplicación', price: '$300', whatsapp: 'Extensiones de Pestañas $300' },
  { category: 'lashista', name: 'Lash Lifting', img: 'promo-lash-lifting-cejas.jpeg', price: '$200', whatsapp: 'Lash Lifting $200' },
  // ── Armonización ──────────────────────────────────────────────────────────
  { category: 'armonizacion', name: 'Armonización Facial', img: 'promo-toxina-botulinica-primavera.jpeg', price: '$2,000', oldPrice: '$5,000', whatsapp: 'Armonización Facial $2,000' },
  { category: 'armonizacion', name: 'Toxina Botulínica (Bótox)', img: 'promo-toxina-botulinica-abril.jpeg', note: 'Facial de regalo · Limpieza profunda', price: '$4,500', oldPrice: '$8,500', whatsapp: 'Toxina Botulínica $4,500' },
  { category: 'armonizacion', name: 'Aumento de Labios', img: 'promo-aumento-labios.jpeg', note: 'Ácido Hialurónico · Resultado natural', price: '$5,000', whatsapp: 'Aumento de Labios con Ácido Hialurónico $5,000' },
  { category: 'armonizacion', name: 'Enzimas Lipolíticas', img: 'promo-enzimas-lipolíticas.jpeg', note: '10 sesiones · Tratamiento reductivo', price: '$6,500', whatsapp: 'Enzimas Lipolíticas 10 sesiones $6,500' },
  { category: 'armonizacion', name: 'Lipopapada Sin Cirugía', img: 'promo-lipopapada.jpeg', note: '10 sesiones de Lipoenzimas', price: '$5,000', whatsapp: 'Lipopapada Sin Cirugía 10 sesiones $5,000' },
  { category: 'armonizacion', name: 'Enzimas Lipolíticas Premium', img: 'promo-enzimas-lipolíticas-abril.jpeg', note: '10 sesiones · Ambiente premium', price: '$6,500', oldPrice: '$12,000', whatsapp: 'Enzimas Lipolíticas Premium $6,500' },
  // ── Keratina ──────────────────────────────────────────────────────────────
  { category: 'keratina', name: 'Alaciado / Keratina', img: 'promo-keratina-primavera.jpeg', note: 'Cabello corto', price: '$400', oldPrice: '$600', whatsapp: 'Alaciado / Keratina $400' },
  { category: 'keratina', name: 'Reestructuración Capilar', img: 'promo-reestructuracion-capilar.jpeg', note: 'Paquete de 6 sesiones disponible', price: 'Desde $350', whatsapp: 'Reestructuración Capilar' },
  // ── Depilación ────────────────────────────────────────────────────────────
  { category: 'depilacion', name: 'Depilación Masculina', img: 'promo-depilacion-masculina.jpeg', note: 'Paquete Básico · Full · Área Pélvica', price: 'Desde $450', whatsapp: 'Depilación Masculina' },
  // ── Masajes ───────────────────────────────────────────────────────────────
  { category: 'masajes', name: 'Masajes · Glow de Primavera', img: 'promo-masajes-primavera.jpeg', note: 'Con aromaterapia incluida', price: 'Desde $180', whatsapp: 'Masajes' },
  { category: 'masajes', name: 'Masajes · Promo Abril', img: 'promo-masajes-abril.jpeg', note: 'Descontracturante, relajante, piedras', price: 'Desde $180', whatsapp: 'Masajes' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toNum(str) {
  return parseInt(str.replace(/[$,]/g, ''));
}

function discountPct(oldStr, newStr) {
  const a = toNum(oldStr), b = toNum(newStr);
  if (isNaN(a) || isNaN(b) || a <= b) return null;
  return Math.round((a - b) / a * 100);
}

function savings(oldStr, newStr) {
  const a = toNum(oldStr), b = toNum(newStr);
  if (isNaN(a) || isNaN(b) || a <= b) return null;
  return '$' + (a - b).toLocaleString('en-US');
}

function waUrl(msg) {
  return `https://wa.me/527771594874?text=${encodeURIComponent(`Hola 👋, quiero agendar una cita en THE LOFT & SPA PLY. Me interesa: ${msg}. ¿Qué horarios tienen?`)}`;
}

// ─── Card builder ─────────────────────────────────────────────────────────────

function buildCard(p) {
  const label = categoryLabels[p.category] || p.category;
  const pct   = p.oldPrice ? discountPct(p.oldPrice, p.price) : null;
  const saved = p.oldPrice ? savings(p.oldPrice, p.price)     : null;

  const discountBadge = pct
    ? `\n            <span class="absolute top-3 right-3 bg-gold text-dark text-xs font-extrabold px-2.5 py-1 rounded-full leading-none">-${pct}%</span>`
    : '';

  const noteEl = p.note
    ? `\n            <p class="text-warm-gray text-xs mb-3 leading-snug">${p.note}</p>`
    : `\n            <div class="mb-3"></div>`;

  const priceBlock = saved
    ? `<div class="flex items-end justify-between gap-2">
              <div>
                <p class="price-old text-xs">${p.oldPrice}</p>
                <p class="price-tag text-xl leading-none">${p.price}</p>
              </div>
              <span class="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full whitespace-nowrap">Ahorras ${saved}</span>
            </div>`
    : `<p class="price-tag text-xl">${p.price}</p>`;

  return `
        <div class="card-premium overflow-hidden reveal promo-card" data-category="${p.category}">
          <div class="relative h-44">
            <img src="assets/img/${p.img}" alt="${p.name}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/10 to-transparent"></div>
            <span class="absolute bottom-3 left-3 text-xs text-gold font-semibold tracking-wider uppercase">${label}</span>${discountBadge}
          </div>
          <div class="p-5">
            <h3 class="font-heading text-base font-bold text-warm-white leading-tight mb-1">${p.name}</h3>${noteEl}
            ${priceBlock}
            <a href="${waUrl(p.whatsapp)}" target="_blank" class="btn-gold w-full mt-4 justify-center text-sm">Agendar</a>
          </div>
        </div>`;
}

// ─── Section ──────────────────────────────────────────────────────────────────

const filters = Object.keys(categoryLabels)
  .map(k => `        <button class="promo-filter-btn" data-filter="${k}">${categoryLabels[k]}</button>`)
  .join('\n');

const cards = promos.map(buildCard).join('\n');

const newSection = `<!-- ===== PROMOCIONES ===== -->
  <section id="promociones" class="py-20 px-4 bg-dark">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="font-heading text-3xl md:text-4xl font-bold text-warm-white mb-2 reveal">Promociones <span class="text-gradient-gold">Especiales</span></h2>
      <div class="section-divider reveal"></div>
      <p class="text-warm-gray mb-8 reveal">Aprovecha nuestros precios especiales</p>
      <div class="flex flex-wrap justify-center gap-2 mb-10 reveal">
        <button class="promo-filter-btn active" data-filter="all">Todas</button>
${filters}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
${cards}
      </div>
    </div>
  </section>
`;

const regex = /<!-- ===== PROMOCIONES ===== -->\n\s*<section id="promociones"[\s\S]*?<\/section>/;

if (regex.test(html)) {
  html = html.replace(regex, newSection.trimEnd());
  fs.writeFileSync(htmlPath, html);
  console.log(`✅ Promotions section rewritten (${promos.length} cards)`);
} else {
  console.error('❌ Could not find promotions section — check comment anchors');
  process.exit(1);
}
