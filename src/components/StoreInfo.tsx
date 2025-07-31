import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock, MapPin, Phone, Search } from 'lucide-react';
interface StoreInfoProps {
  onSearchChange?: (search: string) => void;
}

export function StoreInfo({ onSearchChange }: StoreInfoProps) {
  return <Card className="mb-6 border-0 shadow-card">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
            <img 
              src="/lovable-uploads/a0ac62ae-a4bc-4466-8a3a-7d97be6d9c4b.png" 
              alt="Narai Sushi Box Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">

            <div className="bg-muted/50 rounded-lg px-3 py-2 mb-4">
              <p className="text-base font-bold text-foreground">Narai Sushi Box</p>
              <p className="text-sm font-medium text-foreground">O melhor Sushi Box de Praia Grande</p>
            </div>


            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium">Entrega:</span>
                <span className="font-bold">60 min</span>
                <span className="font-medium text-sm text-muted-foreground">(Consultar taxa de entrega)</span>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <span className="font-medium">Endereço:</span>
                  <span className="ml-1">Av Presidente Castelo Branco em frente ao número 12.500 Vila Caiçara - Praia Grande</span>
                </div>
              </div>
            </div>

            {/* Campo de Busca */}
            {onSearchChange && (
              <div className="mt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar produtos..."
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="pl-10 h-10"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>;
}