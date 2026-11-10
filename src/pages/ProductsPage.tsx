import React, { useState, useMemo } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES, ProductCategory } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/company';
import { 
  Search, 
  Filter, 
  Sparkles, 
  ArrowUpDown, 
  Truck, 
  MessageCircle, 
  ExternalLink,
  Tag
} from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { searchParams, navigate } = useRouter();
  const initialCategory = (searchParams.get('categoria') as ProductCategory) || 'Todos';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.fullDescription.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q)
      );
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      // default: featured first
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'Todos') {
      navigate('/productos');
    } else {
      navigate(`/productos?categoria=${encodeURIComponent(cat)}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-20">
      {/* Header & Intro */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#007A3D] text-xs font-bold uppercase tracking-wider">
          <span>🇵🇦 Catálogo Oficial Panamá 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">
          Catálogo Completo de Productos HGW
        </h1>
        <p className="text-[17px] text-black leading-relaxed max-w-3xl">
          Explora los 56 productos originales disponibles en Panamá. Fórmulas de arándano con alto contenido de vitamina C, terapia de turmalina bioenergética, café con Ganoderma y Cordyceps, y cuidado facial SMILIFE.
        </p>
      </div>

      {/* Sede & Servientrega Shipping Notice banner */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#007A3D] shadow-2xs shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-black">
              Envíos por Servientrega a todo Panamá
            </p>
            <p className="text-[17px] text-black leading-snug">
              Despachos desde la sede oficial en Plaza Royal Blue, San Francisco, Panamá.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={COMPANY_INFO.phoneWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#007A3D] text-white font-bold text-xs hover:bg-emerald-800 transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar Stock a Yamilka</span>
          </a>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="space-y-4">
        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, ingrediente o beneficio (ej. Turmalina, Arándano, Ganoderma, Colágeno)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-[#007A3D] shadow-xs text-sm"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="relative shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-9 text-sm font-semibold text-black cursor-pointer focus:outline-none focus:border-[#007A3D] shadow-xs"
              >
                <option value="featured">Ordenar: Destacados</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="name">Alfabético: A - Z</option>
              </select>
              <ArrowUpDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Category Pills Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {PRODUCT_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
                selectedCategory === category
                  ? 'bg-[#007A3D] text-white border-[#007A3D] shadow-xs'
                  : 'bg-white text-black border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-gray-700 border-b border-gray-200 pb-2">
        <span>
          Mostrando <strong>{filteredProducts.length}</strong> de {PRODUCTS.length} productos
          {selectedCategory !== 'Todos' && ` en "${selectedCategory}"`}
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-[#007A3D] hover:underline font-semibold"
          >
            Limpiar búsqueda
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-200 space-y-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-gray-400 shadow-xs">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-black">
            No se encontraron productos
          </h3>
          <p className="text-[17px] text-black max-w-md mx-auto">
            No encontramos ningún resultado para "{searchQuery}". Intenta con otros términos como arándano, café, pasta dental o turmalina.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Todos');
            }}
            className="px-6 py-2.5 rounded-xl bg-[#007A3D] text-white font-bold text-sm hover:bg-emerald-800 transition-colors"
          >
            Restablecer Filtros
          </button>
        </div>
      )}
    </div>
  );
};
