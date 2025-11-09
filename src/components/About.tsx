import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, Cpu, Server, Code, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import personalPic from './yassine.png';

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Briefcase, label: t.about.experience, value: t.about.experienceValue },
    { icon: Award, label: t.about.projects, value: t.about.projectsValue },
  ];

  const education = [
      { icon: Server, label: "2024", value: t.about.graduation },
      { icon: Code, label: t.about.engineering, value: t.about.enit },
      { icon: Cpu, label: t.about.prepa, value: t.about.ipeiem },
      { icon: FileText, label: t.about.bac, value: t.about.highschool }
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
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
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
            >
                <div className="relative w-full max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                    <div className="relative w-48 h-48+ mx-auto rounded-full overflow-hidden">
                        <img
                            src={personalPic}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
            </motion.div>


            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              {t.about.description}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                  <div className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

                {education.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20
           p-6 rounded-xl border border-emerald-100 dark:border-emerald-800/30"                    >
                        <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                        <div className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                            {stat.value}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                ))}

            </div>
        </div>

    </section>
  );
};
