import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  variant?: 'default' | 'reverse' | 'grid';
}

export function ProductCard({ product, onAddToCart, variant = 'default' }: ProductCardProps) {
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

  if (variant === 'grid') {
    return (
      <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 border-0">
        <CardContent className="p-4">
          <div className="aspect-square mb-3 overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <h3 className="font-semibold text-base mb-2 text-card-foreground line-clamp-2">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="mb-3">
            <span className="text-lg font-bold text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <div className="flex items-center justify-between mb-3">
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
          </div>
          
          <Button 
            className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium"
            onClick={handleAddToCart}
          >
            Adicionar
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'reverse') {
    return (
      <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 border-0">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">{product.name}</h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{product.description}</p>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-primary">
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
            
            <div className="w-24 h-24 overflow-hidden rounded-lg flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 border-0">
      <CardContent className="p-3">
        <div className="flex gap-3">
          <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm mb-1 text-card-foreground line-clamp-1">{product.name}</h3>
            <p className="text-muted-foreground text-xs mb-2 line-clamp-2">{product.description}</p>
            
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-primary">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="w-6 text-center font-medium text-xs">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6"
                  onClick={incrementQuantity}
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              
              <Button 
                className="bg-gradient-primary hover:opacity-90 text-white font-medium px-3 py-1 text-xs"
                onClick={handleAddToCart}
              >
                Adicionar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}