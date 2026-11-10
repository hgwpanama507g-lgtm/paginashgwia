import React, { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { Link } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/company';
import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  Clock, 
  Tag, 
  User, 
  Sparkles,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('Todos');

  const allTags = ['Todos', 'Arándanos', 'Turmalina', 'Ganancia Mutua 50-50', 'Catálogo 2026', 'Precios 2026'];

  const filteredArticles = ARTICLES.filter(article => {
    const matchesTag = 
      selectedTag === 'Todos' || 
      article.tags.some(t => t.toLowerCase().includes(selectedTag.toLowerCase()));

    if (!matchesTag) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#007A3D] text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Artículos, Ciencia y Negocio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">
          Blog de Bienestar y Salud HGW Panamá
        </h1>
        <p className="text-[17px] text-black leading-relaxed">
          Aprende sobre la ciencia de los arándanos azules, el funcionamiento terapéutico de la turmalina, la salud inmunológica y cómo funciona el plan de compensación de Ganancia Mutua 50-50 en Panamá.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative w-full sm:w-96">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar artículos por tema..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-black text-sm focus:outline-none focus:border-[#007A3D] shadow-xs"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-all border ${
                selectedTag === tag
                  ? 'bg-[#007A3D] text-white border-[#007A3D]'
                  : 'bg-white text-black border-gray-300 hover:bg-gray-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map(article => (
          <article
            key={article.id}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <Link to={`/blog/${article.slug}`} className="relative aspect-video block overflow-hidden bg-gray-100">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-black text-xs font-bold px-2.5 py-1 rounded-md border border-gray-200">
                  {article.category}
                </span>
              </Link>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-gray-700">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readingTime}</span>
                </div>

                <Link to={`/blog/${article.slug}`} className="block hover:text-[#007A3D] transition-colors">
                  <h2 className="text-xl font-bold text-black leading-snug">
                    {article.title}
                  </h2>
                </Link>

                <p className="text-[17px] text-black leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-black font-semibold">
                Por {article.author}
              </span>

              <Link
                to={`/blog/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007A3D] hover:underline"
              >
                <span>Leer artículo completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Distributor Contact CTA Banner */}
      <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-black">
            ¿Deseas compartir o consultar sobre estos temas con Yamilka Batista?
          </h3>
          <p className="text-[17px] text-black leading-relaxed">
            Estamos disponibles para responder tus preguntas sobre protocolos de consumo, dosificaciones y el plan de afiliados.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={COMPANY_INFO.phoneWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-sm flex items-center gap-2 hover:bg-[#20ba59] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
