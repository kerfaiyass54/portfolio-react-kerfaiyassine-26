import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, text: 'hello@example.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: 'San Francisco, CA' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl text-gray-800 dark:text-white mb-6">Let's Connect</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{info.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                🌍
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder={t.contact.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder={t.contact.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <textarea
                placeholder={t.contact.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {t.contact.send}
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
