import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-chocolate-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-caramel">Truffle & Twine</h3>
            <p className="text-primary-foreground/80 mb-4">
              Crafting India's finest chocolates with premium ingredients and traditional techniques.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-caramel transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-caramel transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-caramel transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-caramel transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              
              <li>truffleandtwine@gmail.com</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Truffle & Twine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
