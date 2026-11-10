const fs = require('fs');

const products = JSON.parse(fs.readFileSync('src/data/parsed_products.json', 'utf8'));

function formatDescription(desc) {
  if (!desc) return '';
  
  // Replace literal \n with actual line breaks
  const lines = desc.replace(/\\n/g, '\n').split('\n');
  
  const formattedLines = [];
  
  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;
    
    // Detect Subtitles: Uppercase, not too long
    if (trimmed.length > 5 && trimmed.length < 100 && trimmed === trimmed.toUpperCase()) {
      formattedLines.push(`<h3>${trimmed}</h3>`);
    } 
    // Detect List Items: Starts with -, •, or is short
    else if (trimmed.startsWith('-') || trimmed.startsWith('•') || (trimmed.length < 60 && !trimmed.includes('.'))) {
      formattedLines.push(`<li>${trimmed.replace(/^[-•]\s*/, '')}</li>`);
    }
    // Detect Quotes
    else if (trimmed.includes('«') && trimmed.includes('»')) {
      formattedLines.push(`<blockquote>${trimmed}</blockquote>`);
    }
    // Default P
    else {
      formattedLines.push(`<p>${trimmed}</p>`);
    }
  });
  
  return formattedLines.join('\n');
}

const updatedProducts = products.map(p => ({
  ...p,
  fullDescription: formatDescription(p.fullDescription)
}));

fs.writeFileSync('src/data/formatted_products.json', JSON.stringify(updatedProducts, null, 2));
console.log('Formatted', updatedProducts.length, 'products into src/data/formatted_products.json');
