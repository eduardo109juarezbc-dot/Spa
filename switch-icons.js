const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'node_modules', 'lucide-static', 'icons');

function getSvg(name, extraClass = '') {
  const file = path.join(iconsDir, `${name}.svg`);
  let svg = fs.readFileSync(file, 'utf8');
  // Add class and ensure consistent sizing
  svg = svg.replace('<svg', `<svg class="lucide ${extraClass}".trim()`);
  // Make it inline-friendly
  svg = svg.replace(/\n/g, '');
  return svg;
}

// Read a Lucide icon and return clean inline SVG with proper styling  
function icon(name, cls = '') {
  const file = path.join(iconsDir, `${name}.svg`);
  let svg = fs.readFileSync(file, 'utf8');
  const classAttr = cls ? ` class="${cls}"` : '';
  svg = svg.replace('<svg', `<svg${classAttr} style="display:inline-block;vertical-align:middle"`);
  svg = svg.replace(/\n\s*/g, '');
  return svg;
}

const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Remove remixicon CSS link
html = html.replace(/\s*<link rel="stylesheet" href="assets\/css\/remixicon\.css">\n?/, '\n');

// Define all replacements: [search, replacement]
const replacements = [
  // WhatsApp icon in buttons/links
  [/<i class="ri-whatsapp-fill"><\/i>/g, icon('message-circle', 'inline-icon')],
  
  // "Por qué elegirnos" section - big icons
  [/<i class="ri-sparkling-2-fill"><\/i>/g, icon('sparkles', 'section-icon')],
  [/<i class="ri-vip-diamond-fill"><\/i>/g, icon('gem', 'section-icon')],
  [/<i class="ri-shield-check-fill"><\/i>/g, icon('shield-check', 'section-icon')],
  [/<i class="ri-award-fill"><\/i>/g, icon('award', 'section-icon')],
  [/<i class="ri-store-3-fill"><\/i>/g, icon('store', 'section-icon')],
  [/<i class="ri-heart-pulse-fill"><\/i>/g, icon('heart-pulse', 'section-icon')],
  
  // Contact section - big icons
  [/<i class="ri-whatsapp-fill"><\/i>/g, icon('message-circle', 'section-icon')],
  [/<i class="ri-phone-fill"><\/i>/g, icon('phone', 'section-icon')],
  [/<i class="ri-instagram-fill"><\/i>/g, icon('camera', 'section-icon')],
  
  // Contact info - inline icons
  [/<i class="ri-map-pin-fill text-gold"><\/i>/g, icon('map-pin', 'inline-icon text-gold')],
  [/<i class="ri-phone-fill text-gold"><\/i>/g, icon('phone', 'inline-icon text-gold')],
  [/<i class="ri-time-line text-gold"><\/i>/g, icon('clock', 'inline-icon text-gold')],
  
  // Inline contact list
  [/<i class="ri-whatsapp-fill text-green-500"><\/i>/g, icon('message-circle', 'inline-icon text-green-500')],
  [/<i class="ri-phone-line text-gold"><\/i>/g, icon('phone', 'inline-icon text-gold')],
  [/<i class="ri-smartphone-line text-gold"><\/i>/g, icon('smartphone', 'inline-icon text-gold')],
  [/<i class="ri-instagram-fill text-pink-400"><\/i>/g, icon('camera', 'inline-icon text-pink-400')],
  [/<i class="ri-map-pin-line text-gold"><\/i>/g, icon('map-pin', 'inline-icon text-gold')],
  
  // Depilación section headers
  [/<i class="ri-user-3-fill text-gold"><\/i>/g, icon('user', 'inline-icon text-gold')],
  [/<i class="ri-women-fill text-gold"><\/i>/g, icon('user-round', 'inline-icon text-gold')],
  
  // Warning
  [/<i class="ri-error-warning-fill"><\/i>/g, icon('alert-triangle', 'inline-icon')],
];

for (const [search, replace] of replacements) {
  html = html.replace(search, replace);
}

// Also catch any remaining ri- icons that weren't matched
const remaining = html.match(/<i class="ri-[^"]*"><\/i>/g);
if (remaining) {
  console.log('⚠️  Remaining unmatched icons:', [...new Set(remaining)]);
}

fs.writeFileSync(htmlPath, html);
console.log('✅ All icons replaced with inline Lucide SVGs');

// Remove remixicon font files
const fontsDir = path.join(__dirname, 'assets', 'fonts');
for (const f of fs.readdirSync(fontsDir)) {
  if (f.startsWith('remixicon')) {
    fs.unlinkSync(path.join(fontsDir, f));
    console.log('  Removed', f);
  }
}
try { fs.unlinkSync(path.join(__dirname, 'assets', 'css', 'remixicon.css')); } catch(e) {}
console.log('✅ Removed Remix Icon files');
