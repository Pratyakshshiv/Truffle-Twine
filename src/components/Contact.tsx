import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you. Reach out for any questions or custom orders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-chocolate-medium rounded-full flex items-center justify-center mx-auto">
              <Phone className="h-8 w-8 text-primary-foreground" />
            </div>
             <h3 className="text-xl font-semibold">WhatsApp Us</h3>
            <a 
              href="https://wa.me/916201326718"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <Phone className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-chocolate-medium rounded-full flex items-center justify-center mx-auto">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-muted-foreground">truffleandtwine@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
