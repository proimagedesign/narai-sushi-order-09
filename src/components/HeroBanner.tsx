import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HeroBannerProps {
  onAddToCart: (product: any, quantity: number) => void;
}

export function HeroBanner({ onAddToCart }: HeroBannerProps) {
  const featuredProduct = {
    id: 'hero-1',
    name: 'Combinado Especial Do Dia + 2 mini temaki hot',
    description: 'Oferta especial: 10 sushis variados + 2 mini temakis hot + molho especial',
    price: 129.99,
    originalPrice: 129.99,
    image: '/src/assets/banner1.jpg',
    category: 'combos'
  };

  const handleAddToCart = () => {
    onAddToCart(featuredProduct, 1);
  };

  return (
    <div className="bg-gradient-primary p-6 rounded-lg mb-6">
      <Card className="overflow-hidden border-0 bg-white/95 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Produto em destaque */}
            <div className="flex-1 p-6">
              <h2 className="text-2xl font-bold text-sushi-dark mb-3">
                {featuredProduct.name}
              </h2>
              <p className="text-muted-foreground mb-4">
                {featuredProduct.description}
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-primary">
                  R$ {featuredProduct.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  R$ {featuredProduct.originalPrice.toFixed(2).replace('.', ',')}
                </span>
                <span className="bg-destructive text-white px-2 py-1 rounded text-xs font-medium">
                  -0.0%
                </span>
              </div>
              <Button 
                variant="sushi" 
                size="lg" 
                className="w-full md:w-auto px-8"
                onClick={handleAddToCart}
              >
                Eu quero
              </Button>
            </div>

            {/* Imagem */}
            <div className="w-full md:w-80 h-48 md:h-auto">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}