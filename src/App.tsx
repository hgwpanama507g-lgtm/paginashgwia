import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BlogPage } from './pages/BlogPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { VideosPage } from './pages/VideosPage';
import { AfiliacionPage } from './pages/AfiliacionPage';
import { CombosPage } from './pages/CombosPage';
import { ContactoPage } from './pages/ContactoPage';

const NotFound: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
    <h1 className="text-4xl font-extrabold text-black">404 - Página no encontrada</h1>
    <p className="text-[17px] text-black">Lo sentimos, la página que buscas no existe.</p>
    <a href="/" className="inline-block px-6 py-3 rounded-xl bg-[#007A3D] text-white font-bold">
      Volver al inicio
    </a>
  </div>
);

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/producto/:slug" element={<ProductDetailPage slug={""} />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<ArticleDetailPage slug={""} />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/combos" element={<CombosPage />} />
      <Route path="/afiliacion" element={<AfiliacionPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-[#FBFDF9] text-black">
          <Header />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
          <CartDrawer />
          <WhatsAppFloatingButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
