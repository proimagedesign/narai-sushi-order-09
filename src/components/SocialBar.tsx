import { Button } from '@/components/ui/button';
import { MessageCircle, Facebook, Instagram } from 'lucide-react';

export function SocialBar() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5513997417547';
    const message = encodeURIComponent('Olá! Gostaria de fazer um pedido no Pede no Link 🍣');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/naraisushibox', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/naraisushibox', '_blank');
  };

  return (
    <div className="bg-gradient-primary border-t border-white/20 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-white text-xs font-medium">
            Nossas Redes Sociais
          </span>
          
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="bg-green-500/90 hover:bg-green-500 text-white h-8 w-8 rounded-full p-0 shadow-md transition-all duration-200 hover:scale-105"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white h-8 w-8 rounded-full p-0 shadow-md transition-all duration-200 hover:scale-105"
              onClick={handleInstagramClick}
            >
              <Instagram className="w-4 h-4" />
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              className="bg-blue-600/90 hover:bg-blue-600 text-white h-8 w-8 rounded-full p-0 shadow-md transition-all duration-200 hover:scale-105"
              onClick={handleFacebookClick}
            >
              <Facebook className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}