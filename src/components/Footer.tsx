import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Link } from '../context/RouterContext';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Truck, 
  ShieldCheck, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20 text-black">
      {/* Servientrega & Benefits Highlights */}
      <div className="border-b border-gray-200 bg-emerald-50/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-xl shadow-xs border border-emerald-100 text-[#007A3D] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-black text-lg">Envíos por Servientrega</h3>
              <p className="text-[17px] text-black leading-relaxed mt-1">
                Única sede con envíos seguros y garantizados a todas las provincias de Panamá (24 a 48 horas).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-xl shadow-xs border border-emerald-100 text-[#007A3D] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-black text-lg">Productos 100% Originales HGW</h3>
              <p className="text-[17px] text-black leading-relaxed mt-1">
                Garantía Health Green World Group. Biotecnología natural, arándanos de alta pureza y turmalina activa.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-xl shadow-xs border border-emerald-100 text-[#007A3D] shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-black text-lg">Atención Personalizada</h3>
              <p className="text-[17px] text-black leading-relaxed mt-1">
                Asesoría continua de compras y afiliaciones directas con la distribuidora Yamilka Batista (+507 6778-8375).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand & Sede Info */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Health Green World Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-[17px] text-black leading-relaxed">
              Distribuidora autorizada en Panamá de <strong>Health Green World (HGW)</strong>. Transformamos vidas mediante la biotecnología del arándano, el poder terapéutico de la turmalina y un plan de compensación de Ganancia Mutua 50-50 que premia el esfuerzo compartido.
            </p>

            <div className="p-5 bg-gray-50 border border-gray-200 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🇵🇦</span>
                <h4 className="font-bold text-black text-base uppercase tracking-wide">
                  Sede Física Oficial Panamá
                </h4>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#007A3D] shrink-0 mt-0.5" />
                <p className="text-[17px] text-black leading-snug">
                  <strong>Dirección:</strong> {COMPANY_INFO.branch.address}, {COMPANY_INFO.branch.province}, {COMPANY_INFO.branch.corregimiento}
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-[#007A3D] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-[17px] text-black leading-snug">
                    <strong>Horarios:</strong> {COMPANY_INFO.branch.scheduleWeekdays}
                  </p>
                  <p className="text-[17px] text-black leading-snug">
                    {COMPANY_INFO.branch.scheduleSaturday}
                  </p>
                  <p className="text-[17px] text-black leading-snug">
                    {COMPANY_INFO.branch.scheduleSunday}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-5 h-5 text-[#007A3D] shrink-0" />
                <p className="text-[17px] text-black leading-snug">
                  <strong>Teléfono Sede:</strong>{' '}
                  <a href={`tel:${COMPANY_INFO.branch.phoneLandline}`} className="underline font-semibold hover:text-[#007A3D]">
                    {COMPANY_INFO.branch.phoneLandlineFormatted}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-bold text-black border-b border-gray-200 pb-2">
              Secciones del Sitio
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-[17px] text-black hover:text-[#007A3D] hover:underline block font-medium">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-[17px] text-black hover:text-[#007A3D] hover:underline block font-medium">
                  Catálogo de Productos
                </Link>
              </li>
              <li>
                <Link to="/combos" className="text-[17px] text-black hover:text-[#007A3D] hover:underline block font-medium">
                  Combos Especiales HGW
                </Link>
              </li>
              <li>
                <Link to="/afiliacion" className="text-[17px] text-black hover:text-[#007A3D] hover:underline block font-medium">
                  Plan de Afiliación (50-50)
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-[17px] text-black hover:text-[#007A3D] hover:underline block font-medium">
                  Videoteca & Capacitación
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[17px] text-black hover:text-[#007A3D] hover:underline block font-medium">
                  Blog de Bienestar
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-[17px] text-black hover:text-[#007A3D] hover:underline block font-medium">
                  Contacto & Ubicación
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto & Tienda Oficial HGW */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-lg font-bold text-black border-b border-gray-200 pb-2">
              Contacto Distribuidora
            </h3>

            <div className="space-y-3">
              <p className="text-[17px] text-black leading-relaxed">
                <strong>Contacto:</strong> {COMPANY_INFO.distributorName}
              </p>
              <p className="text-[17px] text-black leading-relaxed">
                <strong>Rol:</strong> {COMPANY_INFO.distributorRole}
              </p>
              <p className="text-[17px] text-black leading-relaxed">
                <strong>WhatsApp / Móvil:</strong>{' '}
                <a
                  href={COMPANY_INFO.phoneWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-[#007A3D] inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 inline" />
                  {COMPANY_INFO.phoneWhatsappFormatted}
                </a>
              </p>
              <p className="text-[17px] text-black leading-relaxed">
                (Contacto oficial para consultas de compras o afiliaciones)
              </p>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#007A3D] text-white font-bold rounded-xl shadow-sm hover:bg-emerald-800 transition-colors text-base"
              >
                <Sparkles className="w-5 h-5 text-emerald-200" />
                <span>Tienda Online HGW Oficial</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-xs text-black text-center mt-2">
                Usuario de patrocinio asignado: <strong>{COMPANY_INFO.officialStoreUser}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Legal notice and copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center space-y-2">
          <p className="text-sm text-black">
            © {new Date().getFullYear()} Health Green World (HGW) Panamá. Distribuidora Independiente: {COMPANY_INFO.distributorName}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-black max-w-4xl mx-auto leading-relaxed">
            Aviso Importante: Los productos comercializados por HGW son suplementos alimenticios, cosméticos y artículos de bienestar para el cuidado diario. No sustituyen tratamientos médicos ni pretenden diagnosticar, tratar, curar o prevenir ninguna enfermedad.
          </p>
        </div>
      </div>
    </footer>
  );
};
