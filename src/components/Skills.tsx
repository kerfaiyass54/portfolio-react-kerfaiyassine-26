import React, {useState} from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

export const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [typeSkill, setTypeSkill] = useState('programming');


  const skills = [
    { name: 'Angular', level: 75, color: 'from-amber-400 to-red-500', type: 'framework' },
    { name: 'Spring Boot', level: 80, color: 'from-green-600 to-green-700', type: 'framework' },
      { name: '.NET', level: 50, color: 'from-pink-500 to-purple-500', type: 'framework' },
      { name: 'Flask', level: 35, color: 'from-sky-400 to-cyan-500', type: 'framework' },
      { name: 'Flutter', level: 45, color: 'from-blue-600 to-blue-700', type: 'framework' },
      { name: 'SQL', level: 90, color: 'from-gray-700 to-gray-900', type: 'databases' },
    { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-600', type: 'databases' },
      { name: 'MySQL', level: 75, color: 'from-cyan-500 to-blue-500', type: 'databases' },
      { name: 'Oracle database', level: 75, color: 'from-amber-400 to-red-500', type: 'databases' },
      { name: 'PostgreSQL', level: 80, color: 'from-blue-600 to-blue-700', type: 'databases' },
    { name: 'Git', level: 75, color: 'from-amber-400 to-red-500', type: 'devops' },
    { name: 'Docker', level: 65, color: 'from-cyan-500 to-blue-500', type: 'devops' },
      { name: 'Github', level: 75, color: 'from-gray-700 to-gray-900', type: 'devops' },
      { name: 'GitLab', level: 75, color: 'from-pink-500 to-orange-500', type: 'devops' },
      { name: 'Jenkins', level: 50, color: 'from-pink-500 to-purple-500', type: 'devops' },
      { name: 'AWS', level: 50, color: 'from-pink-500 to-orange-500', type: 'devops' },
      { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-blue-500', type: 'programming' },
      { name: 'Bootstrap', level: 95, color: 'from-pink-500 to-purple-500', type: 'programming' },
      { name: 'Python', level: 80, color: 'from-blue-500 to-indigo-500', type: 'programming' },
      { name: 'Java', level: 80, color: 'from-sky-400 to-cyan-500', type: 'programming' },
      { name: 'HTML', level: 80, color: 'from-pink-500 to-orange-500', type: 'programming' },
      { name: 'Javascript', level: 80, color: 'from-pink-500 to-orange-500', type: 'programming' },
      { name: 'CSS', level: 80, color: 'from-blue-500 to-blue-600', type: 'programming' },
      { name: 'C', level: 60, color: 'from-gray-700 to-gray-900', type: 'programming' },
      { name: 'C#', level: 60, color: 'from-pink-500 to-purple-500', type: 'programming' },
      { name: 'C++', level: 60, color: 'from-blue-500 to-indigo-500', type: 'programming' },
      { name: 'Linux', level: 80, color: 'from-gray-700 to-gray-900', type: 'others' },
      { name: 'IntelliJ', level: 90, color: 'from-pink-500 to-purple-500', type: 'others' },
      { name: 'VS Code', level: 80, color: 'from-blue-600 to-blue-700', type: 'others' },
      { name: 'Maven', level: 65, color: 'from-pink-500 to-orange-500', type: 'others' },
      { name: 'Keycloak', level: 65, color: 'from-amber-400 to-red-500', type: 'others' },
      { name: 'Jira', level: 75, color: 'from-cyan-500 to-blue-500', type: 'others' },
      { name: 'Confluence', level: 85, color: 'from-cyan-500 to-blue-500', type: 'others' },
      { name: 'Postman', level: 80, color: 'from-pink-500 to-purple-500', type: 'others' },
      { name: 'Machine learning', level: 50, color: 'from-cyan-500 to-blue-500', type: 'ai' },
      { name: 'AI Agents', level: 40, color: 'from-pink-500 to-purple-500', type: 'ai' },
      { name: 'Pandas', level: 70, color: 'from-green-600 to-green-700', type: 'ai' },
      { name: 'NumPy', level: 70, color: 'from-pink-500 to-orange-500', type: 'ai' },
  ];









  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      style={{ minHeight: '900px' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t.skills.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t.skills.subtitle}</p>

        </motion.div>




        <div>
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTypeSkill('programming')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >

                Programming languages
            </motion.button>
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTypeSkill('framework')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >

                Frameworks
            </motion.button>
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTypeSkill('databases')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >

                Databases
            </motion.button>
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {setTypeSkill('devops')}}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >

                DevOps & Cloud
            </motion.button>
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTypeSkill('others')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >

                Others
            </motion.button>
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTypeSkill('ai')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >

                Artificial intelligence
            </motion.button>
            <div  className="grid sm:grid-cols-2 gap-6 h-800">
          {skills.filter((skill) => skill.type === typeSkill).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
            </div>
        </div>
      </div>
    </section>
  );
};
