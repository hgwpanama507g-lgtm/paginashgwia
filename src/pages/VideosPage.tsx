import React, { useState } from 'react';
import { VIDEOS, VideoItem } from '../data/videos';
import { COMPANY_INFO } from '../data/company';
import { Link } from '../context/RouterContext';
import { 
  Play, 
  X, 
  Sparkles, 
  MessageCircle, 
  ExternalLink, 
  CheckCircle2, 
  Video 
} from 'lucide-react';

export const VideosPage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Nutrición y Salud', 'Cuidado Personal', 'Cafés y Bebidas', 'Turmalina y Accesorios', 'Cuidado Bucal', 'Oportunidad de Negocio'];

  const filteredVideos = VIDEOS.filter(video => {
    if (selectedCategory === 'Todos') return true;
    return video.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#007A3D] text-xs font-bold uppercase tracking-wider">
          <Video className="w-3.5 h-3.5" />
          <span>Videoteca Oficial Panamá</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">
          Videos Informativos y Capacitación HGW
        </h1>
        <p className="text-[17px] text-black leading-relaxed">
          Conoce a fondo las propiedades del arándano, el funcionamiento de la turmalina, demostraciones en vivo de productos y la explicación del plan de Ganancia Mutua 50-50.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer transition-all border ${
              selectedCategory === cat
                ? 'bg-[#007A3D] text-white border-[#007A3D] shadow-xs'
                : 'bg-white text-black border-gray-300 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map(video => (
          <div
            key={video.id}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Thumbnail Container */}
              <div 
                className="relative aspect-video bg-gray-900 cursor-pointer overflow-hidden"
                onClick={() => setActiveVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#007A3D] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 bg-black/85 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {video.duration}
                </span>
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-black text-[11px] font-bold px-2.5 py-1 rounded border border-gray-200 shadow-2xs">
                  {video.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 
                  className="text-lg font-bold text-black leading-snug cursor-pointer group-hover:text-[#007A3D] transition-colors"
                  onClick={() => setActiveVideo(video)}
                >
                  {video.title}
                </h3>
                <p className="text-[17px] text-black leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
              <button
                onClick={() => setActiveVideo(video)}
                className="text-xs font-bold text-[#007A3D] hover:underline inline-flex items-center gap-1.5 cursor-pointer pt-3"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Reproducir Video</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.phoneWhatsapp}?text=${encodeURIComponent(
                  `Hola Yamilka, vi el video "${video.title}" en la web de HGW Panamá y deseo más detalles.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-gray-700 hover:text-black inline-flex items-center gap-1 pt-3"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Consultar</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl space-y-4">
            <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#007A3D] uppercase">
                  {activeVideo.category}
                </span>
                <h3 className="text-xl font-bold text-black">{activeVideo.title}</h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-xl text-gray-500 hover:text-black hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[17px] text-black leading-relaxed max-w-2xl">
                {activeVideo.description}
              </p>

              <a
                href={`https://wa.me/${COMPANY_INFO.phoneWhatsapp}?text=${encodeURIComponent(
                  `Hola Yamilka, estuve viendo el video "${activeVideo.title}" y quiero saber disponibilidad y precio en Panamá.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center gap-2 hover:bg-[#20ba59] shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Preguntar a Yamilka</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
