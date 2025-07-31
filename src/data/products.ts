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
  // Sushi
  {
    id: '1',
    name: 'Sushi de Salmão',
    description: 'Sushi tradicional com fatia de salmão fresco',
    price: 8.50,
    image: 'https://www.diadepeixe.com.br/extranet/thumbnail/crop/550x360/Receita/shutterstock_2105735288_1746448515362.jpg',
    category: 'sushi'
  },
  {
    id: '2',
    name: 'Sushi de Atum',
    description: 'Sushi com atum fresco de primeira qualidade',
    price: 9.00,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop',
    category: 'sushi'
  },
  {
    id: '3',
    name: 'Sushi de Camarão',
    description: 'Sushi com camarão cozido temperado',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&h=200&fit=crop',
    category: 'sushi'
  },

  // Sashimi
  {
    id: '4',
    name: 'Sashimi de Salmão',
    description: '5 fatias de salmão fresco sem arroz',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=300&h=200&fit=crop',
    category: 'sashimi'
  },
  {
    id: '5',
    name: 'Sashimi de Atum',
    description: '5 fatias de atum fresco sem arroz',
    price: 20.00,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop',
    category: 'sashimi'
  },

  // Rolls
  {
    id: '6',
    name: 'Philadelphia Roll',
    description: 'Salmão, cream cheese e pepino, 8 unidades',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '7',
    name: 'California Roll',
    description: 'Kani, abacate e pepino, 8 unidades',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '8',
    name: 'Skin Roll',
    description: 'Pele de salmão grelhada, pepino e cebolinha, 8 unidades',
    price: 20.00,
    image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?w=300&h=200&fit=crop',
    category: 'rolls'
  },

  // Temaki
  {
    id: '9',
    name: 'Temaki de Salmão',
    description: 'Cone de alga com salmão, arroz e vegetais',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1607301405390-d831c242cf17?w=300&h=200&fit=crop',
    category: 'temaki'
  },
  {
    id: '10',
    name: 'Temaki de Atum',
    description: 'Cone de alga com atum, arroz e vegetais',
    price: 13.00,
    image: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=300&h=200&fit=crop',
    category: 'temaki'
  },

  // Combos
  {
    id: '11',
    name: 'Combo Tradicional',
    description: '10 sushis variados + 1 temaki + 6 sashimis',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop',
    category: 'combos'
  },
  {
    id: '12',
    name: 'Combo Família',
    description: '20 sushis + 2 temakis + 1 roll + 10 sashimis',
    price: 120.00,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop',
    category: 'combos'
  },

   // Bebidas
  {
    id: '13',
    name: 'Sake Tradicional',
    description: 'Sake japonês premium aquecido ou gelado',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
    category: 'bebidas'
  },
  {
    id: '14',
    name: 'Refrigerante',
    description: 'Coca-Cola, Guaraná ou Sprite 350ml',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop',
    category: 'bebidas'
  },
  {
    id: '15',
    name: 'Água com Gás',
    description: 'Água mineral com gás 500ml',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=300&h=200&fit=crop',
    category: 'bebidas'
  },

  // Mais Sushi
  {
    id: '16',
    name: 'Sushi de Robalo',
    description: 'Sushi com fatia fresca de robalo',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=300&h=200&fit=crop',
    category: 'sushi'
  },
  {
    id: '17',
    name: 'Sushi de Polvo',
    description: 'Sushi com polvo cozido tradicional',
    price: 9.50,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop',
    category: 'sushi'
  },
  {
    id: '18',
    name: 'Sushi de Enguia',
    description: 'Sushi com enguia grelhada e molho especial',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&h=200&fit=crop',
    category: 'sushi'
  },
  {
    id: '19',
    name: 'Sushi de Linguado',
    description: 'Sushi com fatia de linguado fresco',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=300&h=200&fit=crop',
    category: 'sushi'
  },
  {
    id: '20',
    name: 'Sushi de Peixe Branco',
    description: 'Sushi tradicional com peixe branco',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop',
    category: 'sushi'
  },

  // Mais Sashimi
  {
    id: '21',
    name: 'Sashimi de Robalo',
    description: '5 fatias de robalo fresco sem arroz',
    price: 17.00,
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=300&h=200&fit=crop',
    category: 'sashimi'
  },
  {
    id: '22',
    name: 'Sashimi de Polvo',
    description: '5 fatias de polvo cozido sem arroz',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop',
    category: 'sashimi'
  },
  {
    id: '23',
    name: 'Sashimi Misto',
    description: '8 fatias variadas de peixes frescos',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=300&h=200&fit=crop',
    category: 'sashimi'
  },
  {
    id: '24',
    name: 'Sashimi de Enguia',
    description: '5 fatias de enguia grelhada sem arroz',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop',
    category: 'sashimi'
  },

  // Mais Rolls
  {
    id: '25',
    name: 'Dragon Roll',
    description: 'Camarão empanado, abacate e molho especial, 8 unidades',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '26',
    name: 'Rainbow Roll',
    description: 'Mix de peixes sobre roll califórnia, 8 unidades',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '27',
    name: 'Spicy Tuna Roll',
    description: 'Atum temperado com molho picante, 8 unidades',
    price: 26.00,
    image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '28',
    name: 'Alaska Roll',
    description: 'Salmão, abacate e cream cheese, 8 unidades',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1606899420776-e3f2bb30a3cd?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '29',
    name: 'Volcano Roll',
    description: 'Roll hot com molho especial queimado, 8 unidades',
    price: 30.00,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300&h=200&fit=crop',
    category: 'rolls'
  },

  // Mais Temaki
  {
    id: '30',
    name: 'Temaki de Camarão',
    description: 'Cone de alga com camarão, arroz e vegetais',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1607301405390-d831c242cf17?w=300&h=200&fit=crop',
    category: 'temaki'
  },
  {
    id: '31',
    name: 'Temaki de Kani',
    description: 'Cone de alga com kani, arroz e vegetais',
    price: 11.00,
    image: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=300&h=200&fit=crop',
    category: 'temaki'
  },
  {
    id: '32',
    name: 'Temaki de Skin',
    description: 'Cone com pele de salmão grelhada',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1607301405390-d831c242cf17?w=300&h=200&fit=crop',
    category: 'temaki'
  },
  {
    id: '33',
    name: 'Temaki de Polvo',
    description: 'Cone de alga com polvo temperado',
    price: 13.50,
    image: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=300&h=200&fit=crop',
    category: 'temaki'
  },

  // Mais Combos
  {
    id: '34',
    name: 'Combo Individual',
    description: '6 sushis + 1 temaki + 4 sashimis',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1563612142-6ee5c19b8fab?w=300&h=200&fit=crop',
    category: 'combos'
  },
  {
    id: '35',
    name: 'Combo Casal',
    description: '12 sushis + 2 temakis + 1 roll + 6 sashimis',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop',
    category: 'combos'
  },
  {
    id: '36',
    name: 'Combo Premium',
    description: '15 sushis + 3 temakis + 2 rolls + 12 sashimis',
    price: 150.00,
    image: 'https://images.unsplash.com/photo-1563612142-6ee5c19b8fab?w=300&h=200&fit=crop',
    category: 'combos'
  },
  {
    id: '37',
    name: 'Combo Executivo',
    description: '8 sushis + 1 temaki + 6 sashimis + bebida',
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop',
    category: 'combos'
  },

  // Mais Bebidas
  {
    id: '38',
    name: 'Chá Verde',
    description: 'Chá verde japonês tradicional',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
    category: 'bebidas'
  },
  {
    id: '39',
    name: 'Suco Natural',
    description: 'Suco de laranja, limão ou maracujá 400ml',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop',
    category: 'bebidas'
  },
  {
    id: '40',
    name: 'Cerveja Japonesa',
    description: 'Cerveja Asahi ou Kirin 330ml',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=300&h=200&fit=crop',
    category: 'bebidas'
  },

  // Novos itens para chegar a 50
  {
    id: '41',
    name: 'Niguiri de Salmão',
    description: 'Arroz modelado com fatia de salmão',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop',
    category: 'sushi'
  },
  {
    id: '42',
    name: 'Niguiri de Atum',
    description: 'Arroz modelado com fatia de atum',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop',
    category: 'sushi'
  },
  {
    id: '43',
    name: 'Hot Roll Salmão',
    description: 'Roll empanado e frito com salmão, 8 unidades',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1606899420776-e3f2bb30a3cd?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '44',
    name: 'Hot Roll Camarão',
    description: 'Roll empanado e frito com camarão, 8 unidades',
    price: 26.00,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300&h=200&fit=crop',
    category: 'rolls'
  },
  {
    id: '45',
    name: 'Temaki Hot',
    description: 'Temaki empanado e frito com recheio especial',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=200&fit=crop',
    category: 'temaki'
  },
  {
    id: '46',
    name: 'Carpaccio de Salmão',
    description: 'Fatias finas de salmão com molho especial',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=300&h=200&fit=crop',
    category: 'sashimi'
  },
  {
    id: '47',
    name: 'Sunomono',
    description: 'Salada de pepino com molho agridoce',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop',
    category: 'sashimi'
  },
  // Reduzido para 30 produtos
];