import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, TrendingUp, Eye, Users } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Всички' },
    { id: 'websites', name: 'Уеб сайтове' },
    { id: 'funnels', name: 'Продажбени фунии' },
    { id: 'ads', name: 'Реклами' },
    { id: 'design', name: 'Дизайн' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce сайт за мода',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1618544976420-1f213fcf2052?w=600&h=400&fit=crop',
      client: 'Fashion Boutique',
      date: '2024-12',
      results: [
        '+250% онлайн продажби',
        '15,000 месечни посещения',
        '4.2% конверсия'
      ],
      services: ['Уеб дизайн', 'E-commerce', 'SEO'],
      link: '#',
      description: 'Модерен e-commerce сайт с интегрирана платежна система и CMS за лесно управление на продуктите.'
    },
    {
      id: 2,
      title: 'Продажбена фуния за онлайн курс',
      category: 'funnels',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      client: 'Digital Education',
      date: '2024-11',
      results: [
        '18% конверсия',
        'ROI 4.8x',
        '500+ студенти записани'
      ],
      services: ['Landing Page', 'CRO', 'A/B Testing'],
      link: '#',
      description: 'Високо-конвертираща продажбена фуния за образователен курс с интегрирани плащания и автоматизирана комуникация.'
    },
    {
      id: 3,
      title: 'Meta Ads кампания за ресторант',
      category: 'ads',
      image: 'https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg?w=600&h=400&fit=crop',
      client: 'Gourmet Restaurant',
      date: '2024-11',
      results: [
        'ROAS 6.1x',
        '+320% резервации',
        '250% растеж в следачи'
      ],
      services: ['Meta Ads', 'Creative Design', 'Targeting'],
      link: '#',
      description: 'Успешна социална медия кампания с location-based таргетиране и креативни Instagram Stories реклами.'
    },
    {
      id: 4,
      title: 'Корпоративен сайт за консултантска фирма',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1495576775051-8af0d10f19b1?w=600&h=400&fit=crop',
      client: 'Business Consulting Pro',
      date: '2024-10',
      results: [
        '+180% запитвания',
        'Professional image',
        'Lead generation 24/7'
      ],
      services: ['Corporate Design', 'Lead Forms', 'Analytics'],
      link: '#',
      description: 'Професионален корпоративен сайт с фокус върху доверие и генериране на бизнес лийдове.'
    },
    {
      id: 5,
      title: 'Google Ads за медицински център',
      category: 'ads',
      image: 'https://images.pexels.com/photos/4957793/pexels-photo-4957793.jpeg?w=600&h=400&fit=crop',
      client: 'Health Center Sofia',
      date: '2024-10',
      results: [
        'Cost per lead -60%',
        '+280% записвания',
        'ROI 4.8x'
      ],
      services: ['Google Ads', 'Local SEO', 'Landing Pages'],
      link: '#',
      description: 'Локална Google Ads кампания за медицински център с фокус върху urgent healthcare keywords.'
    },
    {
      id: 6,
      title: 'Продажбена фуния за SaaS продукт',
      category: 'funnels',
      image: 'https://images.unsplash.com/photo-1617695744007-68ef55752789?w=600&h=400&fit=crop',
      client: 'TechStart Bulgaria',
      date: '2024-09',
      results: [
        '22% trial signup rate',
        '12% trial to paid',
        'MRR +150%'
      ],
      services: ['SaaS Funnel', 'Email Automation', 'Analytics'],
      link: '#',
      description: 'Multi-step продажбена фуния за SaaS платформа с free trial и automated email sequences.'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const stats = [
    { label: 'Завършени проекта', value: '100+', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Доволни клиенти', value: '85+', icon: <Users className="w-6 h-6" /> },
    { label: 'Среден ROI', value: '340%', icon: <Eye className="w-6 h-6" /> },
    { label: 'Години опит', value: '5+', icon: <Calendar className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052"
            alt="Portfolio background"
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
              Нашето
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}портфолио
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Реални проекти с измерими резултати и доволни клиенти
              <br />
              <strong className="text-purple-400">Всеки проект е история за успех</strong>
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

      {/* Portfolio Grid */}
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

          {/* Portfolio Items */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>

                  {/* External Link */}
                  {item.link && (
                    <div className="absolute top-4 right-4">
                      <a
                        href={item.link}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-gray-400 text-sm">{item.date}</span>
                  </div>

                  <p className="text-purple-400 font-semibold mb-3">{item.client}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                  {/* Services Used */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-green-400 font-semibold mb-3">Постигнати резултати:</h4>
                    {item.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/request-project"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors font-semibold"
                  >
                    Подобен проект
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Готови за собствен успешен проект?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Свържете се с нас за безплатна консултация и персонализирана оферта
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-project"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2"
              >
                Заяви проект
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

export default PortfolioPage;