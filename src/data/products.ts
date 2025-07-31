import { Product, Category } from '@/types/types';

export const categories: Category[] = [
  { id: 'sushi', name: 'Sushi', icon: '🍣' },
  { id: 'sashimi', name: 'Sashimi', icon: '🍤' },
  { id: 'rolls', name: 'Rolls', icon: '🥢' },
  { id: 'temaki', name: 'Temaki', icon: '🌯' },
  { id: 'combos', name: 'Combos', icon: '🍱' },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
];

export const products: Product[] = [
  // Sushi & Niguiri
  {
    id: '1',
    name: 'Temaki Niguiri e Sashimi',
    description: 'Combinação de temaki, niguiri e sashimi',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop',
    category: 'sushi'
  },

  // Sashimi & Carpaccio
  {
    id: '2',
    name: 'Carpaccio de Peixe Branco',
    description: 'Fatias finas de peixe branco com molho especial',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=300&h=200&fit=crop',
    category: 'sashimi'
  },
  {
    id: '3',
    name: 'Carpaccio de Salmão',
    description: 'Fatias finas de salmão fresco com molho especial',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=300&h=200&fit=crop',
    category: 'sashimi'
  },
  {
    id: '4',
    name: 'Sashimi',
    description: 'Seleção de sashimis frescos variados',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop',
    category: 'sashimi'
  },

  // Rolls & Hot Rolls
  {
    id: '5',
    name: 'Hot Roll Filadélfia Tradicional',
    description: 'Hot roll empanado com salmão e cream cheese',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1606899420776-e3f2bb30a3cd?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '6',
    name: 'Hot Roll Filadélfia de Camarão',
    description: 'Hot roll empanado com camarão e cream cheese',
    price: 30.00,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '7',
    name: 'Hot Roll Filadélfia e Temaki Hot',
    description: 'Combinação de hot roll filadélfia e temaki hot',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '8',
    name: 'Hot e Shimeji',
    description: 'Hot roll com cogumelo shimeji refogado',
    price: 26.00,
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '9',
    name: 'Hot',
    description: 'Hot roll tradicional empanado',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '10',
    name: 'Big Hot de Confete',
    description: 'Hot roll grande com recheio especial colorido',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '11',
    name: 'Uramaki Romeu e Julieta',
    description: 'Uramaki doce com goiabada e cream cheese',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '12',
    name: 'Uramaki Filadélfia e Joy',
    description: 'Uramaki filadélfia com toque especial joy',
    price: 26.00,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300&h=200&fit=crop',
    category: 'rolls'
  },

  // Temaki
  {
    id: '13',
    name: 'Temaki Filadélfia',
    description: 'Cone de alga com salmão e cream cheese',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1607301405390-d831c242cf17?w=300&h=200&fit=crop',
    category: 'temaki'
  },
  {
    id: '14',
    name: 'Temaki no Copo',
    description: 'Temaki servido em copo descartável',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=300&h=200&fit=crop',
    category: 'temaki'
  },
  {
    id: '15',
    name: 'Temaki da Felicidade',
    description: 'Temaki especial com ingredientes que trazem alegria',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1607301405390-d831c242cf17?w=300&h=200&fit=crop',
    category: 'temaki'
  },
  {
    id: '16',
    name: 'Temaki Vegano',
    description: 'Temaki com ingredientes 100% vegetais',
    price: 11.00,
    image: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=300&h=200&fit=crop',
    category: 'temaki'
  },

  // Combos & Especiais
  {
    id: '17',
    name: 'Tepan',
    description: 'Combinação especial estilo tepan',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop',
    category: 'combos'
  },
  {
    id: '18',
    name: 'Especial de Maracujá Joy e Sashimi',
    description: 'Combinação especial com sabor de maracujá e sashimi',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop',
    category: 'combos'
  },
  {
    id: '19',
    name: 'Festival em Casa',
    description: 'Combo completo para uma festa em casa',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1563612142-6ee5c19b8fab?w=300&h=200&fit=crop',
    category: 'combos'
  },
  {
    id: '20',
    name: 'Joy Macaricado',
    description: 'Especial joy com toque macaricado',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop',
    category: 'combos'
  },
  {
    id: '21',
    name: 'Joy de Goiabada',
    description: 'Doce especial joy com goiabada',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1563612142-6ee5c19b8fab?w=300&h=200&fit=crop',
    category: 'combos'
  },

  // Bebidas
  {
    id: '22',
    name: 'Coca Cola',
    description: 'Refrigerante Coca Cola 350ml gelado',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop',
    category: 'bebidas'
  },
  {
    id: '23',
    name: 'Guaraná Antártica',
    description: 'Refrigerante Guaraná Antártica 350ml gelado',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop',
    category: 'bebidas'
  },
  {
    id: '24',
    name: 'Água Mineral',
    description: 'Água mineral 500ml gelada',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=300&h=200&fit=crop',
    category: 'bebidas'
  },
  {
    id: '25',
    name: 'Sobremesas',
    description: 'Seleção especial de sobremesas japonesas',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
    category: 'bebidas'
  }
];