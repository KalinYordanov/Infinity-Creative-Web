import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Target, Award, MessageCircle, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Уеб сайтове',
      description: 'Професионални, responsive сайтове оптимизирани за конверсии',
      price: 'от 150 лв.',
      link: '/services/websites'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Продажбени фунии',
      description: 'Високо-конвертиращи landing pages за максимални продажби',
      price: '249 лв.',
      link: '/services/sales-funnels'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Meta & Google Ads',
      description: 'Targeted реклами във Facebook, Instagram и Google',
      price: 'от 120 лв.',
      link: '/services/meta-ads'
    }
  ];

  const testimonials = [
    {
      name: 'Георги Петров',
      company: 'TechStart BG',
      text: 'Infinity Creative трансформираха нашия бизнес с професионален сайт и ефективни Meta Ads кампании. Продажбите ни се увеличиха с 300% за 3 месеца.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Мария Иванова',
      company: 'Boutique Elena',
      text: 'Пакетът "Дигитален старт" беше точно това, от което се нуждаехме. За 249 лв. получихме всичко необходимо за стартиране на онлайн бизнеса.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2ee7ed3?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Димитър Стоянов',
      company: 'Fitness Pro',
      text: 'SEO кампанията ни донесе първи позиции в Google за ключови търсения. Клиентите ни се удвоиха само за 6 месеца.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const portfolioItems = [
    {
      title: 'E-commerce уеб сайт',
      category: 'Уеб дизайн',
      image: 'https://images.unsplash.com/photo-1618544976420-1f213fcf2052?w=400&h=300&fit=crop',
      result: '+250% продажби'
    },
    {
      title: 'Meta Ads кампания',
      category: 'Дигитален маркетинг',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      result: '3.5x ROI'
    },
    {
      title: 'SEO оптимизация',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg?w=400&h=300&fit=crop',
      result: '#1 позиция в Google'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518005108369-12a8b1c429a0"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-purple-900/50 to-slate-900/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Трансформирайте бизнеса си с
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}дигитално присъствие
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Специализирани решения за малкия бизнес и стартиращи компании
              <br />
              <strong className="text-purple-400">Минимален риск • Максимални резултати • Бърза реализация</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/special-offer"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Дигитален старт - 249 лв.
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="viber://chat?number=+359882717158"
                className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Viber консултация
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>100+ успешни проекта</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>98% доволни клиенти</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>Бърза реализация</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-20 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
        />
      </section>

      {/* Digital Start Package Highlight */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-y border-purple-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-semibold">Специална оферта</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Пакет "Дигитален старт"
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Всичко необходимо за стартиране на вашия онлайн бизнес
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Уеб сайт</h3>
                <p className="text-gray-400">Професионален сайт с мобилна оптимизация</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Facebook страница</h3>
                <p className="text-gray-400">Създаване и оптимизация на бизнес профил</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">SEO оптимизация</h3>
                <p className="text-gray-400">Базова оптимизация за търсачки</p>
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                249 лв. <span className="text-lg text-gray-400 line-through">399 лв.</span>
              </div>
              <p className="text-purple-400 mb-6">Еднократно плащане</p>
              <Link
                to="/special-offer"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
              >
                Поръчай сега
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Нашите услуги
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексни дигитални решения, проектирани специално за малкия бизнес
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={service.link}
                  className="block bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold text-lg">{service.price}</span>
                    <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Какво казват нашите клиенти
            </h2>
            <p className="text-xl text-gray-300">
              Реални резултати от реални бизнеси
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Последни проекти
            </h2>
            <p className="text-xl text-gray-300">
              Вижте трансформациите, които създаваме
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-green-400 font-semibold">{item.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all inline-flex items-center gap-2"
            >
              Вижте всички проекти
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Защо да изберете нас?
            </h2>
            <p className="text-xl text-gray-300">
              Специализирани в малкия бизнес с доказани резултати
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Бърза реализация',
                description: 'Завършваме проектите в рекордно време без компромис с качеството'
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: 'Фокус върху ROI',
                description: 'Всеки проект е оптимизиран за максимална възвръщаемост на инвестицията'
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Доказан опит',
                description: '100+ успешни проекта с измерими резултати и доволни клиенти'
              },
              {
                icon: <MessageCircle className="w-12 h-12" />,
                title: '24/7 Поддръжка',
                description: 'Винаги сме на разположение чрез Viber за консултации и поддръжка'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-purple-400 mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;