import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, TrendingUp, Palette, Video, PenTool, Search, Share2 } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Уеб сайтове',
      description: 'Професионални, responsive сайтове оптимизирани за конверсии и потребителско изживяване',
      features: ['Responsive дизайн', 'SEO оптимизация', 'CMS система', 'Бърза скорост'],
      price: 'от 150 лв.',
      link: '/services/websites',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Продажбени фунии',
      description: 'Високо-конвертиращи landing pages проектирани да превръщат посетители в клиенти',
      features: ['Конверсионен дизайн', 'A/B тестове', 'Analytics', 'CRO оптимизация'],
      price: '249 лв.',
      link: '/services/sales-funnels',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: 'Meta Ads',
      description: 'Targeted реклами във Facebook и Instagram за максимална възвръщаемост на инвестицията',
      features: ['Audience targeting', 'Creative design', 'Campaign optimization', 'ROI tracking'],
      price: 'от 120 лв.',
      link: '/services/meta-ads',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'Google Ads',
      description: 'PPC кампании в Google за директен трафик и бързи резултати',
      features: ['Keyword research', 'Ad copywriting', 'Bid optimization', 'Quality Score'],
      price: 'от 120 лв.',
      link: '/services/google-ads',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Графичен дизайн',
      description: 'Визуални решения за брандинг, маркетинг материали и корпоративна идентичност',
      features: ['Logo дизайн', 'Брандинг', 'Print материали', 'Digital assets'],
      price: 'по договаряне',
      link: '/services/design',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: 'Видео обработка',
      description: 'Професионален монтаж и обработка на видео съдържание за социални мрежи и реклами',
      features: ['Видео монтаж', 'Motion graphics', 'Color grading', 'Sound design'],
      price: 'по договаряне',
      link: '/services/video-processing',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: 'Контент маркетинг',
      description: 'Стратегическо създаване на съдържание за изграждане на авторитет и ангажиране',
      features: ['Content strategy', 'Copywriting', 'Social media', 'Blog posts'],
      price: 'по договаряне',
      link: '/services/content-marketing',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'SEO оптимизация',
      description: 'Органично подобряване на позициите в търсачките за дългосрочни резултати',
      features: ['Technical SEO', 'Content optimization', 'Link building', 'Local SEO'],
      price: 'от 140 лв./месец',
      link: '/services/seo',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052"
            alt="Services background"
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Нашите
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}услуги
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Комплексни дигитални решения за трансформация на вашия бизнес
              <br />
              <strong className="text-purple-400">Минимален риск • Максимална стойност • Доказани резултати</strong>
            </p>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-semibold">100+ успешни проекта</span>
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  className="block h-full"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 h-full hover:border-purple-500/40 transition-all transform hover:scale-105 hover:-translate-y-2 group-hover:shadow-2xl">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-purple-400 font-semibold text-lg">{service.price}</span>
                      <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Нашият процес
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Структуриран подход за гарантирани резултати
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Консултация',
                description: 'Анализираме вашия бизнес и дефинираме целите'
              },
              {
                step: '02',
                title: 'Стратегия',
                description: 'Създаваме персонализирана дигитална стратегия'
              },
              {
                step: '03',
                title: 'Изпълнение',
                description: 'Реализираме проекта с фокус върху качеството'
              },
              {
                step: '04',
                title: 'Оптимизация',
                description: 'Непрекъснато подобрение за максимални резултати'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
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
              Готови да започнете?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Получете безплатна консултация и персонализирана оферта за вашия проект
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-project"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Target className="w-5 h-5" />
                Заяви проект
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/special-offer"
                className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Специална оферта
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;