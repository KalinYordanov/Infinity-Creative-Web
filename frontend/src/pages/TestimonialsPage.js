import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Zap, TrendingUp, Users, Award, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Всички' },
    { id: 'websites', name: 'Уеб сайтове' },
    { id: 'ads', name: 'Реклами' },
    { id: 'seo', name: 'SEO' },
    { id: 'design', name: 'Дизайн' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Георги Петров',
      company: 'TechStart BG',
      position: 'CEO',
      text: 'Infinity Creative трансформираха нашия бизнес с професионален сайт и ефективни Meta Ads кампании. Продажбите ни се увеличиха с 300% за 3 месеца. Препоръчвам ги топло!',
      rating: 5,
      category: 'websites',
      result: '+300% продажби за 3 месеца',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      project: 'E-commerce сайт + Meta Ads кампания',
      date: '2024-12'
    },
    {
      id: 2,
      name: 'Мария Иванова',
      company: 'Boutique Elena',
      position: 'Собственик',
      text: 'Пакетът "Дигитален старт" беше точно това, от което се нуждаехме. За 249 лв. получихме всичко необходимо за стартиране на онлайн бизнеса. Вече имаме първите си онлайн клиенти.',
      rating: 5,
      category: 'websites',
      result: '+150% онлайн продажби',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2ee7ed3?w=150&h=150&fit=crop&crop=face',
      project: 'Пакет "Дигитален старт"',
      date: '2024-11'
    },
    {
      id: 3,
      name: 'Димитър Стоянов',
      company: 'Fitness Pro',
      position: 'Личен треньор',
      text: 'SEO кампанията ни донесе първи позиции в Google за ключови търсения. Клиентите ни се удвоиха само за 6 месеца. Професионалната работа се вижда в резултатите.',
      rating: 5,
      category: 'seo',
      result: '+200% нови клиенти',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      project: 'SEO оптимизация',
      date: '2024-10'
    },
    {
      id: 4,
      name: 'Красимир Тодоров',
      company: 'KT Electronics',
      position: 'Мениджър продажби',
      text: 'Meta Ads кампанията ни донесе 250% увеличение в онлайн продажби за първите 2 месеца. ROI-ът беше невероятен! Екипът е много професионален и винаги отговаря бързо.',
      rating: 5,
      category: 'ads',
      result: 'ROAS 5.2x',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      project: 'Meta Ads кампания',
      date: '2024-11'
    },
    {
      id: 5,
      name: 'Виолета Стоянова',
      company: 'Beauty Studio Viola',
      position: 'Естетик',
      text: 'Благодарение на професионалните Instagram реклами, клиентите ми се удвоиха. Резервациите идват автоматично. Най-добрата инвестиция в бизнеса ми досега!',
      rating: 5,
      category: 'ads',
      result: '+180% нови клиенти',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2ee7ed3?w=150&h=150&fit=crop&crop=face',
      project: 'Instagram реклами',
      date: '2024-10'
    },
    {
      id: 6,
      name: 'Стефан Димитров',
      company: 'Online Academy',
      position: 'Основател',
      text: 'Продажбената фуния увеличи конверсиите ми от 3% на 18%. Месечните приходи се утроиха за 2 месеца. Автоматизацията работи перфектно.',
      rating: 5,
      category: 'websites',
      result: '+500% ROI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      project: 'Продажбена фуния',
      date: '2024-09'
    },
    {
      id: 7,
      name: 'Елена Христова',
      company: 'Handmade Jewelry',
      position: 'Художник',
      text: 'Фунията за моите бижута работи 24/7. Сега получавам поръчки дори когато спя. Екипът разбра точно какво ми трябва и го реализира перфектно.',
      rating: 5,
      category: 'websites',
      result: '+250% автоматични продажби',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2ee7ed3?w=150&h=150&fit=crop&crop=face',
      project: 'E-commerce сайт',
      date: '2024-09'
    },
    {
      id: 8,
      name: 'Николай Василев',
      company: 'NV Consulting',
      position: 'Бизнес консултант',
      text: 'Google Ads кампанията ни донесе качествени бизнес лийдове от първата седмица. ROI-ът е фантастичен! Професионализмът на екипа е на най-високо ниво.',
      rating: 5,
      category: 'ads',
      result: 'ROI 5.4x',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      project: 'Google Ads кампания',
      date: '2024-08'
    }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  const stats = [
    { label: 'Доволни клиенти', value: '95+', icon: <Users className="w-6 h-6" /> },
    { label: 'Средна оценка', value: '4.9/5', icon: <Star className="w-6 h-6" /> },
    { label: 'Препоръки', value: '98%', icon: <Award className="w-6 h-6" /> },
    { label: 'Успешни проекта', value: '100+', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052"
            alt="Testimonials background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-purple-900/50 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-300 font-semibold">4.9/5 средна оценка</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Какво казват
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}нашите клиенти
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Реални отзиви от реални бизнеси с реални резултати
              <br />
              <strong className="text-purple-400">95+ доволни клиенти • 98% препоръки • 100+ проекта</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-slate-800/50 text-gray-400 hover:text-white border border-purple-500/20 hover:border-purple-500/40'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-purple-400/20">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-purple-400">{testimonial.position}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">{testimonial.date}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {testimonial.project}
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Result */}
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">{testimonial.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Teaser */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Видео отзиви
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Чуйте директно от нашите клиенти за техния опит
            </p>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12">
              <div className="text-purple-400 mb-6">
                <Quote className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Скоро</h3>
              <p className="text-gray-300 mb-8">
                Работим по колекция от видео отзиви с нашите клиенти. 
                Следете за актуализации!
              </p>
              <a
                href="viber://chat?number=+359882717158"
                className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                Поискайте видео отзив
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Станете следващата ни история за успех
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Присъединете се към 95+ доволни клиенти и трансформирайте своя бизнес
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-project"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-6 h-6" />
                Започнете проекта си
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/special-offer"
                className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                Вижте специалната оферта
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;