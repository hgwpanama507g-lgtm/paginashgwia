import React from 'react';
import { PRODUCTS } from '../data/products';
import { COMBOS } from '../data/combos';
import { ARTICLES } from '../data/articles';
import { VIDEOS } from '../data/videos';
import { COMPANY_INFO } from '../data/company';
import { Link } from '../context/RouterContext';
import { ProductCard } from '../components/ProductCard';
import { 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  MapPin, 
  ArrowRight, 
  ExternalLink, 
  MessageCircle, 
  Award, 
  HeartHandshake, 
  Zap, 
  CheckCircle2, 
  Play, 
  Phone
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 8);
  const latestArticles = ARTICLES.slice(0, 3);
  const featuredVideos = VIDEOS.slice(0, 3);

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200">
                <span className="text-base">🇵🇦</span>
                <span className="text-xs sm:text-sm font-bold text-[#007A3D] uppercase tracking-wide">
                  Distribuidora Autorizada Panamá · Yamilka Batista
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.15]">
                Salud y Bienestar con el Poder del{' '}
                <span className="text-[#007A3D]">Arándano</span> y la{' '}
                <span className="text-[#007A3D]">Turmalina</span>
              </h1>

              <p className="text-[17px] text-black leading-relaxed max-w-2xl">
                Bienvenido al portal oficial de <strong>Health Green World (HGW) Panamá</strong>. Descubre productos de alta biotecnología natural para tu nutrición, cuidado facial, higiene y bienestar integral. Adquiere con entrega en todo el país o emprende con nuestro exclusivo sistema de <strong>Ganancia Mutua 50-50</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/productos"
                  className="px-6 py-3.5 rounded-xl bg-[#007A3D] hover:bg-emerald-800 text-white font-bold text-base shadow-md transition-all flex items-center gap-2 group"
                >
                  <span>Explorar Productos</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={COMPANY_INFO.officialStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white border-2 border-[#007A3D] text-[#007A3D] hover:bg-emerald-50 font-bold text-base shadow-xs transition-all flex items-center gap-2"
                >
                  <span>Tienda Oficial HGW</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/afiliacion"
                  className="px-5 py-3.5 rounded-xl bg-amber-50 border border-amber-200 text-black hover:bg-amber-100 font-bold text-sm transition-all flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 text-amber-600" />
                  <span>Plan Afiliación 50-50</span>
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#007A3D] shrink-0" />
                  <span className="text-xs font-semibold text-black">
                    Sede en San Francisco
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#007A3D] shrink-0" />
                  <span className="text-xs font-semibold text-black">
                    Envíos por Servientrega
                  </span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Award className="w-5 h-5 text-[#007A3D] shrink-0" />
                  <span className="text-xs font-semibold text-black">
                    Precios Oficiales 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card with Featured Trio */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200 relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <img 
                      src={COMPANY_INFO.logoUrl} 
                      alt="HGW Logo" 
                      className="h-8 w-auto object-contain" 
                    />
                    <span className="text-xs font-bold text-[#007A3D] uppercase tracking-wide">
                      Catálogo Panamá 2026
                    </span>
                  </div>
                  <span className="bg-emerald-100 text-[#007A3D] text-xs font-bold px-2.5 py-1 rounded-full">
                    Garantía HGW
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#007A3D] shadow-xs shrink-0">
                      🍇
                    </div>
                    <div>
                      <h2 className="font-bold text-black text-sm">Línea de Arándanos Azules</h2>
                      <p className="text-[17px] text-black leading-snug">
                        Antioxidantes puros: Berry Juice, Colágeno y línea cosmética SMILIFE.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-teal-700 shadow-xs shrink-0">
                      ⚡
                    </div>
                    <div>
                      <h2 className="font-bold text-black text-sm">Tecnología de Turmalina</h2>
                      <p className="text-[17px] text-black leading-snug">
                        Iones negativos e infrarrojo: jabones, almohada magnética y protectores.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-amber-700 shadow-xs shrink-0">
                      ☕
                    </div>
                    <div>
                      <h2 className="font-bold text-black text-sm">Cafés & Bebidas Saludables</h2>
                      <p className="text-[17px] text-black leading-snug">
                        Café con Ganoderma, Coffee Ceps con Cordyceps, Choco Blue y Té Pro Shaping.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sede Panama Callout Box */}
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs space-y-1.5">
                  <p className="font-bold text-black flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#007A3D]" />
                    Sede Panamá: Plaza Royal Blue, San Francisco
                  </p>
                  <p className="text-[17px] text-black">
                    Lunes a Viernes: 9am - 6pm | Sábados: 9am - 1pm
                  </p>
                  <p className="text-[17px] text-black font-semibold">
                    Atención directa: Yamilka Batista ({COMPANY_INFO.phoneWhatsappFormatted})
                  </p>
                </div>
              </div>

              {/* Decorative accent behind card */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-emerald-200/50 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Panama Sede Banner & Servientrega Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#007A3D] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 rounded-lg text-emerald-100 text-xs font-bold uppercase">
                <span>🇵🇦</span>
                <span>Única Sede Oficial en Panamá</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Entregas Directas y Envíos a Todo Panamá por Servientrega
              </h2>
              <p className="text-[17px] text-white/95 leading-relaxed">
                Ubicada en <strong>Avenida Porras, Plaza Royal Blue, Local No. 6, San Francisco, Panamá</strong>. Contamos con inventario disponible para entrega inmediata y despachos diarios en 24 a 48 horas a cualquier rincón de la República.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-sm text-white">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-emerald-300" />
                  Teléfono Sede: <strong>+507 392-8415</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  Móvil / WhatsApp: <strong>+507 6778-8375</strong>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/contacto"
                className="w-full py-3.5 px-6 rounded-xl bg-white text-[#007A3D] hover:bg-emerald-50 font-bold text-center shadow-md transition-colors text-base"
              >
                Ver Dirección y Mapa
              </Link>
              <a
                href={COMPANY_INFO.phoneWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-center border border-emerald-700 transition-colors text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#007A3D] mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Selección Destacada</span>
            </div>
            <h2 className="text-3xl font-extrabold text-black">
              Productos HGW Más Solicitados en Panamá
            </h2>
            <p className="text-[17px] text-black mt-1">
              Fórmulas naturales con arándanos, turmalina activa y biotecnología celular.
            </p>
          </div>

          <Link
            to="/productos"
            className="inline-flex items-center gap-2 font-bold text-[#007A3D] hover:underline text-base shrink-0"
          >
            <span>Ver todo el catálogo (56 productos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Special Combos Section */}
      <section className="bg-emerald-50/60 py-16 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#007A3D] bg-emerald-100 px-3 py-1 rounded-full">
              Packs & Ahorro
            </span>
            <h2 className="text-3xl font-extrabold text-black">
              Combos Especiales HGW Panamá
            </h2>
            <p className="text-[17px] text-black">
              Paquetes diseñados para maximizar resultados en salud, descanso y cuidado facial, con precios promocionales y acumulación de puntos BV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMBOS.map(combo => (
              <div 
                key={combo.id}
                className="bg-white rounded-2xl border border-gray-200 hover:border-emerald-300 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-[#007A3D]">
                      {combo.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black leading-snug">
                    {combo.title}
                  </h3>
                  <p className="text-xs text-gray-700 font-medium">
                    {combo.subtitle}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    <p className="text-xs font-bold text-black uppercase tracking-wider">Incluye:</p>
                    <ul className="space-y-1 text-xs text-black">
                      {combo.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#007A3D] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div className="text-2xl font-extrabold text-black">
                      ${combo.price.toFixed(2)}{' '}
                      <span className="text-xs font-normal text-gray-600">USD</span>
                    </div>
                  </div>

                  <Link
                    to="/combos"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#007A3D] hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>Ver Detalles de Combos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/combos"
              className="inline-flex items-center gap-2 font-bold text-[#007A3D] hover:underline text-base"
            >
              <span>Ver todos los combos y kits de inicio →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Plan de Ganancia Mutua 50-50 Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-900 via-[#007A3D] to-teal-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded-lg bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                Oportunidad de Negocio · HGW Panamá
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Plan de Compensación Revolucionario: <br />
                <span className="text-emerald-200">Ganancia Mutua 50-50</span>
              </h2>
              <p className="text-[17px] text-white/95 leading-relaxed">
                En Health Green World rompemos el esquema tradicional: <strong>ganas de tus patrocinados directos y también ganas el 50% de las bonificaciones que genera la persona que te patrocinó</strong>. Sin candados mensuales obligatorios, con puntos acumulables de por vida y descuentos de hasta el 52% en compras personales.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3">
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/10">
                  <span className="text-xs text-emerald-200 block">Membresía</span>
                  <span className="text-lg font-bold text-white">Pre-Junior</span>
                  <span className="text-xs text-white/80 block">50 BV (~$100)</span>
                </div>
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/10">
                  <span className="text-xs text-emerald-200 block">Membresía</span>
                  <span className="text-lg font-bold text-white">Junior</span>
                  <span className="text-xs text-white/80 block">100 BV (~$200)</span>
                </div>
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/10">
                  <span className="text-xs text-emerald-200 block">Membresía</span>
                  <span className="text-lg font-bold text-white">Senior</span>
                  <span className="text-xs text-white/80 block">300 BV (~$550)</span>
                </div>
                <div className="bg-emerald-400/20 p-3.5 rounded-xl border border-emerald-300/40">
                  <span className="text-xs text-emerald-200 block">Máximo Nivel</span>
                  <span className="text-lg font-bold text-white">Master</span>
                  <span className="text-xs text-white/80 block">600 BV (~$1,100)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white text-[#007A3D] flex items-center justify-center mx-auto font-extrabold text-2xl shadow-lg">
                50%
              </div>
              <h3 className="text-xl font-bold text-white">
                Afíliate con Yamilka Batista
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Recibe mentoría personalizada, acceso a la plataforma oficial de HGW y soporte directo en Panamá.
              </p>

              <div className="space-y-2 pt-2">
                <Link
                  to="/afiliacion"
                  className="w-full py-3 px-4 rounded-xl bg-white text-[#007A3D] font-bold text-sm block hover:bg-emerald-50 transition-colors shadow-md"
                >
                  Conocer los 7 Bonos HGW
                </Link>

                <a
                  href={COMPANY_INFO.phoneWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-white/40 text-white font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Consultar Afiliación por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#007A3D] mb-1">
              <Play className="w-4 h-4" />
              <span>Videoteca Informativa</span>
            </div>
            <h2 className="text-3xl font-extrabold text-black">
              Aprende sobre los Productos y el Negocio HGW
            </h2>
            <p className="text-[17px] text-black mt-1">
              Tutoriales y capacitaciones grabadas por distribuidores autorizados en Panamá.
            </p>
          </div>

          <Link
            to="/videos"
            className="inline-flex items-center gap-2 font-bold text-[#007A3D] hover:underline text-base shrink-0"
          >
            <span>Ver videoteca completa ({VIDEOS.length} videos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVideos.map(video => (
            <div 
              key={video.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative aspect-video bg-gray-900 group">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#007A3D]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[11px] font-bold text-[#007A3D] uppercase tracking-wider">
                    {video.category}
                  </span>
                  <h3 className="font-bold text-black text-base mt-1 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-[17px] text-black leading-relaxed mt-2 line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <Link
                  to="/videos"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007A3D] hover:underline pt-2 border-t border-gray-100"
                >
                  <span>Reproducir en videoteca</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#007A3D] mb-1">
              <span>Artículos y Guías</span>
            </div>
            <h2 className="text-3xl font-extrabold text-black">
              Blog de Salud, Nutrición y Bienestar
            </h2>
            <p className="text-[17px] text-black mt-1">
              Conocimiento científico y recomendaciones prácticas para tu salud diaria.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-bold text-[#007A3D] hover:underline text-base shrink-0"
          >
            <span>Ver todos los artículos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map(article => (
            <article 
              key={article.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col"
            >
              <Link to={`/blog/${article.slug}`} className="relative aspect-video overflow-hidden bg-gray-100 block">
                <img 
                  src={article.coverImage} 
                  alt={article.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-black text-xs font-bold px-2.5 py-1 rounded-md border border-gray-200 shadow-2xs">
                  {article.category}
                </span>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readingTime}</span>
                  </div>

                  <Link to={`/blog/${article.slug}`} className="block hover:text-[#007A3D] transition-colors">
                    <h3 className="text-xl font-bold text-black leading-snug">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-[17px] text-black leading-relaxed mt-2 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-xs text-black">
                    Por <strong>{article.author}</strong>
                  </div>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#007A3D] hover:underline"
                  >
                    <span>Leer artículo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Official Registration CTA Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-300 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-[#007A3D] mx-auto shadow-inner">
            <HeartHandshake className="w-8 h-8" />
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              ¿Listo para adquirir o afiliarte a HGW Panamá?
            </h2>
            <p className="text-[17px] text-black leading-relaxed">
              Comunícate directamente con la distribuidora <strong>{COMPANY_INFO.distributorName}</strong> al <strong>{COMPANY_INFO.phoneWhatsappFormatted}</strong> para recibir la mejor asesoría en selección de productos, pagos por Yappy/ACH y despacho inmediato con Servientrega.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={COMPANY_INFO.phoneWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-md flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chatear en WhatsApp (+507 6778-8375)</span>
            </a>

            <a
              href={COMPANY_INFO.officialStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#007A3D] hover:bg-emerald-800 text-white font-bold text-base shadow-md flex items-center gap-2 transition-all"
            >
              <span>Abrir Tienda Online Oficial HGW</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
