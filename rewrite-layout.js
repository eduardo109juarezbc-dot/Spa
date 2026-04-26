const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

function icon(name, cls = '') {
  const iconsDir = path.join(__dirname, 'node_modules', 'lucide-static', 'icons');
  const file = path.join(iconsDir, `${name}.svg`);
  try {
    let svg = fs.readFileSync(file, 'utf8');
    const classAttr = cls ? ` class="${cls}"` : '';
    svg = svg.replace('<svg', `<svg${classAttr} style="display:inline-block;vertical-align:middle"`);
    svg = svg.replace(/\n\s*/g, '');
    return svg;
  } catch(e) { return ''; }
}

const checkIcon = icon('check-circle-2', 'inline-icon text-gold shrink-0 mt-0.5');

// Regex para capturar las secciones y reemplazarlas enteras
// Cada sección empieza con <section id="NNN" y termina antes de <section id="MMM"

const services = [
  {
    id: 'barberia',
    title: 'Barbería',
    img: 'trabajo-barberia-corte-2.jpeg',
    alignImg: 'left',
    desc: 'Nuestro equipo de barberos profesionales ofrece cortes de precisión, afeitados clásicos con navaja, perfilado de cejas y barba. Utilizamos productos premium para garantizar un acabado impecable.',
    prices: [
      { name: 'Corte caballero', price: '$160', whatsapp: 'Corte caballero $160' },
      { name: 'Corte para dama', price: '$160', whatsapp: 'Corte para dama $160' },
      { name: 'Afeitado', price: '$110', whatsapp: 'Afeitado $110' },
      { name: 'Perfilamiento de ceja', price: '$60', whatsapp: 'Perfilamiento de ceja $60' },
      { name: 'Perfilado de barba / Tinte / Mascarilla', price: 'Consultar', note: 'Precio sujeto a valoración', whatsapp: 'Perfilado de barba / Tinte / Mascarilla' },
    ],
    benefits: [
      'Atención para hombres y mujeres',
      'Productos de calidad profesional',
      'Ambiente relajado y exclusivo',
      'Atendemos con o sin cita previa'
    ],
    promos: [
      { name: 'ManiSpa para Hombre', price: '$100', oldPrice: '$200', note: 'Exfoliación, masaje y cutículas', whatsapp: 'ManiSpa para Hombre $100' },
      { name: 'Lunes y Martes de Consentirte', price: 'Desde $120', note: 'Especiales de vacaciones', whatsapp: 'Promos Lunes y Martes' },
    ]
  },
  {
    id: 'unas',
    title: 'Uñas',
    img: 'trabajo-unas-gold.jpeg',
    alignImg: 'right',
    desc: 'Consiente tus manos y pies con nuestros servicios profesionales. Utilizamos productos de alta calidad que garantizan duración y un acabado impecable en todos nuestros tratamientos.',
    prices: [
      { name: 'Manicura y Pedicura', oldPrice: '$350', price: '$250', whatsapp: 'Manicura y Pedicura $250' },
      { name: 'Gel semipermanente manos y pies', price: '$150', whatsapp: 'Gel semipermanente manos y pies $150' },
      { name: 'Uñas acrílicas / Diseños especiales', price: 'Consultar', note: 'Consulta por WhatsApp', whatsapp: 'Uñas acrílicas / Diseños especiales' }
    ],
    benefits: [
      'Gel semipermanente con duración ideal de 2 a 3 semanas',
      'Herramientas 100% esterilizadas para tu seguridad',
      'Diseños personalizados disponibles bajo cotización',
      'El servicio base incluye limpieza, corte e hidratación'
    ]
  },
  {
    id: 'faciales',
    title: 'Faciales',
    img: 'promo-faciales-abril.jpeg',
    alignImg: 'left',
    desc: 'Nuestro Facial Glow Essential es un tratamiento completo diseñado para transformar tu piel, dejándola luminosa, hidratada y libre de impurezas. Se adapta perfectamente a todo tipo de piel.',
    prices: [
      { name: 'Facial Glow Essential', price: '$350', note: 'Limpieza profunda + espátula ultrasónica + alta frecuencia + mascarilla + LED + hidratación + protector solar', whatsapp: 'Facial Glow Essential $350' }
    ],
    benefits: [
      'Remoción de impurezas con espátula ultrasónica (no invasivo)',
      'Alta frecuencia para desinfectar y regenerar',
      'Mascarilla personalizada y seleccionada según tu tipo de piel',
      'Duración aproximada de la sesión: 60 a 90 minutos'
    ],
    promos: [
      { name: 'Microneedling Skin Revive', price: '$999', oldPrice: '$3,400', note: '4 sesiones · Bio-renovación total', whatsapp: 'Microneedling Skin Revive $999' },
      { name: 'Dermapen + PDRN Salmón', price: '$999', oldPrice: '$1,500', note: 'Incluye limpieza profunda', whatsapp: 'Dermapen con PDRN de Salmón $999' },
    ]
  },
  {
    id: 'depilacion',
    title: 'Depilación con Cera',
    img: 'DepilacionConCera.png',
    alignImg: 'right',
    desc: 'Ofrecemos de depilación con cera profesional de baja temperatura para hombres y mujeres. Minimizamos la irritación dejando tu piel suave por más tiempo.',
    blocks: [
      {
        subtitle: 'Paquetes Hombre',
        prices: [
          { name: 'Men Grooming Basic', price: '$850', note: 'Axilas + Pecho o Espalda', whatsapp: 'Men Grooming Basic $850' },
          { name: 'Men Grooming Plus', price: '$950', note: 'Axilas + Pecho + Abdomen', whatsapp: 'Men Grooming Plus $950' },
          { name: 'Intimate Men Luxe', price: '$980', note: 'Zona íntima completa', whatsapp: 'Intimate Men Luxe $980' },
          { name: 'Men Full Body', price: '$1,200', note: 'Espalda + Pecho + Piernas', whatsapp: 'Men Full Body $1,200' },
        ]
      },
      {
        subtitle: 'Paquetes Mujer',
        prices: [
          { name: 'Silk Skin Basic', price: '$500', note: 'Axilas + Bikini Clásico', whatsapp: 'Silk Skin Basic $500' },
          { name: 'Silk Skin Plus', price: '$850', note: 'Axilas + Bikini Brasileño + Medias Piernas', whatsapp: 'Silk Skin Plus $850' },
          { name: 'Intimate Woman Premium', price: '$750', note: 'Bikini Brasileño + Interglútea', whatsapp: 'Intimate Woman Premium $750' },
          { name: 'Silk Skin Full Body', price: '$1,100', note: 'Axilas + Bikini Completo + Piernas + Brazos', whatsapp: 'Silk Skin Full Body $1,100' },
        ]
      }
    ],
    benefits: [
      'Entorno seguro, privado y 100% higiénico',
      'Cera de baja temperatura ideal para pieles sensibles',
      'Resultados más duraderos que el rasurado tradicional',
      'El dolor disminuye significativamente con sesiones regulares'
    ]
  },
  {
    id: 'armonizacion',
    title: 'Armonización Facial',
    img: 'promo-toxina-botulinica-abril.jpeg',
    alignImg: 'left',
    desc: 'Realza tu belleza natural. Contamos con médicos especialistas que utilizan técnicas avanzadas y productos aprobados de la más alta calidad.',
    promo: {
      old: '$5,000',
      new: '$2,000',
      text: 'Armonización Facial promo $2,000'
    },
    prices: [
      { name: 'Botox / Hilos tensores / Rinomodelación', price: 'Consultar', note: 'Precio sujeto a valoración', whatsapp: 'Botox / Hilos / Rinomodelación' },
      { name: 'Relleno de labios / Bichectomía', price: 'Consultar', note: 'Precio sujeto a valoración', whatsapp: 'Relleno de labios / Bichectomía' },
    ],
    benefits: [
      'Procedimientos realizados exclusivamente por profesionales certificados',
      'Se requiere valoración médica previa y personalizada',
      'Resultados naturales que realzan tus facciones',
      'Tiempo de recuperación mínimo para la mayoría de los tratamientos'
    ],
    promos: [
      { name: 'Toxina Botulínica (Bótox)', price: '$4,500', oldPrice: '$8,500', note: 'Facial de regalo · Limpieza profunda', whatsapp: 'Toxina Botulínica $4,500' },
      { name: 'Enzimas Lipolíticas Premium', price: '$6,500', oldPrice: '$12,000', note: '10 sesiones · Ambiente premium', whatsapp: 'Enzimas Lipolíticas Premium $6,500' },
    ]
  },
  {
    id: 'lashista',
    title: 'Lashista & Cejas',
    img: 'trabajo-lashista-extension.jpeg',
    alignImg: 'right',
    desc: 'Dale vida a tu mirada con nuestras extensiones profesionales y diseño de cejas. Desde un look natural hasta el volumen más dramático, siempre cuidando la salud de tu pestaña natural.',
    prices: [
      { name: 'Extensiones de pestañas (cualquier técnica)', price: '$300', note: 'Clásica 1x1, Hawaianas, Mega Volumen, 3D', whatsapp: 'Extensiones de pestañas $300' },
      { name: 'Lash Lifting', price: '$200', whatsapp: 'Lash Lifting $200' },
      { name: 'Diseño de cejas / Rizado', price: 'Consultar', note: 'Consulta por WhatsApp', whatsapp: 'Diseño de cejas / Rizado' }
    ],
    benefits: [
      'Múltiples técnicas (Clásica a Mega Volumen) por un precio único',
      'Materiales ligeros que no dañan tu pestaña natural',
      'Lash Lifting para una curvatura perfecta y natural',
      'Duración de extensiones de 2 a 4 semanas según cuidados'
    ]
  },
  {
    id: 'keratina',
    title: 'Alaciados y Keratina',
    img: 'trabajo-unas-artistico.jpeg',
    alignImg: 'left',
    desc: 'Transforma tu cabello. Logra un liso perfecto, sedoso, sin frizz y con un brillo espectacular. La keratina nutre y fortalece la estructura capilar desde la primera aplicación.',
    prices: [
      { name: 'Cabello corto', oldPrice: '$600', price: '$400', whatsapp: 'Alaciado Cabello corto $400' },
      { name: 'Arriba de hombros', oldPrice: '$800', price: '$600', whatsapp: 'Alaciado Arriba de hombros $600' },
      { name: 'Bajo hombros', oldPrice: '$1,000', price: '$800', whatsapp: 'Alaciado Bajo hombros $800' },
      { name: 'Espalda media', oldPrice: '$1,200', price: '$1,000', whatsapp: 'Alaciado Espalda media $1,000' },
      { name: 'Cabello largo', oldPrice: '$1,400', price: '$1,200', whatsapp: 'Alaciado Cabello largo $1,200' }
    ],
    benefits: [
      'Resultados espectaculares visibles de inmediato',
      'Reduce significativamente el tiempo de peinado diario',
      'Duración aproximada de 3 a 5 meses con cuidados adecuados',
      'Compatible con todo tipo de cabello (rizado, teñido, con frizz)'
    ]
  }
];

// Reemplazar secciones
for (let i = 0; i < services.length; i++) {
  const s = services[i];
  const bgClass = i % 2 === 0 ? 'bg-dark-surface' : 'bg-dark';
  
  let htmlS = `<!-- ===== ${s.title.toUpperCase()} ===== -->
  <section id="${s.id}" class="py-20 px-4 ${bgClass}">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">`;
  
  const imgBlock = `
        <div class="w-full lg:w-1/2 reveal ${s.alignImg === 'left' ? 'lg:order-1' : 'lg:order-2'}">
          <div class="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden group border border-gold/10 shadow-2xl">
            <!-- PLACEHOLDER: ${s.img} -->
            <img src="assets/img/${s.img}" alt="${s.title}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out">
            <div class="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
          </div>
        </div>`;
        
  let contentBlock = `
        <div class="w-full lg:w-1/2 reveal ${s.alignImg === 'left' ? 'lg:order-2' : 'lg:order-1'}">
          <h2 class="font-heading text-3xl md:text-5xl font-bold text-warm-white mb-4">${s.title.replace(' en ', ' en<br><span class="text-gradient-gold">')}</span></h2>
          <div class="w-16 h-1 bg-gold mb-8"></div>
          <p class="text-warm-gray text-lg mb-8 leading-relaxed">${s.desc}</p>
          `;
          
  if (s.promo) {
    contentBlock += `
          <div class="card-premium p-6 mb-8 text-center border-gold border-opacity-40 bg-gold/5">
            <p class="text-gold text-sm uppercase tracking-wider font-bold mb-2 flex items-center justify-center gap-2">${icon('sparkles', 'inline-icon')} Promoción Especial</p>
            <p class="font-heading text-4xl font-bold"><span class="price-old text-2xl">${s.promo.old}</span> <span class="text-white">${s.promo.new}</span></p>
            <a href="https://wa.me/527771594874?text=Hola%20%F0%9F%91%8B%2C%20quiero%20agendar%20una%20cita%20en%20THE%20LOFT%20%26%20SPA%20PLY.%20Me%20interesa%3A%20${encodeURIComponent(s.promo.text)}.%20%C2%BFQu%C3%A9%20horarios%20tienen%3F" target="_blank" class="btn-gold mt-4 text-sm w-full justification-center">Agendar Valoración</a>
          </div>`;
  }

  if (s.id === 'armonizacion') {
     contentBlock += `
          <div class="flex items-start gap-3 bg-dark-card border border-gold/20 rounded-lg p-4 mb-8">
            ${icon('alert-triangle', 'inline-icon text-gold shrink-0 mt-0.5')}
            <span class="text-warm-light text-sm leading-relaxed">Requiere valoración médica previa y presencial obligatoria para elaborar tu plan de tratamiento personalizado.</span>
          </div>`;
  }

  // Precios
  contentBlock += `
          <div class="space-y-3 mb-10">`;
          
  if (s.blocks) {
    for (const b of s.blocks) {
      const uIcon = b.subtitle.includes('Hombre') ? icon('user', 'text-gold inline-icon') : icon('user-round', 'text-gold inline-icon');
      contentBlock += `<h3 class="font-heading text-xl font-bold text-warm-white flex items-center gap-2 mt-6 mb-3">${uIcon} ${b.subtitle}</h3>`;
      for (const p of b.prices) {
        contentBlock += buildPriceCard(p);
      }
    }
  } else if (s.prices) {
    for (const p of s.prices) {
      contentBlock += buildPriceCard(p);
    }
  }
  
  contentBlock += `</div>`;

  if (s.promos && s.promos.length > 0) {
    contentBlock += buildPromoStrip(s.promos);
  }

  if (s.benefits) {
    contentBlock += `
          <div class="bg-dark/50 rounded-xl p-6 border border-dark-border">
            <h3 class="font-heading text-xl font-bold text-gold mb-4">Lo que debes saber</h3>
            <ul class="space-y-3">
              ${s.benefits.map(b => `<li class="flex items-start gap-3 text-warm-gray text-sm">${checkIcon} <span>${b}</span></li>`).join('\n              ')}
            </ul>
          </div>`;
  }

  contentBlock += `
        </div>`;

  htmlS += imgBlock + contentBlock + `
      </div>
    </div>
  </section>\n`;

  // Regex boundaries (from this section start to the next section start or PROMOCIONES)
  const regex = new RegExp(`<!-- ===== ${s.title.toUpperCase()}(.*?)===== -->\n\\s*<section id="${s.id}"[\\s\\S]*?(?=<!-- ===== (?:${i < services.length - 1 ? services[i+1].title.toUpperCase().split(' ')[0] : 'PROMOCIONES'})|<!-- ===== PROMOCIONES)`);
  
  if (regex.test(html)) {
    html = html.replace(regex, () => htmlS);
  } else {
    // If exact name matching fails, use the simpler id matching
    const fallbackRegex = new RegExp(`<section id="${s.id}"[\\s\\S]*?</section>\n`, 'g');
    if (fallbackRegex.test(html)) {
       html = html.replace(fallbackRegex, () => htmlS);
    } else {
       console.log("Could not replace", s.id);
    }
  }
}

function buildPriceCard(p) {
  const note = p.note ? `<p class="text-warm-gray text-xs mt-0.5">${p.note}</p>` : '';
  const priceOld = p.oldPrice ? `<span class="price-old text-xs mr-2">${p.oldPrice}</span>` : '';
  
  return `
            <div class="bg-dark-card border border-dark-border hover:border-gold/30 transition-colors rounded-lg p-4 flex items-center justify-between group">
              <div class="flex-1 pr-4">
                <p class="text-warm-white font-medium text-sm md:text-base group-hover:text-gold transition-colors">${p.name}</p>
                ${note}
              </div>
              <div class="flex items-center gap-4 text-right shrink-0">
                <div>
                  ${priceOld}<span class="price-tag">${p.price}</span>
                </div>
                <a href="https://wa.me/527771594874?text=Hola%20%F0%9F%91%8B%2C%20quiero%20agendar%20una%20cita%20en%20THE%20LOFT%20%26%20SPA%20PLY.%20Me%20interesa%3A%20${encodeURIComponent(p.whatsapp)}.%20%C2%BFQu%C3%A9%20horarios%20tienen%3F" target="_blank" class="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center hover:bg-gold hover:text-dark transition-all" aria-label="Agendar ${p.name}" title="Agendar por WhatsApp">
                  ${icon('message-circle', 'w-4 h-4')}
                </a>
              </div>
            </div>`;
}

function calcSavings(oldStr, newStr) {
  const a = parseInt(oldStr.replace(/[$,]/g, ''));
  const b = parseInt(newStr.replace(/[$,]/g, ''));
  if (isNaN(a) || isNaN(b) || a <= b) return null;
  return '$' + (a - b).toLocaleString('en-US');
}

function buildPromoStrip(promos) {
  let html = `
          <div class="rounded-xl p-5 bg-gold/5 border border-gold/25 mb-8">
            <h3 class="font-heading text-base font-bold text-gold mb-4 flex items-center gap-2">${icon('sparkles', 'inline-icon shrink-0')} Ofertas del mes</h3>
            <div class="space-y-3">`;
  for (const p of promos) {
    const savings = p.oldPrice ? calcSavings(p.oldPrice, p.price) : null;
    const note = p.note ? `<p class="text-warm-gray text-xs mt-0.5">${p.note}</p>` : '';
    const savingsBadge = savings
      ? `<span class="inline-block mt-1 text-xs text-emerald-400 font-semibold bg-emerald-400/10 px-2 py-0.5 rounded-full whitespace-nowrap">Ahorras ${savings}</span>`
      : '';
    html += `
              <div class="flex items-center justify-between gap-3">
                <div class="flex-1 min-w-0">
                  <p class="text-warm-white text-sm font-medium leading-tight">${p.name}</p>
                  ${note}
                  ${savingsBadge}
                </div>
                <div class="flex items-center gap-3 shrink-0">
                  <div class="text-right">
                    ${p.oldPrice ? `<span class="price-old text-xs block">${p.oldPrice}</span>` : ''}
                    <span class="price-tag">${p.price}</span>
                  </div>
                  <a href="https://wa.me/527771594874?text=Hola%20%F0%9F%91%8B%2C%20quiero%20agendar%20una%20cita%20en%20THE%20LOFT%20%26%20SPA%20PLY.%20Me%20interesa%3A%20${encodeURIComponent(p.whatsapp)}.%20%C2%BFQu%C3%A9%20horarios%20tienen%3F" target="_blank" class="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center hover:bg-gold hover:text-dark transition-all shrink-0" aria-label="Agendar ${p.name}">
                    ${icon('message-circle', 'w-4 h-4')}
                  </a>
                </div>
              </div>`;
  }
  html += `
            </div>
          </div>`;
  return html;
}

fs.writeFileSync(htmlPath, html);
console.log('✅ Layout rewritten');
