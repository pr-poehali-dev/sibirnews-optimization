import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('Все');

  const categories = ['Все', 'Политика', 'Экономика', 'Общество', 'Происшествия', 'Спорт', 'Культура'];

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: 'Новая программа развития регионов Сибири утверждена правительством',
      category: 'Политика',
      date: '26 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg',
      excerpt: 'Правительство одобрило масштабную программу экономического развития сибирских регионов на период до 2030 года.'
    },
    {
      id: 2,
      title: 'Сибирская команда вышла в финал национального чемпионата',
      category: 'Спорт',
      date: '26 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/1d8582ee-7acb-45a2-9711-767b74fddb2e.jpg',
      excerpt: 'Местная хоккейная команда одержала уверенную победу в полуфинале и вышла в решающий матч.'
    },
    {
      id: 3,
      title: 'Открытие нового медицинского центра в Новосибирске',
      category: 'Общество',
      date: '25 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg',
      excerpt: 'Современный медицинский центр оснащен новейшим оборудованием и примет первых пациентов уже на следующей неделе.'
    },
    {
      id: 4,
      title: 'Экономический форум Сибири соберет лидеров бизнеса',
      category: 'Экономика',
      date: '25 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg',
      excerpt: 'Ежегодный форум пройдет в декабре и соберет более 500 участников из разных регионов страны.'
    },
    {
      id: 5,
      title: 'ДТП на трассе М-53: движение восстановлено',
      category: 'Происшествия',
      date: '25 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg',
      excerpt: 'После серьезного ДТП на трассе М-53 движение было полностью восстановлено, пострадавших нет.'
    },
    {
      id: 6,
      title: 'Премьера спектакля в Красноярском драмтеатре',
      category: 'Культура',
      date: '24 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg',
      excerpt: 'Новая постановка классической пьесы получила высокие оценки критиков и зрителей.'
    }
  ];

  const filteredNews = activeCategory === 'Все' 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/9ac1b4aa-452b-41db-8288-cdbeafc62f2f.jpg" 
                alt="SibirNews" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary font-heading">СИБИРНЫЕ НОВОСТИ</h1>
                <p className="text-xs text-muted-foreground">Главные события Сибири</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="text-sm font-medium hover:text-primary">
                <Icon name="Search" size={18} className="mr-2" />
                Поиск
              </Button>
              <Button variant="ghost" className="text-sm font-medium hover:text-primary">
                <Icon name="Clock" size={18} className="mr-2" />
                Свежее
              </Button>
              <Button variant="ghost" className="text-sm font-medium hover:text-primary">
                <Icon name="Video" size={18} className="mr-2" />
                Видео
              </Button>
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>

          <div className="flex gap-2 pb-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className="whitespace-nowrap text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Icon name="Newspaper" size={24} className="text-secondary" />
            <h2 className="text-3xl font-bold font-heading">Главные новости</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news, index) => (
              <Card 
                key={news.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge 
                    className="absolute top-3 left-3 bg-secondary text-white"
                  >
                    {news.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-heading line-clamp-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Button 
                    variant="link" 
                    className="mt-4 p-0 h-auto text-primary font-medium"
                  >
                    Читать далее 
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Icon name="TrendingUp" size={24} className="text-secondary" />
            <h2 className="text-2xl font-bold font-heading">Популярное сейчас</h2>
          </div>
          <div className="space-y-4">
            {newsData.slice(0, 3).map((news, index) => (
              <div 
                key={news.id} 
                className="flex gap-4 pb-4 border-b last:border-b-0 cursor-pointer group"
              >
                <span className="text-3xl font-bold text-gray-200 group-hover:text-secondary transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2">
                    {news.category}
                  </Badge>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {news.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 font-heading">О НАС</h3>
              <p className="text-sm text-gray-300">
                Сибирные Новости - главный новостной портал Сибирского региона
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 font-heading">РАЗДЕЛЫ</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {categories.slice(1).map((cat) => (
                  <li key={cat}>
                    <a href="#" className="hover:text-white transition-colors">{cat}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 font-heading">КОНТАКТЫ</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@sibirnews.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (383) 123-45-67
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 font-heading">МЫ В СОЦСЕТЯХ</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2025 Сибирные Новости. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
