const fs = require('fs');

const prods = JSON.parse(fs.readFileSync('src/data/formatted_products.json', 'utf8'));

const tsHeader = `// HGW Panamá Products Data Catalog
// Health Green World Panama - Official Catalog 2026

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoriesRaw: string;
  price: number;
  memberPrice: number;
  bvPoints: number;
  shortDescription: string;
  fullDescription: string;
  rawHtml?: string;
  benefits: string[];
  image: string;
  fallbackGradient: string;
  isFeatured?: boolean;
  isNew?: boolean;
  presentation?: string;
}

export const PRODUCTS: Product[] = `;

const tsFooter = `;

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug || p.id === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return PRODUCTS
    .filter(p => p.id !== product.id && (p.category === product.category || p.isFeatured))
    .slice(0, limit);
}

export function searchProducts(query: string, category?: string): Product[] {
  const q = query.trim().toLowerCase();
  return PRODUCTS.filter(p => {
    const matchesCategory = !category || category === 'Todos' || p.category === category;
    if (!matchesCategory) return false;
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.fullDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });
}
`;

fs.writeFileSync('src/data/products.ts', tsHeader + JSON.stringify(prods, null, 2) + tsFooter);
console.log('Successfully wrote src/data/products.ts');
