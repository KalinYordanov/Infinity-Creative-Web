import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Target,
  Calendar,
  DollarSign,
  MessageCircle,
  User,
  Building,
  Mail,
  Phone,
  FileText,
  Star
} from 'lucide-react';

const RequestProjectPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    email: '',
    phone: '',
    company: '',
    businessDescription: '',
    
    // Services
    services: [],
    
    // Budget & Timeline
    budget: '',
    timeline: '',
    
    // Additional Info
    additionalInfo: '',
    agreeTo: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: 'website-business-card', name: 'Уеб сайт "Визитка" (150 лв.)', category: 'website' },
    { id: 'website-small', name: 'Уеб сайт "Малък" (500 лв.)', category: 'website' },
    { id: 'website-large', name: 'Уеб сайт "Голям" (800 лв.)', category: 'website' },
    { id: 'sales-funnel', name: 'Продажбена фуния (249 лв.)', category: 'funnel' },
    { id: 'meta-ads', name: 'Meta Ads кампания', category: 'ads' },
    { id: 'google-ads', name: 'Google Ads кампания', category: 'ads' },
    { id: 'design', name: 'Графичен дизайн', category: 'design' },
    { id: 'video', name: 'Видео обработка', category: 'video' },
    { id: 'content', name: 'Контент маркетинг', category: 'content' },
    { id: 'seo', name: 'SEO оптимизация', category: 'seo' },
    { id: 'digital-start', name: 'Пакет "Дигитален старт" (249 лв.)', category: 'package' }
  ];

  const budgetOptions = [
    { id: 'under-500', label: 'до 500 лв.', value: 'under-500' },
    { id: '500-1000', label: '500 - 1000 лв.', value: '500-1000' },
    { id: '1000-2000', label: '1000 - 2000 лв.', value: '1000-2000' },
    { id: 'over-2000', label: 'над 2000 лв.', value: 'over-2000' }
  ];

  const timelineOptions = [
    { id: 'urgent', label: 'Спешно (до 1 седмица)', value: 'urgent' },
    { id: 'normal', label: 'Нормален (2-4 седмици)', value: 'normal' },
    { id: 'flexible', label: 'Гъвкав (над 1 месец)', value: 'flexible' }
  ];

  const steps = [
    { number: 1, title: 'Основна информация', icon: <User className="w-5 h-5" /> },
    { number: 2, title: 'Услуги', icon: <Target className="w-5 h-5" /> },
    { number: 3, title: 'Бюджет и срокове', icon: <DollarSign className="w-5 h-5" /> },
    { number: 4, title: 'Допълнителна информация', icon: <FileText className="w-5 h-5" /> }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleServiceChange = (serviceId, checked) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, serviceId]
        : prev.services.filter(id => id !== serviceId)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be form submission logic
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone && formData.businessDescription;
      case 2:
        return formData.services.length > 0;
      case 3:
        return true; // Budget and timeline are optional
      case 4:
        return formData.agreeTo;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-6">
                Заявката е изпратена успешно!
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Благодарим ви за доверието! Ще се свържем с вас в рамките на 2 часа с детайлна оферта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="viber://chat?number=+359882717158"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Viber чат
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                    setFormData({
                      name: '', email: '', phone: '', company: '', businessDescription: '',
                      services: [], budget: '', timeline: '', additionalInfo: '', agreeTo: false
                    });
                  }}
                  className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all"
                >
                  Нова заявка
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4957793/pexels-photo-4957793.jpeg"
            alt="Request project background"
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
              <Star className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">Безплатна оферта в рамките на 24 часа</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Заявете вашия
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}проект
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Започнете вашето дигитално пътешествие с персонализирана оферта
              <br />
              <strong className="text-purple-400">Безплатна консултация • Детайлна оферта • Професионален подход</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                      currentStep >= step.number
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-purple-500 text-white'
                        : 'border-gray-500 text-gray-500'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        step.icon
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`hidden sm:block w-24 h-0.5 ml-4 transition-all ${
                        currentStep > step.number ? 'bg-purple-500' : 'bg-gray-500'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Стъпка {currentStep}: {steps[currentStep - 1].title}
                </h3>
                <p className="text-gray-400">
                  {currentStep} от {steps.length}
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Име и фамилия *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="Вашето име"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Имейл адрес *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
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
                        className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="0888 123 456"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Име на компанията
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="Опционално"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Описание на бизнеса *
                    </label>
                    <textarea
                      name="businessDescription"
                      value={formData.businessDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Опишете накратко какво прави вашия бизнес, кои са вашите клиенти и какви са целите ви..."
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Services */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6">
                      Изберете услугите, които ви интересуват *
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <label
                          key={service.id}
                          className={`flex items-center gap-3 p-4 rounded-lg border transition-all cursor-pointer ${
                            formData.services.includes(service.id)
                              ? 'bg-purple-500/20 border-purple-500/50'
                              : 'bg-slate-700/30 border-purple-500/20 hover:border-purple-500/40'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service.id)}
                            onChange={(e) => handleServiceChange(service.id, e.target.checked)}
                            className="w-5 h-5 text-purple-500 bg-slate-700 border-purple-500/30 rounded focus:ring-purple-500"
                          />
                          <span className="text-white">{service.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Budget & Timeline */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-purple-400" />
                      Бюджет (опционално)
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {budgetOptions.map((option) => (
                        <label
                          key={option.id}
                          className={`flex items-center gap-3 p-4 rounded-lg border transition-all cursor-pointer ${
                            formData.budget === option.value
                              ? 'bg-purple-500/20 border-purple-500/50'
                              : 'bg-slate-700/30 border-purple-500/20 hover:border-purple-500/40'
                          }`}
                        >
                          <input
                            type="radio"
                            name="budget"
                            value={option.value}
                            checked={formData.budget === option.value}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-purple-500 bg-slate-700 border-purple-500/30 focus:ring-purple-500"
                          />
                          <span className="text-white">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Calendar className="w-6 h-6 text-purple-400" />
                      Срок за изпълнение (опционално)
                    </h4>
                    <div className="space-y-4">
                      {timelineOptions.map((option) => (
                        <label
                          key={option.id}
                          className={`flex items-center gap-3 p-4 rounded-lg border transition-all cursor-pointer ${
                            formData.timeline === option.value
                              ? 'bg-purple-500/20 border-purple-500/50'
                              : 'bg-slate-700/30 border-purple-500/20 hover:border-purple-500/40'
                          }`}
                        >
                          <input
                            type="radio"
                            name="timeline"
                            value={option.value}
                            checked={formData.timeline === option.value}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-purple-500 bg-slate-700 border-purple-500/30 focus:ring-purple-500"
                          />
                          <span className="text-white">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Additional Information */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Допълнителна информация (опционално)
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Споделете повече детайли за проекта, специални изисквания, примери от сайтове, които ви харесват, или всякаква друга информация, която смятате за важна..."
                    />
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg p-6">
                    <h5 className="text-white font-semibold mb-4">Условия за услугата:</h5>
                    <ul className="text-gray-300 text-sm space-y-2 mb-6">
                      <li>• Безплатна първоначална консултация</li>
                      <li>• Детайлна оферта в рамките на 24 часа</li>
                      <li>• 30-дневна гаранция за качество</li>
                      <li>• Безплатни корекции до пълно удовлетворение</li>
                      <li>• Прозрачни цени без скрити такси</li>
                    </ul>
                    
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agreeTo"
                        checked={formData.agreeTo}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 text-purple-500 bg-slate-700 border-purple-500/30 rounded focus:ring-purple-500 mt-1"
                      />
                      <label className="text-gray-300 text-sm">
                        Съгласен/а съм с условията за услугата и обработката на личните ми данни. 
                        Разбирам, че тази заявка не е обвързваща и че ще получа безплатна оферта за разглеждане.
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-purple-500/20">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-700/50 text-gray-300 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700/80"
                >
                  Назад
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-600 hover:to-blue-600"
                  >
                    Напред
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canProceed()}
                    className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-600 hover:to-emerald-600 transform hover:scale-105"
                  >
                    <Zap className="w-5 h-5" />
                    Изпрати заявката
                  </button>
                )}
              </div>
            </form>

            {/* Contact Alternative */}
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Предпочитате директен контакт?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="viber://chat?number=+359882717158"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Viber чат
                </a>
                <a
                  href="tel:+359882717158"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Обадете се
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestProjectPage;