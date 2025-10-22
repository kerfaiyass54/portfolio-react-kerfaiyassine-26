import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Personal blog',
      description: 'A frontend blog project aiming to write articles.',
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Angular', 'Bootstrap'],
    },
    {
      title: 'Vehicule rent application App',
      description: 'Collaborative vehicule rentals management application',
      gradient: 'from-purple-500 to-pink-500',
      tags: ['Angular', 'Spring Boot', 'Keycloak', 'PostgreSQL'],
    },
    {
      title: 'Portfolio Builder',
      description: 'Drag-and-drop portfolio builder for creatives',
      gradient: 'from-orange-500 to-red-500',
      tags: ['React', 'Tailwind', 'Supabase'],
    },
    {
      title: 'Football management app',
      description: 'Full-stack microservices app for football tournaments.',
      gradient: 'from-green-500 to-teal-500',
      tags: ['Angular', 'Spring Boot', 'MongoDB','PostgreSQL','Kafka','Keycloak'],
    },
  ];

  return (
    <section
      id="projects"
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
            {t.projects.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t.projects.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="mx-2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    
                  </button>
                  <button className="mx-2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Github className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
