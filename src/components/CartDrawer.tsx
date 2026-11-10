import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { COMPANY_INFO } from '../data/company';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  ExternalLink, 
  Truck, 
  MapPin, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    totalCount, 
    totalPrice, 
    totalBv, 
    isCartOpen, 
    setIsCartOpen,
    generateWhatsAppOrderUrl 
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [isServientrega, setIsServientrega] = useState(true);

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    const url = generateWhatsAppOrderUrl(customerName, customerCity, isServientrega);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between bg-emerald-50/60">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-[#007A3D]" />
              <h2 className="text-xl font-bold text-black">Cotización de Pedido</h2>
              <span className="bg-[#007A3D] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                {totalCount}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery notice */}
          <div className="bg-emerald-800 text-white px-4 py-2 text-xs flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <Truck className="w-4 h-4 text-emerald-300" />
              Envíos a todo Panamá por Servientrega
            </span>
            <span className="font-bold text-emerald-200">24-48 hrs</span>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-black">Tu lista de pedido está vacía</h3>
                <p className="text-[17px] text-black">
                  Agrega productos naturales de arándano, turmalina o cuidado personal para cotizar en segundos.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#007A3D] text-white font-bold text-sm hover:bg-emerald-800 transition-colors"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              items.map(item => (
                <div 
                  key={item.id} 
                  className="flex gap-3 p-3 bg-gray-50/80 rounded-xl border border-gray-200 hover:border-emerald-200 transition-colors"
                >
                  <div className="w-16 h-16 rounded-lg bg-emerald-100/50 overflow-hidden shrink-0 flex items-center justify-center border border-gray-200">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to placeholder icon
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }} 
                      />
                    ) : (
                      <Sparkles className="w-6 h-6 text-[#007A3D]" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-black text-sm line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-700 mt-0.5">
                      ${item.price.toFixed(2)} USD c/u
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-black hover:bg-gray-100 cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-bold text-black min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-black hover:bg-gray-100 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-bold text-black text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-rose-600 p-1 cursor-pointer transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Actions */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50/50 space-y-4">
              {/* Optional customer info for fast prefill */}
              <div className="space-y-2 pt-1">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:border-[#007A3D]"
                  />
                  <input
                    type="text"
                    placeholder="Ciudad / Provincia"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:border-[#007A3D]"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsServientrega(true)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 border transition-all ${
                      isServientrega
                        ? 'bg-emerald-100 border-[#007A3D] text-[#007A3D]'
                        : 'bg-white border-gray-300 text-black'
                    }`}
                  >
                    <Truck className="w-3.5 h-3.5" />
                    Envío Servientrega
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsServientrega(false)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 border transition-all ${
                      !isServientrega
                        ? 'bg-emerald-100 border-[#007A3D] text-[#007A3D]'
                        : 'bg-white border-gray-300 text-black'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Retiro Sede San Francisco
                  </button>
                </div>
              </div>

              {/* Totals */}
              <div className="border-t border-gray-200 pt-3 space-y-1">
                <div className="flex justify-between text-base font-bold text-black">
                  <span>Total estimado:</span>
                  <span className="text-lg text-[#007A3D] font-extrabold">${totalPrice.toFixed(2)} USD</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar Pedido a WhatsApp (+507 6778-8375)</span>
                </button>

                <a
                  href={COMPANY_INFO.officialStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-[#007A3D] text-[#007A3D] hover:bg-emerald-50 font-semibold flex items-center justify-center gap-1.5 text-xs transition-colors"
                >
                  <span>Comprar Directo en Tienda HGW Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs text-gray-500 hover:text-black py-1 cursor-pointer"
                >
                  Vaciar lista de pedido
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
