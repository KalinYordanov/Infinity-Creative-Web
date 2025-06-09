import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  User,
  Building
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    agreeTo: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Viber чат',
      description: 'Най-бързият начин за връзка',
      contact: '0882 717 158',
      action: 'viber://chat?number=+359882717158',
      color: 'from-purple-500 to-pink-500',
      available: '24/7 бърз отговор'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Телефон',
      description: 'Директна телефонна връзка',
      contact: '0882 717 158',
      action: 'tel:+359882717158',
      color: 'from-green-500 to-blue-500',
      available: 'Пн-Пт: 9:00-18:00'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Имейл',
      description: 'За детайлни запитвания',
      contact: 'info@infinitycreative.bg',
      action: 'mailto:info@infinitycreative.bg',
      color: 'from-blue-500 to-cyan-500',
      available: 'Отговор до 2 часа'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Офис',
      description: 'Среща при необходимост',
      contact: 'София, България',
      action: '#',
      color: 'from-orange-500 to-red-500',
      available: 'По предварително уговаряне'
    }
  ];

  const workingHours = [
    { day: 'Понеделник - Петък', time: '09:00 - 18:00' },
    { day: 'Събота', time: '10:00 - 16:00' },
    { day: 'Неделя', time: 'Затворено' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be form submission logic
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const faqItems = [
    {
      question: 'Колко време отнема да получа оферта?',
      answer: 'Обикновено изпращаме детайлна оферта в рамките на 24 часа след получаване на вашето запитване.'
    },
    {
      question: 'Предлагате ли безплатни консултации?',
      answer: 'Да, предлагаме безплатна първоначална консултация за всички услуги. Свържете се с нас чрез Viber или телефон.'
    },
    {
      question: 'Работите ли с клиенти от цялата страна?',
      answer: 'Да, работим с клиенти от цяла България. Повечето наши услуги могат да се изпълняват дистанционно.'
    },
    {
      question: 'Какви са методите за плащане?',
      answer: 'Приемаме банкови преводи, PayPal и плащане с карта. За по-големи проекти предлагаме разсрочено плащане.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495576775051-8af0d10f19b1"
            alt="Contact background"
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
              <MessageCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">Отговаряме в рамките на 2 часа</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Свържете се
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}с нас
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Готови сме да обсъдим вашия проект и да предложим най-доброто решение
              <br />
              <strong className="text-purple-400">Безплатна консултация • Бърз отговор • Професионален подход</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="viber://chat?number=+359882717158"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Viber чат
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+359882717158"
                className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Обадете се
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Начини за връзка
            </h2>
            <p className="text-xl text-gray-300">
              Изберете най-удобния за вас начин за контакт
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={method.action}
                  className="block bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{method.title}</h3>
                  <p className="text-gray-400 text-center mb-4">{method.description}</p>
                  <p className="text-purple-400 font-semibold text-center mb-2">{method.contact}</p>
                  <p className="text-green-400 text-sm text-center">{method.available}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">Изпратете ни съобщение</h3>
              
              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-green-400 mb-4">Съобщението е изпратено!</h4>
                  <p className="text-gray-300">Благодарим ви за интереса! Ще се свържем с вас в рамките на 2 часа.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Име *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="Вашето име"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Имейл *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="0888 123 456"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Компания
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="Името на компанията"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Тема</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Изберете тема</option>
                      <option value="website">Уеб сайт</option>
                      <option value="ads">Реклами (Meta/Google)</option>
                      <option value="seo">SEO оптимизация</option>
                      <option value="design">Дизайн услуги</option>
                      <option value="package">Пакет "Дигитален старт"</option>
                      <option value="other">Друго</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Съобщение *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Опишете вашия проект или нуждите си..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="agreeTo"
                      checked={formData.agreeTo}
                      onChange={handleInputChange}
                      required
                      className="w-5 h-5 text-purple-500 bg-slate-800 border-purple-500/30 rounded focus:ring-purple-500 mt-1"
                    />
                    <label className="text-gray-300 text-sm">
                      Съгласен/а съм с обработката на личните ми данни за целите на предоставяне на услугата. 
                      <Link to="/privacy" className="text-purple-400 hover:text-purple-300 ml-1">
                        Политика за поверителност
                      </Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.agreeTo}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Изпрати съобщение
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info & Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Working Hours */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-purple-400" />
                  Работно време
                </h4>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-purple-400 font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-semibold text-sm">
                    💬 Viber чат: Отговаряме 24/7 за спешни въпроси
                  </p>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-white mb-6">Често задавани въпроси</h4>
                <div className="space-y-4">
                  {faqItems.slice(0, 2).map((faq, index) => (
                    <div key={index}>
                      <h5 className="text-white font-semibold mb-2">{faq.question}</h5>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/special-offer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors font-semibold mt-4"
                >
                  Вижте всички въпроси
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Partnership */}
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-white mb-4">Партньорства</h4>
                <p className="text-gray-300 mb-6">
                  Търсим агенции и фрийлансъри за дългосрочно сътрудничество. 
                  Предлагаме изгодни условия за препоръки и joint ventures.
                </p>
                <a
                  href="viber://chat?number=+359882717158"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
                >
                  Обсъди партньорство
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
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
              Готови за първата стъпка?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Свържете се с нас днес за безплатна консултация и персонализирана оферта
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/special-offer"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-6 h-6" />
                Специална оферта
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/request-project"
                className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                Заяви проект
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;