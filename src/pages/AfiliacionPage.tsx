import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Link } from '../context/RouterContext';
import { 
  Award, 
  Users, 
  Zap, 
  CheckCircle2, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  ExternalLink, 
  MessageCircle, 
  Truck, 
  ArrowRight,
  Gift,
  HeartHandshake
} from 'lucide-react';

export const AfiliacionPage: React.FC = () => {
  const tiers = [
    {
      name: "Pre-Junior",
      points: "50 BV",
      estimatedCost: "$90 - $110 USD",
      discount: "30% de descuento",
      sponsorBonus: "Bono patrocinio inicial",
      popular: false,
      benefits: [
        "Descuento del 30% en todas tus recompras",
        "Oficina virtual HGW y tienda web personalizada",
        "Acceso a los primeros 4 bonos del plan",
        "Puntos acumulables sin fecha de vencimiento"
      ]
    },
    {
      name: "Junior",
      points: "100 BV",
      estimatedCost: "$180 - $220 USD",
      discount: "30% de descuento",
      sponsorBonus: "Mayor porcentaje de bonificación",
      popular: false,
      benefits: [
        "Descuento del 30% en compras personales",
        "Aumento en el tope semanal de ganancias",
        "Calificación para Bono Ganancia Mutua 50-50",
        "Capacitación semanal en liderazgo y ventas"
      ]
    },
    {
      name: "Senior",
      points: "300 BV",
      estimatedCost: "$540 - $600 USD",
      discount: "35% - 40% ganancia",
      sponsorBonus: "Acceso a bono de desarrollo avanzado",
      popular: false,
      benefits: [
        "Rango intermedio de alta rentabilidad",
        "Tope semanal incrementado en el binario",
        "Bono de recompra ampliado en generaciones",
        "Kit surtido con envío por Servientrega"
      ]
    },
    {
      name: "Master",
      points: "600 BV",
      estimatedCost: "$1,050 - $1,200 USD",
      discount: "Hasta 52% de ganancia",
      sponsorBonus: "Máximo nivel y comisiones sin límite",
      popular: true,
      benefits: [
        "Máximo estatus y descuentos de por vida",
        "Mayor porcentaje en los 7 bonos de la compañía",
        "Tope semanal más alto de cobro en Panamá",
        "Acceso directo al fondo de Autos y Viajes mundiales",
        "Mentoría exclusiva con líderes internacionales"
      ]
    }
  ];

  const bonuses = [
    {
      number: "01",
      title: "Bono de Venta Directa",
      desc: "Compra productos al por mayor con 30% a 52% de margen y véndelos al detalle a tus clientes en Panamá."
    },
    {
      number: "02",
      title: "Bono de Inicio Rápido (Patrocinio)",
      desc: "Gana comisiones en dólares cada vez que un nuevo socio se afilia a tu equipo con cualquier paquete de inicio."
    },
    {
      number: "03",
      title: "Bono de Ganancia Mutua 50-50 (¡Único!)",
      desc: "El bono revolucionario: ganas el 50% de lo que cobra tu patrocinador por patrocinar, ¡y el 50% de lo que cobran tus directos!"
    },
    {
      number: "04",
      title: "Bono de Equipo Binario (Desarrollo)",
      desc: "Gana hasta el 10% del volumen generado en tu línea menor, sin límites de niveles de profundidad."
    },
    {
      number: "05",
      title: "Bono de Recompra Mensual",
      desc: "Ingresos pasivos recurrentes por el consumo mensual de tus socios y clientes preferentes hasta 10 generaciones."
    },
    {
      number: "06",
      title: "Bono de Liderazgo Elite",
      desc: "Participa de los porcentajes de ventas mundiales de Health Green World al ascender a rangos Diamante."
    },
    {
      number: "07",
      title: "Bono de Autos de Lujo y Viajes Internacionales",
      desc: "Premios anuales pagados por la compañía para distribuidores destacados y vacaciones a destinos de ensueño."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-900 via-[#007A3D] to-teal-950 rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-emerald-100 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            🇵🇦 Oportunidad de Negocio · Panamá 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Emprende con HGW Panamá y el Sistema de{' '}
            <span className="text-emerald-200">Ganancia Mutua 50-50</span>
          </h1>
          <p className="text-[17px] text-white/95 leading-relaxed">
            Health Green World ha transformado la industria eliminando los candados, las compras obligatorias agresivas y las pérdidas de puntos. Aquí <strong>ganas dinero tanto del trabajo de las personas que tú invitas como del trabajo de la persona que te patrocinó</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={COMPANY_INFO.officialStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white text-[#007A3D] font-bold text-sm shadow-md hover:bg-emerald-50 transition-colors flex items-center gap-2"
            >
              <span>Registrarme con Yamilka Batista</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={COMPANY_INFO.phoneWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Consultar por WhatsApp (+507 6778-8375)</span>
            </a>
          </div>
        </div>

        <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* The 50-50 Explanation Highlight */}
      <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-[#007A3D] font-bold text-xl">
            50%
          </div>
          <div>
            <span className="text-xs font-bold text-[#007A3D] uppercase tracking-wide">
              Patente Exclusiva HGW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              ¿Por qué el Bono Ganancia Mutua 50-50 es Único en el Mundo?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3">
            <h3 className="text-lg font-bold text-black flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#007A3D]" />
              <span>Ganas de tu Línea Descendente (Hacia Abajo)</span>
            </h3>
            <p className="text-[17px] text-black leading-relaxed">
              Cada vez que uno de tus socios directos cobra un bono de inicio rápido por invitar a otra persona, la empresa te paga a ti de forma automática el <strong>50% equivalente</strong> de esa ganancia. ¡Sin restarle ni un centavo a tu socio!
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-3">
            <h3 className="text-lg font-bold text-black flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-700" />
              <span>Ganas de tu Patrocinador (¡Hacia Arriba!)</span>
            </h3>
            <p className="text-[17px] text-black leading-relaxed">
              ¡Esto nunca antes se había visto! Cada vez que tu patrocinador afilia a una nueva persona en su equipo directo, tú también ganas un porcentaje de esa bonificación. En HGW, el éxito del patrocinador beneficia directamente a los socios que ya forman parte de su red.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Membership Tiers */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#007A3D] bg-emerald-100 px-3 py-1 rounded-full">
            Niveles de Entrada
          </span>
          <h2 className="text-3xl font-extrabold text-black">
            Elige tu Paquete de Membresía HGW
          </h2>
          <p className="text-[17px] text-black">
            Todos los paquetes incluyen productos a tu elección según tu presupuesto. Puedes iniciar en Pre-Junior y hacer upgrade a Master en cualquier momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 ${
                tier.popular
                  ? 'bg-gradient-to-b from-emerald-50 to-white border-2 border-[#007A3D] shadow-xl relative'
                  : 'bg-white border border-gray-200 shadow-xs hover:border-gray-300'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#007A3D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Recomendado para Líderes
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {tier.points}
                  </span>
                  <h3 className="text-2xl font-extrabold text-black">
                    {tier.name}
                  </h3>
                  <div className="text-lg font-bold text-emerald-800 mt-1">
                    {tier.estimatedCost}
                  </div>
                  <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-100 text-[#007A3D]">
                    {tier.discount}
                  </span>
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <p className="text-xs font-bold text-black uppercase tracking-wider">Beneficios:</p>
                  <ul className="space-y-2 text-xs text-black">
                    {tier.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#007A3D] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneWhatsapp}?text=${encodeURIComponent(
                    `Hola Yamilka, deseo afiliarme a HGW Panamá con el paquete *${tier.name}* (${tier.points}). ¿Cuáles son los pasos y opciones de productos?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                    tier.popular
                      ? 'bg-[#007A3D] hover:bg-emerald-800 text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 text-black'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Elegir {tier.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The 7 Bonuses Breakdown */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#007A3D] bg-emerald-100 px-3 py-1 rounded-full">
            Estructura de Comisiones
          </span>
          <h2 className="text-3xl font-extrabold text-black">
            Los 7 Bonos del Plan de Compensación HGW
          </h2>
          <p className="text-[17px] text-black">
            Diseñado para generar ingresos diarios por ventas, semanales por desarrollo de equipo y mensuales por consumo residual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map(b => (
            <div
              key={b.number}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-emerald-300 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-emerald-800">
                  {b.number}
                </span>
                <Award className="w-5 h-5 text-[#007A3D]" />
              </div>
              <h3 className="text-lg font-bold text-black">{b.title}</h3>
              <p className="text-[17px] text-black leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How to Register Step-by-Step with Yamilka Batista */}
      <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold text-[#007A3D] uppercase tracking-wide">
            Paso a Paso
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
            ¿Cómo Registrarte Oficialmente en HGW Panamá?
          </h2>
          <p className="text-[17px] text-black leading-relaxed">
            Sigue estos 3 sencillos pasos para activar tu código de socio con <strong>Yamilka Batista</strong>:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3">
            <span className="w-8 h-8 rounded-full bg-[#007A3D] text-white flex items-center justify-center font-bold text-sm">
              1
            </span>
            <h4 className="font-bold text-black text-base">
              Abre la Tienda Oficial HGW
            </h4>
            <p className="text-[17px] text-black leading-relaxed">
              Ingresa al enlace oficial de registro con el código de patrocinio de Yamilka:
              <br />
              <a
                href={COMPANY_INFO.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#007A3D] underline block mt-2 break-all"
              >
                {COMPANY_INFO.officialStoreUrl}
              </a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3">
            <span className="w-8 h-8 rounded-full bg-[#007A3D] text-white flex items-center justify-center font-bold text-sm">
              2
            </span>
            <h4 className="font-bold text-black text-base">
              Selecciona tu País y Paquete
            </h4>
            <p className="text-[17px] text-black leading-relaxed">
              Elige <strong>Panamá 🇵🇦</strong>, completa tus datos personales y añade los productos de tu preferencia hasta completar los puntos de tu membresía (50, 100, 300 o 600 BV).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3">
            <span className="w-8 h-8 rounded-full bg-[#007A3D] text-white flex items-center justify-center font-bold text-sm">
              3
            </span>
            <h4 className="font-bold text-black text-base">
              Recibe con Servientrega o Retira
            </h4>
            <p className="text-[17px] text-black leading-relaxed">
              Paga tu pedido y retira en la sede de <strong>Plaza Royal Blue, San Francisco</strong>, o recíbelo por Servientrega en 24 a 48 horas en cualquier provincia de Panamá.
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200">
          <div className="text-xs text-black">
            ¿Deseas ayuda durante el registro? Escríbeme y te guiaré en pantalla.
          </div>

          <a
            href={COMPANY_INFO.phoneWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm flex items-center gap-2 hover:bg-[#20ba59] shadow-sm transition-colors"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Hablar con Yamilka Batista (+507 6778-8375)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
