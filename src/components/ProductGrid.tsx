import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types/types';

interface ProductGridProps {
  products: Product[];
  title: string;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductGrid({ products, title, onAddToCart }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
      </div>
    );
  }

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-foreground mb-6 capitalize">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            variant="reverse"
          />
        ))}
      </div>
    </section>
  );
}