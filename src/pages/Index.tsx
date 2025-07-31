import { useState } from 'react';
import { Header } from '@/components/Header';
import { Banner } from '@/components/Banner';
import { HeroBanner } from '@/components/HeroBanner';
import { StoreInfo } from '@/components/StoreInfo';
import { CategorySidebar } from '@/components/CategorySidebar';
import { ProductGrid } from '@/components/ProductGrid';
import { FloatingCartButton } from '@/components/WhatsAppButton';
import { SocialBar } from '@/components/SocialBar';
import { BottomNavBar } from '@/components/BottomNavBar';
import { Cart } from '@/components/Cart';
import { Footer } from '@/components/Footer';
import { products, categories } from '@/data/products';
import { CartItem, Product } from '@/types/types';
import { generateWhatsAppMessage } from '@/utils/whatsapp';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();


  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { id: Date.now().toString(), product, quantity }];
      }
    });

    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(prev => 
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = (customerData: any) => {
    const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const whatsappUrl = generateWhatsAppMessage(cartItems, total, customerData);
    
    window.open(whatsappUrl, '_blank');
    setCartItems([]);
    setIsCartOpen(false);
    
    toast({
      title: "Pedido enviado!",
      description: "Seu pedido foi enviado via WhatsApp.",
    });
  };

  const cartItemsCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Filtrar produtos por categoria e busca
  const getFilteredProducts = () => {
    let filtered = products;
    
    if (selectedCategory === 'all' || !selectedCategory) {
      filtered = products;
    } else {
      filtered = products.filter(product => product.category === selectedCategory);
    }

    // Aplicar filtro de busca
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();
  const categoryName = selectedCategory === 'all' || !selectedCategory
    ? 'Todos os Produtos'
    : categories.find(cat => cat.id === selectedCategory)?.name || selectedCategory;

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={cartItemsCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="container mx-auto px-4 py-6">
        {/* Banner com slides */}
        <Banner />
        
        {/* Store Info */}
        <StoreInfo onSearchChange={setSearchTerm} />
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar com categorias */}
          <aside className="lg:w-64 flex-shrink-0">
            <CategorySidebar 
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </aside>
          
          {/* Conteúdo principal com produtos */}
          <div className="flex-1">
            <ProductGrid
              products={filteredProducts}
              title={categoryName}
              onAddToCart={addToCart}
            />
          </div>
        </div>
      </main>

      {/* Floating Cart Button */}
      <FloatingCartButton cartItemsCount={cartItemsCount} onCartClick={() => setIsCartOpen(true)} />

      {/* Social Media Bar */}
      <SocialBar />

      {/* Bottom Navigation Bar */}
      <BottomNavBar 
        onSearchChange={setSearchTerm}
        onHomeClick={() => {
          setSelectedCategory(null);
          setSearchTerm('');
        }}
      />

      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />

      <Footer />
    </div>
  );
};

export default Index;
