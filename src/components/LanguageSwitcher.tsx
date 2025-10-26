import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import Flag from "react-flagkit";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'US' },
    { code: 'ar', label: 'العربية', flag: 'SA' },
    { code: 'de', label: 'Deutsch', flag: 'DE' },
    { code: 'fr', label: 'Français', flag: 'FR' },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
        <span className="hidden sm:inline"><Flag country={languages.find(l => l.code === language)?.flag} size={50} /></span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              language === lang.code ? 'bg-blue-50 dark:bg-blue-900/20' : ''
            }`}
          >
            <span className="text-xl"><Flag country={lang.flag} size={50} /></span>
            <span className={language === lang.code ? 'text-blue-600 dark:text-blue-400' : ''}>
              {lang.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
