import React from 'react';
import {Facebook, Github, Instagram, Linkedin, Twitter} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kerfaiyass54' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yassine-kerfai-14109b223/' },
    { icon: Facebook, href: 'https://www.facebook.com/kerfai.yassine' },
      { icon: Instagram, href: 'https://www.instagram.com/yassine.kerfai02/' },
  ];

  return (
    <footer
      className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-center">
            © 2025 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
