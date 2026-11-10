import React, { useState } from 'react';
import { getProductBySlug, getRelatedProducts, PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import { useCart } from '../context/CartContext';
import { Link, useRouter } from '../context/RouterContext';
import { ProductCard } from '../components/ProductCard';
import { 
  ShoppingBag, 
  Plus, 
  Minus, 
  MessageCircle, 
  ExternalLink, 
  Share2, 
  Check, 
  Truck, 
  MapPin, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  ArrowLeft,
  Clock,
  Award
} from 'lucide-react';

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-[#007A3D]">
          <Sparkles className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-black">Producto no encontrado</h1>
        <p className="text-[17px] text-black">
          El producto solicitado no está disponible o el enlace ha cambiado.
        </p>
        <Link
          to="/productos"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#007A3D] text-white font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Catálogo</span>
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const productWhatsappUrl = `https://wa.me/${COMPANY_INFO.phoneWhatsapp}?text=${encodeURIComponent(
    `Hola Yamilka Batista, deseo comprar el producto: *${product.name}* (Cantidad: ${quantity}, Precio: $${(product.price * quantity).toFixed(2)} USD). ¿Tienen stock en la sede de San Francisco para envío por Servientrega?`
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 pb-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-gray-700 flex-wrap">
        <Link to="/" className="hover:text-[#007A3D] font-medium text-black">
          Inicio
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link to="/productos" className="hover:text-[#007A3D] font-medium text-black">
          Productos
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <button
          onClick={() => navigate(`/productos?categoria=${encodeURIComponent(product.category)}`)}
          className="hover:text-[#007A3D] font-medium text-black cursor-pointer"
        >
          {product.category}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="font-semibold text-black truncate max-w-[200px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Product Image Box */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square w-full bg-gradient-to-br from-gray-50 via-white to-emerald-50/40 rounded-3xl border border-gray-200 p-8 flex items-center justify-center overflow-hidden shadow-xs">
            {product.image && !imageError ? (
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-md"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="text-center p-6 space-y-3">
                <div className="w-20 h-20 rounded-3xl bg-emerald-100 flex items-center justify-center text-[#007A3D] mx-auto shadow-inner">
                  <Sparkles className="w-10 h-10" />
                </div>
                <p className="font-bold text-black text-lg">{product.name}</p>
                <p className="text-xs text-black uppercase tracking-wider font-semibold">
                  HGW Panamá Oficial · {product.category}
                </p>
              </div>
            )}

            {/* Badges on image */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              <span className="bg-white/95 backdrop-blur-xs text-black border border-gray-200 text-xs font-bold px-3 py-1 rounded-lg shadow-2xs">
                {product.category}
              </span>
              {product.isFeatured && (
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-2xs">
                  Producto Destacado
                </span>
              )}
            </div>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-xs border border-gray-200 text-black hover:text-[#007A3D] shadow-xs cursor-pointer transition-colors"
              title="Copiar enlace directo"
            >
              {copied ? <Check className="w-4 h-4 text-[#007A3D]" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Servientrega notice pill under image */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
            <Truck className="w-5 h-5 text-[#007A3D] shrink-0" />
            <p className="text-xs text-black font-medium leading-relaxed">
              <strong>Envío directo a todo Panamá por Servientrega</strong> desde nuestra sede en Avenida Porras, Plaza Royal Blue, San Francisco. Entregas en 24 a 48 horas.
            </p>
          </div>
        </div>

        {/* Right: Product Details & Purchase Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#007A3D]">
              Código HGW #{product.id} · {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight">
              {product.name}
            </h1>
          </div>

          {/* Pricing Card */}
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-gray-600 block">Precio de Venta al Público</span>
                <span className="text-3xl font-extrabold text-black">
                  ${product.price.toFixed(2)}{' '}
                  <span className="text-sm font-normal text-gray-600">USD</span>
                </span>
              </div>

              <div className="text-right">
                <span className="text-xs text-[#007A3D] font-bold block">
                  Precio Socio HGW (30% desc.)
                </span>
                <span className="text-xl font-extrabold text-emerald-800">
                  ${product.memberPrice.toFixed(2)} USD
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-xs text-black">
              <span>
                Puntos de Negocio: <strong>{product.bvPoints} BV</strong>
              </span>
              <Link to="/afiliacion" className="text-[#007A3D] font-semibold hover:underline">
                ¿Cómo comprar con precio de socio? →
              </Link>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-[17px] text-black leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Add to Cart & Direct WhatsApp Actions */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-xl bg-white overflow-hidden p-1 shadow-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-black hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-base font-bold text-black min-w-[36px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-black hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addItem(product, quantity)}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#007A3D] hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Agregar al Pedido (${(product.price * quantity).toFixed(2)})</span>
              </button>
            </div>

            {/* Direct WhatsApp Ordering */}
            <a
              href={productWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Pedir por WhatsApp a Yamilka Batista (+507 6778-8375)</span>
            </a>

            {/* Official Store Direct External Link */}
            <a
              href={COMPANY_INFO.officialStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl border border-gray-300 hover:border-[#007A3D] text-black hover:text-[#007A3D] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors bg-white shadow-2xs"
            >
              <span>Comprar en Tienda Online Oficial HGW (Usuario: Yamilka507)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Key Benefits List */}
          {product.benefits && product.benefits.length > 0 && (
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <h3 className="font-bold text-black text-base uppercase tracking-wide">
                Beneficios Principales
              </h3>
              <ul className="space-y-2 text-black">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[17px] text-black leading-relaxed">
                    <Check className="w-5 h-5 text-[#007A3D] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Panama Branch Info Box */}
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-black">
              <MapPin className="w-4 h-4 text-[#007A3D]" />
              <span>Sede Física: Plaza Royal Blue, San Francisco, Panamá</span>
            </div>
            <p className="text-[17px] text-black">
              Lunes a Viernes: 09:00 am - 06:00 pm | Sábados: 09:00 am - 01:00 pm
            </p>
            <p className="text-[17px] text-black font-semibold">
              Teléfono sede: {COMPANY_INFO.branch.phoneLandlineFormatted}
            </p>
          </div>
        </div>
      </div>

      {/* Full Description & Specifications Tab */}
      <div className="pt-8 border-t border-gray-200 space-y-6">
        <h2 className="text-2xl font-extrabold text-black">
          Descripción Detallada y Especificaciones
        </h2>

        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 space-y-6">
          <div className="prose max-w-none text-black">
            <p className="text-[17px] text-black leading-relaxed whitespace-pre-line">
              {product.fullDescription}
            </p>
          </div>

          {/* Quality & Origin Seals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#007A3D] shrink-0" />
              <div>
                <span className="text-xs font-bold text-black block">Calidad Certificada</span>
                <span className="text-xs text-gray-700">Fórmula de alta biotecnología HGW</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#007A3D] shrink-0" />
              <div>
                <span className="text-xs font-bold text-black block">Distribución Autorizada</span>
                <span className="text-xs text-gray-700">Por Yamilka Batista en Panamá</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-[#007A3D] shrink-0" />
              <div>
                <span className="text-xs font-bold text-black block">Envíos Servientrega</span>
                <span className="text-xs text-gray-700">A todas las provincias del país</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pt-10 border-t border-gray-200 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-black">
              Productos Relacionados de {product.category}
            </h2>
            <Link to="/productos" className="text-sm font-bold text-[#007A3D] hover:underline">
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
