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
  isHot?: boolean;
}

const Index = () => {
  const topNewsWeek: NewsItem[] = [
    {
      id: 1,
      title: 'Программа развития регионов Сибири утверждена',
      category: 'Политика',
      date: '26.11.2025',
      excerpt: 'Правительство одобрило программу до 2030 года',
      isHot: true
    },
    {
      id: 2,
      title: 'Сибирская команда вышла в финал чемпионата',
      category: 'Спорт',
      date: '25.11.2025',
      excerpt: 'Хоккеисты одержали победу в полуфинале',
      isHot: true
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
      excerpt: 'Пострадавших нет',
      isHot: true
    }
  ];

  const mainNews: NewsItem = {
    id: 10,
    title: 'Новая программа развития регионов Сибири утверждена правительством',
    category: 'Главное',
    date: '26 ноября 2025',
    image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg',
    excerpt: 'Правительство одобрило масштабную программу экономического развития сибирских регионов на период до 2030 года.'
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

  const editorNews = [
    {
      id: 20,
      title: 'Итоги недели',
      subtitle: 'Главные события региона',
      author: 'Главный редактор',
      date: '26.11.2025',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg'
    },
    {
      id: 21,
      title: 'Перспективы 2026',
      subtitle: 'Эксперты о будущем Сибири',
      author: 'Аналитический отдел',
      date: '25.11.2025'
    },
    {
      id: 22,
      title: 'Интервью',
      subtitle: 'Губернатор о планах региона',
      author: 'Спецкор',
      date: '24.11.2025'
    }
  ];

  const categoryBlocks = [
    {
      id: 'politics',
      title: 'Политика',
      icon: 'Landmark',
      color: 'from-blue-500 to-blue-600',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg',
      news: [
        { id: 30, title: 'Новые законопроекты в региональном парламенте', date: '26.11.2025' },
        { id: 31, title: 'Встреча представителей власти с бизнесом', date: '25.11.2025' },
        { id: 32, title: 'Результаты социологического опроса', date: '24.11.2025' }
      ]
    },
    {
      id: 'economy',
      title: 'Экономика',
      icon: 'TrendingUp',
      color: 'from-emerald-500 to-emerald-600',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/1d8582ee-7acb-45a2-9711-767b74fddb2e.jpg',
      news: [
        { id: 40, title: 'Рост инвестиций в регион на 15%', date: '26.11.2025' },
        { id: 41, title: 'Новые предприятия откроются в 2026 году', date: '25.11.2025' },
        { id: 42, title: 'Поддержка малого и среднего бизнеса', date: '24.11.2025' }
      ]
    },
    {
      id: 'society',
      title: 'Общество',
      icon: 'Users',
      color: 'from-purple-500 to-purple-600',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg',
      news: [
        { id: 50, title: 'Открытие новых детских садов', date: '26.11.2025' },
        { id: 51, title: 'Благоустройство городских парков', date: '25.11.2025' },
        { id: 52, title: 'Программа помощи многодетным семьям', date: '24.11.2025' }
      ]
    },
    {
      id: 'incidents',
      title: 'Происшествия',
      icon: 'AlertTriangle',
      color: 'from-red-500 to-red-600',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/1d8582ee-7acb-45a2-9711-767b74fddb2e.jpg',
      news: [
        { id: 60, title: 'Пожарные спасли семью из горящего дома', date: '26.11.2025' },
        { id: 61, title: 'Задержаны подозреваемые в мошенничестве', date: '25.11.2025' },
        { id: 62, title: 'Спасательная операция на реке', date: '24.11.2025' }
      ]
    },
    {
      id: 'sport',
      title: 'Спорт',
      icon: 'Trophy',
      color: 'from-orange-500 to-orange-600',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/a629b2ab-6dae-47b3-8d72-e7b154ff4ee3.jpg',
      news: [
        { id: 70, title: 'Чемпионат региона по лыжным гонкам', date: '26.11.2025' },
        { id: 71, title: 'Новый спортивный комплекс в городе', date: '25.11.2025' },
        { id: 72, title: 'Сборная готовится к международным играм', date: '24.11.2025' }
      ]
    },
    {
      id: 'culture',
      title: 'Культура',
      icon: 'Palette',
      color: 'from-pink-500 to-pink-600',
      image: 'https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/1d8582ee-7acb-45a2-9711-767b74fddb2e.jpg',
      news: [
        { id: 80, title: 'Выставка современного искусства открылась', date: '26.11.2025' },
        { id: 81, title: 'Театральный фестиваль пройдет в декабре', date: '25.11.2025' },
        { id: 82, title: 'Концерт симфонического оркестра', date: '24.11.2025' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white sticky top-0 z-50 shadow-md border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/a0742575-fad8-439f-9d67-5f024632801f/files/9ac1b4aa-452b-41db-8288-cdbeafc62f2f.jpg" 
                alt="SibirNews" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold font-heading text-primary">СИБИРНЫЕ НОВОСТИ</h1>
                <p className="text-xs text-gray-600">Главные события Сибири</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-3 text-sm">
                <Button variant="ghost" className="text-gray-700 hover:text-primary">
                  <Icon name="Search" size={18} className="mr-1" />
                  Поиск
                </Button>
                <Button variant="ghost" className="text-gray-700 hover:text-primary">
                  <Icon name="Clock" size={18} className="mr-1" />
                  Свежее
                </Button>
                <Button variant="ghost" className="text-gray-700 hover:text-primary">
                  <Icon name="Video" size={18} className="mr-1" />
                  Видео
                </Button>
              </nav>

              <div className="flex items-center gap-2 border-l pl-4 border-gray-200">
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" 
                   className="w-9 h-9 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center text-white transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.35 14.63h-1.58c-.87 0-1.13-.69-2.69-2.25-1.35-1.33-1.95-1.51-2.29-1.51-.47 0-.6.13-.6.76v2.06c0 .55-.18.88-1.61.88-2.39 0-5.03-1.45-6.89-4.15C1.32 9.42.54 7.01.54 6.6c0-.34.13-.65.76-.65h1.58c.57 0 .78.26 1 .87.98 2.84 2.62 5.33 3.3 5.33.26 0 .37-.12.37-.76V9.37c-.09-1.52-.89-1.65-.89-2.19 0-.27.22-.54.57-.54h2.48c.48 0 .65.26.65.83v4.45c0 .48.21.65.35.65.26 0 .48-.17 1-.68 1.52-1.71 2.61-4.35 2.61-4.35.14-.31.41-.61.98-.61h1.58c.68 0 .83.35.68.83-.23 1.05-2.98 5.12-2.98 5.12-.22.35-.3.51 0 .92.21.31.91.89 1.38 1.43 1.05 1.15 1.88 2.11 2.1 2.78.23.66-.13 1.01-.79 1.01z"/>
                  </svg>
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center text-white transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pb-4 text-sm border-t border-gray-200 pt-3 overflow-x-auto">
            <a href="#politics" className="hover:text-primary transition-colors whitespace-nowrap">Политика</a>
            <a href="#economy" className="hover:text-primary transition-colors whitespace-nowrap">Экономика</a>
            <a href="#society" className="hover:text-primary transition-colors whitespace-nowrap">Общество</a>
            <a href="#incidents" className="hover:text-primary transition-colors whitespace-nowrap">Происшествия</a>
            <a href="#sport" className="hover:text-primary transition-colors whitespace-nowrap">Спорт</a>
            <a href="#culture" className="hover:text-primary transition-colors whitespace-nowrap">Культура</a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <Card className="border-primary/30 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-primary">
                  <Icon name="Flame" size={20} className="text-orange-500" />
                  <h2 className="text-lg font-bold text-primary">
                    Главное за неделю
                  </h2>
                </div>
                <div className="space-y-3">
                  {topNewsWeek.map((news) => (
                    <div key={news.id} className={`pb-3 border-b border-gray-200 last:border-b-0 cursor-pointer group ${news.isHot ? 'bg-orange-50 -mx-2 px-2 py-2 rounded-lg' : ''}`}>
                      <div className="flex items-center gap-2 mb-1">
                        {news.isHot && (
                          <Icon name="Flame" size={14} className="text-orange-500 animate-pulse" />
                        )}
                        <Badge variant="outline" className={`text-xs ${news.isHot ? 'border-orange-400 text-orange-600 bg-orange-100' : 'border-primary/30 text-primary'}`}>
                          {news.category}
                        </Badge>
                      </div>
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
            <Card className="mb-6 overflow-hidden border-primary/30 hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={mainNews.image} 
                    alt={mainNews.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-white">
                    {mainNews.category}
                  </Badge>
                </div>
                <CardContent className="p-5 flex flex-col justify-center">
                  <p className="text-xs text-gray-500 mb-2">{mainNews.date}</p>
                  <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                    {mainNews.title}
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    {mainNews.excerpt}
                  </p>
                  <Button variant="link" className="p-0 text-primary font-semibold justify-start">
                    Читать полностью →
                  </Button>
                </CardContent>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {secondaryNews.map((news) => (
                <Card key={news.id} className="overflow-hidden border-primary/30 hover:shadow-xl transition-shadow cursor-pointer group">
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
            <Card className="border-primary/30 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-0">
                <div className="bg-primary text-white p-4">
                  <div className="flex items-center gap-2">
                    <Icon name="PenSquare" size={20} />
                    <h2 className="text-lg font-bold">
                      От редакции
                    </h2>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  {editorNews.map((news, index) => (
                    <div key={news.id} className={`cursor-pointer group ${index === 0 ? 'pb-4' : 'pb-4 border-t border-primary/20 pt-4'}`}>
                      {index === 0 && news.image && (
                        <div className="mb-3 rounded-lg overflow-hidden">
                          <img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex items-start gap-2 mb-2">
                        <div className={`${index === 0 ? 'w-10 h-10 bg-primary' : 'w-8 h-8 bg-primary/80'} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                          <Icon name="User" size={index === 0 ? 20 : 16} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`${index === 0 ? 'text-base' : 'text-sm'} font-bold leading-tight mb-1 group-hover:text-primary transition-colors`}>
                            {news.title}
                          </h3>
                          <p className="text-xs text-gray-700 mb-1">{news.subtitle}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-gray-500">{news.author}</p>
                            <p className="text-xs text-gray-400">{news.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        <Separator className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryBlocks.map((category) => (
            <section key={category.id} id={category.id}>
              <Card className="overflow-hidden border-primary/20 hover:shadow-xl transition-all duration-300 group h-full">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-90`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Icon name={category.icon as any} size={40} className="mx-auto mb-2" />
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {category.news.map((news) => (
                      <div key={news.id} className="pb-3 border-b border-gray-200 last:border-b-0 cursor-pointer group/item">
                        <h3 className="text-sm font-semibold mb-1 group-hover/item:text-primary transition-colors leading-tight">
                          {news.title}
                        </h3>
                        <p className="text-xs text-gray-500">{news.date}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="mt-3 p-0 text-primary font-semibold text-sm w-full justify-center">
                    Все новости раздела →
                  </Button>
                </CardContent>
              </Card>
            </section>
          ))}
        </div>
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
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.35 14.63h-1.58c-.87 0-1.13-.69-2.69-2.25-1.35-1.33-1.95-1.51-2.29-1.51-.47 0-.6.13-.6.76v2.06c0 .55-.18.88-1.61.88-2.39 0-5.03-1.45-6.89-4.15C1.32 9.42.54 7.01.54 6.6c0-.34.13-.65.76-.65h1.58c.57 0 .78.26 1 .87.98 2.84 2.62 5.33 3.3 5.33.26 0 .37-.12.37-.76V9.37c-.09-1.52-.89-1.65-.89-2.19 0-.27.22-.54.57-.54h2.48c.48 0 .65.26.65.83v4.45c0 .48.21.65.35.65.26 0 .48-.17 1-.68 1.52-1.71 2.61-4.35 2.61-4.35.14-.31.41-.61.98-.61h1.58c.68 0 .83.35.68.83-.23 1.05-2.98 5.12-2.98 5.12-.22.35-.3.51 0 .92.21.31.91.89 1.38 1.43 1.05 1.15 1.88 2.11 2.1 2.78.23.66-.13 1.01-.79 1.01z"/>
                  </svg>
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </a>
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
