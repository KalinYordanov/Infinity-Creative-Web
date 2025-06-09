import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Target,
  TrendingUp,
  Search,
  DollarSign,
  BarChart3,
  Eye,
  MousePointer,
  Award,
  Shield,
  Clock,
  Star
} from 'lucide-react';

const GoogleAdsPage = () => {
  const campaignPricing = [
    {
      name: 'Първоначална настройка',
      price: 120,
      description: 'Пълно създаване и конфигуриране на Google Ads кампания',
      features: [
        'Keyword research и анализ на конкуренцията',
        'Създаване на рекламни групи и реклами',
        'Настройване на Extensions (разширения)',
        'Оптимизация на Quality Score',
        'Настройване на конверсионно проследяване',
        'Negative keywords списък',
        'Geo-targeting и audience настройки',
        'Bid strategy оптимизация'
      ],
      type: 'setup',
      popular: false
    },
    {
      name: 'Поддръжка до 500 лв. бюджет',
      price: 100,
      description: 'Месечно управление и оптимизация на малки кампании',
      features: [
        'Ежедневен мониторинг на резултатите',
        'Bid management и оптимизация',
        'Keyword optimization и добавяне на нови',
        'Ad copy A/B тестване',
        'Quality Score подобрения',
        'Месечна детайлна отчетност',
        'Performance анализ и препоръки',
        'Техническа поддръжка'
      ],
      type: 'maintenance-small',
      popular: true
    },
    {
      name: 'Поддръжка над 500 лв. бюджет',
      price: '20%',
      description: 'Пълно управление за мащабни рекламни кампании',
      features: [
        'Многоканално campaign management',
        'Advanced bidding strategies',
        'Remarketing кампании',
        'Shopping Ads (за e-commerce)',
        'Display Network кампании',
        'YouTube Ads интеграция',
        'Детайлна аналитика и reporting',
        'Стратегически консултации за растеж'
      ],
      type: 'maintenance-large',
      popular: false
    }
  ];

  const whyGoogleAds = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Търсене с намерение',
      description: 'Достигате до потребители, които активно търсят вашите продукти/услуги',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Моментална видимост',
      description: 'Появявайте се на първа позиция в Google мигновено след стартиране',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Прецизно таргетиране',
      description: 'Локация, време, устройство, демография - контролирайте всичко',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Измерими резултати',
      description: 'Проследявайте всеки клик, конверсия и върната инвестиция',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const beforeAfter = [
    {
      before: 'Трудно намиране в търсачките',
      after: 'Първа позиция за ключови думи'
    },
    {
      before: 'Ниска видимост на уебсайта',
      after: 'Доминиране в резултатите'
    },
    {
      before: 'Неконтролируем маркетинг бюджет',
      after: 'Прецизен ROI контрол'
    },
    {
      before: 'Бавен растеж на клиентската база',
      after: 'Бърз приток на качествени лийдове'
    }
  ];

  const successMetrics = [
    { metric: 'Средно CTR', value: '8.2%', description: 'Click-Through Rate на кампаниите ни' },
    { metric: 'Quality Score', value: '8.7/10', description: 'Средна оценка за качество на рекламите' },
    { metric: 'Конверсии', value: '+340%', description: 'Увеличение спрямо органичния трафик' },
    { metric: 'Cost per Click', value: '-45%', description: 'Намаление спрямо industry average' }
  ];

  const caseStudies = [
    {
      client: 'Адвокатска кантора',
      industry: 'Legal Services',
      challenge: 'Високи разходи за традиционна реклама без измерими резултати',
      solution: 'Местни Google Ads кампании с фокус върху urgent keywords',
      results: [
        'Cost per lead намален с 60%',
        '280% увеличение в запитвания',
        'ROI 4.8x за първите 3 месеца',
        '15 нови клиента месечно средно'
      ],
      investment: 1200,
      returns: 5760
    },
    {
      client: 'Онлайн магазин за спорт',
      industry: 'E-commerce',
      challenge: 'Конкуренция с големи брандове и високи CPC цени',
      solution: 'Long-tail keywords стратегия и Shopping Ads кампании',
      results: [
        'ROAS (Return on Ad Spend) 6.2x',
        '450% увеличение в онлайн продажби',
        'Average order value +35%',
        'Брандова узнаваемост +200%'
      ],
      investment: 2000,
      returns: 12400
    }
  ];

  const adTypes = [
    {
      type: 'Search Ads',
      description: 'Текстови реклами в резултатите от търсене',
      bestFor: 'Direct response и висок conversion intent',
      icon: <Search className="w-6 h-6" />
    },
    {
      type: 'Display Ads',
      description: 'Визуални реклами в Google Display Network',
      bestFor: 'Brand awareness и remarketing',
      icon: <Eye className="w-6 h-6" />
    },
    {
      type: 'Shopping Ads',
      description: 'Продуктови реклами с цени и изображения',
      bestFor: 'E-commerce и retail бизнеси',
      icon: <Award className="w-6 h-6" />
    },
    {
      type: 'YouTube Ads',
      description: 'Видео реклами в YouTube платформата',
      bestFor: 'Engagement и brand storytelling',
      icon: <MousePointer className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: 'Николай Василев',
      business: 'NV Consulting',
      text: 'Google Ads кампанията ни донесе качествени бизнес лийдове от първата седмица. ROI-ът е фантастичен!',
      result: 'ROI 5.4x за първите 90 дни',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Десислава Петрова',
      business: 'DP Beauty Clinic',
      text: 'Благодарение на професионалното управление на кампаниите, получаваме 3-4 нови клиента всеки ден.',
      result: '+250% нови записвания за процедури',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2ee7ed3?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
            alt="Google Ads background"
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-6 py-2 mb-6">
              <Search className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">8.5 милиарда търсения дневно</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Google Ads за
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {' '}моментални резултати
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Достигнете до клиенти в момента, когато търсят вашите услуги
              <br />
              <strong className="text-green-400">Висок намерение • Моментални резултати • Контролиран бюджет</strong>
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-4">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-green-400 font-semibold text-sm">Гарантиран ROI</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-400 font-semibold text-sm">Моментален старт</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-purple-400 font-semibold text-sm">Детайлна аналитика</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-4">
                <Target className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <p className="text-pink-400 font-semibold text-sm">Прецизно таргетиране</p>
              </div>
            </div>

            <Link
              to="/request-project"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Започнете кампания
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Google Ads */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Защо Google Ads?
            </h2>
            <p className="text-xl text-gray-300">
              Най-ефективният начин да достигнете до клиенти с покупателно намерение
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyGoogleAds.map((reason, index) => (
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

      {/* Ad Types */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Типове Google реклами
            </h2>
            <p className="text-xl text-gray-300">
              Избираме правилния формат за вашите цели
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adTypes.map((ad, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all"
              >
                <div className="text-green-400 mb-4">
                  {ad.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{ad.type}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{ad.description}</p>
                <div className="text-green-400 text-sm font-semibold">
                  Най-добър за: {ad.bestFor}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 bg-gradient-to-r from-green-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Трансформация на онлайн присъствието
            </h2>
            <p className="text-xl text-gray-300">
              От невидимост към доминиране в търсенията
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
                <ArrowRight className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 flex-1">
                  <h4 className="text-green-400 font-semibold mb-2">СЛЕД</h4>
                  <p className="text-gray-300">{item.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
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
              Прозрачно ценообразуване за всеки етап от кампанията
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {campaignPricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-green-500/50 shadow-2xl shadow-green-500/20' 
                    : 'border-green-500/20'
                } hover:border-green-500/40 transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Най-популярен
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {plan.type === 'maintenance-large' ? `${plan.price} от бюджета` : `${plan.price} лв.`}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/request-project"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 shadow-lg'
                      : 'bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                  }`}
                >
                  Заяви {plan.name.toLowerCase()}
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
              Нашите Google Ads резултати
            </h2>
            <p className="text-xl text-gray-300">
              Средни показатели от управляваните кампании
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
                className="text-center bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8"
              >
                <div className="text-4xl font-bold text-green-400 mb-2">{metric.value}</div>
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
              Реални резултати от Google Ads кампании
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
                className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{study.client}</h3>
                  <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
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
                        <p className="text-gray-300 text-sm">Месечна инвестиция:</p>
                        <p className="text-white font-bold">{study.investment} лв.</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-green-400" />
                      <div>
                        <p className="text-gray-300 text-sm">Месечна възвръщаемост:</p>
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
      <section className="py-20 bg-gradient-to-r from-green-600/10 to-blue-600/10">
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
              Истории за успех с Google Ads
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
                className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-green-400">{testimonial.business}</p>
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
              Готови за Google Ads успех?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Започнете да привличате клиенти с високо намерение още днес
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">Гарантиран ROI или връщаме инвестицията</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-project"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <Search className="w-6 h-6" />
                Започни Google Ads кампания
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="viber://chat?number=+359882717158"
                className="bg-transparent border-2 border-green-500 text-green-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500 hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                Безплатна консултация
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GoogleAdsPage;