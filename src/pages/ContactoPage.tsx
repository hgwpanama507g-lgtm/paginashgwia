import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Send, 
  Truck, 
  ShieldCheck, 
  Sparkles,
  Building2,
  Navigation
} from 'lucide-react';

export const ContactoPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [province, setProvince] = useState('Panamá Centro');
  const [interest, setInterest] = useState('Comprar Productos HGW');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Yamilka Batista (*HGW Panamá*),\nMi nombre es *${name}*.\nTeléfono: ${phone}\nProvincia/Ubicación: ${province}\nInterés: *${interest}*\n\nMensaje:\n${message || 'Deseo más información sobre los productos y envíos por Servientrega.'}`;
    const url = `https://wa.me/${COMPANY_INFO.phoneWhatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#007A3D] text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5" />
          <span>Sede Oficial y Contacto en Panamá</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">
          Contacto y Ubicación HGW Panamá
        </h1>
        <p className="text-[17px] text-black leading-relaxed">
          Visítanos en nuestra sede física autorizada en San Francisco o comunícate con la distribuidora <strong>{COMPANY_INFO.distributorName}</strong> para compras al detalle, pedidos con Servientrega o afiliación al negocio de Ganancia Mutua 50-50.
        </p>
      </div>

      {/* Main Grid: Branch Details + Inquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Sede Panamá Official Details */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <span className="text-3xl">🇵🇦</span>
              <div>
                <span className="text-xs font-bold text-[#007A3D] uppercase tracking-wide">
                  Sede Física Exclusiva
                </span>
                <h2 className="text-2xl font-extrabold text-black">
                  PANAMÁ (1 ubicación)
                </h2>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black">
                <MapPin className="w-4 h-4 text-[#007A3D]" />
                <span>Dirección Completa</span>
              </div>
              <p className="text-[17px] text-black leading-relaxed pl-6">
                <strong>{COMPANY_INFO.branch.address}</strong>
                <br />
                {COMPANY_INFO.branch.province}, {COMPANY_INFO.branch.corregimiento}
              </p>
            </div>

            {/* Schedule */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black">
                <Clock className="w-4 h-4 text-[#007A3D]" />
                <span>Horarios de Atención</span>
              </div>
              <div className="pl-6 space-y-0.5">
                <p className="text-[17px] text-black leading-relaxed">
                  • <strong>{COMPANY_INFO.branch.scheduleWeekdays}</strong>
                </p>
                <p className="text-[17px] text-black leading-relaxed">
                  • <strong>{COMPANY_INFO.branch.scheduleSaturday}</strong>
                </p>
                <p className="text-[17px] text-black leading-relaxed">
                  • <strong>{COMPANY_INFO.branch.scheduleSunday}</strong>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black">
                <Phone className="w-4 h-4 text-[#007A3D]" />
                <span>Teléfono Sede Física</span>
              </div>
              <p className="text-[17px] text-black leading-relaxed pl-6">
                Teléfono:{' '}
                <a
                  href={`tel:${COMPANY_INFO.branch.phoneLandline}`}
                  className="font-bold underline text-black hover:text-[#007A3D]"
                >
                  {COMPANY_INFO.branch.phoneLandlineFormatted}
                </a>
              </p>
            </div>

            {/* Servientrega badge */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
              <div className="flex items-center gap-2 font-bold text-black text-sm">
                <Truck className="w-4 h-4 text-[#007A3D]" />
                <span>Envíos por Servientrega</span>
              </div>
              <p className="text-[17px] text-black leading-relaxed">
                <strong>Única sede con envíos a todo Panamá por Servientrega.</strong> Despachos diarios con código de rastreo a cualquier provincia o comarca.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.branch.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl border border-gray-300 hover:border-[#007A3D] text-black hover:text-[#007A3D] font-bold text-xs flex items-center justify-center gap-2 transition-colors bg-white shadow-2xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Ver ubicación en Google Maps (Plaza Royal Blue)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Distributor Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-3xl border border-emerald-200 p-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#007A3D]">
              Distribuidora Independiente
            </span>
            <h3 className="text-2xl font-extrabold text-black">
              {COMPANY_INFO.distributorName}
            </h3>
            <p className="text-[17px] text-black leading-relaxed">
              Contacto para consultas de compras o afiliaciones al negocio en Panamá:
            </p>

            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <a
                  href={COMPANY_INFO.phoneWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-black hover:text-[#007A3D] underline"
                >
                  {COMPANY_INFO.phoneWhatsappFormatted}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-emerald-200/60">
              <a
                href={COMPANY_INFO.officialStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#007A3D] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-800 transition-colors shadow-xs"
              >
                <span>Tienda Online HGW Oficial (Yamilka507)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-black">
                Envíanos tu Consulta
              </h3>
              <p className="text-[17px] text-black leading-relaxed">
                Completa tus datos para contactarte directamente por WhatsApp o llamada con la información que necesitas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. María Pérez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black text-sm focus:outline-none focus:border-[#007A3D] shadow-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+507 6000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black text-sm focus:outline-none focus:border-[#007A3D] shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                    Provincia / Ciudad
                  </label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black text-sm focus:outline-none focus:border-[#007A3D] shadow-xs cursor-pointer"
                  >
                    <option value="Panamá Centro (San Francisco / Vía Porras)">Panamá Centro</option>
                    <option value="Panamá Oeste (La Chorrera, Arraiján)">Panamá Oeste</option>
                    <option value="Colón">Colón</option>
                    <option value="Chiriquí (David, Boquete)">Chiriquí</option>
                    <option value="Coclé (Penonomé, Aguadulce)">Coclé</option>
                    <option value="Veraguas (Santiago)">Veraguas</option>
                    <option value="Herrera / Los Santos">Herrera / Los Santos</option>
                    <option value="Bocas del Toro / Darién">Otras Provincias</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                  Motivo de Consulta
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black text-sm focus:outline-none focus:border-[#007A3D] shadow-xs cursor-pointer"
                >
                  <option value="Comprar Productos HGW">Comprar Productos HGW (al detal)</option>
                  <option value="Afiliación y Membresía Ganancia Mutua 50-50">Afiliación y Membresía (Ganancia Mutua 50-50)</option>
                  <option value="Cotización para Envíos por Servientrega">Cotización de Envío por Servientrega</option>
                  <option value="Consulta sobre Almohada y Accesorios de Turmalina">Consulta sobre Almohada y Turmalina</option>
                  <option value="Consulta sobre Cafés y Nutrición con Arándanos">Consulta sobre Cafés y Nutrición</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                  Mensaje o Productos que te interesan
                </label>
                <textarea
                  rows={4}
                  placeholder="Escribe aquí los productos que deseas adquirir o cualquier consulta sobre el negocio..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black text-sm focus:outline-none focus:border-[#007A3D] shadow-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#007A3D] hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta a WhatsApp de Yamilka Batista</span>
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-100 text-[#007A3D] text-xs font-bold text-center">
                  ¡Mensaje preparado! Te hemos redirigido a WhatsApp para continuar la conversación con Yamilka.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
