import React from 'react';
import { SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';
    
    let message = "Hello! I'd like to order the following chocolates:\n\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name} x${item.quantity} = ₹${item.product.price * item.quantity}\n`;
    });
    
    message += `\nTotal: ₹${totalPrice}\n\nPlease confirm the order. Thank you!`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppCheckout = () => {
    const message = generateWhatsAppMessage();
    // Use proper international format: country code + number (without + sign)
    // Example: For India +91 9876543210, use: 919876543210
    const phoneNumber = "916201326718"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Use window.location.href instead of window.open to avoid popup blockers
    window.location.href = whatsappUrl;
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="h-full flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <SheetHeader>
        <SheetTitle>Your Cart ({items.length} items)</SheetTitle>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto py-6 space-y-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center space-x-4">
            <img 
              src={item.product.image} 
              alt={item.product.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h4 className="font-medium text-sm">{item.product.name}</h4>
              <p className="text-sm text-caramel font-medium">₹{item.product.price}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <p className="font-medium">₹{item.product.price * item.quantity}</p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => removeItem(item.product.id)}
                className="h-8 w-8 p-0 text-destructive hover:text-destructive"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-6 space-y-4">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total:</span>
          <span className="text-caramel">₹{totalPrice}</span>
        </div>
        
        <Button 
          onClick={handleWhatsAppCheckout}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          size="lg"
        >
          Order via WhatsApp
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          Quick response time • Order confirmation within minutes
        </p>
        
        <Separator />
        
        <Button 
          variant="outline" 
          onClick={clearCart}
          className="w-full"
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
};