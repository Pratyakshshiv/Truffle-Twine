import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import classicHamper from '@/assets/classic-hamper.jpg';
import premiumHamper from '@/assets/premium-hamper.jpg';
import luxeHamper from '@/assets/luxe-hamper.jpg';
import diwaliiHero from '@/assets/diwali-hero.jpg';

interface DiwaliHamper {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  badge?: string;
}

const hampers: DiwaliHamper[] = [
  {
    id: 'classic-joy-hamper',
    name: 'Classic Joy Hamper',
    description: 'Indian Meethai Flavour Chocolate with handmade chocolates and festive diyas. Ideal for small gatherings, family, friends, and colleagues.',
    price: 399,
    features: ['Handmade chocolates', 'Festive diyas', 'Indian Meethai flavours', 'Perfect for small gatherings'],
    image: classicHamper,
  },
  {
    id: 'premium-delight-hamper',
    name: 'Premium Delight Hamper',
    description: 'An ideal choice for family celebrations and festive gifting with premium chocolate selection.',
    price: 599,
    features: ['Premium chocolates', 'Beautiful festive packaging', 'Family celebration special', 'Elegant gift presentation'],
    image: premiumHamper,
    badge: 'POPULAR',
  },
  {
    id: 'luxe-elegance-hamper',
    name: 'Luxe Elegance Hamper',
    description: 'Artisanal gourmet chocolates with luxury scented candle and premium keepsake hamper box. Designed to impress and create lasting memories.',
    price: 899,
    features: ['Artisanal gourmet chocolates', 'Luxury scented candle', 'Premium keepsake hamper box', 'Creates lasting memories'],
    image: luxeHamper,
  },
];

export const FestiveCollection: React.FC = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (hamper: DiwaliHamper) => {
    addItem({
      id: hamper.id,
      name: hamper.name,
      description: hamper.description,
      price: hamper.price,
      image: hamper.image,
    });
    
    toast({
      title: "Added to Cart",
      description: `${hamper.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-background to-amber-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🪔 Festive Diwali Collection 2025 🪔
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrate the Festival of Lights with thoughtfully curated hampers. Each box is designed to bring smiles, sweetness, and light to your loved ones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hampers.map((hamper) => (
            <Card key={hamper.id} className="overflow-hidden bg-gradient-to-b from-card to-orange-50/20 border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              {hamper.badge && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {hamper.badge}
                </div>
              )}
              
              <div className="aspect-video">
                <img 
                  src={hamper.image}
                  alt={`${hamper.name} - Premium Diwali chocolate hamper`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {hamper.name}
                </CardTitle>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-orange-600">₹{hamper.price}</span>
                  <span className="text-sm text-muted-foreground">onwards</span>
                </div>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {hamper.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">What's included:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {hamper.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button 
                  onClick={() => handleAddToCart(hamper)}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium"
                >
                  Add to Cart - ₹{hamper.price}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Custom Hampers Available</h3>
            <p className="text-muted-foreground mb-4">
              Want something special? We also offer fully customizable hampers with your choice of chocolates, packaging styles, and personal touches.
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>🎨 Festive Rangoli Print Boxes</div>
              <div>✨ Minimal Marble & Gold Finish</div>
              <div>🌿 Eco-Friendly Jute & Craft Boxes</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            🎁 <span className="font-semibold">Special Festive Pricing</span> - Limited time offer during Diwali season
          </p>
        </div>
      </div>
    </section>
  );
};