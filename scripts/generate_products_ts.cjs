const fs = require('fs');

const prods = JSON.parse(fs.readFileSync('src/data/parsed_products.json', 'utf8'));

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

const CATEGORY_GRADIENTS: Record<string, string> = {
  'Cuidado Personal': 'from-emerald-500/10 to-teal-600/20 text-emerald-700',
  'Belleza y Cosméticos': 'from-rose-500/10 to-pink-600/20 text-rose-700',
  'Turmalina y Accesorios': 'from-amber-500/10 to-orange-600/20 text-amber-700',
  'Cafés y Bebidas': 'from-amber-700/10 to-amber-900/20 text-amber-800',
  'Bebidas Especiales': 'from-purple-600/10 to-indigo-700/20 text-purple-700',
  'Nutrición y Salud': 'from-green-600/10 to-emerald-800/20 text-emerald-800',
  'Snacks y Caramelos': 'from-sky-500/10 to-blue-600/20 text-sky-700'
};

export const PRODUCTS: Product[] = `;

const enhancedProds = prods.map(p => {
  const price = p.price;
  const memberPrice = Math.round((price * 0.70) * 100) / 100; // 30% member discount
  const bvPoints = Math.round((price * 0.6) * 10) / 10;
  
  return {
    ...p,
    price,
    memberPrice,
    bvPoints,
    fallbackGradient: "from-emerald-600/15 via-emerald-700/10 to-teal-800/20"
  };
});

const tsCode = tsHeader + JSON.stringify(enhancedProds, null, 2) + `;\n\n` + `
export const PRODUCT_CATEGORIES = [
  'Todos',
  'Cafés y Bebidas',
  'Nutrición y Salud',
  'Turmalina y Accesorios',
  'Cuidado Personal',
  'Belleza y Cosméticos',
  'Snacks y Caramelos',
  'Bebidas Especiales'
] as const;

export type ProductCategory = typeof PRODUCT_CATEGORIES[number];

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

fs.writeFileSync('src/data/products.ts', tsCode);
console.log('Successfully wrote src/data/products.ts');
