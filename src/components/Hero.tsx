import React from 'react';
import heroImage from '@/assets/hero-chocolate.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Premium chocolates on wooden table" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate-dark/70 to-chocolate-medium/50" />
      </div>
      
      <div className="container relative mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Truffle & Twine
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light">
            Crafting India's <span className="font-semibold text-caramel">FINEST</span> chocolates
          </p>
          <p className="text-lg text-primary-foreground/80 mb-12">
            Handcrafted Premium | Artisanal Flavors | Pure Indulgence
          </p>
          <a 
            href="#products"
            className="inline-block bg-caramel text-accent-foreground px-8 py-4 rounded-lg font-medium text-lg hover:bg-caramel/90 transition-all duration-300 shadow-glow"
          >
            Explore Our Collection
          </a>
        </div>
      </div>
    </section>
  );
};