import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'ar' | 'de' | 'fr';

interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
    home: string;
    websites: string;
    languages: string;
    dark: string;
    light: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    cta: string;
    introduce: string;
    skills: string;
    project: string;
    look: string;
    row: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    experienceValue: string;
    projects: string;
    projectsValue: string;
    graduation: string;
    enit:string;
    ipeiem:string;
    highschool:string;
    engineering: string;
    prepa: string;
    bac: string;
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
  language: {
      title: string;
      subtitle: string;
      native: string;
      arabic: string;
      french: string;
      german: string;
      english: string;
  }
}

const translations: Record<Language, Translations> = {
  en: {
      language: {
          title: 'My spoken languages',
          subtitle: 'Here are the languages that I can speak',
          native: 'Native',
          arabic: 'Arabic',
          french: 'French',
          german: 'German',
          english: 'English',
      },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
        home: 'Home',
        websites: 'Websites',
        languages: 'Languages',
        dark: 'Dark',
        light: 'Light'
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Yassine KERFAI',
      title: 'Software engineer',
      description: 'I can craft beautiful websites and web applications. Thirst to learn more about many fields.',
      cta: 'Get in Touch',
        introduce: 'See my information',
        skills: 'Check my skills',
        project: 'Witness my work',
        look: 'Let\'s take a look to my portfolio',
        row: 'Click on that row below or use the navigation'

    },
    about: {
      title: 'About Me',
      description: 'I\'m a passionate developer with a love for creating innovative solutions using different technologies. With expertise in modern web technologies, I bring ideas to life through clean code and elegant design, and I\'m thirst to learn new things to integrate new ideas.',
      experience: 'Years Experience',
      experienceValue: '+1',
      projects: 'Projects',
      projectsValue: '+15',
        graduation: 'Graduation',
        enit:'National school of engineering of Tunis',
        ipeiem:'Preparatory Institute of EL Manar',
        highschool:'Aouina High school',
        engineering: 'CS engineering 2021-2024',
        prepa: 'Scientific preparatory 2019-2021',
        bac: 'Baccalaureate 2019',
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
      language: {
          title: 'اللغات المتحدثة',
          subtitle: 'هذه اللغات التي أتحدثها',
          native: 'اللغة الأصلية',
          arabic: 'العربية',
          french: 'الفرنسية',
          german: 'الألمانية',
          english: 'الانقليزية',
      },
    nav: {
      about: 'نبذة',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'اتصل',
        home: 'الترحيب',
        websites: 'المواقع',
        languages: 'اللغات',
        dark: 'ظلام',
        light: 'شاسع'
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'ياسين كرفاعي',
      title: 'مهندس في تطوير البرمجيات',
      description: 'أستطيع تصميم مواقع وتطبيقات ويب رائعة. أتوق لمعرفة المزيد في مجالات متعددة.',
      cta: 'تواصل معي',
        introduce: 'تعرف علي',
        skills: 'شاهد قدراتي',
        project: 'اطلع على أعمالي',
        look: '"لنلقِ نظرة على محفظتي',
        row: 'انقر على الصف أدناه أو استخدم شريط التنقل'
    },
    about: {
      title: 'نبذة عني',
      description: 'أنا مطور شغوف، أعشق ابتكار حلول مبتكرة باستخدام تقنيات مختلفة. بفضل خبرتي في تقنيات الويب الحديثة، أحوّل أفكاري إلى واقع من خلال أكواد واضحة وتصميم أنيق، وأتطلع إلى تعلم أشياء جديدة لدمجها.',
      experience: 'سنوات الخبرة',
      experienceValue: '+1',
      projects: 'المشاريع',
      projectsValue: '+15',
        graduation: 'التخرج',
        enit:'المدرسة الوطنية للمهمدسين بتونس',
        ipeiem:'المعهد التحضيري للدراسات الهندسية بالمنار',
        highschool:'معهد العوينة',
        engineering: 'هندسة اعلامية 2021-2024',
        prepa: 'مرحلة تحضيرية علمية 2019-2021',
        bac: 'باكالوريا 2019',
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
      language: {
          title: 'Meine Sprachen',
          subtitle: 'Hier finden Sie die Sprache, die ich sprechen kann',
          native: 'Native',
          arabic: 'Arabisch',
          french: 'Französisch',
          german: 'Deutsch',
          english: 'Englisch',
      },
    nav: {
      about: 'Über',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt',
        home: 'Startseite',
        websites: 'Websites',
        languages: 'Sprachen',
        dark: 'Dunkel',
        light: 'Hell'
    },
    hero: {
      greeting: 'Hallo, ich bin',
      name: 'Yassine KERFAI',
      title: 'Software-Ingenieur',
      description: 'Ich kann kreative Web-Anwendungen entwickeln. Ich wolle immer neue Dinge lernen.',
      cta: 'Kontaktieren',
        introduce: 'Ich vorstelle mir',
        skills: 'Lernen Sie meine Erkentnisse kennen',
        project: 'Sehen Sie meine Werke',
        look: 'Werfen wir einen Blick auf mein Portfolio',
        row: 'Klicken Sie auf die Zeile unten oder verwenden Sie die Navigation'
    },
    about: {
      title: 'Über mich',
      description: 'Ich bin ein leidenschaftlicher Entwickler und liebe es, innovative Lösungen mithilfe verschiedener Technologien zu entwickeln. Mit meiner Expertise in modernen Webtechnologien erwecke ich Ideen durch sauberen Code und elegantes Design zum Leben und bin begierig darauf, Neues zu lernen, um neue Ideen zu integrieren.',
      experience: 'Jahre Erfahrung',
      experienceValue: '+1',
      projects: 'Projekte',
      projectsValue: '+15',
        graduation: 'Abschluss',
        enit:'Nationale Ingenieurschule von Tunis',
        ipeiem:'Vorbereitungsinstitut von EL Manar',
        highschool:'Aouina Gymnasium',
        engineering: 'Informatikingenieur 2021-2024',
        prepa: 'Wissenchaftliche Vorbereitung 2019-2021',
        bac: 'Abitur 2019',
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
      language: {
          title: 'Mes langues',
          subtitle: 'Ici vous trouvez les langues que je peux parler',
          native: 'Native',
          arabic: 'Arabe',
          french: 'Français',
          german: 'Allemand',
          english: 'Anglais',
      },
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
        home: 'Page d\'accueil',
        websites: 'Sites web',
        languages: 'Langues',
        dark: 'Sombre',
        light: 'Clair'
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Yassine KERFAI',
      title: 'Ingénieur en génie logicielle',
      description: 'Je crée des expériences web belles et fonctionnelles',
      cta: 'Me contacter',
        introduce: 'Connaissez-moi',
        skills: 'Voyez toutes mes compétences',
        project: 'Regardez tous mes projets',
        look: 'Jetons un œil à mon portfolio',
        row: 'Cliquez sur la ligne ci-dessous ou utilisez la navigation'
    },
    about: {
      title: 'À propos de moi',
      description: 'Je suis un développeur passionné qui aime créer des solutions innovantes utilisant différentes technologies. Fort de mon expertise dans les technologies web modernes, je donne vie à mes idées grâce à un code clair et un design élégant. J\'ai soif d\'apprendre pour intégrer de nouvelles idées.',
      experience: 'Années d\'expérience',
      experienceValue: '+1',
      projects: 'Projets',
      projectsValue: '+15',
        graduation: 'Graduation',
        enit:'Ecole Nationale d\'ingénieur de Tunis',
        ipeiem:'Institut préparatoire aux études d\'ingénieurs El Manar',
        highschool:'Lycée Aouina',
        engineering: 'Ingénieur informatique 2021-2024',
        prepa: 'Cycle préparatoire scientifique 2019-2021',
        bac: 'Baccalauréat 2019',
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
