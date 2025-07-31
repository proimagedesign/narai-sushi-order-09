import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/products';

interface CategorySidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

export function CategorySidebar({ selectedCategory, onCategorySelect }: CategorySidebarProps) {
  const menuItems = [
    { id: 'all', name: 'Todos', icon: '🍽️' },
    ...categories
  ];

  return (
    <Card className="sticky top-6 border-0 shadow-card">
      <CardContent className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id || 'promocoes'}
              onClick={() => onCategorySelect(item.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}