import React, { useState } from 'react';
import { getArticleBySlug, ARTICLES } from '../data/articles';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import { Link, useRouter } from '../context/RouterContext';
import { 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  Check, 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight,
  MessageCircle, 
  ExternalLink,
  BookOpen,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

import { useParams } from 'react-router-dom';

interface ArticleDetailPageProps {
  slug?: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug: propSlug }) => {
  const { navigate } = useRouter();
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = paramSlug || propSlug || '';
  const [copied, setCopied] = useState(false);

  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-black">Artículo no encontrado</h1>
        <p className="text-[17px] text-black">
          La publicación que buscas no existe o ha sido movida.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#007A3D] text-white font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Blog</span>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Find relevant products based on article topic
  const isTourmaline = article.slug.includes('turmalina');
  const isBlueberry = article.slug.includes('arandanos');
  const relevantProducts = PRODUCTS.filter(p => {
    if (isTourmaline) return p.name.toLowerCase().includes('turmalina');
    if (isBlueberry) return p.name.toLowerCase().includes('arándano') || p.name.toLowerCase().includes('berry') || p.name.toLowerCase().includes('blueberry');
    return p.isFeatured;
  }).slice(0, 3);

  const otherArticles = ARTICLES.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-gray-700 flex-wrap">
        <Link to="/" className="hover:text-[#007A3D] font-medium text-black">
          Inicio
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link to="/blog" className="hover:text-[#007A3D] font-medium text-black">
          Blog
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="font-semibold text-black truncate max-w-[240px] sm:max-w-none">
          {article.title}
        </span>
      </nav>

      {/* Article Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="bg-emerald-100 text-[#007A3D] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {article.category}
          </span>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 hover:border-[#007A3D] text-xs font-semibold text-black cursor-pointer bg-white transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#007A3D]" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? '¡Enlace copiado!' : 'Compartir artículo'}</span>
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
          {article.title}
        </h1>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center gap-6 py-4 border-y border-gray-200 text-xs text-black font-medium">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-[#007A3D]">
              YB
            </div>
            <div>
              <span className="block font-bold text-black">{article.author}</span>
              <span className="block text-[11px] text-gray-700">{article.authorRole}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-gray-700">
            <Calendar className="w-4 h-4 text-emerald-700" />
            <span>{article.date}</span>
          </div>

          <div className="flex items-center gap-1.5 text-gray-700">
            <Clock className="w-4 h-4 text-emerald-700" />
            <span>{article.readingTime}</span>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-gray-100">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Summary highlight */}
      <div className="p-6 rounded-2xl bg-emerald-50/70 border-l-4 border-[#007A3D] space-y-1">
        <span className="text-xs font-bold uppercase tracking-wider text-[#007A3D]">
          En este artículo:
        </span>
        <p className="text-[17px] text-black font-medium leading-relaxed">
          {article.summary}
        </p>
      </div>

      {/* Rich Article Body */}
      <div 
        className="article-content space-y-6 text-black"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      {/* Tags */}
      <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-black mr-2">Temas:</span>
        {article.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 rounded-lg bg-gray-100 text-black border border-gray-200 font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Author & WhatsApp Consultation Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-black">
              ¿Tienes dudas sobre este tema o deseas adquirir productos oficiales?
            </h3>
            <p className="text-[17px] text-black mt-1 leading-relaxed">
              Consulta directamente con <strong>{COMPANY_INFO.distributorName}</strong> ({COMPANY_INFO.phoneWhatsappFormatted}), distribuidora oficial autorizada HGW en Panamá.
            </p>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.phoneWhatsapp}?text=${encodeURIComponent(
              `Hola Yamilka Batista, estuve leyendo el artículo "${article.title}" y deseo más información sobre los productos y disponibilidad en Panamá.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-sm flex items-center gap-2 hover:bg-[#20ba59] transition-colors shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Relevant Products Section */}
      {relevantProducts.length > 0 && (
        <div className="pt-8 border-t border-gray-200 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-black">
              Productos Relacionados con este Artículo
            </h2>
            <Link to="/productos" className="text-sm font-bold text-[#007A3D] hover:underline">
              Ver Catálogo →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relevantProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 space-y-3 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-square w-full rounded-xl bg-gray-50 flex items-center justify-center p-3 mb-2">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <Sparkles className="w-8 h-8 text-[#007A3D]" />
                    )}
                  </div>
                  <h4 className="font-bold text-black text-sm line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-700 mt-1 line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-extrabold text-black text-base">
                    ${product.price.toFixed(2)} USD
                  </span>
                  <Link
                    to={`/producto/${product.slug}`}
                    className="text-xs font-bold text-[#007A3D] hover:underline"
                  >
                    Ver detalles →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Read Next Articles */}
      <div className="pt-8 border-t border-gray-200 space-y-6">
        <h2 className="text-2xl font-extrabold text-black">
          Otras Publicaciones Recomendadas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherArticles.map(a => (
            <Link
              key={a.id}
              to={`/blog/${a.slug}`}
              className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all block space-y-2 group"
            >
              <span className="text-[11px] font-bold text-[#007A3D] uppercase">
                {a.category}
              </span>
              <h3 className="font-bold text-black text-base group-hover:text-[#007A3D] transition-colors line-clamp-2 leading-snug">
                {a.title}
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2">
                {a.summary}
              </p>
              <span className="text-xs font-bold text-[#007A3D] inline-flex items-center gap-1 pt-1">
                Leer más <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};
