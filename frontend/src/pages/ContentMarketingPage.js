import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool, Star, Zap } from 'lucide-react';

const ContentMarketingPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-green-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-6">
              <PenTool className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-semibold">Скоро</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Контент маркетинг
              <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                {' '}услуги
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Стратегическо създаване на съдържание за ангажиране на аудиторията
              <br />
              <strong className="text-teal-400">Скоро ще бъде налично</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-project"
                className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-green-600 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Заяви информация
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketingPage;