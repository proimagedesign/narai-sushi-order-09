import { Button } from '@/components/ui/button';
import { Category } from '@/types/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        className={`whitespace-nowrap ${
          selectedCategory === 'all' 
            ? 'bg-gradient-primary text-white' 
            : 'border-border hover:bg-muted'
        }`}
        onClick={() => onCategoryChange('all')}
      >
        🍽️ Todos
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? 'default' : 'outline'}
          className={`whitespace-nowrap ${
            selectedCategory === category.id 
              ? 'bg-gradient-primary text-white' 
              : 'border-border hover:bg-muted'
          }`}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.icon} {category.name}
        </Button>
      ))}
    </div>
  );
}