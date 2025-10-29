import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useFavorites } from '@/hooks/useFavorites';

export const Header = () => {
  const { favorites } = useFavorites();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Icon name="Store" size={20} className="text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">ShopHub</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Главная
          </Link>
          <Link to="/catalog" className="text-sm font-medium transition-colors hover:text-primary">
            Каталог
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            О нас
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/favorites">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="Heart" size={20} />
              {favorites.length > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {favorites.length}
                </Badge>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <Icon name="ShoppingCart" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};
