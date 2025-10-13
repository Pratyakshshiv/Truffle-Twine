import React from 'react';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { OfferBanner } from '@/components/OfferBanner';
import { Hero } from '@/components/Hero';
import { FestiveCollection } from '@/components/FestiveCollection';
import { ProductGrid } from '@/components/ProductGrid';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <OfferBanner />
        <Hero />
        <FestiveCollection />
        <ProductGrid />
        <About />
        <Contact />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
