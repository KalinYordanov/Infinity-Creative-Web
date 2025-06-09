import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Уеб сайтове', path: '/services/websites' },
    { name: 'Продажбени фунии', path: '/services/sales-funnels' },
    { name: 'Meta Ads', path: '/services/meta-ads' },
    { name: 'Google Ads', path: '/services/google-ads' },
    { name: 'Дизайн', path: '/services/design' },
    { name: 'Видео обработка', path: '/services/video-processing' },
    { name: 'Контент маркетинг', path: '/services/content-marketing' },
    { name: 'SEO оптимизация', path: '/services/seo' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">∞</span>
            </div>
            <span className="text-white text-xl font-bold">Infinity Creative</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-purple-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Начало
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                <span>Услуги</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-md rounded-lg border border-purple-500/20 shadow-xl"
                  >
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/portfolio' 
                  ? 'text-purple-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Портфолио
            </Link>
            
            <Link
              to="/testimonials"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/testimonials' 
                  ? 'text-purple-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Отзиви
            </Link>
            
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-purple-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Контакт
            </Link>

            <Link
              to="/request-project"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
            >
              Заяви проект
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 border border-purple-500/20"
            >
              <div className="py-4 space-y-2">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Начало
                </Link>
                
                <div className="px-4 py-2">
                  <span className="text-gray-400 text-sm font-medium">Услуги</span>
                  <div className="mt-2 space-y-1 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-1 text-sm text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/portfolio"
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Портфолио
                </Link>
                
                <Link
                  to="/testimonials"
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Отзиви
                </Link>
                
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Контакт
                </Link>
                
                <Link
                  to="/request-project"
                  className="block mx-4 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium text-center hover:from-purple-600 hover:to-blue-600 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Заяви проект
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;