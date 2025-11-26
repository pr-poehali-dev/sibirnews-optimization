import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image?: string;
  excerpt: string;
}

const Index = () => {
  const topNewsWeek: NewsItem[] = [
    {
      id: 1,
      title: 'Программа развития регионов Сибири утверждена',
      category: 'Политика',
      date: '26.11.2025',
      excerpt: 'Правительство одобрило программу до 2030 года'
    },
    {
      id: 2,
      title: 'Сибирская команда вышла в финал чемпионата',
      category: 'Спорт',
      date: '25.11.2025',
      excerpt: 'Хоккеисты одержали победу в полуфинале'
    },
    {
      id: 3,
      title: 'Открытие медицинского центра в Новосибирске',
      category: 'Общество',
      date: '24.11.2025',
      excerpt: 'Оснащен новейшим оборудованием'
    },
    {
      id: 4,
      title: 'Экономический форум соберет лидеров бизнеса',
      category: 'Экономика',
      date: '24.11.2025',
      excerpt: 'Более 500 участников из разных регионов'
    },
    {
      id: 5,
      title: 'ДТП на трассе М-53: движение восстановлено',
      category: 'Происшествия',
      date: '23.11.2025',
      excerpt: 'Пострадавших нет'
    }
  ];

  const mainNews: NewsItem = {
    id: 10,
    title: 'Новая программа развития регионов Сибири утверждена правительством на период до 2030 года',
    category: 'Главное',
    date: '26 ноября 2025',
    image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg',
    excerpt: 'Правительство одобрило масштабную программу экономического развития сибирских регионов. Программа включает инвестиции в инфраструктуру, поддержку малого бизнеса и социальные проекты.'
  };

  const secondaryNews: NewsItem[] = [
    {
      id: 11,
      title: 'Сибирская команда вышла в финал национального чемпионата',
      category: 'Спорт',
      date: '26.11.2025',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/1d8582ee-7acb-45a2-9711-767b74fddb2e.jpg',
      excerpt: 'Местная хоккейная команда одержала уверенную победу'
    },
    {
      id: 12,
      title: 'Открытие нового медицинского центра в Новосибирске',
      category: 'Общество',
      date: '25.11.2025',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg',
      excerpt: 'Современный центр примет первых пациентов'
    }
  ];

  const editorNews: NewsItem[] = [
    {
      id: 20,
      title: 'Итоги недели: главные события региона',
      category: 'От редакции',
      date: '26.11.2025',
      excerpt: 'Обзор самых важных новостей прошедшей недели'
    },
    {
      id: 21,
      title: 'Перспективы развития Сибири в 2026 году',
      category: 'От редакции',
      date: '25.11.2025',
      excerpt: 'Эксперты делятся прогнозами'
    },
    {
      id: 22,
      title: 'Интервью с губернатором региона',
      category: 'От редакции',
      date: '24.11.2025',
      excerpt: 'Планы на ближайшее будущее'
    }
  ];

  const categoryNews = {
    politics: [
      { id: 30, title: 'Новые законопроекты в региональном парламенте', date: '26.11.2025' },
      { id: 31, title: 'Встреча представителей власти с бизнесом', date: '25.11.2025' },
      { id: 32, title: 'Результаты социологического опроса', date: '24.11.2025' }
    ],
    economy: [
      { id: 40, title: 'Рост инвестиций в регион на 15%', date: '26.11.2025' },
      { id: 41, title: 'Новые предприятия откроются в 2026 году', date: '25.11.2025' },
      { id: 42, title: 'Поддержка малого и среднего бизнеса', date: '24.11.2025' }
    ],
    society: [
      { id: 50, title: 'Открытие новых детских садов', date: '26.11.2025' },
      { id: 51, title: 'Благоустройство городских парков', date: '25.11.2025' },
      { id: 52, title: 'Программа помощи многодетным семьям', date: '24.11.2025' }
    ],
    incidents: [
      { id: 60, title: 'Пожарные спасли семью из горящего дома', date: '26.11.2025' },
      { id: 61, title: 'Задержаны подозреваемые в мошенничестве', date: '25.11.2025' },
      { id: 62, title: 'Спасательная операция на реке', date: '24.11.2025' }
    ],
    sport: [
      { id: 70, title: 'Чемпионат региона по лыжным гонкам', date: '26.11.2025' },
      { id: 71, title: 'Новый спортивный комплекс в городе', date: '25.11.2025' },
      { id: 72, title: 'Сборная готовится к международным играм', date: '24.11.2025' }
    ],
    culture: [
      { id: 80, title: 'Выставка современного искусства открылась', date: '26.11.2025' },
      { id: 81, title: 'Театральный фестиваль пройдет в декабре', date: '25.11.2025' },
      { id: 82, title: 'Концерт симфонического оркестра', date: '24.11.2025' }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/9ac1b4aa-452b-41db-8288-cdbeafc62f2f.jpg" 
                alt="SibirNews" 
                className="h-10 w-auto bg-white rounded px-2"
              />
              <div>
                <h1 className="text-xl font-bold font-heading">СИБИРНЫЕ НОВОСТИ</h1>
                <p className="text-xs opacity-90">Главные события Сибири</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-4 text-sm">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Поиск
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Свежее
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Видео
              </Button>
            </nav>
          </div>

          <div className="flex gap-4 pb-3 text-sm border-t border-white/20 pt-3">
            <a href="#politics" className="hover:underline">Политика</a>
            <a href="#economy" className="hover:underline">Экономика</a>
            <a href="#society" className="hover:underline">Общество</a>
            <a href="#incidents" className="hover:underline">Происшествия</a>
            <a href="#sport" className="hover:underline">Спорт</a>
            <a href="#culture" className="hover:underline">Культура</a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <Card className="border-primary/20">
              <CardContent className="p-4">
                <h2 className="text-lg font-bold mb-4 text-primary border-b-2 border-primary pb-2">
                  Главное за неделю
                </h2>
                <div className="space-y-3">
                  {topNewsWeek.map((news) => (
                    <div key={news.id} className="pb-3 border-b border-gray-200 last:border-b-0 cursor-pointer group">
                      <Badge variant="outline" className="mb-1 text-xs border-primary/30 text-primary">
                        {news.category}
                      </Badge>
                      <h3 className="text-sm font-semibold leading-tight mb-1 group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-1">{news.excerpt}</p>
                      <p className="text-xs text-gray-400">{news.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-6">
            <Card className="mb-6 overflow-hidden border-primary/20 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative">
                <img 
                  src={mainNews.image} 
                  alt={mainNews.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {mainNews.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <p className="text-xs text-gray-500 mb-2">{mainNews.date}</p>
                <h2 className="text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {mainNews.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {mainNews.excerpt}
                </p>
                <Button variant="link" className="mt-3 p-0 text-primary font-semibold">
                  Читать полностью →
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {secondaryNews.map((news) => (
                <Card key={news.id} className="overflow-hidden border-primary/20 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="relative">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 left-2 bg-primary text-white text-xs">
                      {news.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{news.date}</p>
                    <h3 className="text-sm font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {news.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-3">
            <Card className="border-primary/20 bg-gray-50">
              <CardContent className="p-4">
                <h2 className="text-lg font-bold mb-4 text-primary border-b-2 border-primary pb-2">
                  От редакции
                </h2>
                <div className="space-y-4">
                  {editorNews.map((news) => (
                    <div key={news.id} className="pb-4 border-b border-gray-200 last:border-b-0 cursor-pointer group">
                      <h3 className="text-sm font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-1">{news.excerpt}</p>
                      <p className="text-xs text-gray-400">{news.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        <Separator className="my-8" />

        <section id="politics" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary border-l-4 border-primary pl-3">
            Политика
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categoryNews.politics.map((news) => (
              <Card key={news.id} className="border-primary/20 hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-500">{news.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="economy" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary border-l-4 border-primary pl-3">
            Экономика
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categoryNews.economy.map((news) => (
              <Card key={news.id} className="border-primary/20 hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-500">{news.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="society" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary border-l-4 border-primary pl-3">
            Общество
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categoryNews.society.map((news) => (
              <Card key={news.id} className="border-primary/20 hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-500">{news.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="incidents" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary border-l-4 border-primary pl-3">
            Происшествия
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categoryNews.incidents.map((news) => (
              <Card key={news.id} className="border-primary/20 hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-500">{news.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="sport" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary border-l-4 border-primary pl-3">
            Спорт
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categoryNews.sport.map((news) => (
              <Card key={news.id} className="border-primary/20 hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-500">{news.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="culture" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary border-l-4 border-primary pl-3">
            Культура
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categoryNews.culture.map((news) => (
              <Card key={news.id} className="border-primary/20 hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-500">{news.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h3 className="font-bold mb-3">О НАС</h3>
              <p className="text-white/80 text-xs">
                Сибирные Новости - главный новостной портал региона
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">РАЗДЕЛЫ</h3>
              <ul className="space-y-1 text-white/80 text-xs">
                <li><a href="#politics" className="hover:text-white">Политика</a></li>
                <li><a href="#economy" className="hover:text-white">Экономика</a></li>
                <li><a href="#society" className="hover:text-white">Общество</a></li>
                <li><a href="#sport" className="hover:text-white">Спорт</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">КОНТАКТЫ</h3>
              <ul className="space-y-1 text-white/80 text-xs">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  info@sibirnews.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  +7 (383) 123-45-67
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">МЫ В СОЦСЕТЯХ</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8 bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Facebook" size={16} />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Instagram" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-6 pt-6 text-center text-xs text-white/80">
            <p>&copy; 2025 Сибирные Новости. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
