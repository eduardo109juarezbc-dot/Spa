export const categoryLabels = {
  barberia:     'Barbería',
  faciales:     'Faciales',
  unas:         'Uñas',
  lashista:     'Lashista & Cejas',
  armonizacion: 'Armonización Facial',
  keratina:     'Alaciados & Keratina',
  depilacion:   'Depilación',
  masajes:      'Masajes',
}

export const promos = [
  // Barbería
  { category: 'barberia',     name: 'Corte Caballero',              img: 'promo-barberia-abril.jpeg',            price: '$160',                                   whatsapp: 'Corte Caballero $160' },
  { category: 'barberia',     name: 'ManiSpa para Hombre',          img: 'promo-manispa-hombre.jpeg',            price: '$100',   oldPrice: '$200', note: 'Exfoliación, masaje y cutículas',       whatsapp: 'ManiSpa para Hombre $100' },
  { category: 'barberia',     name: 'Lunes y Martes de Consentirte',img: 'promo-lunes-martes.jpeg',              price: 'Desde $120',                             note: 'Especiales de vacaciones',              whatsapp: 'Promos Lunes y Martes' },
  // Faciales
  { category: 'faciales',     name: 'Facial Glow Essential',        img: 'promo-faciales-abril.jpeg',            price: '$350',                                   whatsapp: 'Facial Glow Essential $350' },
  { category: 'faciales',     name: 'Microneedling Skin Revive',    img: 'promo-microneedling.jpeg',             price: '$999',   oldPrice: '$3,400', note: '4 sesiones · Bio-renovación total',    whatsapp: 'Microneedling Skin Revive $999' },
  { category: 'faciales',     name: 'Dermapen + PDRN Salmón',       img: 'promo-dermapen-salmon.jpeg',           price: '$999',   oldPrice: '$1,500', note: 'Incluye limpieza profunda',            whatsapp: 'Dermapen con PDRN de Salmón $999' },
  // Uñas
  { category: 'unas',         name: 'Manicura y Pedicura',          img: 'promo-maniarte-spa.jpeg',              price: '$250',   oldPrice: '$350',                                                  whatsapp: 'Manicura y Pedicura $250' },
  { category: 'unas',         name: 'Gel Semipermanente',           img: 'promo-pedi-spa.jpeg',                  price: '$150',                                   note: 'Manos y pies',                          whatsapp: 'Gel Semipermanente $150' },
  { category: 'unas',         name: 'Manicura Gel',                 img: 'promo-manicura-gel.jpeg',              price: '$180',                                   note: 'Nivelación · 1-2 tonos liso',           whatsapp: 'Manicura Gel Semipermanente $180' },
  // Lashista
  { category: 'lashista',     name: 'Extensiones de Pestañas',      img: 'promo-aplicacion-pestanas.jpeg',       price: '$300',                                   note: 'Cualquier aplicación',                  whatsapp: 'Extensiones de Pestañas $300' },
  { category: 'lashista',     name: 'Lash Lifting',                 img: 'promo-lash-lifting-cejas.jpeg',        price: '$200',                                   whatsapp: 'Lash Lifting $200' },
  // Armonización
  { category: 'armonizacion', name: 'Armonización Facial',          img: 'promo-toxina-botulinica-primavera.jpeg',price: '$2,000', oldPrice: '$5,000',                                               whatsapp: 'Armonización Facial $2,000' },
  { category: 'armonizacion', name: 'Toxina Botulínica (Bótox)',    img: 'promo-toxina-botulinica-abril.jpeg',   price: '$4,500', oldPrice: '$8,500', note: 'Facial de regalo · Limpieza profunda', whatsapp: 'Toxina Botulínica $4,500' },
  { category: 'armonizacion', name: 'Aumento de Labios',            img: 'promo-aumento-labios.jpeg',            price: '$5,000',                                 note: 'Ácido Hialurónico · Resultado natural', whatsapp: 'Aumento de Labios con Ácido Hialurónico $5,000' },
  { category: 'armonizacion', name: 'Enzimas Lipolíticas',          img: 'promo-enzimas-lipolíticas.jpeg',       price: '$6,500',                                 note: '10 sesiones · Tratamiento reductivo',   whatsapp: 'Enzimas Lipolíticas 10 sesiones $6,500' },
  { category: 'armonizacion', name: 'Lipopapada Sin Cirugía',       img: 'promo-lipopapada.jpeg',                price: '$5,000',                                 note: '10 sesiones de Lipoenzimas',            whatsapp: 'Lipopapada Sin Cirugía 10 sesiones $5,000' },
  { category: 'armonizacion', name: 'Enzimas Lipolíticas Premium',  img: 'promo-enzimas-lipolíticas-abril.jpeg', price: '$6,500', oldPrice: '$12,000', note: '10 sesiones · Ambiente premium',       whatsapp: 'Enzimas Lipolíticas Premium $6,500' },
  // Keratina
  { category: 'keratina',     name: 'Alaciado / Keratina',          img: 'promo-keratina-primavera.jpeg',        price: '$400',   oldPrice: '$600',   note: 'Cabello corto',                        whatsapp: 'Alaciado / Keratina $400' },
  { category: 'keratina',     name: 'Reestructuración Capilar',     img: 'promo-reestructuracion-capilar.jpeg',  price: 'Desde $350',                             note: 'Paquete de 6 sesiones disponible',      whatsapp: 'Reestructuración Capilar' },
  // Depilación
  { category: 'depilacion',   name: 'Depilación Masculina',         img: 'promo-depilacion-masculina.jpeg',      price: 'Desde $450',                             note: 'Paquete Básico · Full · Área Pélvica',  whatsapp: 'Depilación Masculina' },
  // Masajes
  { category: 'masajes',      name: 'Masajes · Glow de Primavera',  img: 'promo-masajes-primavera.jpeg',         price: 'Desde $180',                             note: 'Con aromaterapia incluida',             whatsapp: 'Masajes' },
  { category: 'masajes',      name: 'Masajes · Promo Abril',        img: 'promo-masajes-abril.jpeg',             price: 'Desde $180',                             note: 'Descontracturante, relajante, piedras', whatsapp: 'Masajes' },
]
