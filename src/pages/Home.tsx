import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import Icon from '@/components/ui/icon';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Лучшие товары для вашей жизни
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Широкий выбор качественной электроники и аксессуаров с доставкой по всей России
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8">
                Перейти в каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Популярные товары</h2>
              <p className="text-muted-foreground">Самые продаваемые позиции этого месяца</p>
            </div>
            <Button variant="ghost">
              Смотреть все
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставим ваш заказ в течение 1-3 дней</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Официальная гарантия на все товары</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="HeadphonesIcon" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Поддержка 24/7</h3>
              <p className="text-muted-foreground">Всегда на связи для решения вопросов</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
