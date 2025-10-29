import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/useFavorites';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container py-16 md:py-24">
        <h1 className="text-4xl font-bold mb-2">Избранные товары</h1>
        <p className="text-muted-foreground mb-12">Ваша коллекция любимых товаров</p>

        {favorites.length === 0 ? (
          <div className="text-center py-16 max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Icon name="Heart" size={40} className="text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Пока пусто</h3>
            <p className="text-muted-foreground mb-6">
              Добавляйте понравившиеся товары в избранное, нажимая на иконку сердечка
            </p>
            <Link to="/catalog">
              <Button size="lg">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-8">
              В избранном: {favorites.length} {favorites.length === 1 ? 'товар' : 'товаров'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favorites.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
