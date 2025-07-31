import { useState } from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CartItem } from '@/types/types';

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: (customerData: any) => void;
}

export function Cart({ items, isOpen, onClose, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: '',
    deliveryType: ''
  });

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleInputChange = (field: string, value: string) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckout = () => {
    if (!customerData.name || !customerData.phone || !customerData.paymentMethod || !customerData.deliveryType) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (customerData.deliveryType === 'entrega' && !customerData.address) {
      alert('Por favor, informe seu endereço para entrega.');
      return;
    }

    onCheckout(customerData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="w-full max-w-md bg-background h-full overflow-y-auto">
        <Card className="h-full rounded-none border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Carrinho ({items.length})
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {items.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Seu carrinho está vazio
              </p>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.product.name}</h4>
                        <p className="text-primary font-semibold">
                          R$ {item.product.price.toFixed(2).replace('.', ',')}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-destructive"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-xl font-bold text-primary">
                      R$ {total.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        value={customerData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        value={customerData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div>
                      <Label htmlFor="delivery">Entrega/Retirada *</Label>
                      <Select onValueChange={(value) => handleInputChange('deliveryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entrega">Entrega</SelectItem>
                          <SelectItem value="retirada">Retirada no balcão</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {customerData.deliveryType === 'entrega' && (
                      <div>
                        <Label htmlFor="address">Endereço *</Label>
                        <Input
                          id="address"
                          value={customerData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="Rua, número, bairro"
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="payment">Forma de Pagamento *</Label>
                      <Select onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dinheiro">Dinheiro</SelectItem>
                          <SelectItem value="cartao-debito">Cartão de Débito</SelectItem>
                          <SelectItem value="cartao-credito">Cartão de Crédito</SelectItem>
                          <SelectItem value="pix">PIX</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium"
                      onClick={handleCheckout}
                    >
                      Finalizar Pedido via WhatsApp
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}