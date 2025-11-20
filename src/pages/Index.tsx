import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const portfolioItems = [
    {
      id: 1,
      title: 'Неоновый Дракон',
      category: 'Виртуальный питомец',
      image: 'https://cdn.poehali.dev/projects/84fb094c-ac70-4e40-9562-9874f5283a17/files/b110b6fc-1480-47f9-850d-74b97013d94f.jpg',
    },
    {
      id: 2,
      title: 'Кибер-компаньон',
      category: 'Маскот для бренда',
      image: 'https://cdn.poehali.dev/projects/84fb094c-ac70-4e40-9562-9874f5283a17/files/c7988f43-71d0-4d37-bd12-0604574eb682.jpg',
    },
    {
      id: 3,
      title: 'Цифровой страж',
      category: 'Игровой персонаж',
      image: 'https://cdn.poehali.dev/projects/84fb094c-ac70-4e40-9562-9874f5283a17/files/ae973473-ac5c-4123-9c15-0b14826fb797.jpg',
    },
  ];

  const services = [
    {
      icon: 'Sparkles',
      title: 'Разработка концепта',
      description: 'Создаём уникальный дизайн виртуального персонажа с нуля',
    },
    {
      icon: 'Palette',
      title: '3D моделирование',
      description: 'Воплощаем идеи в реалистичные 3D модели с неоновой эстетикой',
    },
    {
      icon: 'Zap',
      title: 'Анимация персонажа',
      description: 'Оживляем питомцев плавными и выразительными анимациями',
    },
    {
      icon: 'Trophy',
      title: 'Брендинг маскота',
      description: 'Разрабатываем цельный образ для вашего бренда',
    },
  ];

  const blogPosts = [
    {
      title: 'Тренды виртуальных питомцев 2024',
      date: '15 ноября 2024',
      excerpt: 'Разбираем главные направления в дизайне цифровых компаньонов',
    },
    {
      title: 'Как создать идеального маскота',
      date: '10 ноября 2024',
      excerpt: 'Пошаговое руководство от концепта до финальной анимации',
    },
    {
      title: 'Психология цвета в дизайне персонажей',
      date: '5 ноября 2024',
      excerpt: 'Влияние цветовой палитры на восприятие виртуального питомца',
    },
  ];

  const faqs = [
    {
      question: 'Сколько времени занимает создание персонажа?',
      answer: 'В среднем 2-4 недели от концепта до финальной анимированной модели, в зависимости от сложности проекта.',
    },
    {
      question: 'В каких форматах предоставляются файлы?',
      answer: 'Мы предоставляем модели в форматах FBX, GLB, и исходники в Blender. Анимации экспортируются в форматы совместимые с Unity и Unreal Engine.',
    },
    {
      question: 'Можно ли использовать персонажа в коммерческих целях?',
      answer: 'Да, при заказе полного пакета вы получаете все права на коммерческое использование персонажа.',
    },
    {
      question: 'Предоставляете ли вы исходные файлы?',
      answer: 'Да, в финальном пакете вы получаете все исходные файлы проекта для дальнейшей модификации.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--dark-bg))] via-[hsl(var(--dark-surface))] to-[hsl(var(--dark-bg))]">
      <header className="fixed top-0 w-full z-50 bg-[hsl(var(--dark-surface))]/80 backdrop-blur-lg border-b border-primary/30">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold glow-cyan">CYBER PETS</h1>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="text-foreground/80 hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#blog" className="text-foreground/80 hover:text-primary transition-colors">Блог</a>
            <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 border-glow">
            Связаться
          </Button>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-6 animate-fade-in">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 glow-cyan animate-pulse-glow">
            ВИРТУАЛЬНЫЕ ПИТОМЦЫ
          </h2>
          <p className="text-2xl md:text-3xl mb-8 text-secondary glow-purple">
            Создаём цифровых компаньонов будущего
          </p>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12">
            Разрабатываем уникальных анимированных персонажей для игр, метавселенных и брендов с футуристичным неоновым стилем
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-glow text-lg px-8">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4 glow-purple">Портфолио</h3>
          <p className="text-center text-foreground/70 mb-16 text-lg">Наши виртуальные создания</p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={item.id}
                className="bg-card border-primary/30 hover:border-primary transition-all duration-300 card-glow animate-float overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl glow-cyan">{item.title}</CardTitle>
                  <CardDescription className="text-secondary">{item.category}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-[hsl(var(--dark-surface))]/50">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4 glow-cyan">Услуги</h3>
          <p className="text-center text-foreground/70 mb-16 text-lg">Полный цикл разработки персонажей</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:card-glow animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4 glow-magenta">Блог</h3>
          <p className="text-center text-foreground/70 mb-16 text-lg">Статьи о дизайне и разработке</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-card border-accent/30 hover:border-accent transition-all duration-300 cursor-pointer hover:card-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl hover:text-accent transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-muted-foreground flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-[hsl(var(--dark-surface))]/50">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-5xl font-bold text-center mb-4 glow-purple">Вопросы и ответы</h3>
          <p className="text-center text-foreground/70 mb-16 text-lg">Часто задаваемые вопросы</p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-primary/30 rounded-lg px-6 bg-card hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-lg text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-5xl font-bold text-center mb-4 glow-cyan">Контакты</h3>
          <p className="text-center text-foreground/70 mb-16 text-lg">Свяжитесь с нами для обсуждения проекта</p>
          <Card className="bg-card border-primary/30 card-glow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Напишите нам</CardTitle>
              <CardDescription>Мы ответим в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-input border-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea
                  placeholder="Расскажите о вашем проекте..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="bg-input border-primary/30 focus:border-primary"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 border-glow text-lg">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить сообщение
              </Button>
              <div className="flex justify-center gap-6 pt-4">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Icon name="Mail" size={24} />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Icon name="Phone" size={24} />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-primary/30 bg-[hsl(var(--dark-surface))]/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 glow-cyan">CYBER PETS</h2>
          <p className="text-foreground/60 mb-6">Создаём будущее виртуальных компаньонов</p>
          <p className="text-foreground/40 text-sm">© 2024 Cyber Pets. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
