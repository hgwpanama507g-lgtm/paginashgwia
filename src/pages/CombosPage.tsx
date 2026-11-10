import React from 'react';
import { COMBOS } from '../data/combos';
import { COMPANY_INFO } from '../data/company';
import { useCart } from '../context/CartContext';
import { Link } from '../context/RouterContext';
import { 
  Package, 
  CheckCircle2, 
  ShoppingBag, 
  MessageCircle, 
  Sparkles, 
  Truck, 
  Tag, 
  ShieldCheck 
} from 'lucide-react';

export const CombosPage: React.FC = () => {
  const { addItem } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#007A3D] text-xs font-bold uppercase tracking-wider">
          <Package className="w-3.5 h-3.5" />
          <span>Combos Promocionales HGW Panamá</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">
          Combos y Paquetes de Ahorro HGW
        </h1>
        <p className="text-[17px] text-black leading-relaxed">
          Diseñados por especialistas para ofrecerte un tratamiento completo con descuento especial en dólares. Obtén mayor acumulación de puntos BV y resultados más rápidos para tu salud.
        </p>
      </div>

      {/* Sede & Servientrega notice */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex items-center gap-3">
        <Truck className="w-6 h-6 text-[#007A3D] shrink-0" />
        <p className="text-[17px] text-black leading-relaxed">
          Todos los combos se envían protegidos a todo Panamá por <strong>Servientrega</strong> o pueden ser retirados en nuestra sede oficial en <strong>Avenida Porras, Plaza Royal Blue, San Francisco</strong>.
        </p>
      </div>

      {/* Combos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {COMBOS.map(combo => {
          const comboWhatsappUrl = `https://wa.me/${COMPANY_INFO.phoneWhatsapp}?text=${encodeURIComponent(
            `Hola Yamilka Batista, deseo pedir el *${combo.title}* por $${combo.price.toFixed(2)} USD. ¿Tienen disponible para entrega por Servientrega?`
          )}`;

          return (
            <div
              key={combo.id}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
                  <img
                    src={combo.image}
                    alt={combo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#007A3D] text-white text-xs font-bold px-3 py-1 rounded-lg shadow-sm">
                      {combo.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <div>
                    <h2 className="text-2xl font-extrabold text-black">
                      {combo.title}
                    </h2>
                    <p className="text-sm text-gray-700 font-semibold mt-1">
                      {combo.subtitle}
                    </p>
                    <p className="text-[17px] text-black leading-relaxed mt-3">
                      {combo.description}
                    </p>
                  </div>

                  {/* Included items */}
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <p className="text-xs font-bold text-black uppercase tracking-wider">
                      Productos Incluidos en el Combo:
                    </p>
                    <ul className="space-y-1.5 text-xs text-black">
                      {combo.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#007A3D] shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-black uppercase tracking-wider">
                      Beneficios Clave:
                    </p>
                    <ul className="space-y-1 text-xs text-black">
                      {combo.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing & Actions */}
              <div className="p-6 sm:p-8 pt-0 border-t border-gray-100 mt-4 space-y-4">
                  <div className="flex items-baseline justify-between pt-4">
                    <span className="text-3xl font-extrabold text-black">
                      ${combo.price.toFixed(2)}{' '}
                      <span className="text-sm font-normal text-gray-600">USD</span>
                    </span>
                  </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => addItem({
                      id: combo.id,
                      name: combo.title,
                      slug: combo.slug,
                      price: combo.price,
                      image: combo.image,
                      category: 'Combos HGW'
                    }, 1)}
                    className="w-full py-3 px-4 rounded-xl bg-[#007A3D] hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Agregar a Cotización</span>
                  </button>

                  <a
                    href={comboWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Pedir por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
