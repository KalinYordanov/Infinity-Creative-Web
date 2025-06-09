import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Target,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  Eye,
  MousePointer,
  Share2,
  Shield,
  Clock,
  Star,
  Facebook
} from 'lucide-react';

const MetaAdsPage = () => {
  const services = [
    {
      name: 'Създаване на фирмена Facebook страница',
      price: 120,
      description: 'Професионална бизнес страница с пълна оптимизация',
      features: [
        'Пълно настройване на бизнес профил',
        'Оптимизация на описанието и ключови думи',
        'Добавяне на контактна информация',
        'Създаване на Call-to-Action бутони',
        'Настройване на автоматични отговори',
        'Интеграция с Instagram (ако е приложимо)'
      ],
      icon: <Facebook className="w-8 h-8" />,
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  const campaignPricing = [
    {
      name: 'Първоначална настройка',
      price: 120,
      description: 'Създаване и оптимизация на рекламна кампания',
      features: [
        'Изследване на целева аудитория',
        'Създаване на рекламни креативи',
        'Настройване на кампания във Facebook Ads Manager',
        'Оптимизация на targeting параметри',
        'Настройване на конверсионно проследяване',
        'Първоначален A/B тест на рекламите'
      ],
      type: 'setup'
    },
    {
      name: 'Поддръжка до 500 лв. бюджет',
      price: 100,
      description: 'Месечна поддръжка и оптимизация на кампании',
      features: [
        'Ежедневно наблюдение на кампании',
        'Оптимизация на креативи и текстове',
        'Bid management и бюджет разпределение',
        'Седмична отчетност',
        'Препоръки за подобрение',
        'Техническа поддръжка'
      ],
      type: 'maintenance-small'
    },
    {
      name: 'Поддръжка над 500 лв. бюджет',
      price: '20%',
      description: 'Процент от рекламния бюджет за големи кампании',
      features: [
        'Пълно управление на рекламните кампании',
        'Advanced audience segmentation',
        'Ретаргетинг стратегии',
        'Креативен дизайн и копирайтинг',
        'Детайлна аналитика и отчетност',
        'Стратегически съвети за мащабиране'
      ],
      type: 'maintenance-large'
    }
  ];

  const beforeAfter = [
    {
      before: 'Разхищение на рекламен бюджет',
      after: 'ROI от 3-5x на рекламните разходи'
    },
    {
      before: 'Достигане до неподходяща аудитория',
      after: 'Лазерно точно таргетиране'
    },
    {
      before: 'Высок cost per click без резултати',
      after: 'Оптимизирани кампании с ниски разходи'
    },
    {
      before: 'Липса на проследяване на конверсии',
      after: 'Пълна прозрачност на резултатите'
    }
  ];

  const caseStudies = [
    {
      client: 'E-commerce магазин за дрехи',
      industry: 'Fashion Retail',
      challenge: 'Висок cost per acquisition и ниски продажби',
      solution: 'Създадохме ретаргетинг кампании с динамични реклами',
      results: [
        'ROAS (Return on Ad Spend) 4.2x',
        'Cost per acquisition намален с 65%',
        'Конверсии увеличени с 280%',
        '150% растеж в месечните продажби'
      ],
      investment: 800,
      returns: 3360
    },
    {
      client: 'Местен ресторант',
      industry: 'Food & Beverage',
      challenge: 'Липса на онлайн присъствие и резервации',
      solution: 'Location-based кампании и Instagram Stories реклами',
      results: [
        'ROAS 6.1x за първия месец',
        '+320% увеличение в онлайн резервации',
        '250% растеж в social media следачи',
        'Brand awareness увеличен с 400%'
      ],
      investment: 400,
      returns: 2440
    }
  ];

  const successMetrics = [
    { metric: 'Средно ROAS', value: '4.2x', description: 'Възвръщаемост на рекламните разходи' },
    { metric: 'Конверсии', value: '+285%', description: 'Увеличение в продажби/лийдове' },
    { metric: 'CPA намаление', value: '-58%', description: 'Понижение на цената за acquisition' },
    { metric: 'Доволни клиенти', value: '97%', description: 'Клиенти, които препоръчват услугите ни' }
  ];

  const whyMetaAds = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Най-голямата аудитория',
      description: '2.9 милиарда активни потребители месечно във Facebook и Instagram',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Прецизно таргетиране',
      description: 'Достигане до точната аудитория по демография, интереси и поведение',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Контролируем бюджет',
      description: 'Започнете с малък бюджет и мащабирайте при положителни резултати',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Измерими резултати',
      description: 'Детайлна аналитика за всеки аспект от вашите рекламни кампании',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Красимир Тодоров',
      business: 'KT Electronics',
      text: 'Meta Ads кампанията ни донесе 250% увеличение в онлайн продажби за първите 2 месеца. ROI-ът беше невероятен!',
      result: 'ROAS 5.2x за първите 60 дни',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Виолета Стоянова',
      business: 'Beauty Studio Viola',
      text: 'Благодарение на професионалните Instagram реклами, клиентите ми се удвоиха. Резервациите идват автоматично.',
      result: '+180% нови клиенти за 3 месеца',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2ee7ed3?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617695744007-68ef55752789"
            alt="Meta Ads background"
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <Share2 className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">2.9 милиарда потребители месечно</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meta Ads, които
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {' '}генерират продажби
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Професионални Facebook и Instagram реклами с гарантиран ROI
              <br />
              <strong className="text-blue-400">Прецизно таргетиране • Измерими резултати • Контролиран бюджет</strong>
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-4">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-green-400 font-semibold text-sm">ROI гаранция</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-400 font-semibold text-sm">Бързи резултати</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-purple-400 font-semibold text-sm">Пълна прозрачност</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-4">
                <Target className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <p className="text-pink-400 font-semibold text-sm">Точно таргетиране</p>
              </div>
            </div>

            <Link
              to="/request-project"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Започнете кампания
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Meta Ads */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Защо Meta Ads?
            </h2>
            <p className="text-xl text-gray-300">
              Най-ефективната платформа за достигане до вашите клиенти
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyMetaAds.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <div className="text-white">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-indigo-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Трансформация на резултатите
            </h2>
            <p className="text-xl text-gray-300">
              От неефективни реклами към печеливши кампании
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {beforeAfter.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6"
              >
                <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 flex-1">
                  <h4 className="text-red-400 font-semibold mb-2">ПРЕДИ</h4>
                  <p className="text-gray-300">{item.before}</p>
                </div>
                <ArrowRight className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 flex-1">
                  <h4 className="text-green-400 font-semibold mb-2">СЛЕД</h4>
                  <p className="text-gray-300">{item.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Услуги и цени
            </h2>
            <p className="text-xl text-gray-300">
              Прозрачно ценообразуване без скрити такси
            </p>
          </motion.div>

          {/* Facebook Page Service */}
          <div className="max-w-4xl mx-auto mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{service.price} лв.</div>
                  <p className="text-gray-400">{service.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Campaign Pricing */}
          <div className="grid lg:grid-cols-3 gap-8">
            {campaignPricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {plan.type === 'maintenance-large' ? `${plan.price} от бюджета` : `${plan.price} лв.`}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/request-project"
                  className="block w-full text-center py-3 bg-transparent border-2 border-blue-500 text-blue-400 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all"
                >
                  Заяви оферта
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Нашите резултати говорят
            </h2>
            <p className="text-xl text-gray-300">
              Средни показатели от Meta Ads кампаниите ни
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{metric.value}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.metric}</h3>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Казуси за изследване
            </h2>
            <p className="text-xl text-gray-300">
              Реални резултати от наши Meta Ads кампании
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{study.client}</h3>
                  <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {study.industry}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Предизвикателство:</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Решение:</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-4">Резултати:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-3">
                          <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-300 text-sm">Инвестиция:</p>
                        <p className="text-white font-bold">{study.investment} лв.</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-green-400" />
                      <div>
                        <p className="text-gray-300 text-sm">Възвръщаемост:</p>
                        <p className="text-green-400 font-bold">{study.returns} лв.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-indigo-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Отзиви на клиенти
            </h2>
            <p className="text-xl text-gray-300">
              Какво казват нашите доволни клиенти
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-blue-400">{testimonial.business}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4">"{testimonial.text}"</p>
                
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-400 font-semibold">{testimonial.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Готови за успешни Meta Ads?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Стартирайте вашата първа рентабилна кампания днес
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">ROI гаранция или връщаме парите</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-project"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <Share2 className="w-6 h-6" />
                Започни Meta Ads кампания
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="viber://chat?number=+359882717158"
                className="bg-transparent border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                Безплатна стратегия
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MetaAdsPage;