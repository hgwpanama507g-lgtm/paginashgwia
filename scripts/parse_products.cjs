const fs = require('fs');
const path = require('path');

function parseCSV(text) {
  const lines = [];
  let row = [];
  let inQuotes = false;
  let current = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i+1];
    
    if (char === '"' && inQuotes && nextChar === '"') {
      current += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      row.push(current.trim());
      current = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      row.push(current.trim());
      if (row.length > 1) lines.push(row);
      row = [];
      current = '';
    } else {
      current += char;
    }
  }
  if (row.length > 1) lines.push(row);
  return lines;
}

function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8217;/g, '’')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const csvRaw = fs.readFileSync('public/assets/aistudio/wc-product-export-9-11-2026-1794280944690_4514474b.csv', 'utf8');
const rows = parseCSV(csvRaw);
const dataRows = rows.slice(1);

const defaultPrices = {
  '64': 32.50, // Blueberry Lotion
  '66': 36.80, // Blueberry Moisturizer
  '129': 28.00 // Lactiberry
};

const products = dataRows.map(r => {
  const id = r[0];
  const name = r[4];
  const shortDesc = stripHtml(r[8]);
  const fullHtml = r[9] || '';
  const priceVal = parseFloat(r[26] || r[25]) || defaultPrices[id] || 15.00;
  const categoriesRaw = r[27] || 'Bienestar';
  const rawImage = r[30] ? r[30].split(',')[0].trim() : '';

  // Extract benefits list if available
  const benefits = [];
  const benefitsMatch = fullHtml.match(/<strong>Beneficios<\/strong>[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/i) ||
                        fullHtml.match(/Ventajas[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/i) ||
                        fullHtml.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i);
  if (benefitsMatch) {
    const lis = benefitsMatch[1].match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (lis) {
      lis.forEach(li => {
        const cleaned = stripHtml(li);
        if (cleaned && cleaned.length > 5 && !cleaned.includes('http')) {
          benefits.push(cleaned);
        }
      });
    }
  }

  // Primary category clean-up
  let primaryCategory = 'Nutrición y Salud';
  if (categoriesRaw.includes('Cuidado personal')) primaryCategory = 'Cuidado Personal';
  else if (categoriesRaw.includes('Cosmeticos') || categoriesRaw.includes('Belleza')) primaryCategory = 'Belleza y Cosméticos';
  else if (categoriesRaw.includes('Accesorios funcionales') || categoriesRaw.includes('Equipo')) primaryCategory = 'Turmalina y Accesorios';
  else if (categoriesRaw.includes('Licores')) primaryCategory = 'Bebidas Especiales';
  else if (categoriesRaw.includes('Suplementos')) primaryCategory = 'Nutrición y Salud';
  else if (categoriesRaw.includes('Alimentos')) {
    if (name.toLowerCase().includes('café') || name.toLowerCase().includes('coffee') || name.toLowerCase().includes('choco') || name.toLowerCase().includes('tea') || name.toLowerCase().includes('drink') || name.toLowerCase().includes('juice')) {
      primaryCategory = 'Cafés y Bebidas';
    } else if (name.toLowerCase().includes('candy') || name.toLowerCase().includes('mermelada')) {
      primaryCategory = 'Snacks y Caramelos';
    } else {
      primaryCategory = 'Nutrición y Salud';
    }
  }

  return {
    id,
    slug: slugify(name),
    name,
    category: primaryCategory,
    categoriesRaw,
    price: priceVal,
    shortDescription: shortDesc || `${name} de HGW Health Green World con alta calidad e ingredientes de origen natural.`,
    fullDescription: stripHtml(fullHtml) || shortDesc,
    rawHtml: fullHtml,
    benefits: benefits.length > 0 ? benefits.slice(0, 8) : [
      'Ingredientes 100% de origen natural y pureza seleccionada.',
      'Tecnología de bienestar Green World Group.',
      'Soporte y respaldo oficial de HGW Panamá.',
      'Fórmula sin químicos agresivos ni aditivos perjudiciales.'
    ],
    image: rawImage,
    isFeatured: [80, 104, 110, 114, 118, 131, 31, 158, 164, 82, 84].includes(parseInt(id)),
    isNew: categoriesRaw.includes('Proximamente')
  };
});

fs.writeFileSync('src/data/parsed_products.json', JSON.stringify(products, null, 2));
console.log('Successfully generated', products.length, 'products into src/data/parsed_products.json');
