import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Уеб сайтове', path: '/services/websites' },
    { name: 'Продажбени фунии', path: '/services/sales-funnels' },
    { name: 'Meta Ads', path: '/services/meta-ads' },
    { name: 'Google Ads', path: '/services/google-ads' },
    { name: 'Дизайн', path: '/services/design' },
    { name: 'SEO оптимизация', path: '/services/seo' }
  ];

  const quickLinks = [
    { name: 'Начало', path: '/' },
    { name: 'Портфолио', path: '/portfolio' },
    { name: 'Отзиви', path: '/testimonials' },
    { name: 'Контакт', path: '/contact' },
    { name: 'Специална оферта', path: '/special-offer' }
  ];

  return (
    <footer className="bg-slate-900/50 border-t border-purple-500/20 backdrop-blur-sm">
      {/* Pre-footer CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готови ли сте да трансформирате вашия бизнес?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Започнете своето дигитално пътешествие с нашия специален пакет за 249 лв.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/special-offer"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Вижте специалната оферта
            </Link>
            <a
              href="viber://chat?number=+359882717158"
              className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Viber чат
            </a>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">∞</span>
              </div>
              <span className="text-white text-xl font-bold">Infinity Creative</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Дигитална агенция, специализирана в уеб дизайн, дигитален маркетинг и SEO оптимизация за малкия бизнес и стартиращи компании.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-colors cursor-pointer">
                <span className="text-purple-400">f</span>
              </div>
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-colors cursor-pointer">
                <span className="text-purple-400">ig</span>
              </div>
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-colors cursor-pointer">
                <span className="text-purple-400">in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Услуги</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Бързи връзки</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Контакт</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-purple-400" />
                <a
                  href="viber://chat?number=+359882717158"
                  className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                >
                  0882 717 158
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400 text-sm">0882 717 158</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400 text-sm">info@infinitycreative.bg</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400 text-sm">София, България</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Infinity Creative. Всички права запазени.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">
              Политика за поверителност
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">
              Условия за ползване
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;