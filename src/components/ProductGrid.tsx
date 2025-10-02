import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

export const ProductGrid: React.FC = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addItem(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section id="products" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Artisanal Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each chocolate is carefully crafted with premium ingredients and traditional techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-warm transition-all duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    {product.size && (
                      <p className="text-sm text-muted-foreground mt-1">{product.size}</p>
                    )}
                  </div>
                  <span className="text-xl font-bold text-caramel">₹{product.price}</span>
                </div>
                {product.rating && (
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating!)
                            ? 'fill-yellow-400 text-yellow-400'
                            : i < product.rating!
                            ? 'fill-yellow-400/50 text-yellow-400'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {product.description}
                </CardDescription>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
