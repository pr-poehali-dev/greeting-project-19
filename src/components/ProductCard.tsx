import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useFavorites, type Product } from '@/hooks/useFavorites';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg animate-fade-in">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-2 right-2 rounded-full bg-background/80 backdrop-blur-sm",
            favorite && "text-red-500"
          )}
          onClick={() => toggleFavorite(product)}
        >
          <Icon name={favorite ? "Heart" : "Heart"} size={20} className={favorite ? "fill-current" : ""} />
        </Button>
        <Badge className="absolute top-2 left-2">{product.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
        <div className="text-2xl font-bold text-primary">{product.price.toLocaleString('ru-RU')} ₽</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};
