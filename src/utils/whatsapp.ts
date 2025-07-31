import { CartItem } from '@/types/types';

export function generateWhatsAppMessage(
  items: CartItem[],
  total: number,
  customerData: any
): string {
  const phoneNumber = '5513997417547'; // Número do WhatsApp
  
  let message = `🍣 *PEDE NO LINK* 🍣\n\n`;
  message += `👤 *Cliente:* ${customerData.name}\n`;
  message += `📱 *Telefone:* ${customerData.phone}\n`;
  
  if (customerData.deliveryType === 'entrega') {
    message += `📍 *Endereço:* ${customerData.address}\n`;
  }
  
  message += `🚚 *Tipo:* ${customerData.deliveryType === 'entrega' ? 'Entrega' : 'Retirada no balcão'}\n`;
  message += `💳 *Pagamento:* ${getPaymentMethodLabel(customerData.paymentMethod)}\n\n`;
  
  message += `📋 *PEDIDO:*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.product.name}\n`;
    message += `   Qtd: ${item.quantity}x | R$ ${item.product.price.toFixed(2).replace('.', ',')}\n`;
    message += `   Subtotal: R$ ${(item.product.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
  });
  
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
  message += `Obrigado por escolher o Pede no Link! 🙏`;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

function getPaymentMethodLabel(method: string): string {
  switch (method) {
    case 'dinheiro':
      return 'Dinheiro';
    case 'cartao-debito':
      return 'Cartão de Débito';
    case 'cartao-credito':
      return 'Cartão de Crédito';
    case 'pix':
      return 'PIX';
    default:
      return method;
  }
}