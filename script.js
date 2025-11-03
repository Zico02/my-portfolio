// Language translations
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.education': 'Education',
        'nav.skills': 'Skills',
        'nav.technicalskills': 'Technical Skills',
        'nav.commercialskills': 'Commercial Skills',
        'nav.certifications': 'Certifications',
        'nav.contact': 'Contact',
        'hero.subtitle': 'Future Business Leader | Software Engineering Student',
        'hero.description': 'Future Business Leader | Software Engineering Student Passionate About Sales, Innovation & Building Sustainable Growth',
        'hero.contact': 'Download CV',
        'hero.projects': 'View Projects',
        'about.title': 'Get to know more about my journey and background',
        'about.profile': 'Profile',
        'about.description1': 'As a computer engineering student passionate about sales, digital marketing, negotiation, and closing, I aim to apply my skills in a dynamic and innovative environment. Ambitious, curious, and results-oriented, I am motivated to actively contribute to the success of your company.',
        'about.description2': 'With experience in both technical development and commercial activities, I bring a unique perspective that combines analytical thinking with strong interpersonal skills to create meaningful business impact.',
        'about.timeline': 'Academic Timeline',
        'education.emsi.title': 'Moroccan School of Engineering Sciences (EMSI)',
        'education.emsi.degree': 'Computer Engineering',
        'education.ista.title': 'Specialized Institute of Applied Technology',
        'education.ista.degree': 'Diploma in Software Development',
        'education.conservatory.title': 'Regional Conservatory of Music',
        'education.conservatory.degree': 'Diploma in Classical Guitar and Music Theory',
        'experience.title': 'Professional Experience',
        'experience.subtitle': 'Here is a quick summary of my most recent experiences',
        'experience.ai.title': 'Full-Stack Development and Artificial Intelligence',
        'experience.ai.description': 'Developed an intelligent agent based on LLMs to automate e-commerce customer service via WhatsApp. Collaborated with sales teams on prospecting, cold calling, client presentations, and improving commercial communication.',
        'experience.ecommerce.title': 'E-commerce Manager',
        'experience.ecommerce.description': 'Created and managed online stores for selling physical products, focusing on winning products research, digital marketing strategy, and sales optimization to maximize profitability.',
        'experience.reseller.title': 'E-commerce Reseller',
        'experience.reseller.description': 'Negotiated, purchased, and strategically resold used products with optimized margins, developing strong skills in negotiation, closing, customer relations, and inventory management.',
        'experience.developer.title': 'Web Developer - Freelance',
        'experience.developer.description': 'Designed and developed e-commerce websites for selling sneakers, watches, and perfumes. Built web applications for delivery, library, taxi services, and other business solutions.',
        'experience.guitar.title': 'Classical Guitar Teacher',
        'experience.guitar.description': 'Teaching classical guitar at the conservatory, in music workshops, and through private home lessons, using an adaptive and student-centered teaching approach.',
        'experience.theory.title': 'Music Theory Teacher',
        'experience.theory.description': 'Teaching music theory at the conservatory and through private lessons, helping students understand musical concepts, harmony, and composition.',
        'skills.title': 'Skills & Technologies',
        'skills.subtitle': 'Here are the technologies I\'ve been working with recently',
        'skills.technical': 'Technical Skills',
        'skills.commercial': 'Commercial Skills',
        'skills.soft': 'Soft Skills',
        'certifications.title': 'Certifications & Training',
        'certifications.subtitle': 'Professional certifications and completed courses',
        'certifications.oracle.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle.provider': 'Oracle',
        'certifications.oracle.date': 'Issued Jul 2025',
        'certifications.docker.title': 'Containers w/ Docker, Kubernetes & OpenShift',
        'certifications.docker.provider': 'IBM',
        'certifications.docker.date': 'Issued Mar 2025',
        'certifications.git.title': 'Git & GitHub',
        'certifications.git.provider': 'Google',
        'certifications.git.date': 'Issued May 2025',
        'certifications.react.title': 'React Native',
        'certifications.react.provider': 'Meta',
        'certifications.react.date': 'Issued May 2025',
        'certifications.azure.title': 'Réseaux virtuels dans Azure',
        'certifications.azure.provider': 'Whizlabs',
        'certifications.azure.date': 'Issued Feb 2025',
        'certifications.software.title': 'Software Engineering: Software Design and Project Management',
        'certifications.software.provider': 'The Hong Kong University of Science and Technology',
        'certifications.software.date': 'Issued Feb 2025',
        'certifications.java.title': 'Java: Object-Oriented Programming',
        'certifications.java.provider': 'University of Pennsylvania',
        'certifications.java.date': 'Issued Dec 2024',
        'certifications.react-basics.title': 'React Basics',
        'certifications.react-basics.provider': 'Meta',
        'certifications.react-basics.date': 'Issued Dec 2024',
        'certifications.duke.title': 'Mesure et gestion de l\'impact pour les ODD',
        'certifications.duke.provider': 'Duke University',
        'certifications.duke.date': 'Issued May 2024',
        'hero.name': 'I\'m Zakariae AHAJI',
        'certifications.view': 'View Certificate',
        'education.view': 'View Certificate',
        'nav.extracurricular': 'Extracurricular',
        'nav.interests': 'Interests',
        'extracurricular.title': 'Extracurricular Activities',
        'extracurricular.subtitle': 'Team Leader',
        'extracurricular.entrepreneurship.title': 'Entrepreneurship',
        'extracurricular.entrepreneurship.competitions': 'Participated in innovation competitions',
        'extracurricular.entrepreneurship.projects': 'Carried out entrepreneurial projects',
        'extracurricular.music.title': 'Music & Arts',
        'extracurricular.music.workshop': 'Member of the music and arts workshop',
        'extracurricular.chess.title': 'Chess',
        'extracurricular.chess.member': 'Chess club member',
        'interests.title': 'Interests',
        'interests.entrepreneurship': 'Entrepreneurship',
        'interests.sales': 'Sales',
        'interests.reading': 'Reading',
        'interests.chess': 'Chess',
        'interests.gym': 'Gym',
        'interests.fishing': 'Fishing',
        'interests.trip': 'Trip',
        'interests.travel': 'Travel',
        'nav.softskills': 'Soft Skills',
        'technicalskills.title': 'Technical Skills',
        'technicalskills.subtitle': 'Technologies and tools I work with',
        'technicalskills.programming.title': 'Programming Languages',
        'technicalskills.frameworks.title': 'Frameworks & Libraries',
        'technicalskills.databases.title': 'Databases & Data Systems',
        'technicalskills.bi.title': 'Business Intelligence & Analytics',
        'technicalskills.cloud.title': 'Cloud & DevOps',
        'technicalskills.modeling.title': 'Modeling & Methodologies',
        'technicalskills.backend.title': 'Backend & APIs',
        'technicalskills.web.title': 'Web & Mobile Technologies',
        'commercialskills.title': 'Commercial Skills',
        'commercialskills.subtitle': 'Sales and business development expertise',
        'commercialskills.sales': 'Sales',
        'commercialskills.negotiation': 'Negotiation',
        'commercialskills.marketing': 'Marketing',
        'commercialskills.digitalmarketing': 'Digital Marketing',
        'commercialskills.leadgeneration': 'Lead Generation',
        'commercialskills.closing': 'Closing',
        'commercialskills.coldcalling': 'Cold Calling',
        'commercialskills.customerrelations': 'Customer Relations',
        'commercialskills.ecommerce': 'E-commerce Management',
        'softskills.title': 'Soft Skills',
        'softskills.subtitle': 'Key personal and professional competencies',
        'softskills.leadership.title': 'Leadership',
        'softskills.leadership.description': 'Guiding teams and driving projects to successful completion',
        'softskills.teamwork.title': 'Teamwork',
        'softskills.teamwork.description': 'Collaborating effectively with diverse teams and stakeholders',
        'softskills.accountability.title': 'Accountability',
        'softskills.accountability.description': 'Taking responsibility for actions and delivering on commitments',
        'softskills.integrity.title': 'Integrity',
        'softskills.integrity.description': 'Maintaining ethical standards and honest communication',
        'softskills.creativity.title': 'Creativity',
        'softskills.creativity.description': 'Innovative thinking and problem-solving approaches',
        'softskills.curiosity.title': 'Curiosity',
        'softskills.curiosity.description': 'Continuous learning and exploration of new technologies',
        'softskills.initiative.title': 'Initiative',
        'softskills.initiative.description': 'Proactive approach to identifying and solving problems',
        'softskills.confidence.title': 'Self-confidence',
        'softskills.confidence.description': 'Belief in abilities and willingness to take on challenges',
        'softskills.stress.title': 'Stress Management',
        'softskills.stress.description': 'Maintaining composure and performance under pressure',
        'certifications.python.title': 'Programmation pour tous (mise en route de Python)',
        'certifications.python.provider': 'University of Michigan',
        'certifications.python.date': 'Issued May 2024',
        'certifications.unix.title': 'The Unix Workbench',
        'certifications.unix.provider': 'The Johns Hopkins University',
        'certifications.unix.date': 'Issued May 2024',
        'certifications.epfl.title': 'Villes africaines: Environnement et enjeux de développement durable',
        'certifications.epfl.provider': 'EPFL',
        'certifications.epfl.date': 'Issued May 2024',
        'certifications.css.title': 'CSS3',
        'certifications.css.provider': 'University of Michigan',
        'certifications.css.date': 'Issued Mar 2024',
        'certifications.html.title': 'HTML5',
        'certifications.html.provider': 'University of Michigan',
        'certifications.html.date': 'Issued Mar 2024',
        'certifications.js.title': 'Interactivity with JavaScript',
        'certifications.js.provider': 'University of Michigan',
        'certifications.js.date': 'Issued Mar 2024',
        'certifications.cpp.title': 'Introduction à la programmation orientée objet (en C++)',
        'certifications.cpp.provider': 'École Polytechnique',
        'certifications.cpp.date': 'Issued Mar 2024',
        'certifications.credential': 'Credential ID:',
        'certifications.research.title': 'Documentary Research',
        'certifications.research.provider': 'École Polytechnique',
        'certifications.research.date': 'Issued Apr 2025',
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Feel free to reach out, have a question, or just want to connect.',
        'contact.send': 'Send Message',
        'footer.rights': 'All rights reserved.'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.experience': 'Expérience',
        'nav.education': 'Formation',
        'nav.skills': 'Compétences',
        'nav.technicalskills': 'Compétences Techniques',
        'nav.commercialskills': 'Compétences Commerciales',
        'nav.certifications': 'Certifications',
        'nav.contact': 'Contact',
        'hero.subtitle': 'Futur Leader d\'Entreprise | Étudiant en Génie Informatique',
        'hero.description': 'Futur Leader d\'Entreprise | Étudiant en Génie Informatique Passionné par les Ventes, l\'Innovation et la Construction d\'une Croissance Durable',
        'hero.contact': 'Télécharger CV',
        'hero.projects': 'Voir Projets',
        'about.title': 'Découvrez mon parcours et mon background',
        'about.profile': 'Profil',
        'about.description1': 'En tant qu\'étudiant ingénieur en génie informatique, passionné par la vente, le marketing digital, la négociation et le closing, je souhaite mettre mes compétences en pratique au sein d\'un environnement dynamique et innovant. Ambitieux, curieux et orienté résultats, je suis motivé à contribuer activement au succès de votre entreprise.',
        'about.description2': 'Avec une expérience dans le développement technique et les activités commerciales, j\'apporte une perspective unique qui combine la pensée analytique avec de solides compétences interpersonnelles pour créer un impact commercial significatif.',
        'about.timeline': 'Parcours Académique',
        'education.emsi.title': 'École Marocaine des Sciences de l\'Ingénieur (EMSI)',
        'education.emsi.degree': 'Génie Informatique',
        'education.ista.title': 'Institut Spécialisé de Technologie Appliquée',
        'education.ista.degree': 'Diplôme en développement informatique',
        'education.conservatory.title': 'Conservatoire régional de musique et d\'art chorégraphique',
        'education.conservatory.degree': 'Diplôme en guitare classique et solfège',
        'experience.title': 'Expérience Professionnelle',
        'experience.subtitle': 'Voici un résumé rapide de mes expériences les plus récentes',
        'experience.ai.title': 'Développement Full-Stack et Intelligence Artificielle',
        'experience.ai.description': 'Développement d\'un agent intelligent basé sur des LLM pour automatiser le service client e-commerce via WhatsApp. Collaboration avec les équipes commerciales : prospection, appels à froid, présentations clients et amélioration de la communication commerciale.',
        'experience.ecommerce.title': 'E-commerce Manager',
        'experience.ecommerce.description': 'Création et gestion de boutiques en ligne pour la vente de produits physiques, avec analyse de produits gagnants, stratégie marketing et optimisation des ventes pour maximiser la rentabilité.',
        'experience.reseller.title': 'E-commerce Reseller',
        'experience.reseller.description': 'Négociation, achat et revente stratégique de produits d\'occasion à marges optimisées, développant des compétences en closing, relation client et gestion d\'inventaire.',
        'experience.developer.title': 'Développeur Web - Freelance',
        'experience.developer.description': 'Conception et développement de sites e-commerce (chaussures, montres, parfums...). Développement d\'applications web (livraison, bibliothèque, taxi...).',
        'experience.guitar.title': 'Professeur de Guitare Classique',
        'experience.guitar.description': 'Enseignement de la guitare classique au conservatoire, dans des ateliers et cours particuliers, avec une pédagogie centrée sur l\'élève.',
        'experience.theory.title': 'Professeur de Théorie Musicale',
        'experience.theory.description': 'Enseignement de la théorie musicale au conservatoire et par leçons privées, aidant les étudiants à comprendre les concepts musicaux, l\'harmonie et la composition.',
        'skills.title': 'Compétences & Technologies',
        'skills.subtitle': 'Voici les technologies avec lesquelles j\'ai travaillé récemment',
        'skills.technical': 'Compétences Techniques',
        'skills.commercial': 'Compétences Commerciales',
        'skills.soft': 'Soft Skills',
        'certifications.title': 'Certifications & Formation',
        'certifications.subtitle': 'Certifications professionnelles et cours complétés',
        'certifications.oracle.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle.provider': 'Oracle',
        'certifications.oracle.date': 'Émis Juil 2025',
        'certifications.docker.title': 'Containers w/ Docker, Kubernetes & OpenShift',
        'certifications.docker.provider': 'IBM',
        'certifications.docker.date': 'Émis Mar 2025',
        'certifications.git.title': 'Git & GitHub',
        'certifications.git.provider': 'Google',
        'certifications.git.date': 'Émis Mai 2025',
        'certifications.react.title': 'React Native',
        'certifications.react.provider': 'Meta',
        'certifications.react.date': 'Émis Mai 2025',
        'certifications.azure.title': 'Réseaux virtuels dans Azure',
        'certifications.azure.provider': 'Whizlabs',
        'certifications.azure.date': 'Émis Fév 2025',
        'certifications.software.title': 'Software Engineering: Software Design and Project Management',
        'certifications.software.provider': 'The Hong Kong University of Science and Technology',
        'certifications.software.date': 'Émis Fév 2025',
        'certifications.java.title': 'Java: Object-Oriented Programming',
        'certifications.java.provider': 'University of Pennsylvania',
        'certifications.java.date': 'Émis Déc 2024',
        'certifications.react-basics.title': 'React Basics',
        'certifications.react-basics.provider': 'Meta',
        'certifications.react-basics.date': 'Émis Déc 2024',
        'certifications.duke.title': 'Mesure et gestion de l\'impact pour les ODD',
        'certifications.duke.provider': 'Duke University',
        'certifications.duke.date': 'Émis Mai 2024',
        'hero.name': 'Je suis Zakariae AHAJI',
        'education.view': 'Voir le Certificat',
        'nav.extracurricular': 'Activités Extra-scolaires',
        'nav.interests': 'Centres d\'Intérêt',
        'extracurricular.title': 'Activités Extra-scolaires',
        'extracurricular.subtitle': 'Chef d\'Équipe',
        'extracurricular.entrepreneurship.title': 'Entrepreneuriat',
        'extracurricular.entrepreneurship.competitions': 'Participé à des compétitions d\'innovation',
        'extracurricular.entrepreneurship.projects': 'Réalisé des projets entrepreneuriaux',
        'extracurricular.music.title': 'Musique & Arts',
        'extracurricular.music.workshop': 'Membre de l\'atelier musique et arts',
        'extracurricular.chess.title': 'Échecs',
        'extracurricular.chess.member': 'Membre du club d\'échecs',
        'interests.title': 'Centres d\'Intérêt',
        'interests.entrepreneurship': 'Entrepreneuriat',
        'interests.sales': 'Ventes',
        'interests.reading': 'Lecture',
        'interests.chess': 'Échecs',
        'interests.gym': 'Gym',
        'interests.fishing': 'Pêche',
        'interests.trip': 'Voyage de camping',
        'interests.travel': 'Voyage',
        'nav.softskills': 'Soft Skills',
        'technicalskills.title': 'Compétences Techniques',
        'technicalskills.subtitle': 'Technologies et outils avec lesquels je travaille',
        'technicalskills.programming.title': 'Langages de Programmation',
        'technicalskills.frameworks.title': 'Frameworks & Bibliothèques',
        'technicalskills.databases.title': 'Bases de Données & Systèmes de Données',
        'technicalskills.bi.title': 'Business Intelligence & Analytics',
        'technicalskills.cloud.title': 'Cloud & DevOps',
        'technicalskills.modeling.title': 'Modélisation & Méthodologies',
        'technicalskills.backend.title': 'Backend & APIs',
        'technicalskills.web.title': 'Technologies Web & Mobiles',
        'commercialskills.title': 'Compétences Commerciales',
        'commercialskills.subtitle': 'Expertise en vente et développement commercial',
        'commercialskills.sales': 'Ventes',
        'commercialskills.negotiation': 'Négociation',
        'commercialskills.marketing': 'Marketing',
        'commercialskills.digitalmarketing': 'Marketing Digital',
        'commercialskills.leadgeneration': 'Génération de Prospects',
        'commercialskills.closing': 'Fermeture',
        'commercialskills.coldcalling': 'Prospection Téléphonique',
        'commercialskills.customerrelations': 'Relations Client',
        'commercialskills.ecommerce': 'Gestion E-commerce',
        'softskills.title': 'Compétences Douces',
        'softskills.subtitle': 'Compétences personnelles et professionnelles clés',
        'softskills.leadership.title': 'Leadership',
        'softskills.leadership.description': 'Guider les équipes et mener les projets vers le succès',
        'softskills.teamwork.title': 'Travail d\'équipe',
        'softskills.teamwork.description': 'Collaborer efficacement avec des équipes et parties prenantes diverses',
        'softskills.accountability.title': 'Responsabilité',
        'softskills.accountability.description': 'Prendre la responsabilité des actions et tenir ses engagements',
        'softskills.integrity.title': 'Intégrité',
        'softskills.integrity.description': 'Maintenir des standards éthiques et une communication honnête',
        'softskills.creativity.title': 'Créativité',
        'softskills.creativity.description': 'Pensée innovante et approches de résolution de problèmes',
        'softskills.curiosity.title': 'Curiosité',
        'softskills.curiosity.description': 'Apprentissage continu et exploration de nouvelles technologies',
        'softskills.initiative.title': 'Initiative',
        'softskills.initiative.description': 'Approche proactive pour identifier et résoudre les problèmes',
        'softskills.confidence.title': 'Confiance en soi',
        'softskills.confidence.description': 'Croyance en ses capacités et volonté de relever des défis',
        'softskills.stress.title': 'Gestion du stress',
        'softskills.stress.description': 'Maintenir le sang-froid et la performance sous pression',
        'certifications.python.title': 'Programmation pour tous (mise en route de Python)',
        'certifications.python.provider': 'University of Michigan',
        'certifications.python.date': 'Émis Mai 2024',
        'certifications.unix.title': 'The Unix Workbench',
        'certifications.unix.provider': 'The Johns Hopkins University',
        'certifications.unix.date': 'Émis Mai 2024',
        'certifications.epfl.title': 'Villes africaines: Environnement et enjeux de développement durable',
        'certifications.epfl.provider': 'EPFL',
        'certifications.epfl.date': 'Émis Mai 2024',
        'certifications.css.title': 'CSS3',
        'certifications.css.provider': 'University of Michigan',
        'certifications.css.date': 'Émis Mar 2024',
        'certifications.html.title': 'HTML5',
        'certifications.html.provider': 'University of Michigan',
        'certifications.html.date': 'Émis Mar 2024',
        'certifications.js.title': 'Interactivity with JavaScript',
        'certifications.js.provider': 'University of Michigan',
        'certifications.js.date': 'Émis Mar 2024',
        'certifications.cpp.title': 'Introduction à la programmation orientée objet (en C++)',
        'certifications.cpp.provider': 'École Polytechnique',
        'certifications.cpp.date': 'Émis Mar 2024',
        'certifications.credential': 'ID de Credential:',
        'certifications.research.title': 'La recherche documentaire',
        'certifications.research.provider': 'École Polytechnique',
        'certifications.research.date': 'Émis Avr 2025',
        'contact.title': 'Me Contacter',
        'contact.subtitle': 'N\'hésitez pas à me contacter si vous avez une question ou souhaitez simplement vous connecter.',
        'contact.send': 'Envoyer le Message',
        'footer.rights': 'Tous droits réservés.'
    },
    ar: {
        'nav.home': 'الرئيسية',
        'nav.about': 'حولي',
        'nav.experience': 'الخبرة',
        'nav.education': 'التعليم',
        'nav.skills': 'المهارات',
        'nav.technicalskills': 'المهارات التقنية',
        'nav.commercialskills': 'المهارات التجارية',
        'nav.certifications': 'الشهادات',
        'nav.contact': 'التواصل',
        'hero.subtitle': 'قائد أعمال مستقبلي | طالب هندسة حاسوب',
        'hero.description': 'قائد أعمال مستقبلي | طالب هندسة حاسوب شغوف بالمبيعات والابتكار وبناء النمو المستدام',
        'hero.contact': 'تحميل السيرة الذاتية',
        'hero.projects': 'عرض المشاريع',
        'about.title': 'تعرف على المزيد حول رحلتي وخلفيتي',
        'about.profile': 'الملف الشخصي',
        'about.description1': 'كطالب هندسة حاسوب شغوف بالمبيعات والتسويق الرقمي والتفاوض والإقناع، أهدف إلى تطبيق مهاراتي في بيئة ديناميكية ومبتكرة. طموح، فضولي وموجه نحو النتائج، أنا متحمس للمساهمة بنشاط في نجاح شركتك.',
        'about.description2': 'مع خبرة في التطوير التقني والأنشطة التجارية، أجلب منظوراً فريداً يجمع بين التفكير التحليلي والمهارات الشخصية القوية لخلق تأثير تجاري ذي معنى.',
        'about.timeline': 'الخط الزمني الأكاديمي',
        'education.emsi.title': 'المدرسة المغربية لعلوم المهندس (EMSI)',
        'education.emsi.degree': 'هندسة الحاسوب',
        'education.ista.title': 'المعهد المتخصص في التكنولوجيا التطبيقية',
        'education.ista.degree': 'دبلوم في تطوير البرمجيات',
        'education.conservatory.title': 'المعهد الموسيقي الإقليمي',
        'education.conservatory.degree': 'دبلوم في الجيتار الكلاسيكي ونظرية الموسيقى',
        'experience.title': 'الخبرة المهنية',
        'experience.subtitle': 'إليك ملخص سريع لخبراتي الأكثر حداثة',
        'experience.ai.title': 'تطوير Full-Stack والذكاء الاصطناعي',
        'experience.ai.description': 'تطوير وكيل ذكي مبني على LLM لأتمتة خدمة العملاء للتجارة الإلكترونية عبر واتساب. التعاون مع فرق المبيعات في الاستكشاف والمكالمات الباردة وعروض العملاء وتحسين التواصل التجاري.',
        'experience.ecommerce.title': 'مدير التجارة الإلكترونية',
        'experience.ecommerce.description': 'إنشاء وإدارة متاجر إلكترونية لبيع المنتجات المادية، مع التركيز على أبحاث المنتجات الرابحة واستراتيجية التسويق الرقمي وتحسين المبيعات لتعظيم الربحية.',
        'experience.reseller.title': 'بائع تجارة إلكترونية',
        'experience.reseller.description': 'التفاوض والشراء وإعادة البيع الاستراتيجي للمنتجات المستعملة بهوامش محسنة، تطوير مهارات قوية في التفاوض والإقناع وعلاقات العملاء وإدارة المخزون.',
        'experience.developer.title': 'مطور ويب - مستقل',
        'experience.developer.description': 'تصميم وتطوير مواقع التجارة الإلكترونية لبيع الأحذية والساعات والعطور. بناء تطبيقات ويب للتوصيل والمكتبة وسيارات الأجرة وحلول أعمال أخرى.',
        'experience.guitar.title': 'مدرس جيتار كلاسيكي',
        'experience.theory.title': 'مدرس نظرية موسيقية',
        'experience.guitar.description': 'تدريس الجيتار الكلاسيكي في المعهد الموسيقي، في ورش العمل الموسيقية والدروس الخاصة، باستخدام نهج تدريسي متكيف ومركز على الطالب.',
        'experience.theory.description': 'تدريس نظرية الموسيقى في المعهد الموسيقي والدروس الخاصة، مساعدة الطلاب على فهم المفاهيم الموسيقية والانسجام والتأليف.',
        'skills.title': 'المهارات والتقنيات',
        'skills.subtitle': 'إليك التقنيات التي عملت معها مؤخراً',
        'skills.technical': 'المهارات التقنية',
        'skills.commercial': 'المهارات التجارية',
        'skills.soft': 'المهارات الناعمة',
        'certifications.title': 'الشهادات والتدريب',
        'certifications.subtitle': 'الشهادات المهنية والدورات المكتملة',
        'certifications.oracle.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle.provider': 'Oracle',
        'certifications.oracle.date': 'صدر تموز 2025',
        'certifications.docker.title': 'Containers w/ Docker, Kubernetes & OpenShift',
        'certifications.docker.provider': 'IBM',
        'certifications.docker.date': 'صدر آذار 2025',
        'certifications.git.title': 'Git & GitHub',
        'certifications.git.provider': 'Google',
        'certifications.git.date': 'صدر أيار 2025',
        'certifications.react.title': 'React Native',
        'certifications.react.provider': 'Meta',
        'certifications.react.date': 'صدر أيار 2025',
        'certifications.azure.title': 'Réseaux virtuels dans Azure',
        'certifications.azure.provider': 'Whizlabs',
        'certifications.azure.date': 'صدر شباط 2025',
        'certifications.software.title': 'Software Engineering: Software Design and Project Management',
        'certifications.software.provider': 'The Hong Kong University of Science and Technology',
        'certifications.software.date': 'صدر شباط 2025',
        'certifications.java.title': 'Java: Object-Oriented Programming',
        'certifications.java.provider': 'University of Pennsylvania',
        'certifications.java.date': 'صدر كانون الأول 2024',
        'certifications.react-basics.title': 'React Basics',
        'certifications.react-basics.provider': 'Meta',
        'certifications.react-basics.date': 'صدر كانون الأول 2024',
        'certifications.duke.title': 'Mesure et gestion de l\'impact pour les ODD',
        'certifications.duke.provider': 'Duke University',
        'certifications.duke.date': 'صدر أيار 2024',
        'hero.name': 'أنا زكرياء أحاجي',
        'education.view': 'عرض الشهادة',
        'nav.extracurricular': 'الأنشطة اللامنهجية',
        'nav.interests': 'الاهتمامات',
        'extracurricular.title': 'الأنشطة اللامنهجية',
        'extracurricular.subtitle': 'قائد الفريق',
        'extracurricular.entrepreneurship.title': 'ريادة الأعمال',
        'extracurricular.entrepreneurship.competitions': 'شاركت في مسابقات الابتكار',
        'extracurricular.entrepreneurship.projects': 'نفذت مشاريع ريادية',
        'extracurricular.music.title': 'الموسيقى والفنون',
        'extracurricular.music.workshop': 'عضو في ورشة الموسيقى والفنون',
        'extracurricular.chess.title': 'الشطرنج',
        'extracurricular.chess.member': 'عضو في نادي الشطرنج',
        'interests.title': 'الاهتمامات',
        'interests.entrepreneurship': 'ريادة الأعمال',
        'interests.sales': 'المبيعات',
        'interests.reading': 'القراءة',
        'interests.chess': 'الشطرنج',
        'interests.gym': 'الصالة الرياضية',
        'interests.fishing': 'الصيد',
        'interests.trip': 'رحلة تخييم',
        'interests.travel': 'السفر',
        'nav.softskills': 'السمات الشخصية',
        'technicalskills.title': 'المهارات التقنية',
        'technicalskills.subtitle': 'التقنيات والأدوات التي أعمل معها',
        'technicalskills.programming.title': 'لغات البرمجة',
        'technicalskills.frameworks.title': 'الأطر والمكتبات',
        'technicalskills.databases.title': 'قواعد البيانات وأنظمة البيانات',
        'technicalskills.bi.title': 'ذكاء الأعمال والتحليلات',
        'technicalskills.cloud.title': 'السحابة و DevOps',
        'technicalskills.modeling.title': 'النمذجة والمنهجيات',
        'technicalskills.backend.title': 'Backend و APIs',
        'technicalskills.web.title': 'تقنيات الويب والهاتف المحمول',
        'commercialskills.title': 'المهارات التجارية',
        'commercialskills.subtitle': 'خبرة في المبيعات وتطوير الأعمال',
        'commercialskills.sales': 'المبيعات',
        'commercialskills.negotiation': 'التفاوض',
        'commercialskills.marketing': 'التسويق',
        'commercialskills.digitalmarketing': 'التسويق الرقمي',
        'commercialskills.leadgeneration': 'توليد العملاء المحتملين',
        'commercialskills.closing': 'الإقناع',
        'commercialskills.coldcalling': 'المكالمات الباردة',
        'commercialskills.customerrelations': 'علاقات العملاء',
        'commercialskills.ecommerce': 'إدارة التجارة الإلكترونية',
        'softskills.title': 'السمات الشخصية',
        'softskills.subtitle': 'الكفاءات الشخصية والمهنية الرئيسية',
        'softskills.leadership.title': 'القيادة',
        'softskills.leadership.description': 'توجيه الفرق وقيادة المشاريع نحو النجاح',
        'softskills.teamwork.title': 'العمل الجماعي',
        'softskills.teamwork.description': 'التعاون الفعال مع فرق وأصحاب مصالح متنوعين',
        'softskills.accountability.title': 'المسؤولية',
        'softskills.accountability.description': 'تحمل المسؤولية عن الأفعال والوفاء بالالتزامات',
        'softskills.integrity.title': 'النزاهة',
        'softskills.integrity.description': 'الحفاظ على المعايير الأخلاقية والتواصل الصادق',
        'softskills.creativity.title': 'الإبداع',
        'softskills.creativity.description': 'التفكير المبتكر ونهج حل المشاكل',
        'softskills.curiosity.title': 'الفضول',
        'softskills.curiosity.description': 'التعلم المستمر واستكشاف التقنيات الجديدة',
        'softskills.initiative.title': 'المبادرة',
        'softskills.initiative.description': 'نهج استباقي لتحديد وحل المشاكل',
        'softskills.confidence.title': 'الثقة بالنفس',
        'softskills.confidence.description': 'الإيمان بالقدرات والاستعداد لمواجهة التحديات',
        'softskills.stress.title': 'إدارة الضغط',
        'softskills.stress.description': 'الحفاظ على الهدوء والأداء تحت الضغط',
        'certifications.python.title': 'Programmation pour tous (mise en route de Python)',
        'certifications.python.provider': 'University of Michigan',
        'certifications.python.date': 'صدر أيار 2024',
        'certifications.unix.title': 'The Unix Workbench',
        'certifications.unix.provider': 'The Johns Hopkins University',
        'certifications.unix.date': 'صدر أيار 2024',
        'certifications.epfl.title': 'Villes africaines: Environnement et enjeux de développement durable',
        'certifications.epfl.provider': 'EPFL',
        'certifications.epfl.date': 'صدر أيار 2024',
        'certifications.css.title': 'CSS3',
        'certifications.css.provider': 'University of Michigan',
        'certifications.css.date': 'صدر آذار 2024',
        'certifications.html.title': 'HTML5',
        'certifications.html.provider': 'University of Michigan',
        'certifications.html.date': 'صدر آذار 2024',
        'certifications.js.title': 'Interactivity with JavaScript',
        'certifications.js.provider': 'University of Michigan',
        'certifications.js.date': 'صدر آذار 2024',
        'certifications.cpp.title': 'Introduction à la programmation orientée objet (en C++)',
        'certifications.cpp.provider': 'École Polytechnique',
        'certifications.cpp.date': 'صدر آذار 2024',
        'certifications.credential': 'معرف الشهادة:',
        'certifications.research.title': 'البحث الوثائقي',
        'certifications.research.provider': 'École Polytechnique',
        'certifications.research.date': 'صدر نيسان 2025',
        'contact.title': 'تواصل معي',
        'contact.subtitle': 'لا تتردد في التواصل معي إذا كان لديك سؤال أو تريد فقط التواصل.',
        'contact.send': 'إرسال الرسالة',
        'footer.rights': 'جميع الحقوق محفوظة.'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Acerca de',
        'nav.experience': 'Experiencia',
        'nav.education': 'Educación',
        'nav.skills': 'Habilidades',
        'nav.technicalskills': 'Habilidades Técnicas',
        'nav.commercialskills': 'Habilidades Comerciales',
        'nav.certifications': 'Certificaciones',
        'nav.contact': 'Contacto',
        'hero.subtitle': 'Futuro Líder Empresarial | Estudiante de Ingeniería Informática',
        'hero.description': 'Futuro Líder Empresarial | Estudiante de Ingeniería Informática Apasionado por las Ventas, Innovación y Construcción de Crecimiento Sostenible',
        'hero.contact': 'Descargar CV',
        'hero.projects': 'Ver Proyectos',
        'about.title': 'Conoce más sobre mi viaje y antecedentes',
        'about.profile': 'Perfil',
        'about.description1': 'Como estudiante de ingeniería informática apasionado por las ventas, marketing digital, negociación y cierre, busco aplicar mis habilidades en un entorno dinámico e innovador. Ambicioso, curioso y orientado a resultados, estoy motivado a contribuir activamente al éxito de su empresa.',
        'about.description2': 'Con experiencia tanto en desarrollo técnico como en actividades comerciales, aporto una perspectiva única que combina el pensamiento analítico con fuertes habilidades interpersonales para crear un impacto comercial significativo.',
        'about.timeline': 'Cronología Académica',
        'education.emsi.title': 'Escuela Marroquí de Ciencias de la Ingeniería (EMSI)',
        'education.emsi.degree': 'Ingeniería Informática',
        'education.ista.title': 'Instituto Especializado de Tecnología Aplicada',
        'education.ista.degree': 'Diploma en Desarrollo de Software',
        'education.conservatory.title': 'Conservatorio Regional de Música',
        'education.conservatory.degree': 'Diploma en Guitarra Clásica y Teoría Musical',
        'experience.title': 'Experiencia Profesional',
        'experience.subtitle': 'Aquí tienes un resumen rápido de mis experiencias más recientes',
        'experience.ai.title': 'Desarrollo Full-Stack e Inteligencia Artificial',
        'experience.ai.description': 'Desarrollo de un agente inteligente basado en LLM para automatizar el servicio al cliente de e-commerce vía WhatsApp. Colaboración con equipos de ventas en prospección, llamadas en frío, presentaciones a clientes y mejora de la comunicación comercial.',
        'experience.ecommerce.title': 'Gerente de E-commerce',
        'experience.ecommerce.description': 'Creación y gestión de tiendas online para la venta de productos físicos, enfocándose en investigación de productos ganadores, estrategia de marketing digital y optimización de ventas para maximizar la rentabilidad.',
        'experience.reseller.title': 'Revendedor E-commerce',
        'experience.reseller.description': 'Negociación, compra y reventa estratégica de productos usados con márgenes optimizados, desarrollando fuertes habilidades en negociación, cierre, relaciones con clientes y gestión de inventario.',
        'experience.developer.title': 'Desarrollador Web - Freelance',
        'experience.developer.description': 'Diseño y desarrollo de sitios web de e-commerce para vender zapatillas, relojes y perfumes. Construcción de aplicaciones web para delivery, biblioteca, taxi y otras soluciones empresariales.',
        'experience.guitar.title': 'Profesor de Guitarra Clásica',
        'experience.theory.title': 'Profesor de Teoría Musical',
        'experience.guitar.description': 'Enseñanza de guitarra clásica en el conservatorio, en talleres musicales y clases particulares, utilizando un enfoque pedagógico adaptativo y centrado en el estudiante.',
        'experience.theory.description': 'Enseñanza de teoría musical en el conservatorio y clases particulares, ayudando a los estudiantes a entender conceptos musicales, armonía y composición.',
        'skills.title': 'Habilidades y Tecnologías',
        'skills.subtitle': 'Aquí están las tecnologías con las que he estado trabajando recientemente',
        'skills.technical': 'Habilidades Técnicas',
        'skills.commercial': 'Habilidades Comerciales',
        'skills.soft': 'Habilidades Blandas',
        'certifications.title': 'Certificaciones y Capacitación',
        'certifications.subtitle': 'Certificaciones profesionales y cursos completados',
        'certifications.oracle.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle.provider': 'Oracle',
        'certifications.oracle.date': 'Emitido Jul 2025',
        'certifications.docker.title': 'Containers w/ Docker, Kubernetes & OpenShift',
        'certifications.docker.provider': 'IBM',
        'certifications.docker.date': 'Emitido Mar 2025',
        'certifications.git.title': 'Git & GitHub',
        'certifications.git.provider': 'Google',
        'certifications.git.date': 'Emitido May 2025',
        'certifications.react.title': 'React Native',
        'certifications.react.provider': 'Meta',
        'certifications.react.date': 'Emitido May 2025',
        'certifications.azure.title': 'Réseaux virtuels dans Azure',
        'certifications.azure.provider': 'Whizlabs',
        'certifications.azure.date': 'Emitido Feb 2025',
        'certifications.software.title': 'Software Engineering: Software Design and Project Management',
        'certifications.software.provider': 'The Hong Kong University of Science and Technology',
        'certifications.software.date': 'Emitido Feb 2025',
        'certifications.java.title': 'Java: Object-Oriented Programming',
        'certifications.java.provider': 'University of Pennsylvania',
        'certifications.java.date': 'Emitido Dic 2024',
        'certifications.react-basics.title': 'React Basics',
        'certifications.react-basics.provider': 'Meta',
        'certifications.react-basics.date': 'Emitido Dic 2024',
        'certifications.duke.title': 'Mesure et gestion de l\'impact pour les ODD',
        'certifications.duke.provider': 'Duke University',
        'certifications.duke.date': 'Emitido May 2024',
        'hero.name': 'Soy Zakariae AHAJI',
        'education.view': 'Ver Certificado',
        'nav.extracurricular': 'Actividades Extraescolares',
        'nav.interests': 'Intereses',
        'extracurricular.title': 'Actividades Extraescolares',
        'extracurricular.subtitle': 'Líder de Equipo',
        'extracurricular.entrepreneurship.title': 'Emprendimiento',
        'extracurricular.entrepreneurship.competitions': 'Participé en competencias de innovación',
        'extracurricular.entrepreneurship.projects': 'Realicé proyectos emprendedores',
        'extracurricular.music.title': 'Música y Artes',
        'extracurricular.music.workshop': 'Miembro del taller de música y artes',
        'extracurricular.chess.title': 'Ajedrez',
        'extracurricular.chess.member': 'Miembro del club de ajedrez',
        'interests.title': 'Intereses',
        'interests.entrepreneurship': 'Emprendimiento',
        'interests.sales': 'Ventas',
        'interests.reading': 'Lectura',
        'interests.chess': 'Ajedrez',
        'interests.gym': 'Gimnasio',
        'interests.fishing': 'Pesca',
        'interests.trip': 'Viaje de camping',
        'interests.travel': 'Viajes',
        'nav.softskills': 'Habilidades Blandas',
        'technicalskills.title': 'Habilidades Técnicas',
        'technicalskills.subtitle': 'Tecnologías y herramientas con las que trabajo',
        'technicalskills.programming.title': 'Lenguajes de Programación',
        'technicalskills.frameworks.title': 'Frameworks y Bibliotecas',
        'technicalskills.databases.title': 'Bases de Datos y Sistemas de Datos',
        'technicalskills.bi.title': 'Business Intelligence y Analytics',
        'technicalskills.cloud.title': 'Cloud y DevOps',
        'technicalskills.modeling.title': 'Modelado y Metodologías',
        'technicalskills.backend.title': 'Backend y APIs',
        'technicalskills.web.title': 'Tecnologías Web y Móviles',
        'commercialskills.title': 'Habilidades Comerciales',
        'commercialskills.subtitle': 'Experiencia en ventas y desarrollo de negocios',
        'commercialskills.sales': 'Ventas',
        'commercialskills.negotiation': 'Negociación',
        'commercialskills.marketing': 'Marketing',
        'commercialskills.digitalmarketing': 'Marketing Digital',
        'commercialskills.leadgeneration': 'Generación de Leads',
        'commercialskills.closing': 'Cierre',
        'commercialskills.coldcalling': 'Llamadas en Frío',
        'commercialskills.customerrelations': 'Relaciones con Clientes',
        'commercialskills.ecommerce': 'Gestión E-commerce',
        'softskills.title': 'Habilidades Blandas',
        'softskills.subtitle': 'Competencias personales y profesionales clave',
        'softskills.leadership.title': 'Liderazgo',
        'softskills.leadership.description': 'Guiar equipos y llevar proyectos al éxito',
        'softskills.teamwork.title': 'Trabajo en equipo',
        'softskills.teamwork.description': 'Colaborar efectivamente con equipos y partes interesadas diversas',
        'softskills.accountability.title': 'Responsabilidad',
        'softskills.accountability.description': 'Asumir responsabilidad por las acciones y cumplir compromisos',
        'softskills.integrity.title': 'Integridad',
        'softskills.integrity.description': 'Mantener estándares éticos y comunicación honesta',
        'softskills.creativity.title': 'Creatividad',
        'softskills.creativity.description': 'Pensamiento innovador y enfoques de resolución de problemas',
        'softskills.curiosity.title': 'Curiosidad',
        'softskills.curiosity.description': 'Aprendizaje continuo y exploración de nuevas tecnologías',
        'softskills.initiative.title': 'Iniciativa',
        'softskills.initiative.description': 'Enfoque proactivo para identificar y resolver problemas',
        'softskills.confidence.title': 'Autoconfianza',
        'softskills.confidence.description': 'Creencia en las capacidades y disposición para asumir desafíos',
        'softskills.stress.title': 'Gestión del estrés',
        'softskills.stress.description': 'Mantener la compostura y el rendimiento bajo presión',
        'certifications.python.title': 'Programmation pour tous (mise en route de Python)',
        'certifications.python.provider': 'University of Michigan',
        'certifications.python.date': 'Emitido May 2024',
        'certifications.unix.title': 'The Unix Workbench',
        'certifications.unix.provider': 'The Johns Hopkins University',
        'certifications.unix.date': 'Emitido May 2024',
        'certifications.epfl.title': 'Villes africaines: Environnement et enjeux de développement durable',
        'certifications.epfl.provider': 'EPFL',
        'certifications.epfl.date': 'Emitido May 2024',
        'certifications.css.title': 'CSS3',
        'certifications.css.provider': 'University of Michigan',
        'certifications.css.date': 'Emitido Mar 2024',
        'certifications.html.title': 'HTML5',
        'certifications.html.provider': 'University of Michigan',
        'certifications.html.date': 'Emitido Mar 2024',
        'certifications.js.title': 'Interactivity with JavaScript',
        'certifications.js.provider': 'University of Michigan',
        'certifications.js.date': 'Emitido Mar 2024',
        'certifications.cpp.title': 'Introduction à la programmation orientée objet (en C++)',
        'certifications.cpp.provider': 'École Polytechnique',
        'certifications.cpp.date': 'Emitido Mar 2024',
        'certifications.credential': 'ID de Credencial:',
        'certifications.research.title': 'Investigación Documental',
        'certifications.research.provider': 'École Polytechnique',
        'certifications.research.date': 'Emitido Abr 2025',
        'contact.title': 'Ponerse en Contacto',
        'contact.subtitle': 'No dudes en contactarme si tienes una pregunta o simplemente quieres conectar.',
        'contact.send': 'Enviar Mensaje',
        'footer.rights': 'Todos los derechos reservados.'
    }
};

// Current language
let currentLang = 'en';

// DOM elements
const langButtons = document.querySelectorAll('.lang-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.getElementById('scrollToTop');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeNavigation();
    initializeScrollAnimations();
    initializeSkillBars();
    initializeContactForm();
    initializeScrollToTop();
    // Typing effect removed for stable title
    
    // Initialize CV download based on language
    initializeCVDownload();
});

// Language switching
function initializeLanguage() {
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active language button
    langButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update CV download link
    updateCVLink();
    
    // Update text direction for Arabic
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl');
    }
}

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.experience-card, .about-card, .about-timeline, .skill-category, .cert-card, .contact-item');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Skill bars animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Contact form
function initializeContactForm() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Scroll to top functionality
function initializeScrollToTop() {
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Typing effect
function initializeTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const texts = [
            'Future Business Leader | Software Engineering Student Passionate About Sales, Innovation & Building Sustainable Growth',
            'Building Modern Web Applications',
            'Creating Data-Driven Solutions',
            'Developing Cloud-Ready Applications'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }
            
            setTimeout(typeText, typeSpeed);
        }
        
        typeText();
    }
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.animate-on-scroll');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add click effects to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
        const button = e.target.classList.contains('btn') ? e.target : e.target.closest('.btn');
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    .rtl {
        direction: rtl;
    }
    
    .rtl .hero-content {
        text-align: right;
    }
    
    .rtl .profile-section {
        flex-direction: row-reverse;
    }
`;
document.head.appendChild(style);

// CV Download function
function initializeCVDownload() {
    const cvDownloadLink = document.getElementById('cv-download');
    if (cvDownloadLink) {
        // Set initial CV based on current language
        updateCVLink();
        
        // Update CV link when language changes
        document.addEventListener('languageChanged', updateCVLink);
    }
}

function updateCVLink() {
    const cvDownloadLink = document.getElementById('cv-download');
    if (cvDownloadLink) {
        const currentLang = document.documentElement.lang || 'en';
        
        if (currentLang === 'fr') {
            cvDownloadLink.href = 'cv-french.pdf';
        } else {
            cvDownloadLink.href = 'cv-english.pdf';
        }
    }
}

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    // Update icon based on current theme
    if (savedTheme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            if (newTheme === 'light') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
    }
}

// Sidebar Menu Functionality
function initializeSidebarMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    // Open sidebar
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            sidebarMenu.classList.add('active');
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close sidebar
    function closeSidebar() {
        sidebarMenu.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar when clicking on a link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Smooth scroll to section
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }
            // Close sidebar after a short delay
            setTimeout(closeSidebar, 300);
        });
    });
    
    // Update active link on scroll
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                sidebarLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial check
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initializeThemeToggle();
    initializeSidebarMenu();
});