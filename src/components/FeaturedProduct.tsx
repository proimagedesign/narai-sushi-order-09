import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/types';

interface FeaturedProductProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function FeaturedProduct({ product, onAddToCart }: FeaturedProductProps) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-primary/5">
      <CardContent className="p-0">
        <div className="relative">
          <div className="h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="absolute top-2 left-2 bg-gradient-primary text-white px-2 py-1 rounded-full text-xs font-medium">
            Destaque
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-card-foreground">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={incrementQuantity}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            <Button 
              className="bg-gradient-primary hover:opacity-90 text-white font-medium px-4 py-2"
              onClick={handleAddToCart}
            >
              Adicionar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}