import { ShoppingCart, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTheme } from 'next-themes';
interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}
export function Header({
  cartItemsCount,
  onCartClick
}: HeaderProps) {
  const { theme, setTheme } = useTheme();
  return <header className="sticky top-0 z-50 bg-gradient-primary shadow-elegant">
      <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">PEDE NO LINK</h1>
              <p className="text-sm text-white/80">Pedido fácil direto para o Whatsapp</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              
              <Button variant="outline" size="icon" className="relative bg-white/10 border-white/20 text-white hover:bg-white/20" onClick={onCartClick}>
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && <Badge className="absolute -top-2 -right-2 bg-sushi-gold text-sushi-dark min-w-[20px] h-5 rounded-full flex items-center justify-center text-xs font-bold">
                    {cartItemsCount}
                  </Badge>}
              </Button>
            </div>
        </div>
      </div>
    </header>;
}