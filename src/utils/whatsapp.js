const PHONE = '527771594874'
const BASE_MSG = 'Hola!, quiero agendar una cita en THE LOFT & SPA PLY. Me interesa: '

export const waUrl = (service) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(`${BASE_MSG}${service}. ¿Qué horarios tienen?`)}`

export const WA_GENERAL = waUrl('Información general')
