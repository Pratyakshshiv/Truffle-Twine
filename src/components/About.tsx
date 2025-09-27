import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <span className="font-semibold text-foreground">Truffle & Twine</span> is on a mission to craft India's <span className="font-semibold text-caramel">FINEST</span> chocolates. Our chocolates are handcrafted with honest ingredients & zero preservatives for guilt-free, feel-good indulgence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From classic dark chocolate to innovative flavor combinations like our signature Dates Chocolate with premium Medjool dates, each piece tells a story of craftsmanship and passion.
              </p>
            </div>
            <div className="bg-gradient-chocolate p-8 rounded-lg text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-left">
                <li>• Premium quality ingredients</li>
                <li>• Handcrafted in small batches</li>
                <li>• Zero preservatives</li>
                <li>• Innovative flavor combinations</li>
                <li>• Quick delivery & fresh products</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};