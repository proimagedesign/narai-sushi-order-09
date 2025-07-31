import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

interface FloatingCartButtonProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function FloatingCartButton({ cartItemsCount, onCartClick }: FloatingCartButtonProps) {
  const [animate, setAnimate] = useState(false);
  const [prevCount, setPrevCount] = useState(cartItemsCount);

  useEffect(() => {
    if (cartItemsCount > prevCount) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(timer);
    }
    setPrevCount(cartItemsCount);
  }, [cartItemsCount, prevCount]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onCartClick}
        className={`bg-gradient-primary hover:shadow-xl transition-all duration-300 group rounded-full w-16 h-16 shadow-elegant relative overflow-hidden ${
          animate ? 'animate-scale-bounce' : ''
        }`}
        size="icon"
      >
        {/* Mascote japonês de fundo */}
        <div className="absolute inset-0 text-4xl flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
          🍱
        </div>
        
        {/* Ícone do carrinho */}
        <ShoppingCart className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200 relative z-10" />
        
        {/* Badge de contagem */}
        {cartItemsCount > 0 && (
          <Badge className={`absolute -top-2 -right-2 bg-sushi-gold text-sushi-dark min-w-[22px] h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            animate ? 'animate-pulse-cart' : 'animate-pulse'
          }`}>
            {cartItemsCount}
          </Badge>
        )}
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 bg-card border border-border text-card-foreground text-xs rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
        Ver carrinho ({cartItemsCount} {cartItemsCount === 1 ? 'item' : 'itens'})
      </div>
    </div>
  );
}