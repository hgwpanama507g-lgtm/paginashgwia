import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';
import { COMPANY_INFO } from '../data/company';

export interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
  bvPoints?: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: { id: string; name: string; slug: string; price: number; image?: string; category?: string; bvPoints?: number }, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
  totalBv: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  generateWhatsAppOrderUrl: (customerName?: string, customerCity?: string, isServientrega?: boolean) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'hgw_panama_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage error fallback
    }
  }, [items]);

  const addItem = (product: { id: string; name: string; slug: string; price: number; image?: string; category?: string; bvPoints?: number }, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        quantity,
        image: product.image,
        category: product.category,
        bvPoints: product.bvPoints || 0
      }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalBv = items.reduce((acc, item) => acc + (item.bvPoints || 0) * item.quantity, 0);

  const generateWhatsAppOrderUrl = (customerName = '', customerCity = '', isServientrega = true) => {
    let message = `Hola Yamilka Batista (*HGW Panamá*),\n`;
    message += `Deseo realizar el siguiente pedido / cotización:\n\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n*Total a pagar:* $${totalPrice.toFixed(2)} USD`;
    message += `\n*Puntos BV estimados:* ${totalBv.toFixed(1)} BV\n`;

    if (customerName) message += `\n*Nombre del Cliente:* ${customerName}`;
    if (customerCity) message += `\n*Ciudad / Provincia:* ${customerCity}`;
    message += `\n*Envío:* ${isServientrega ? 'Envío por Servientrega a domicilio / sucursal' : 'Retiro en Plaza Royal Blue, San Francisco'}`;
    message += `\n\n¿Me podría confirmar disponibilidad y método de pago (Yappy, ACH, Tarjeta)? ¡Gracias!`;

    return `https://wa.me/${COMPANY_INFO.phoneWhatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        totalPrice,
        totalBv,
        isCartOpen,
        setIsCartOpen,
        generateWhatsAppOrderUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
