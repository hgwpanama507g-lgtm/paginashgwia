import React, { useState } from 'react';
import { Product } from '../data/products';
import { Link } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { COMPANY_INFO } from '../data/company';
import { 
  ShoppingBag, 
  Eye, 
  MessageCircle, 
  Sparkles, 
  Tag, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const [imageError, setImageError] = useState(false);

  const productWhatsappUrl = `https://wa.me/${COMPANY_INFO.phoneWhatsapp}?text=${encodeURIComponent(
    `Hola Yamilka, deseo consultar la disponibilidad y precio del producto: *${product.name}* ($${product.price.toFixed(2)} USD).`
  )}`;

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image Box */}
      <div className="relative aspect-square w-full bg-gradient-to-br from-gray-50 to-emerald-50/40 p-4 overflow-hidden flex items-center justify-center">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-black border border-gray-200 shadow-2xs">
            {product.category}
          </span>
          {product.isFeatured && (
            <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-600 text-white shadow-2xs">
              Destacado
            </span>
          )}
          {product.isNew && (
            <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-500 text-white shadow-2xs">
              Próximamente
            </span>
          )}
        </div>

        {/* Product Image or Fallback */}
        <Link 
          to={`/producto/${product.slug}`} 
          className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        >
          {product.image && !imageError ? (
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain filter drop-shadow-sm"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-[#007A3D] mb-2 shadow-inner">
                <Sparkles className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-black uppercase tracking-wide">
                HGW Panamá
              </span>
              <span className="text-[11px] text-gray-700 mt-0.5">
                {product.category}
              </span>
            </div>
          )}
        </Link>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link to={`/producto/${product.slug}`} className="block group-hover:text-[#007A3D] transition-colors">
            <h3 className="text-lg font-bold text-black line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="text-[17px] text-black leading-relaxed mt-2 line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing Block */}
        <div className="pt-2 border-t border-gray-100">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xs text-gray-600 block">Precio Público</span>
              <span className="text-xl font-extrabold text-black">
                ${product.price.toFixed(2)}{' '}
                <span className="text-xs font-normal text-gray-600">USD</span>
              </span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-[#007A3D] font-bold block">
                Socio HGW (30% desc.)
              </span>
              <span className="text-sm font-bold text-emerald-800">
                ${product.memberPrice.toFixed(2)} USD
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            to={`/producto/${product.slug}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-gray-300 hover:border-[#007A3D] text-black hover:text-[#007A3D] font-bold text-xs transition-colors bg-white"
          >
            <Eye className="w-4 h-4 text-black" />
            <span>Ver Ficha</span>
          </Link>

          <button
            onClick={() => addItem(product, 1)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#007A3D] hover:bg-emerald-800 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
