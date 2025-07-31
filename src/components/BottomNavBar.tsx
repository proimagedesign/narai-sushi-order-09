import { useState } from 'react';
import { Home, Search, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface BottomNavBarProps {
  onSearchChange: (search: string) => void;
  onHomeClick: () => void;
}

export function BottomNavBar({ onSearchChange, onHomeClick }: BottomNavBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange(value);
  };

  const faqItems = [
    {
      question: "Como faço meu pedido?",
      answer: "Você pode fazer seu pedido de duas formas: navegando pelos produtos no site e clicando em 'Adicionar ao Carrinho', ou entrando em contato diretamente via WhatsApp através do botão nas nossas redes sociais."
    },
    {
      question: "Qual o tempo de entrega?",
      answer: "O tempo de entrega é em média de 60 minutos, mas pode variar conforme sua localização e o movimento do dia. Entre em contato para confirmar o prazo para sua região específica."
    },
    {
      question: "Vocês fazem entrega? Qual o valor da taxa?",
      answer: "Sim! Fazemos entregas na região. A taxa de entrega varia conforme a localização. Entre em contato via WhatsApp para consultar se atendemos sua área e o valor da taxa de entrega."
    },
    {
      question: "Como funcionam as promoções?",
      answer: "Nossas promoções são atualizadas regularmente e aparecem na seção 'Promoções' do nosso menu. Siga nossas redes sociais (Instagram e Facebook) para ficar por dentro de todas as ofertas especiais e novidades!"
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos diversas formas de pagamento: dinheiro, cartão de débito, cartão de crédito e PIX. Entre em contato para mais detalhes sobre as opções disponíveis."
    },
    {
      question: "Posso fazer pedidos personalizados?",
      answer: "Sim! Trabalhamos com pedidos personalizados. Entre em contato via WhatsApp e informe suas preferências. Nossa equipe terá prazer em criar algo especial para você."
    },
    {
      question: "Os produtos são frescos?",
      answer: "Absolutamente! Todos os nossos produtos são preparados com ingredientes frescos e da melhor qualidade. Nosso sushi é feito na hora para garantir o melhor sabor e frescor."
    },
    {
      question: "Horário de funcionamento?",
      answer: "Funcionamos de terça a domingo das 18h às 23h. Não abrimos nas segundas-feiras. Recomendamos fazer pedidos com antecedência nos fins de semana."
    },
    {
      question: "Qual a localização da loja?",
      answer: "Estamos localizados em Praia Grande, SP. Entre em contato via WhatsApp para obter nosso endereço completo e informações sobre entrega na sua região."
    },
    {
      question: "Vocês têm opções vegetarianas?",
      answer: "Sim! Temos diversas opções vegetarianas em nosso cardápio, incluindo sushis com pepino, cenoura, abacate e outras combinações deliciosas sem proteína animal."
    },
    {
      question: "Como posso acompanhar meu pedido?",
      answer: "Após confirmar seu pedido via WhatsApp, nossa equipe enviará atualizações sobre o status da preparação e entrega. Você pode sempre entrar em contato conosco para verificar o andamento."
    },
    {
      question: "Qual a política de cancelamento?",
      answer: "Pedidos podem ser cancelados até 15 minutos após a confirmação. Após esse período, entre em contato conosco via WhatsApp para verificar a possibilidade de cancelamento."
    }
  ];

  return (
    <div className="bg-card border-t border-border py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-4">
        {/* Botão Início */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onHomeClick}
          className="flex items-center gap-2 text-foreground hover:text-primary"
        >
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Início</span>
        </Button>


        {/* Botão FAQ */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-foreground hover:text-primary"
            >
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">FAQ</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/a0ac62ae-a4bc-4466-8a3a-7d97be6d9c4b.png" 
                  alt="Narai Sushi Box Logo" 
                  className="w-6 h-6 object-contain"
                />
                Pede no Link - Dúvidas Frequentes
              </DialogTitle>
            </DialogHeader>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}