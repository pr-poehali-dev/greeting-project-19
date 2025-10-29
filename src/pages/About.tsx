import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">О нашем магазине</h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
            ShopHub — современный интернет-магазин электроники и аксессуаров
          </p>

          <div className="prose prose-lg max-w-none mb-16">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-4">
                  Мы предлагаем широкий ассортимент качественной электроники, компьютерной техники и аксессуаров 
                  от ведущих мировых производителей. Наша миссия — сделать современные технологии доступными 
                  для каждого.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  С 2020 года мы помогаем тысячам клиентов выбрать идеальные товары для работы, учебы и развлечений. 
                  Каждый продукт в нашем каталоге проходит строгую проверку качества.
                </p>
                <p className="text-lg leading-relaxed">
                  Мы гордимся нашим сервисом и постоянно работаем над тем, чтобы ваши покупки были максимально 
                  удобными и приятными.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Наши преимущества</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                    <span>Только оригинальная продукция</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                    <span>Конкурентные цены</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                    <span>Быстрая доставка по всей России</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                    <span>Официальная гарантия</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Наша команда</h3>
                <p className="text-muted-foreground">
                  Профессиональная команда специалистов, готовая помочь вам в выборе 
                  и ответить на любые вопросы. Мы работаем для вас каждый день, чтобы 
                  ваш опыт покупок был безупречным.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary text-primary-foreground animate-fade-in">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Есть вопросы?</h3>
              <p className="mb-6 opacity-90">
                Свяжитесь с нами любым удобным способом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Mail" size={20} />
                  <span>info@shophub.ru</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Phone" size={20} />
                  <span>8 (800) 555-35-35</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
