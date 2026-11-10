/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
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

const AppContent: React.FC = () => {
  const { path } = useRouter();

  const renderRoute = () => {
    // Clean trailing slashes
    const cleanPath = path === '/' ? '/' : path.replace(/\/+$/, '');

    // Product detail route: /producto/:slug or /productos/:slug
    if (cleanPath.startsWith('/producto/')) {
      const slug = cleanPath.replace('/producto/', '');
      return <ProductDetailPage slug={slug} />;
    }
    if (cleanPath.startsWith('/productos/') && cleanPath !== '/productos') {
      const slug = cleanPath.replace('/productos/', '');
      return <ProductDetailPage slug={slug} />;
    }

    // Blog article route: /blog/:slug
    if (cleanPath.startsWith('/blog/') && cleanPath !== '/blog') {
      const slug = cleanPath.replace('/blog/', '');
      return <ArticleDetailPage slug={slug} />;
    }

    // Exact routes
    switch (cleanPath) {
      case '/':
      case '':
        return <HomePage />;
      case '/productos':
        return <ProductsPage />;
      case '/blog':
        return <BlogPage />;
      case '/videos':
        return <VideosPage />;
      case '/afiliacion':
      case '/membresias':
      case '/plan-de-compensacion':
        return <AfiliacionPage />;
      case '/combos':
      case '/combos-hgw':
        return <CombosPage />;
      case '/contacto':
      case '/sede':
      case '/ubicacion':
        return <ContactoPage />;
      default:
        // Check if path matches an article slug directly
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFDF9] text-black">
      <Header />
      <main className="flex-1">
        {renderRoute()}
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </RouterProvider>
  );
}
