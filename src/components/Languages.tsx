import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


export const Languages: React.FC = ()=>{

    const { t, language } = useLanguage();

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <section
            id="languages"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
            <div className="absolute inset-0 overflow-hidden">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4"
                >
                    {t.hero.greeting}
                </motion.p>
            </div>
        </section>
    );


}