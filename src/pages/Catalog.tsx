import { useState } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import Icon from '@/components/ui/icon';

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="border-b bg-muted/30">
        <div className="container py-8">
          <h1 className="text-4xl font-bold mb-6">Каталог товаров</h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" size="lg" className="md:w-auto">
              <Icon name="SlidersHorizontal" size={20} className="mr-2" />
              Фильтры
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer px-4 py-2 text-sm"
            onClick={() => setSelectedCategory(null)}
          >
            Все категории
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-6">
              Найдено товаров: {filteredProducts.length}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
