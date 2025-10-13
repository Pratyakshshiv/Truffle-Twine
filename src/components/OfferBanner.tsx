import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export const OfferBanner: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const offers = [
    '🪔 Diwali Offer: 20% OFF on All Products! 🪔',
    '🎁 Buy for ₹999 and Get Additional 10% OFF! 🎁',
    '✨ Limited Time Festive Discounts ✨',
  ];

  return (
    <div className="bg-gradient-to-r from-caramel via-accent to-caramel text-accent-foreground py-3">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-7xl mx-auto"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {offers.map((offer, index) => (
            <CarouselItem key={index}>
              <div className="text-center font-semibold text-lg md:text-xl">
                {offer}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
