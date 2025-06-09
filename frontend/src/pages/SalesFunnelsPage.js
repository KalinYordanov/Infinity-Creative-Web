import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Target,
  TrendingUp,
  Eye,
  MousePointer,
  CreditCard,
  BarChart3,
  Users,
  Shield,
  Clock,
  Star
} from 'lucide-react';

const SalesFunnelsPage = () => {
  const funnelStages = [
    {
      stage: 'Осведоменост',
      icon: <Eye className="w-8 h-8" />,
      description: 'Привличаме вниманието на потенциални клиенти',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      stage: 'Интерес',
      icon: <MousePointer className="w-8 h-8" />,
      description: 'Генерираме интерес към вашата оферта',
      color: 'from-purple-500 to-pink-500'
    },
    {
      stage: 'Решение',
      icon: <Users className="w-8 h-8" />,
      description: 'Убеждаваме клиентите да вземат решение',
      color: 'from-orange-500 to-red-500'
    },
    {
      stage: 'Действие',
      icon: <CreditCard className="w-8 h-8" />,
      description: 'Завършваме продажбата успешно',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const packageFeatures = [
    'Една страница (One-page) оптимизирана за конверсии',
    'Мобилна адаптивност за всички устройства',
    '1 езикова версия',
    'Възможност за подмяна на съдържание',
    'Фотогалерия до 20 снимки',
    '1 контакт-форма',
    'Връзка с Facebook пиксел',
    'Интеграция с Google Analytics',
    'Интеграция с Hotjar за поведенчески анализ',
    'Ордър форма за директни продажби',
    'CRO (Conversion Rate Optimization)',
    'A/B тест готовност'
  ];

  const addOns = [
    { name: 'Изработка на лого', price: 100 },
    { name: 'Копирайтинг', price: 100 },
    { name: 'Втора езикова версия', price: 150 },
    { name: 'Обработка на 10 снимки', price: 100 },
    { name: 'Обработка на 20 снимки', price: 190 },
    { name: 'Обработка на 30 снимки', price: 280 }
  ];

  const beforeAfter = [
    {
      before: 'Случайни посетители без цел',
      after: 'Целенасочени потенциални клиенти'
    },
    {
      before: '2-3% конверсия от трафика',
      after: '15-25% конверсия с оптимизация'
    },
    {
      before: 'Неясно какво иска клиентът',
      after: 'Ясен път към покупката'
    },
    {
      before: 'Загубени продажби заради объркване',
      after: 'Увеличени продажби с 300-500%'
    }
  ];

  const successStories = [
    {
      name: 'Стефан Димитров',
      business: 'Онлайн курсове',
      text: 'Продажбената фуния увеличи конверсиите ми от 3% на 18%. Месечните приходи се утроиха за 2 месеца.',
      result: '+500% ROI за първите 60 дни',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Елена Христова',
      business: 'Handmade бижута',
      text: 'Фунията за моите бижута работи 24/7. Сега получавам поръчки дори когато спя.',
      result: '+250% автоматични продажби',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2ee7ed3?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const caseStudy = {
    client: 'Fitness Coach Bulgaria',
    challenge: 'Ниски конверсии от Facebook Ads кампании',
    solution: 'Създадохме multi-step продажбена фуния с психологически тригери',
    results: [
      'Конверсии от 2.1% на 16.8%',
      'Cost per acquisition намален с 70%',
      'ROI увеличен от 1.2x на 4.7x',
      'Автоматизирана продажбена система'
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Big Idea */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
            alt="Sales funnel background"
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
            {/* Big Idea Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-6 py-2 mb-6">
              <Target className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">Увеличете продажбите с 300-500%</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Продажбена фуния, която
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}работи 24/7
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Автоматизирани системи за продажби, които превръщат посетители в клиенти
              <br />
              <strong className="text-purple-400">Постоянни продажби • Автоматизация • Измерими резултати</strong>
            </p>

            {/* Value Proposition Formula */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-4">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-green-400 font-semibold text-sm">ROI гаранция</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-400 font-semibold text-sm">7-10 дни готовност</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-purple-400 font-semibold text-sm">Напълно измеримо</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-4">
                <TrendingUp className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <p className="text-pink-400 font-semibold text-sm">Непрекъснато подобрение</p>
              </div>
            </div>

            <Link
              to="/request-project"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Започнете автоматизацията
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Funnel Stages Visualization */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              4-те етапа на успешната продажбена фуния
            </h2>
            <p className="text-xl text-gray-300">
              Научно доказан процес за максимизиране на конверсиите
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {funnelStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < funnelStages.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent z-0"></div>
                )}
                
                <div className={`w-20 h-20 bg-gradient-to-r ${stage.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10`}>
                  <div className="text-white">
                    {stage.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{stage.stage}</h3>
                <p className="text-gray-400 leading-relaxed">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Трансформацията на вашия бизнес
            </h2>
            <p className="text-xl text-gray-300">
              От хаотични продажби към автоматизирана система
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
                <ArrowRight className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 flex-1">
                  <h4 className="text-green-400 font-semibold mb-2">СЛЕД</h4>
                  <p className="text-gray-300">{item.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Пакет "Продажбена фуния"
            </h2>
            <p className="text-xl text-gray-300">
              Всичко необходимо за автоматизирани продажби
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 relative overflow-hidden">
              {/* Featured Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-bold">
                  Най-ефективна инвестиция
                </div>
              </div>

              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">Продажбена фуния</h3>
                <div className="text-5xl font-bold text-white mb-4">249 лв.</div>
                <p className="text-purple-400 text-lg">Еднократно плащане</p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {packageFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Add-ons */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">Допълнителни услуги:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {addOns.map((addon, index) => (
                    <div key={index} className="flex justify-between items-center bg-slate-700/50 rounded-lg p-4">
                      <span className="text-gray-300">{addon.name}</span>
                      <span className="text-purple-400 font-semibold">+{addon.price} лв.</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/request-project"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-3"
                >
                  <Zap className="w-6 h-6" />
                  Заяви продажбена фуния
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Казус за изследване
            </h2>
            <p className="text-xl text-gray-300">
              Как една продажбена фуния трансформира бизнес
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{caseStudy.client}</h3>
                <p className="text-xl text-gray-300">{caseStudy.challenge}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold text-purple-400 mb-6">Решение:</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">{caseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-green-400 mb-6">Резултати:</h4>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-lg">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Истории за успех
            </h2>
            <p className="text-xl text-gray-300">
              Реални резултати от реални клиенти
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
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
                    src={story.avatar}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">{story.name}</h4>
                    <p className="text-purple-400">{story.business}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4">"{story.text}"</p>
                
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-400 font-semibold text-lg">{story.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Готови за автоматизирани продажби?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Започнете да генерирате продажби 24/7 с нашата проверена система
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">ROI гаранция или връщаме парите</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-project"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <Target className="w-6 h-6" />
                Създай продажбена фуния
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="viber://chat?number=+359882717158"
                className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                Стратегическа консултация
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SalesFunnelsPage;