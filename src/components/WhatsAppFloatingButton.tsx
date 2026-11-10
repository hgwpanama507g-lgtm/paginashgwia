import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Friendly banner tooltip */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white border border-emerald-200 p-3.5 rounded-2xl shadow-xl flex items-start gap-2.5 animate-bounce-subtle">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-[#007A3D] font-bold text-xs">
            YB
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-black">
              ¿Consultas de compras o afiliación?
            </p>
            <p className="text-xs text-black mt-0.5 leading-snug">
              Escríbeme directo a WhatsApp: <strong>{COMPANY_INFO.distributorName}</strong> ({COMPANY_INFO.phoneWhatsappFormatted})
            </p>
            <a
              href={COMPANY_INFO.phoneWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#007A3D] hover:underline inline-block mt-1"
            >
              Chatear ahora →
            </a>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-black p-0.5 cursor-pointer"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={COMPANY_INFO.phoneWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
        title="Contactar a Yamilka Batista en WhatsApp (+507 6778-8375)"
      >
        <MessageCircle className="w-7 h-7 text-white fill-current" />
        <span className="sr-only">Contactar a Yamilka Batista en WhatsApp</span>
      </a>
    </div>
  );
};
