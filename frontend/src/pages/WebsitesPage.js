import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Globe,
  Smartphone,
  Search,
  Palette,
  Shield,
  Clock,
  Target,
  TrendingUp,
  Star
} from 'lucide-react';

const WebsitesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('small');
  const [selectedAddons, setSelectedAddons] = useState({});

  const pricingPlans = [
    {
      id: 'business-card',
      name: 'УЕБ САЙТ "ВИЗИТКА"',
      price: 150,
      description: 'Идеален за малки бизнеси, които искат да започнат онлайн',
      features: [
        'Една страница (One-page)',
        'Мобилна адаптивност',
        '1 езикова версия',
        'Възможност за подменюта',
        'Фотогалерия до 20 снимки',
        '1 контакт-форма',
        'Google карта',
        'Връзка с Facebook'
      ],
      addons: [
        { name: 'Изработка на лого', price: 100 },
        { name: 'Копирайтинг', price: 100 },
        { name: 'Втора езикова версия', price: 150 },
        { name: 'Обработка на 10 снимки', price: 100 },
        { name: 'Обработка на 20 снимки', price: 190 },
        { name: 'Обработка на 30 снимки', price: 280 }
      ],
      gradient: 'from-green-500 to-blue-500',
      popular: false
    },
    {
      id: 'small',
      name: 'УЕБ САЙТ "МАЛЪК"',
      price: 500,
      description: 'Най-популярният избор за растящи бизнеси',
      features: [
        'Индивидуален дизайн',
        'Мобилна адаптивност',
        '1 езикова версия',
        'До 10 страници в основно меню',
        'Фотогалерия',
        'Контактна форма',
        'Google карта',
        'Връзка с Facebook',
        'Раздел блог/новини'
      ],
      addons: [
        { name: 'Изработка на лого', price: 100 },
        { name: 'Копирайтинг', price: 100 },
        { name: 'Втора езикова версия', price: 150 },
        { name: 'Обработка на 10 снимки', price: 100 },
        { name: 'Обработка на 20 снимки', price: 190 },
        { name: 'Обработка на 30 снимки', price: 280 }
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 'large',
      name: 'УЕБ САЙТ "ГОЛЯМ"',
      price: 800,
      description: 'Комплексно решение за амбициозни проекти',
      features: [
        'Индивидуален дизайн',
        'Мобилна адаптивност',
        '2 езикови версии',
        'До 30 страници в основно меню',
        'Фотогалерия',
        'Контактни форми',
        'Google карти',
        'Връзка с Facebook',
        'Раздел блог/новини'
      ],
      addons: [
        { name: 'Изработка на лого', price: 100 },
        { name: 'Копирайтинг', price: 100 },
        { name: 'Трета езикова версия', price: 150 },
        { name: 'Обработка на 10 снимки', price: 100 },
        { name: 'Обработка на 20 снимки', price: 190 },
        { name: 'Обработка на 30 снимки', price: 280 }
      ],
      gradient: 'from-blue-500 to-cyan-500',
      popular: false
    }
  ];

  const maintenancePlans = [
    { name: 'Без договор', price: 40, unit: 'лв./час', description: 'Плащане по час за необходими промени' },
    { name: '3-месечен абонамент', price: 35, unit: 'лв./час', description: 'По-изгодна цена с краткосрочен ангажимент' },
    { name: '6-месечен абонамент', price: 35, unit: 'лв./час', description: 'Балансирано решение цена-гъвкавост' },
    { name: '12-месечен абонамент', price: 30, unit: 'лв./час', description: 'Най-изгодната цена за дългосрочно партньорство' }
  ];

  const seoPlans = [
    { name: 'SEO SMALL', price: 140, hours: 4, description: 'Базова SEO оптимизация за малки сайтове' },
    { name: 'SEO MIDDLE', price: 350, hours: 9, description: 'Комплексна SEO стратегия за растящи бизнеси' },
    { name: 'SEO LARGE', price: 560, hours: 16, description: 'Агресивна SEO кампания за максимални резултати' }
  ];

  const beforeAfter = [
    {
      before: 'Само 20% от търсенията ви намират',
      after: 'Увеличение с 300% в онлайн видимост'
    },
    {
      before: 'Загубвате клиенти заради лош дизайн',
      after: '85% увеличение в конверсии'
    },
    {
      before: 'Не работи на мобилни устройства',
      after: '100% мобилна съвместимост'
    },
    {
      before: 'Бавно зареждане на страницата',
      after: '3x по-бързо зареждане'
    }
  ];

  const testimonials = [
    {
      name: 'Иван Петров',
      company: 'Строителни услуги ИП',
      text: 'Новият ни сайт донесе 200% повече запитвания за първите 3 месеца. Инвестицията се върна много бързо.',
      result: '+200% запитвания',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Мария Георгиева',
      company: 'Салон за красота Мария',
      text: 'Клиентките ми постоянно хвалят новия сайт. Резервациите онлайн се удвоиха.',
      result: '+100% онлайн резервации',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2ee7ed3?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const calculateTotal = (plan) => {
    let total = plan.price;
    Object.entries(selectedAddons).forEach(([key, selected]) => {
      if (selected && key.startsWith(plan.id)) {
        const addonName = key.replace(`${plan.id}-`, '');
        const addon = plan.addons.find(a => a.name === addonName);
        if (addon) total += addon.price;
      }
    });
    return total;
  };

  const handleAddonChange = (planId, addonName, checked) => {
    setSelectedAddons(prev => ({
      ...prev,
      [`${planId}-${addonName}`]: checked
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Alex Hormozi Big Idea */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Web development background"
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
            {/* Big Idea */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-6 py-2 mb-6">
              <Globe className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">Гарантирани резултати</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Уеб сайт, който
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}генерира клиенти
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Професионални уеб сайтове, проектирани да превръщат посетители в клиенти
              <br />
              <strong className="text-purple-400">Максимална стойност • Минимален риск • Бързи резултати</strong>
            </p>

            {/* Value Proposition Formula */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-4">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-green-400 font-semibold text-sm">30-дневна гаранция</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-400 font-semibold text-sm">7-14 дни готовност</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-purple-400 font-semibold text-sm">Оптимизиран за конверсии</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-4">
                <TrendingUp className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <p className="text-pink-400 font-semibold text-sm">Доказани резултати</p>
              </div>
            </div>

            <Link
              to="/request-project"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Започнете сега
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Before/After Section - Alex Hormozi Structure */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Трансформацията
            </h2>
            <p className="text-xl text-gray-300">
              Вижте разликата, която правим
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* Pricing Plans - Strategic Pricing with Bonuses */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Изберете вашия план
            </h2>
            <p className="text-xl text-gray-300">
              Прозрачно ценообразуване без скрити такси
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                    : 'border-purple-500/20'
                } hover:border-purple-500/40 transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Най-популярен
                    </div>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <Globe className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 text-center">{plan.name}</h3>
                <p className="text-gray-400 text-center mb-6">{plan.description}</p>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-white mb-2">
                    {calculateTotal(plan)} лв.
                  </div>
                  {plan.price < 800 && (
                    <p className="text-purple-400">Еднократно плащане</p>
                  )}
                  {plan.price >= 500 && (
                    <p className="text-green-400 text-sm">Опция за плащане на две вноски</p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Add-ons */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">Допълнителни услуги:</h4>
                  <div className="space-y-3">
                    {plan.addons.map((addon, addonIndex) => (
                      <label key={addonIndex} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAddons[`${plan.id}-${addon.name}`] || false}
                          onChange={(e) => handleAddonChange(plan.id, addon.name, e.target.checked)}
                          className="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="text-gray-300 flex-1">{addon.name}</span>
                        <span className="text-purple-400 font-semibold">+{addon.price} лв.</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    Общо: {calculateTotal(plan)} лв.
                  </div>
                </div>

                <Link
                  to="/request-project"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg'
                      : 'bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Заяви {plan.name.toLowerCase()}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & SEO Plans */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Maintenance Plans */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Поддръжка</h3>
              <div className="space-y-4">
                {maintenancePlans.map((plan, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-white font-semibold">{plan.name}</h4>
                      <span className="text-purple-400 font-bold">{plan.price} {plan.unit}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SEO Plans */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">SEO пакети</h3>
              <div className="space-y-4">
                {seoPlans.map((plan, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-white font-semibold">{plan.name}</h4>
                      <span className="text-purple-400 font-bold">{plan.price} лв./месец</span>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-400 text-sm">{plan.hours} часа месечно</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Доказани резултати
            </h2>
            <p className="text-xl text-gray-300">
              Реални истории от наши клиенти
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
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-purple-400">{testimonial.company}</p>
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
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Готови за професионален уеб сайт?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Започнете вашето дигитално пътешествие с гарантирани резултати
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">30-дневна гаранция за възвръщане на парите</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-project"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-6 h-6" />
                Заяви уеб сайт
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="viber://chat?number=+359882717158"
                className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all inline-flex items-center justify-center gap-2"
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

export default WebsitesPage;