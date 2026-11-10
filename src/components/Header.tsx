import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { Link, useRouter } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Truck, 
  MessageCircle, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const Header: React.FC = () => {
  const { path } = useRouter();
  const { totalCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Productos', to: '/productos' },
    { label: 'Combos HGW', to: '/combos' },
    { label: 'Plan Afiliación', to: '/afiliacion' },
    { label: 'Videos', to: '/videos' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contacto & Sede', to: '/contacto' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
      {/* Top Notification Bar */}
      <div className="bg-[#007A3D] text-white text-xs sm:text-sm py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex items-center gap-1.5 bg-emerald-800/80 px-2 py-0.5 rounded text-emerald-100 text-xs">
              <Truck className="w-3.5 h-3.5" />
              Servientrega
            </span>
            <span className="text-white text-xs sm:text-sm">
              🇵🇦 Envíos a todo Panamá desde Sede San Francisco
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${COMPANY_INFO.branch.phoneLandline}`}
              className="hidden md:flex items-center gap-1 text-white hover:text-emerald-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Sede: {COMPANY_INFO.branch.phoneLandlineFormatted}</span>
            </a>
            <a
              href={COMPANY_INFO.phoneWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-emerald-100 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
              <span>WhatsApp: {COMPANY_INFO.phoneWhatsappFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 py-2">
            <img
              src={COMPANY_INFO.logoUrl}
              alt="HGW Health Green World"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="hidden sm:block border-l border-gray-300 pl-3">
              <span className="block text-xs font-bold tracking-wider text-[#007A3D] uppercase">
                Panamá Oficial
              </span>
              <span className="block text-[11px] text-black font-medium leading-tight">
                Distribuidora Yamilka Batista
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
            {navLinks.map(link => {
              const isActive = link.to === '/' ? path === '/' : path.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-[#007A3D] font-bold shadow-xs'
                      : 'text-black hover:bg-gray-100 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Official Online Store External CTA */}
            <a
              href={COMPANY_INFO.officialStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[#007A3D] hover:bg-[#007A3D] hover:text-white transition-all text-xs sm:text-sm font-bold shadow-xs group"
              title="Ir a la tienda oficial de Health Green World de Yamilka Batista"
            >
              <span>Tienda Oficial HGW</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl border border-gray-200 hover:border-[#007A3D] bg-white text-black hover:text-[#007A3D] transition-all cursor-pointer shadow-xs"
              aria-label="Abrir Carrito y Cotización"
            >
              <ShoppingBag className="w-5 h-5 text-black" />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#007A3D] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-scale-in">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl border border-gray-200 text-black hover:bg-gray-100 cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fade-in">
          <div className="p-3 bg-emerald-50/70 rounded-xl mb-3 border border-emerald-100">
            <p className="text-xs font-bold text-[#007A3D] uppercase">Sede Oficial Panamá</p>
            <p className="text-xs text-black font-medium mt-0.5">
              Avenida Porras, Plaza Royal Blue, San Francisco
            </p>
            <p className="text-xs text-black font-semibold mt-1">
              Distribuidora: Yamilka Batista ({COMPANY_INFO.phoneWhatsappFormatted})
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map(link => {
              const isActive = link.to === '/' ? path === '/' : path.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold ${
                    isActive
                      ? 'bg-emerald-100 text-[#007A3D] font-bold'
                      : 'text-black hover:bg-gray-100'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
            <a
              href={COMPANY_INFO.officialStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#007A3D] text-white font-bold text-sm shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Tienda Oficial HGW (Usuario: Yamilka507)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={COMPANY_INFO.phoneWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-emerald-600 text-[#007A3D] font-semibold text-sm hover:bg-emerald-50"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar a WhatsApp (+507 6778-8375)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
