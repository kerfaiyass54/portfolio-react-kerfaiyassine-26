import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'ar' | 'de' | 'fr';

interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    experienceValue: string;
    projects: string;
    projectsValue: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Yassine KERFAI',
      title: 'Software engineer',
      description: 'I can craft beautiful websites and web applications. Thirst to learn more about many fields.',
      cta: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      description: 'I\'m a passionate developer with a love for creating innovative solutions using different technologies. With expertise in modern web technologies, I bring ideas to life through clean code and elegant design, and I\'m thirst to learn new things to integrate new ideas.',
      experience: 'Years Experience',
      experienceValue: '+1',
      projects: 'Projects',
      projectsValue: '+15',
    },
    skills: {
      title: 'My Skills',
      subtitle: 'Technologies I work with',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Some of my recent work',
      viewProject: 'View Project',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s work together',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
    },
  },
  ar: {
    nav: {
      about: 'نبذة',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'اتصل',
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'جون دو',
      title: 'مهندس في تطوير البرمجيات',
      description: 'أستطيع تصميم مواقع وتطبيقات ويب رائعة. أتوق لمعرفة المزيد في مجالات متعددة.',
      cta: 'تواصل معي',
    },
    about: {
      title: 'نبذة عني',
      description: 'أنا مطور شغوف، أعشق ابتكار حلول مبتكرة باستخدام تقنيات مختلفة. بفضل خبرتي في تقنيات الويب الحديثة، أحوّل أفكاري إلى واقع من خلال أكواد واضحة وتصميم أنيق، وأتطلع إلى تعلم أشياء جديدة لدمجها.',
      experience: 'سنوات الخبرة',
      experienceValue: '+1',
      projects: 'المشاريع',
      projectsValue: '+15',
    },
    skills: {
      title: 'مهاراتي',
      subtitle: 'التقنيات التي أعمل بها',
    },
    projects: {
      title: 'المشاريع المميزة',
      subtitle: 'بعض أعمالي الأخيرة',
      viewProject: 'عرض المشروع',
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'لنعمل معاً',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
    },
  },
  de: {
    nav: {
      about: 'Über',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    hero: {
      greeting: 'Hallo, ich bin',
      name: 'Yassine KERFAI',
      title: 'Software-Ingenieur',
      description: 'Je peux créer de magnifiques sites web et applications web. J\'ai soif d\'apprendre dans de nombreux domaines.',
      cta: 'Kontaktieren',
    },
    about: {
      title: 'Über mich',
      description: 'Ich bin ein leidenschaftlicher Entwickler und liebe es, innovative Lösungen mithilfe verschiedener Technologien zu entwickeln. Mit meiner Expertise in modernen Webtechnologien erwecke ich Ideen durch sauberen Code und elegantes Design zum Leben und bin begierig darauf, Neues zu lernen, um neue Ideen zu integrieren.',
      experience: 'Jahre Erfahrung',
      experienceValue: '+1',
      projects: 'Projekte',
      projectsValue: '+15',
    },
    skills: {
      title: 'Meine Fähigkeiten',
      subtitle: 'Technologien, mit denen ich arbeite',
    },
    projects: {
      title: 'Ausgewählte Projekte',
      subtitle: 'Einige meiner neuesten Arbeiten',
      viewProject: 'Projekt ansehen',
    },
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Lassen Sie uns zusammenarbeiten',
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Yassine KERFAI',
      title: 'Ingénieur en génie logicielle',
      description: 'Je crée des expériences web belles et fonctionnelles',
      cta: 'Me contacter',
    },
    about: {
      title: 'À propos de moi',
      description: 'Je suis un développeur passionné qui aime créer des solutions innovantes utilisant différentes technologies. Fort de mon expertise dans les technologies web modernes, je donne vie à mes idées grâce à un code clair et un design élégant. J\'ai soif d\'apprendre pour intégrer de nouvelles idées.',
      experience: 'Années d\'expérience',
      experienceValue: '+1',
      projects: 'Projets',
      projectsValue: '+15',
    },
    skills: {
      title: 'Mes compétences',
      subtitle: 'Technologies avec lesquelles je travaille',
    },
    projects: {
      title: 'Projets en vedette',
      subtitle: 'Quelques-uns de mes travaux récents',
      viewProject: 'Voir le projet',
    },
    contact: {
      title: 'Entrer en contact',
      subtitle: 'Travaillons ensemble',
      name: 'Votre nom',
      email: 'Votre email',
      message: 'Votre message',
      send: 'Envoyer le message',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
