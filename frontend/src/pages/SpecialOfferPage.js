import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock, 
  Target,
  Globe,
  Smartphone,
  Mail,
  Facebook,
  TrendingUp,
  Plus,
  Minus
} from 'lucide-react';

const SpecialOfferPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const packageFeatures = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Професионален уеб сайт',
      description: 'Модерен, responsive дизайн оптимизиран за всички устройства'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Мобилна оптимизация',
      description: 'Перфектно изглежда на телефони, таблети и десктоп'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Контакт форма',
      description: 'Вградена форма за улавяне на потенциални клиенти'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: 'Facebook бизнес страница',
      description: 'Създаване и оптимизация на професионален Facebook профил'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'SEO оптимизация',
      description: 'Базова оптимизация за по-добра видимост в Google'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Стратегия за първия месец',
      description: 'Персонализиран план за стартиране на онлайн присъствието'
    }
  ];

  const bonuses = [
    'Създаване на Instagram бизнес профил',
    'Свързване на Instagram с Facebook страницата',
    'Подготовка на първите 4 поста за социални мрежи',
    'Безплатна поддръжка за първите 30 дни',
    'Ръководство за управление на сайта'
  ];

  const addOns = [
    { name: 'Професионален лого дизайн', price: 100 },
    { name: 'Копирайтинг (тексты за сайта)', price: 100 },
    { name: 'Втора езикова версия', price: 150 },
    { name: 'Обработка на 10 снимки', price: 100 },
    { name: 'Обработка на 20 снимки', price: 190 },
    { name: 'Обработка на 30 снимки', price: 280 }
  ];

  const testimonials = [
    {
      name: 'Анна Димитрова',
      business: 'Boutique Anna',
      text: 'Пакетът "Дигитален старт" беше точно това, от което се нуждаехме! За 249 лв. получихме професионален сайт и Facebook страница. Вече имаме първите си онлайн клиенти.',
      result: '+150% онлайн продажби за първия месец',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2ee7ed3?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Петър Стойчев',
      business: 'Майстор Петър ООД',
      text: 'Като малък бизнес нямахме голям бюджет, но този пакет ни даде всичко необходимо. Сега получаваме запитвания всеки ден чрез сайта.',
      result: '+200% запитвания за услуги',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const faqs = [
    {
      question: 'Какво точно включва пакетът?',
      answer: 'Пакетът включва създаване на професионален уеб сайт (до 5 страници), мобилна оптимизация, контакт форма, създаване на Facebook бизнес страница, базова SEO оптимизация и стратегия за първия месец.'
    },
    {
      question: 'За колко време се реализира проектът?',
      answer: 'Обикновено завършваме проекта за 7-10 работни дни след получаване на всички необходими материали от вас.'
    },
    {
      question: 'Трябва ли да плащам за хостинг и домейн?',
      answer: 'Хостингът и домейнът не са включени в цената. Можем да ви препоръчаме качествени доставчици или да организираме това за вас на отделна цена.'
    },
    {
      question: 'Мога ли да променям съдържанието на сайта?',
      answer: 'Да, ще получите лесна за използване система за управление, където можете да променяте текстове, снимки и да добавяте нови страници.'
    },
    {
      question: 'Имате ли гаранция за качеството?',
      answer: 'Да, предлагаме 30-дневна гаранция. Ако не сте доволни от резултата, ще преработим проекта безплатно.'
    },
    {
      question: 'Подходящ ли е този пакет за всякакъв бизнес?',
      answer: 'Този пакет е идеален за малки бизнеси, стартиращи компании, фрийлансъри и всеки, който иска качествено онлайн присъствие с ограничен бюджет.'
    }
  ];

  const beforeAfterData = {
    before: {
      title: 'ПРЕДИ',
      points: [
        'Няма онлайн присъствие',
        'Загубени потенциални клиенти',
        'Сложно намиране на информация',
        'Липса на доверие',
        'Конкурентно неравенство'
      ]
    },
    after: {
      title: 'СЛЕД',
      points: [
        'Професионален уеб сайт',
        'Активни социални мрежи',
        'Лесен контакт с клиенти',
        'Увеличено доверие',
        'Конкурентно предимство'
      ]
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495576775051-8af0d10f19b1"
            alt="Special offer background"
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
            {/* Limited Time Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-6 py-2 mb-6">
              <Clock className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-semibold">Ограничена оферта</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Пакет
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}"Дигитален старт"
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Всичко необходимо за стартиране на вашия онлайн бизнес
              <br />
              <strong className="text-purple-400">За малки бизнеси с големи амбиции</strong>
            </p>

            {/* Price */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  249 лв.
                </div>
                <div className="text-gray-400 line-through text-xl mb-2">399 лв.</div>
                <div className="text-green-400 font-semibold text-lg mb-4">Спестявате 150 лв.!</div>
                <div className="text-purple-400 font-medium">Еднократно плащане</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-project"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Поръчай сега
                <ArrowRight className="w-5 h-5" />
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

      {/* Package Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Какво получавате?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплетно дигитално решение за вашия бизнес
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
              >
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
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
              Трансформацията
            </h2>
            <p className="text-xl text-gray-300">
              Вижте разликата, която правим
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">{beforeAfterData.before.title}</h3>
                <ul className="space-y-4">
                  {beforeAfterData.before.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6">{beforeAfterData.after.title}</h3>
                <ul className="space-y-4">
                  {beforeAfterData.after.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Безплатни бонуси
            </h2>
            <p className="text-xl text-gray-300">
              Допълнителна стойност без допълнителна цена
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Получавате безплатно:</h3>
              <ul className="space-y-4">
                {bonuses.map((bonus, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{bonus}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Допълнителни услуги
            </h2>
            <p className="text-xl text-gray-300">
              Разширете пакета според вашите нужди
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
              >
                <h4 className="text-white font-semibold mb-2">{addon.name}</h4>
                <div className="text-purple-400 font-bold text-xl">+{addon.price} лв.</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Успешни истории
            </h2>
            <p className="text-xl text-gray-300">
              Реални резултати от реални клиенти
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
                    <p className="text-purple-400">{testimonial.business}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4">"{testimonial.text}"</p>
                
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-400 font-semibold text-sm">{testimonial.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Често задавани въпроси
            </h2>
            <p className="text-xl text-gray-300">
              Отговори на най-важните въпроси
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-purple-500/10 transition-colors"
                >
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
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
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Не чакайте повече!
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Започнете вашето дигитално пътешествие днес с нашия специален пакет
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="text-green-400 font-semibold">30-дневна гаранция</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-project"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2"
                >
                  <Zap className="w-6 h-6" />
                  Поръчай сега - 249 лв.
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpecialOfferPage;