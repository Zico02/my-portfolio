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
        'education.emsi.title': 'Moroccan School of Engineering Sciences',
        'education.emsi.degree': 'Computer Engineering',
        'education.ista.title': 'Specialized Institute of Applied Technology',
        'education.ista.degree': 'Diploma in Software Development',
        'education.conservatory.title': 'Regional Conservatory of Music',
        'education.conservatory.degree': 'Diploma in Classical Guitar and Music Theory',
        'experience.title': 'Professional Experience',
        'experience.subtitle': 'Roles aligned with my CV and professional profiles',
        'experience.inovagit.title': 'Full-Stack Development and Artificial Intelligence Engineer',
        'experience.inovagit.meta': 'Internship · Jul 2025 – Sept 2025 · Casablanca, Morocco',
        'experience.inovagit.b1': 'Developed an intelligent agent based on LLMs to automate e-commerce customer service via WhatsApp.',
        'experience.inovagit.b2': 'Collaborated with the sales team on prospecting, cold calling, and improving commercial communication with clients.',
        'experience.inovagit.b3': 'Built an AI-powered assistant so customers could get quick answers about orders, products, and common questions.',
        'experience.inovagit.b4': 'Combined technical delivery with outreach and presentations to see how AI applies in real business settings.',
        'experience.inovagit.certCaption': 'Internship certificate — Inovagit',
        'experience.shopify.title': 'Sales Manager',
        'experience.shopify.meta': 'Part-time · Jul 2021 – Present',
        'experience.shopify.b1': 'Created and managed online stores selling physical products, focusing on winning product research and store optimization.',
        'experience.shopify.b2': 'Executed digital marketing strategies (ads, SEO, CTR, social media) to increase sales performance and maximize profitability.',
        'experience.ebay.title': 'E-commerce Manager',
        'experience.ebay.meta': 'Part-time · Jul 2020 – Present',
        'experience.ebay.b1': 'Negotiated and purchased products at competitive prices, ensuring optimized margins through strategic sourcing and pricing.',
        'experience.ebay.b2': 'Managed customer communication, sales closing, and inventory tracking while maintaining high satisfaction and repeat sales.',
        'experience.fiverr.title': 'Web Developer',
        'experience.fiverr.meta': 'Freelance · 2023 – Present · Remote',
        'experience.fiverr.b1': 'Designed and developed e-commerce websites for selling sneakers, watches, perfumes, and consumer products.',
        'experience.fiverr.b2': 'Built web applications and websites for different industries (restaurants, delivery, libraries, driving services, and more).',
        'experience.guitar.title': 'Classical Guitar Tutor',
        'experience.guitar.company': 'Regional Conservatory of Music and Arts',
        'experience.guitar.meta': '2022 – Present · Rabat–Salé, Morocco',
        'experience.guitar.b1': 'Teaching classical guitar to students aged 6 to 82 through art workshops and private lessons.',
        'experience.guitar.b2': 'Applying a student-centered pedagogy and adapting repertoire and technique to different levels and learning styles.',
        'experience.guitar.cap1': 'Guitar session — conservatory workshop',
        'experience.guitar.cap2': 'Teaching guitar — one-to-one session',
        'experience.theorytutor.title': 'Music Theory Tutor',
        'experience.theorytutor.company': 'Regional Conservatory of Music and Arts',
        'experience.theorytutor.meta': '2022 – Present · Rabat–Salé, Morocco',
        'experience.theorytutor.b1': 'Teach core music theory concepts including notation, harmony, rhythm, scales, and ear training to students of varying levels.',
        'experience.theorytutor.b2': 'Design structured lesson plans tailored to individual learning styles, from beginners to advanced students.',
        'experience.theorytutor.b3': 'Help students develop sight-reading, analytical listening, and composition skills.',
        'experience.theorytutor.b4': 'Prepare students for exams, conservatory assessments, and musical performances.',
        'experience.theorytutor.b5': 'Use interactive methods (exercises, dictation, and real musical examples) to strengthen understanding and retention.',
        'experience.theorytutor.b6': 'Track student progress and adapt teaching strategies to improve confidence and musical independence.',
        'skills.title': 'Skills & Technologies',
        'skills.subtitle': 'Here are the technologies I\'ve been working with recently',
        'skills.technical': 'Technical Skills',
        'skills.commercial': 'Commercial Skills',
        'skills.soft': 'Soft Skills',
        'certifications.title': 'Certifications & Training',
        'certifications.subtitle': 'Professional certifications and completed courses',
        'certifications.pg.title': 'Stand Out Program',
        'certifications.pg.provider': 'Procter & Gamble',
        'certifications.pg.date': 'Issued Nov 2025',
        'certifications.pg.skills': 'Leadership, Business Integrity, +2 skills',
        'certifications.pg.mediaCaption': 'Stand Out Program certification',
        'certifications.oracle2025.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle2025.provider': 'Oracle University',
        'certifications.oracle2025.date': 'Issued Jul 2025',
        'certifications.oracle2025.mediaCaption': 'Oracle Database Administration 19c professional certification',
        'certifications.salescrm.title': 'Sales and CRM Overview',
        'certifications.salescrm.provider': 'Salesforce',
        'certifications.salescrm.date': 'Issued Mar 2026',
        'certifications.salescrm.mediaCaption': 'Sales and CRM Overview — course certificate',
        'certifications.leadsf.title': 'Lead Management in Salesforce',
        'certifications.leadsf.provider': 'Salesforce',
        'certifications.leadsf.date': 'Issued Mar 2026',
        'certifications.leadsf.mediaCaption': 'Lead Management in Salesforce — course certificate',
        'certifications.sap.title': 'SAP Professional Fundamentals',
        'certifications.sap.provider': 'SAP',
        'certifications.sap.date': 'Issued Apr 2026',
        'certifications.sap.mediaCaption': 'SAP Professional Fundamentals — credential',
        'certifications.bizstrategy.title': 'Foundations of Business Strategy',
        'certifications.bizstrategy.provider': 'University of Virginia',
        'certifications.bizstrategy.date': 'Issued Mar 2026',
        'certifications.agile.title': 'Agile Project Management',
        'certifications.agile.provider': 'Google',
        'certifications.agile.date': 'Issued Mar 2026',
        'certifications.finacct.title': 'Financial Accounting Fundamentals',
        'certifications.finacct.provider': 'University of Virginia',
        'certifications.finacct.date': 'Issued Jan 2026',
        'certifications.pmrisk.title': 'Project Management and Risk Fundamentals',
        'certifications.pmrisk.provider': 'LearnKartS',
        'certifications.pmrisk.date': 'Issued Feb 2026',
        'certifications.honoris.title': 'Personal, Social and Entrepreneurial Skills',
        'certifications.honoris.provider': 'Honoris United Universities',
        'certifications.honoris.date': 'Issued Dec 2025',
        'certifications.honoris.note': 'Critical Thinking, Creativity, +6 skills',
        'certifications.springcloud.title': 'Advanced Spring Cloud Microservices & Deployment with Docker',
        'certifications.springcloud.provider': 'Packt',
        'certifications.springcloud.date': 'Issued Dec 2024',
        'certifications.ibmml.title': 'Machine Learning with Python',
        'certifications.ibmml.provider': 'IBM',
        'certifications.ibmml.date': 'Issued Dec 2024',
        'certifications.oracle.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle.provider': 'Oracle',
        'certifications.oracle.date': 'Issued Jul 2025',
        'certifications.ibmmlv2.title': 'Machine Learning with Python (V2)',
        'certifications.ibmmlv2.provider': 'IBM',
        'certifications.ibmmlv2.date': 'Issued Jan 2025',
        'certifications.ibmmlv2.note': 'Credly digital badge',
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
        'extracurricular.title': 'Extracurricular Activities and Leadership',
        'extracurricular.subtitle': 'Clubs, entrepreneurship, and community impact',
        'extracurricular.fitwinz.title': 'Fitwinz – Gym Clothing Brand / Founder and Project Lead',
        'extracurricular.fitwinz.dates': '2024 – Present',
        'extracurricular.fitwinz.b1': 'Founded and developed Fitwinz, a fitness clothing brand focused on modern gym wear and lifestyle apparel, managing branding strategy, product design direction, and customer engagement.',
        'extracurricular.fitwinz.b2': 'Led entrepreneurial execution including market research, pricing strategy, sales planning, and digital promotion, strengthening business development and communication skills.',
        'extracurricular.eclub.title': 'Entrepreneurship Club',
        'extracurricular.eclub.role': 'Team Leader',
        'extracurricular.eclub.dates': '2023 – 2026',
        'extracurricular.eclub.b1': 'Led entrepreneurship initiatives by organizing innovation activities, student projects, and competitions to encourage creativity, business thinking, and startup culture within the school.',
        'extracurricular.eclub.b2': 'Coordinated teamwork and collaboration among club members, strengthening leadership, communication, and project management skills.',
        'extracurricular.eclub.b3': 'Participated in workshops and activities focused on innovation and business development, exploring entrepreneurial project opportunities with peers.',
        'extracurricular.aclub.org': 'Music & Arts Club',
        'extracurricular.aclub.orgdates': '2024 – 2026',
        'extracurricular.aclub.president.role': 'President',
        'extracurricular.aclub.president.dates': 'Feb 2024 – Jan 2026',
        'extracurricular.aclub.president.b1': 'Led the Music & Arts Club, organizing artistic and cultural events to enhance student engagement and creativity.',
        'extracurricular.aclub.president.b2': 'Directed club operations and coordinated members to successfully execute events and initiatives.',
        'extracurricular.aclub.president.b3': 'Built a collaborative and inclusive environment, strengthening leadership, communication, and team management skills.',
        'extracurricular.aclub.tutor.role': 'Tutor — Classical guitar session',
        'extracurricular.aclub.tutor.dates': 'Mar 2024 – Feb 2025',
        'extracurricular.aclub.tutor.b1': 'Provided tutoring in music theory and instruments, supporting students in developing their musical skills and understanding.',
        'extracurricular.aclub.tutor.b2': 'Adapted teaching methods to different skill levels, fostering a supportive and engaging learning environment.',
        'extracurricular.aclub.tutor.b3': 'Strengthened communication, mentoring, and teaching skills through regular interaction with students.',
        'extracurricular.aclub.cap1': 'Classical guitar session',
        'extracurricular.aclub.cap2': 'Session — guitar & piano',
        'extracurricular.aclub.cap3': 'Workshop teaching',
        'extracurricular.aclub.cap4': 'Youth guitar session',
        'extracurricular.cclub.org': 'Chess Club',
        'extracurricular.cclub.orgspan': 'Jan 2023 – Jan 2026',
        'extracurricular.cclub.vp.role': 'Vice President',
        'extracurricular.cclub.vp.dates': 'Jun 2024 – Jan 2026',
        'extracurricular.cclub.vp.b1': 'Promoted to Vice President after demonstrating strong commitment and performance as a club member.',
        'extracurricular.cclub.vp.b2': 'Collaborated with the Royal Moroccan Chess Federation to organize an official chess tournament.',
        'extracurricular.cclub.vp.b3': 'Developed leadership, decision-making, and strategic thinking skills.',
        'extracurricular.cclub.member.role': 'Member',
        'extracurricular.cclub.member.dates': 'Jan 2023 – Jun 2024',
        'extracurricular.cclub.member.b1': 'Contributed to strategic planning and coordination of training sessions and competitive events for students.',
        'extracurricular.cclub.member.b2': 'Mentored junior members and fostered a collaborative and disciplined club environment.',
        'extracurricular.cclub.m1': 'Chess tournament with the Royal Moroccan Chess Federation',
        'extracurricular.cclub.m2': 'Chess tournament setup',
        'extracurricular.cclub.m3': 'Featured on national television with the Royal Moroccan Chess Federation',
        'extracurricular.cclub.m4': 'Previous chess tournament setup',
        'extracurricular.cclub.m5': 'With the Moroccan Chess Champion',
        'extracurricular.cclub.m6': 'Professional chess setup',
        'extracurricular.cclub.m7': 'Outdoor chess event with the Royal Moroccan Chess Federation',
        'extracurricular.cclub.m8': 'Our chess tournament on national television',
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
        'commercialskills.ecommerce': 'Sales Management',
        'softskills.title': 'Soft Skills',
        'softskills.subtitle': 'Key personal and professional competencies',
        'softskills.leadership.title': 'Leadership',
        'softskills.leadership.description': 'Guiding people and initiatives with clarity and purpose',
        'softskills.teamwork.title': 'Teamwork',
        'softskills.teamwork.description': 'Collaborating effectively toward shared goals',
        'softskills.accountability.title': 'Accountability',
        'softskills.accountability.description': 'Owning outcomes and following through on commitments',
        'softskills.integrity.title': 'Integrity',
        'softskills.integrity.description': 'Acting with honesty and strong ethical standards',
        'softskills.curiosity.title': 'Curiosity',
        'softskills.curiosity.description': 'Staying eager to learn and explore new ideas',
        'softskills.creativity.title': 'Creativity',
        'softskills.creativity.description': 'Finding original approaches and fresh solutions',
        'softskills.problemsolving.title': 'Problem-solving',
        'softskills.problemsolving.description': 'Breaking down challenges and delivering practical fixes',
        'softskills.initiative.title': 'Initiative',
        'softskills.initiative.description': 'Stepping forward proactively to create progress',
        'softskills.criticalthinking.title': 'Critical Thinking',
        'softskills.criticalthinking.description': 'Evaluating information carefully to decide and act well',
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
        'certifications.cpp.provider': 'EPFL',
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
        'education.emsi.title': 'École Marocaine des Sciences de l\'Ingénieur',
        'education.emsi.degree': 'Génie Informatique',
        'education.ista.title': 'Institut Spécialisé de Technologie Appliquée',
        'education.ista.degree': 'Diplôme en développement informatique',
        'education.conservatory.title': 'Conservatoire régional de musique et d\'art chorégraphique',
        'education.conservatory.degree': 'Diplôme en guitare classique et solfège',
        'experience.title': 'Expérience Professionnelle',
        'experience.subtitle': 'Postes alignés sur mon CV et mes profils professionnels',
        'experience.inovagit.title': 'Ingénieur Développement Full-Stack et Intelligence Artificielle',
        'experience.inovagit.meta': 'Stage · Juil 2025 – Sept 2025 · Casablanca, Maroc',
        'experience.inovagit.b1': 'Développement d\'un agent intelligent basé sur des LLM pour automatiser le service client e-commerce via WhatsApp.',
        'experience.inovagit.b2': 'Collaboration avec l\'équipe commerciale : prospection, appels à froid et amélioration de la communication avec les clients.',
        'experience.inovagit.b3': 'Mise en place d\'un assistant IA pour répondre rapidement aux questions sur commandes, produits et demandes fréquentes.',
        'experience.inovagit.b4': 'Combinaison de la livraison technique avec la prospection et les présentations pour voir l\'IA appliquée en contexte réel.',
        'experience.inovagit.certCaption': 'Attestation de stage — Inovagit',
        'experience.shopify.title': 'Responsable des ventes',
        'experience.shopify.meta': 'Temps partiel · Juil 2021 – Présent',
        'experience.shopify.b1': 'Création et gestion de boutiques en ligne vendant des produits physiques, avec recherche de produits gagnants et optimisation des boutiques.',
        'experience.shopify.b2': 'Mise en œuvre de stratégies de marketing digital (publicités, SEO, CTR, réseaux sociaux) pour accroître les ventes et la rentabilité.',
        'experience.ebay.title': 'Responsable e-commerce',
        'experience.ebay.meta': 'Temps partiel · Juil 2020 – Présent',
        'experience.ebay.b1': 'Négociation et achat de produits à des prix compétitifs, avec marges optimisées grâce au sourcing et au pricing stratégiques.',
        'experience.ebay.b2': 'Gestion de la relation client, du closing et du suivi des stocks, en maintenant satisfaction et ventes récurrentes.',
        'experience.fiverr.title': 'Développeur Web',
        'experience.fiverr.meta': 'Freelance · 2023 – Présent · À distance',
        'experience.fiverr.b1': 'Conception et développement de sites e-commerce (sneakers, montres, parfums et produits de consommation).',
        'experience.fiverr.b2': 'Développement d\'applications et sites web pour différents secteurs (restaurants, livraison, bibliothèques, VTC, etc.).',
        'experience.guitar.title': 'Professeur de guitare classique',
        'experience.guitar.company': 'Conservatoire régional de musique et des arts',
        'experience.guitar.meta': '2022 – Présent · Rabat–Salé, Maroc',
        'experience.guitar.b1': 'Enseignement de la guitare classique à des élèves de 6 à 82 ans via ateliers et cours particuliers.',
        'experience.guitar.b2': 'Pédagogie centrée sur l\'élève, adaptation du répertoire et de la technique aux niveaux et styles d\'apprentissage.',
        'experience.guitar.cap1': 'Séance de guitare — atelier au conservatoire',
        'experience.guitar.cap2': 'Cours de guitare individuel',
        'experience.theorytutor.title': 'Professeur de théorie musicale',
        'experience.theorytutor.company': 'Conservatoire régional de musique et des arts',
        'experience.theorytutor.meta': '2022 – Présent · Rabat–Salé, Maroc',
        'experience.theorytutor.b1': 'Enseigner les fondamentaux : notation, harmonie, rythme, gammes et éducation de l\'oreille à tous niveaux.',
        'experience.theorytutor.b2': 'Concevoir des plans de cours structurés adaptés au profil de chaque élève, du débutant au niveau avancé.',
        'experience.theorytutor.b3': 'Développer la lecture à vue, l\'écoute analytique et l\'initiation à la composition.',
        'experience.theorytutor.b4': 'Préparer aux examens, évaluations du conservatoire et représentations musicales.',
        'experience.theorytutor.b5': 'Utiliser des méthodes interactives (exercices, dictées, exemples musicaux) pour ancrer les connaissances.',
        'experience.theorytutor.b6': 'Suivre la progression et ajuster la pédagogie pour renforcer confiance et autonomie musicale.',
        'skills.title': 'Compétences & Technologies',
        'skills.subtitle': 'Voici les technologies avec lesquelles j\'ai travaillé récemment',
        'skills.technical': 'Compétences Techniques',
        'skills.commercial': 'Compétences Commerciales',
        'skills.soft': 'Soft Skills',
        'certifications.title': 'Certifications & Formation',
        'certifications.subtitle': 'Certifications professionnelles et cours complétés',
        'certifications.pg.title': 'Programme Stand Out',
        'certifications.pg.provider': 'Procter & Gamble',
        'certifications.pg.date': 'Émis nov. 2025',
        'certifications.pg.skills': 'Leadership, Intégrité en affaires, +2 compétences',
        'certifications.pg.mediaCaption': 'Certification Stand Out Program',
        'certifications.oracle2025.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle2025.provider': 'Oracle University',
        'certifications.oracle2025.date': 'Émis juil. 2025',
        'certifications.oracle2025.mediaCaption': 'Certification professionnelle Oracle Database Administration 19c',
        'certifications.salescrm.title': 'Sales and CRM Overview',
        'certifications.salescrm.provider': 'Salesforce',
        'certifications.salescrm.date': 'Émis mars 2026',
        'certifications.salescrm.mediaCaption': 'Sales and CRM Overview — certificat de cours',
        'certifications.leadsf.title': 'Lead Management in Salesforce',
        'certifications.leadsf.provider': 'Salesforce',
        'certifications.leadsf.date': 'Émis mars 2026',
        'certifications.leadsf.mediaCaption': 'Lead Management in Salesforce — certificat de cours',
        'certifications.sap.title': 'SAP Professional Fundamentals',
        'certifications.sap.provider': 'SAP',
        'certifications.sap.date': 'Émis avr. 2026',
        'certifications.sap.mediaCaption': 'SAP Professional Fundamentals — attestation',
        'certifications.bizstrategy.title': 'Foundations of Business Strategy',
        'certifications.bizstrategy.provider': 'University of Virginia',
        'certifications.bizstrategy.date': 'Émis mars 2026',
        'certifications.agile.title': 'Agile Project Management',
        'certifications.agile.provider': 'Google',
        'certifications.agile.date': 'Émis mars 2026',
        'certifications.finacct.title': 'Financial Accounting Fundamentals',
        'certifications.finacct.provider': 'University of Virginia',
        'certifications.finacct.date': 'Émis janv. 2026',
        'certifications.pmrisk.title': 'Project Management and Risk Fundamentals',
        'certifications.pmrisk.provider': 'LearnKartS',
        'certifications.pmrisk.date': 'Émis févr. 2026',
        'certifications.honoris.title': 'Personal, Social and Entrepreneurial Skills',
        'certifications.honoris.provider': 'Honoris United Universities',
        'certifications.honoris.date': 'Émis déc. 2025',
        'certifications.honoris.note': 'Esprit critique, Créativité, +6 compétences',
        'certifications.springcloud.title': 'Advanced Spring Cloud Microservices & Deployment with Docker',
        'certifications.springcloud.provider': 'Packt',
        'certifications.springcloud.date': 'Émis déc. 2024',
        'certifications.ibmml.title': 'Machine Learning with Python',
        'certifications.ibmml.provider': 'IBM',
        'certifications.ibmml.date': 'Émis déc. 2024',
        'certifications.oracle.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle.provider': 'Oracle',
        'certifications.oracle.date': 'Émis Juil 2025',
        'certifications.ibmmlv2.title': 'Machine Learning with Python (V2)',
        'certifications.ibmmlv2.provider': 'IBM',
        'certifications.ibmmlv2.date': 'Émis janv. 2025',
        'certifications.ibmmlv2.note': 'Badge numérique Credly',
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
        'certifications.view': 'Voir le certificat',
        'education.view': 'Voir le Certificat',
        'nav.extracurricular': 'Activités Extra-scolaires',
        'nav.interests': 'Centres d\'Intérêt',
        'extracurricular.title': 'Activités extra-scolaires et leadership',
        'extracurricular.subtitle': 'Clubs, entrepreneuriat et engagement',
        'extracurricular.fitwinz.title': 'Fitwinz – Marque de vêtements fitness / Fondateur et chef de projet',
        'extracurricular.fitwinz.dates': '2024 – Présent',
        'extracurricular.fitwinz.b1': 'Création et développement de Fitwinz, marque de vêtements fitness axée sur le sport et le lifestyle : branding, direction produit et relation client.',
        'extracurricular.fitwinz.b2': 'Exécution entrepreneuriale : étude de marché, pricing, plan de ventes et promotion digitale, renforçant le développement commercial et la communication.',
        'extracurricular.eclub.title': 'Club d\'entrepreneuriat',
        'extracurricular.eclub.role': 'Chef d\'équipe',
        'extracurricular.eclub.dates': '2023 – 2026',
        'extracurricular.eclub.b1': 'Animation d\'initiatives entrepreneuriales : activités d\'innovation, projets étudiants et compétitions pour encourager la créativité et l\'esprit startup.',
        'extracurricular.eclub.b2': 'Coordination du travail d\'équipe et de la collaboration entre membres, renforcement du leadership, de la communication et de la gestion de projet.',
        'extracurricular.eclub.b3': 'Participation à des ateliers sur l\'innovation et le développement d\'entreprise, exploration de projets entrepreneuriaux avec les pairs.',
        'extracurricular.aclub.org': 'Club musique & arts',
        'extracurricular.aclub.orgdates': '2024 – 2026',
        'extracurricular.aclub.president.role': 'Président',
        'extracurricular.aclub.president.dates': 'Févr. 2024 – Janv. 2026',
        'extracurricular.aclub.president.b1': 'Direction du club musique & arts : organisation d\'événements artistiques et culturels pour l\'engagement et la créativité des étudiants.',
        'extracurricular.aclub.president.b2': 'Pilotage des opérations du club et coordination des membres pour mener à bien événements et initiatives.',
        'extracurricular.aclub.president.b3': 'Environnement collaboratif et inclusif, renforcement du leadership, de la communication et du management d\'équipe.',
        'extracurricular.aclub.tutor.role': 'Tuteur — Séance de guitare classique',
        'extracurricular.aclub.tutor.dates': 'Mars 2024 – Févr. 2025',
        'extracurricular.aclub.tutor.b1': 'Soutien scolaire en théorie musicale et instruments pour développer les compétences musicales des étudiants.',
        'extracurricular.aclub.tutor.b2': 'Adaptation des méthodes aux niveaux, création d\'un cadre d\'apprentissage bienveillant et motivant.',
        'extracurricular.aclub.tutor.b3': 'Renforcement de la communication, du mentorat et de l\'enseignement par l\'interaction régulière avec les étudiants.',
        'extracurricular.aclub.cap1': 'Séance de guitare classique',
        'extracurricular.aclub.cap2': 'Séance — guitare & piano',
        'extracurricular.aclub.cap3': 'Atelier pédagogique',
        'extracurricular.aclub.cap4': 'Séance guitare jeunes',
        'extracurricular.cclub.org': 'Club d\'échecs',
        'extracurricular.cclub.orgspan': 'Janv. 2023 – Janv. 2026',
        'extracurricular.cclub.vp.role': 'Vice-président',
        'extracurricular.cclub.vp.dates': 'Juin 2024 – Janv. 2026',
        'extracurricular.cclub.vp.b1': 'Promotion au poste de vice-président après engagement et résultats en tant que membre actif.',
        'extracurricular.cclub.vp.b2': 'Collaboration avec la Fédération Royale Marocaine des Échecs pour organiser un tournoi officiel.',
        'extracurricular.cclub.vp.b3': 'Développement du leadership, de la prise de décision et de la pensée stratégique.',
        'extracurricular.cclub.member.role': 'Membre',
        'extracurricular.cclub.member.dates': 'Janv. 2023 – Juin 2024',
        'extracurricular.cclub.member.b1': 'Contribution à la planification stratégique et à la coordination des entraînements et compétitions pour les étudiants.',
        'extracurricular.cclub.member.b2': 'Mentorat des membres juniors et promotion d\'un environnement collaboratif et discipliné.',
        'extracurricular.cclub.m1': 'Tournoi d\'échecs avec la Fédération Royale Marocaine des Échecs',
        'extracurricular.cclub.m2': 'Installation du tournoi d\'échecs',
        'extracurricular.cclub.m3': 'Passage sur la télévision nationale avec la Fédération Royale Marocaine des Échecs',
        'extracurricular.cclub.m4': 'Installation d\'un précédent tournoi d\'échecs',
        'extracurricular.cclub.m5': 'Avec le champion marocain des échecs',
        'extracurricular.cclub.m6': 'Installation d\'échecs professionnelle',
        'extracurricular.cclub.m7': 'Événement d\'échecs en plein air avec la Fédération Royale Marocaine des Échecs',
        'extracurricular.cclub.m8': 'Notre tournoi d\'échecs à la télévision nationale',
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
        'commercialskills.ecommerce': 'Gestion des ventes',
        'softskills.title': 'Compétences Douces',
        'softskills.subtitle': 'Compétences personnelles et professionnelles clés',
        'softskills.leadership.title': 'Leadership',
        'softskills.leadership.description': 'Guider les personnes et les initiatives avec clarté',
        'softskills.teamwork.title': 'Travail d\'équipe',
        'softskills.teamwork.description': 'Collaborer efficacement vers des objectifs communs',
        'softskills.accountability.title': 'Responsabilité',
        'softskills.accountability.description': 'Assumer les résultats et tenir ses engagements',
        'softskills.integrity.title': 'Intégrité',
        'softskills.integrity.description': 'Agir avec honnêteté et exigence éthique',
        'softskills.curiosity.title': 'Curiosité',
        'softskills.curiosity.description': 'Rester avide d\'apprendre et d\'explorer de nouvelles idées',
        'softskills.creativity.title': 'Créativité',
        'softskills.creativity.description': 'Proposer des approches originales et des solutions nouvelles',
        'softskills.problemsolving.title': 'Résolution de problèmes',
        'softskills.problemsolving.description': 'Décomposer les enjeux et proposer des solutions concrètes',
        'softskills.initiative.title': 'Initiative',
        'softskills.initiative.description': 'Avancer de façon proactive pour créer du progrès',
        'softskills.criticalthinking.title': 'Esprit critique',
        'softskills.criticalthinking.description': 'Analyser l\'information avec rigueur pour décider et agir',
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
        'certifications.cpp.provider': 'EPFL',
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
        'education.emsi.title': 'المدرسة المغربية لعلوم المهندس',
        'education.emsi.degree': 'هندسة الحاسوب',
        'education.ista.title': 'المعهد المتخصص في التكنولوجيا التطبيقية',
        'education.ista.degree': 'دبلوم في تطوير البرمجيات',
        'education.conservatory.title': 'المعهد الموسيقي الإقليمي',
        'education.conservatory.degree': 'دبلوم في الجيتار الكلاسيكي ونظرية الموسيقى',
        'experience.title': 'الخبرة المهنية',
        'experience.subtitle': 'مناصب متوافقة مع سيرتي الذاتية وملفاتي المهنية',
        'experience.inovagit.title': 'مهندس تطوير Full-Stack والذكاء الاصطناعي',
        'experience.inovagit.meta': 'تدريب · يوليو 2025 – سبتمبر 2025 · الدار البيضاء، المغرب',
        'experience.inovagit.b1': 'تطوير وكيل ذكي مبني على نماذج لغوية كبيرة لأتمتة خدمة عملاء التجارة الإلكترونية عبر واتساب.',
        'experience.inovagit.b2': 'التعاون مع فريق المبيعات في الاستكشاف والمكالمات الباردة وتحسين التواصل مع العملاء.',
        'experience.inovagit.b3': 'بناء مساعد يعتمد على الذكاء الاصطناعي لتقديم إجابات سريعة حول الطلبات والمنتجات والأسئلة الشائعة.',
        'experience.inovagit.b4': 'دمج الجانب التقني مع الاتصال بالعملاء والعروض لفهم تطبيق الذكاء الاصطناعي في بيئة عمل حقيقية.',
        'experience.inovagit.certCaption': 'شهادة التدريب — Inovagit',
        'experience.shopify.title': 'مدير مبيعات',
        'experience.shopify.meta': 'دوام جزئي · يوليو 2021 – حتى الآن',
        'experience.shopify.b1': 'إنشاء وإدارة متاجر إلكترونية لبيع منتجات مادية، مع التركيز على اختيار المنتجات الرابحة وتحسين المتجر.',
        'experience.shopify.b2': 'تنفيذ استراتيجيات تسويق رقمي (إعلانات، SEO، CTR، وسائل التواصل) لزيادة المبيعات والربحية.',
        'experience.ebay.title': 'مدير التجارة الإلكترونية',
        'experience.ebay.meta': 'دوام جزئي · يوليو 2020 – حتى الآن',
        'experience.ebay.b1': 'التفاوض والشراء بأسعار تنافسية مع هوامش محسّنة عبر التوريد والتسعير الاستراتيجي.',
        'experience.ebay.b2': 'إدارة التواصل مع العملاء والإقناع وتتبع المخزون مع الحفاظ على الرضا والمبيعات المتكررة.',
        'experience.fiverr.title': 'مطور ويب',
        'experience.fiverr.meta': 'عمل حر · 2023 – حتى الآن · عن بُعد',
        'experience.fiverr.b1': 'تصميم وتطوير مواقع تجارة إلكترونية لبيع الأحذية والساعات والعطور ومنتجات استهلاكية.',
        'experience.fiverr.b2': 'بناء تطبيقات ومواقع لمختلف القطاعات (مطاعم، توصيل، مكتبات، نقل، وغيرها).',
        'experience.guitar.title': 'مدرس جيتار كلاسيكي',
        'experience.guitar.company': 'المعهد الإقليمي للموسيقى والفنون',
        'experience.guitar.meta': '2022 – حتى الآن · الرباط–سلا، المغرب',
        'experience.guitar.b1': 'تدريس الجيتار الكلاسيكي لطلاب من 6 إلى 82 سنة عبر ورش عمل ودروس خاصة.',
        'experience.guitar.b2': 'تربية مركزة على الطالب مع تكييف المقطوعات والتقنية حسب المستوى وأسلوب التعلم.',
        'experience.guitar.cap1': 'جلسة جيتار — ورش بالمعهد',
        'experience.guitar.cap2': 'تدريس الجيتار — درس فردي',
        'experience.theorytutor.title': 'مدرس نظرية موسيقية',
        'experience.theorytutor.company': 'المعهد الإقليمي للموسيقى والفنون',
        'experience.theorytutor.meta': '2022 – حتى الآن · الرباط–سلا، المغرب',
        'experience.theorytutor.b1': 'تدريس أسس النظرية الموسيقية: التدوين، التناغم، الإيقاع، السلالم وتدريب الأذن لمستويات مختلفة.',
        'experience.theorytutor.b2': 'تصميم خطط دروس منظمة تناسب أنماط التعلم الفردية من المبتدئين إلى المتقدمين.',
        'experience.theorytutor.b3': 'تنمية القراءة البصرية، والاستماع التحليلي، ومهارات التأليف.',
        'experience.theorytutor.b4': 'التحضير للامتحانات وتقييمات المعهد والعروض الموسيقية.',
        'experience.theorytutor.b5': 'استخدام أساليب تفاعلية (تمارين، إملاءات، أمثلة موسيقية حقيقية) لتعزيز الفهم والاستيعاب.',
        'experience.theorytutor.b6': 'متابعة تقدم الطلاب وتكييف الاستراتيجيات التعليمية لتعزيز الثقة والاستقلالية الموسيقية.',
        'skills.title': 'المهارات والتقنيات',
        'skills.subtitle': 'إليك التقنيات التي عملت معها مؤخراً',
        'skills.technical': 'المهارات التقنية',
        'skills.commercial': 'المهارات التجارية',
        'skills.soft': 'المهارات الناعمة',
        'certifications.title': 'الشهادات والتدريب',
        'certifications.subtitle': 'الشهادات المهنية والدورات المكتملة',
        'certifications.pg.title': 'برنامج Stand Out',
        'certifications.pg.provider': 'Procter & Gamble',
        'certifications.pg.date': 'صدر تشرين الثاني 2025',
        'certifications.pg.skills': 'القيادة، نزاهة الأعمال، +2 مهارات',
        'certifications.pg.mediaCaption': 'شهادة برنامج Stand Out',
        'certifications.oracle2025.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle2025.provider': 'Oracle University',
        'certifications.oracle2025.date': 'صدر تموز 2025',
        'certifications.oracle2025.mediaCaption': 'شهادة Oracle Database Administration 19c الاحترافية',
        'certifications.salescrm.title': 'Sales and CRM Overview',
        'certifications.salescrm.provider': 'Salesforce',
        'certifications.salescrm.date': 'صدر آذار 2026',
        'certifications.salescrm.mediaCaption': 'Sales and CRM Overview — شهادة الدورة',
        'certifications.leadsf.title': 'Lead Management in Salesforce',
        'certifications.leadsf.provider': 'Salesforce',
        'certifications.leadsf.date': 'صدر آذار 2026',
        'certifications.leadsf.mediaCaption': 'Lead Management in Salesforce — شهادة الدورة',
        'certifications.sap.title': 'SAP Professional Fundamentals',
        'certifications.sap.provider': 'SAP',
        'certifications.sap.date': 'صدر نيسان 2026',
        'certifications.sap.mediaCaption': 'SAP Professional Fundamentals — اعتماد',
        'certifications.bizstrategy.title': 'Foundations of Business Strategy',
        'certifications.bizstrategy.provider': 'University of Virginia',
        'certifications.bizstrategy.date': 'صدر آذار 2026',
        'certifications.agile.title': 'Agile Project Management',
        'certifications.agile.provider': 'Google',
        'certifications.agile.date': 'صدر آذار 2026',
        'certifications.finacct.title': 'Financial Accounting Fundamentals',
        'certifications.finacct.provider': 'University of Virginia',
        'certifications.finacct.date': 'صدر كانون الثاني 2026',
        'certifications.pmrisk.title': 'Project Management and Risk Fundamentals',
        'certifications.pmrisk.provider': 'LearnKartS',
        'certifications.pmrisk.date': 'صدر شباط 2026',
        'certifications.honoris.title': 'Personal, Social and Entrepreneurial Skills',
        'certifications.honoris.provider': 'Honoris United Universities',
        'certifications.honoris.date': 'صدر كانون الأول 2025',
        'certifications.honoris.note': 'تفكير نقدي، إبداع، +6 مهارات',
        'certifications.springcloud.title': 'Advanced Spring Cloud Microservices & Deployment with Docker',
        'certifications.springcloud.provider': 'Packt',
        'certifications.springcloud.date': 'صدر كانون الأول 2024',
        'certifications.ibmml.title': 'Machine Learning with Python',
        'certifications.ibmml.provider': 'IBM',
        'certifications.ibmml.date': 'صدر كانون الأول 2024',
        'certifications.oracle.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle.provider': 'Oracle',
        'certifications.oracle.date': 'صدر تموز 2025',
        'certifications.ibmmlv2.title': 'Machine Learning with Python (V2)',
        'certifications.ibmmlv2.provider': 'IBM',
        'certifications.ibmmlv2.date': 'صدر كانون الثاني 2025',
        'certifications.ibmmlv2.note': 'شارة رقمية Credly',
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
        'certifications.view': 'عرض الشهادة',
        'education.view': 'عرض الشهادة',
        'nav.extracurricular': 'الأنشطة اللامنهجية',
        'nav.interests': 'الاهتمامات',
        'extracurricular.title': 'الأنشطة اللامنهجية والقيادة',
        'extracurricular.subtitle': 'النوادي، ريادة الأعمال والمشاركة المجتمعية',
        'extracurricular.fitwinz.title': 'Fitwinz – ملابس رياضية / مؤسس وقائد مشروع',
        'extracurricular.fitwinz.dates': '2024 – حتى الآن',
        'extracurricular.fitwinz.b1': 'تأسيس وتطوير Fitwinz، علامة ملابس رياضية تركز على الملابس الرياضية ونمط الحياة: الهوية، توجيه المنتج، والتفاعل مع العملاء.',
        'extracurricular.fitwinz.b2': 'تنفيذ ريادي: دراسة السوق، التسعير، تخطيط المبيعات والترويج الرقمي، مع تعزيز تطوير الأعمال والتواصل.',
        'extracurricular.eclub.title': 'نادي ريادة الأعمال',
        'extracurricular.eclub.role': 'قائد فريق',
        'extracurricular.eclub.dates': '2023 – 2026',
        'extracurricular.eclub.b1': 'قيادة مبادرات ريادية: أنشطة ابتكار، مشاريع طلابية ومسابقات لتعزيز الإبداع وثقافة الشركات الناشئة.',
        'extracurricular.eclub.b2': 'تنسيق العمل الجماعي والتعاون بين الأعضاء، وتعزيز القيادة والتواصل وإدارة المشاريع.',
        'extracurricular.eclub.b3': 'المشاركة في ورش حول الابتكار وتطوير الأعمال واستكشاف فرص مشاريع ريادية مع الأقران.',
        'extracurricular.aclub.org': 'نادي الموسيقى والفنون',
        'extracurricular.aclub.orgdates': '2024 – 2026',
        'extracurricular.aclub.president.role': 'رئيس',
        'extracurricular.aclub.president.dates': 'فبراير 2024 – يناير 2026',
        'extracurricular.aclub.president.b1': 'قيادة النادي وتنظيم فعاليات فنية وثقافية لتعزيز مشاركة الطلاب والإبداع.',
        'extracurricular.aclub.president.b2': 'توجيه عمليات النادي وتنسيق الأعضاء لتنفيذ الفعاليات والمبادرات بنجاح.',
        'extracurricular.aclub.president.b3': 'بيئة تعاونية وشاملة، مع تعزيز القيادة والتواصل وإدارة الفريق.',
        'extracurricular.aclub.tutor.role': 'مدرس — جلسة غيتار كلاسيكي',
        'extracurricular.aclub.tutor.dates': 'مارس 2024 – فبراير 2025',
        'extracurricular.aclub.tutor.b1': 'دعم تعليمي في النظرية الموسيقية والآلات لتطوير مهارات الطلاب الموسيقية.',
        'extracurricular.aclub.tutor.b2': 'تكييف الأساليب حسب المستويات وبناء بيئة تعلم داعمة وجذابة.',
        'extracurricular.aclub.tutor.b3': 'تعزيز التواصل والإرشاد والتدريس من خلال التفاعل المنتظم مع الطلاب.',
        'extracurricular.aclub.cap1': 'جلسة غيتار كلاسيكي',
        'extracurricular.aclub.cap2': 'جلسة — غيتار وبيانو',
        'extracurricular.aclub.cap3': 'تدريس في ورشة',
        'extracurricular.aclub.cap4': 'جلسة غيتار للشباب',
        'extracurricular.cclub.org': 'نادي الشطرنج',
        'extracurricular.cclub.orgspan': 'يناير 2023 – يناير 2026',
        'extracurricular.cclub.vp.role': 'نائب الرئيس',
        'extracurricular.cclub.vp.dates': 'يونيو 2024 – يناير 2026',
        'extracurricular.cclub.vp.b1': 'الترقية إلى نائب الرئيس بعد التزام قوي وأداء كعضو نشط.',
        'extracurricular.cclub.vp.b2': 'التعاون مع الجامعة الملكية المغربية للشطرنج لتنظيم بطولة رسمية.',
        'extracurricular.cclub.vp.b3': 'تطوير القيادة واتخاذ القرار والتفكير الاستراتيجي.',
        'extracurricular.cclub.member.role': 'عضو',
        'extracurricular.cclub.member.dates': 'يناير 2023 – يونيو 2024',
        'extracurricular.cclub.member.b1': 'المساهمة في التخطيط الاستراتيجي وتنسيق التدريبات والمسابقات للطلاب.',
        'extracurricular.cclub.member.b2': 'إرشاد الأعضاء الأصغر سنًا وتعزيز بيئة تعاونية ومنضبطة.',
        'extracurricular.cclub.m1': 'بطولة شطرنج مع الجامعة الملكية المغربية للشطرنج',
        'extracurricular.cclub.m2': 'تجهيز بطولة الشطرنج',
        'extracurricular.cclub.m3': 'ظهور على التلفزيون الوطني مع الجامعة الملكية المغربية للشطرنج',
        'extracurricular.cclub.m4': 'تجهيز سابق لبطولة شطرنج',
        'extracurricular.cclub.m5': 'مع بطل المغرب في الشطرنج',
        'extracurricular.cclub.m6': 'تجهيز شطرنج احترافي',
        'extracurricular.cclub.m7': 'فعالية شطرنج في الهواء الطلق مع الجامعة الملكية المغربية للشطرنج',
        'extracurricular.cclub.m8': 'بطولة الشطرنج لدينا على التلفزيون الوطني',
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
        'commercialskills.ecommerce': 'إدارة المبيعات',
        'softskills.title': 'السمات الشخصية',
        'softskills.subtitle': 'الكفاءات الشخصية والمهنية الرئيسية',
        'softskills.leadership.title': 'القيادة',
        'softskills.leadership.description': 'توجيه الأفراد والمبادرات بوضوح وهدف',
        'softskills.teamwork.title': 'العمل الجماعي',
        'softskills.teamwork.description': 'التعاون الفعال نحو أهداف مشتركة',
        'softskills.accountability.title': 'المسؤولية',
        'softskills.accountability.description': 'تحمل نتائج العمل والوفاء بالالتزامات',
        'softskills.integrity.title': 'النزاهة',
        'softskills.integrity.description': 'الالتزام بالصدق والمعايير الأخلاقية',
        'softskills.curiosity.title': 'الفضول',
        'softskills.curiosity.description': 'الرغبة المستمرة في التعلم واستكشاف أفكار جديدة',
        'softskills.creativity.title': 'الإبداع',
        'softskills.creativity.description': 'اقتراح أساليب أصلية وحلول مبتكرة',
        'softskills.problemsolving.title': 'حل المشكلات',
        'softskills.problemsolving.description': 'تحليل التحديات وتقديم حلول عملية',
        'softskills.initiative.title': 'المبادرة',
        'softskills.initiative.description': 'المبادرة بخطوات استباقية لتحقيق التقدم',
        'softskills.criticalthinking.title': 'التفكير النقدي',
        'softskills.criticalthinking.description': 'تقييم المعلومات بدقة لاتخاذ قرارات سليمة',
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
        'certifications.cpp.provider': 'EPFL',
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
        'education.emsi.title': 'Escuela Marroquí de Ciencias de la Ingeniería',
        'education.emsi.degree': 'Ingeniería Informática',
        'education.ista.title': 'Instituto Especializado de Tecnología Aplicada',
        'education.ista.degree': 'Diploma en Desarrollo de Software',
        'education.conservatory.title': 'Conservatorio Regional de Música',
        'education.conservatory.degree': 'Diploma en Guitarra Clásica y Teoría Musical',
        'experience.title': 'Experiencia Profesional',
        'experience.subtitle': 'Roles alineados con mi CV y perfiles profesionales',
        'experience.inovagit.title': 'Ingeniero de Desarrollo Full-Stack e Inteligencia Artificial',
        'experience.inovagit.meta': 'Prácticas · Jul 2025 – Sept 2025 · Casablanca, Marruecos',
        'experience.inovagit.b1': 'Desarrollo de un agente inteligente basado en LLM para automatizar el servicio al cliente e-commerce vía WhatsApp.',
        'experience.inovagit.b2': 'Colaboración con el equipo de ventas en prospección, llamadas en frío y mejora de la comunicación con clientes.',
        'experience.inovagit.b3': 'Creación de un asistente con IA para respuestas rápidas sobre pedidos, productos y preguntas frecuentes.',
        'experience.inovagit.b4': 'Combinación de entrega técnica con prospección y presentaciones para ver la IA aplicada en entornos reales.',
        'experience.inovagit.certCaption': 'Certificado de prácticas — Inovagit',
        'experience.shopify.title': 'Gerente de Ventas',
        'experience.shopify.meta': 'Tiempo parcial · Jul 2021 – Presente',
        'experience.shopify.b1': 'Creación y gestión de tiendas online de productos físicos, con investigación de productos ganadores y optimización de la tienda.',
        'experience.shopify.b2': 'Ejecución de estrategias de marketing digital (anuncios, SEO, CTR, redes sociales) para aumentar ventas y rentabilidad.',
        'experience.ebay.title': 'Gerente de E-commerce',
        'experience.ebay.meta': 'Tiempo parcial · Jul 2020 – Presente',
        'experience.ebay.b1': 'Negociación y compra a precios competitivos con márgenes optimizados mediante abastecimiento y precios estratégicos.',
        'experience.ebay.b2': 'Gestión de la comunicación con clientes, cierre de ventas e inventario manteniendo satisfacción y recompra.',
        'experience.fiverr.title': 'Desarrollador Web',
        'experience.fiverr.meta': 'Freelance · 2023 – Presente · Remoto',
        'experience.fiverr.b1': 'Diseño y desarrollo de sitios e-commerce para sneakers, relojes, perfumes y productos de consumo.',
        'experience.fiverr.b2': 'Aplicaciones y sitios web para distintos sectores (restaurantes, reparto, bibliotecas, transporte, etc.).',
        'experience.guitar.title': 'Profesor de guitarra clásica',
        'experience.guitar.company': 'Conservatorio regional de música y artes',
        'experience.guitar.meta': '2022 – Presente · Rabat–Salé, Marruecos',
        'experience.guitar.b1': 'Enseñanza de guitarra clásica a estudiantes de 6 a 82 años en talleres y clases privadas.',
        'experience.guitar.b2': 'Pedagogía centrada en el alumno, adaptación de repertorio y técnica a distintos niveles y estilos de aprendizaje.',
        'experience.guitar.cap1': 'Sesión de guitarra — taller en conservatorio',
        'experience.guitar.cap2': 'Clase individual de guitarra',
        'experience.theorytutor.title': 'Profesor de teoría musical',
        'experience.theorytutor.company': 'Conservatorio regional de música y artes',
        'experience.theorytutor.meta': '2022 – Presente · Rabat–Salé, Marruecos',
        'experience.theorytutor.b1': 'Enseñar conceptos fundamentales: notación, armonía, ritmo, escalas y entrenamiento auditivo a distintos niveles.',
        'experience.theorytutor.b2': 'Diseñar planes de clase estructurados adaptados al estilo de aprendizaje, desde principiantes hasta avanzados.',
        'experience.theorytutor.b3': 'Desarrollar lectura a primera vista, escucha analítica y habilidades de composición.',
        'experience.theorytutor.b4': 'Preparar para exámenes, evaluaciones del conservatorio y actuaciones.',
        'experience.theorytutor.b5': 'Usar métodos interactivos (ejercicios, dictados y ejemplos musicales reales) para reforzar comprensión y retención.',
        'experience.theorytutor.b6': 'Hacer seguimiento del progreso y ajustar la enseñanza para mejorar confianza e independencia musical.',
        'skills.title': 'Habilidades y Tecnologías',
        'skills.subtitle': 'Aquí están las tecnologías con las que he estado trabajando recientemente',
        'skills.technical': 'Habilidades Técnicas',
        'skills.commercial': 'Habilidades Comerciales',
        'skills.soft': 'Habilidades Blandas',
        'certifications.title': 'Certificaciones y Capacitación',
        'certifications.subtitle': 'Certificaciones profesionales y cursos completados',
        'certifications.pg.title': 'Programa Stand Out',
        'certifications.pg.provider': 'Procter & Gamble',
        'certifications.pg.date': 'Emitido nov 2025',
        'certifications.pg.skills': 'Liderazgo, Integridad empresarial, +2 habilidades',
        'certifications.pg.mediaCaption': 'Certificación Stand Out Program',
        'certifications.oracle2025.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle2025.provider': 'Oracle University',
        'certifications.oracle2025.date': 'Emitido jul 2025',
        'certifications.oracle2025.mediaCaption': 'Certificación profesional Oracle Database Administration 19c',
        'certifications.salescrm.title': 'Sales and CRM Overview',
        'certifications.salescrm.provider': 'Salesforce',
        'certifications.salescrm.date': 'Emitido mar 2026',
        'certifications.salescrm.mediaCaption': 'Sales and CRM Overview — certificado del curso',
        'certifications.leadsf.title': 'Lead Management in Salesforce',
        'certifications.leadsf.provider': 'Salesforce',
        'certifications.leadsf.date': 'Emitido mar 2026',
        'certifications.leadsf.mediaCaption': 'Lead Management in Salesforce — certificado del curso',
        'certifications.sap.title': 'SAP Professional Fundamentals',
        'certifications.sap.provider': 'SAP',
        'certifications.sap.date': 'Emitido abr 2026',
        'certifications.sap.mediaCaption': 'SAP Professional Fundamentals — credencial',
        'certifications.bizstrategy.title': 'Foundations of Business Strategy',
        'certifications.bizstrategy.provider': 'University of Virginia',
        'certifications.bizstrategy.date': 'Emitido mar 2026',
        'certifications.agile.title': 'Agile Project Management',
        'certifications.agile.provider': 'Google',
        'certifications.agile.date': 'Emitido mar 2026',
        'certifications.finacct.title': 'Financial Accounting Fundamentals',
        'certifications.finacct.provider': 'University of Virginia',
        'certifications.finacct.date': 'Emitido ene 2026',
        'certifications.pmrisk.title': 'Project Management and Risk Fundamentals',
        'certifications.pmrisk.provider': 'LearnKartS',
        'certifications.pmrisk.date': 'Emitido feb 2026',
        'certifications.honoris.title': 'Personal, Social and Entrepreneurial Skills',
        'certifications.honoris.provider': 'Honoris United Universities',
        'certifications.honoris.date': 'Emitido dic 2025',
        'certifications.honoris.note': 'Pensamiento crítico, Creatividad, +6 habilidades',
        'certifications.springcloud.title': 'Advanced Spring Cloud Microservices & Deployment with Docker',
        'certifications.springcloud.provider': 'Packt',
        'certifications.springcloud.date': 'Emitido dic 2024',
        'certifications.ibmml.title': 'Machine Learning with Python',
        'certifications.ibmml.provider': 'IBM',
        'certifications.ibmml.date': 'Emitido dic 2024',
        'certifications.oracle.title': 'Oracle Database Administration 19 Certified Professional',
        'certifications.oracle.provider': 'Oracle',
        'certifications.oracle.date': 'Emitido Jul 2025',
        'certifications.ibmmlv2.title': 'Machine Learning with Python (V2)',
        'certifications.ibmmlv2.provider': 'IBM',
        'certifications.ibmmlv2.date': 'Emitido ene 2025',
        'certifications.ibmmlv2.note': 'Insignia digital Credly',
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
        'certifications.view': 'Ver certificado',
        'education.view': 'Ver Certificado',
        'nav.extracurricular': 'Actividades Extraescolares',
        'nav.interests': 'Intereses',
        'extracurricular.title': 'Actividades extraescolares y liderazgo',
        'extracurricular.subtitle': 'Clubes, emprendimiento e impacto comunitario',
        'extracurricular.fitwinz.title': 'Fitwinz – Ropa de gimnasio / Fundador y líder de proyecto',
        'extracurricular.fitwinz.dates': '2024 – Presente',
        'extracurricular.fitwinz.b1': 'Fundación y desarrollo de Fitwinz, marca de ropa fitness y lifestyle: estrategia de marca, dirección de producto y engagement con clientes.',
        'extracurricular.fitwinz.b2': 'Ejecución emprendedora: investigación de mercado, precios, plan de ventas y promoción digital, reforzando desarrollo de negocio y comunicación.',
        'extracurricular.eclub.title': 'Club de emprendimiento',
        'extracurricular.eclub.role': 'Líder de equipo',
        'extracurricular.eclub.dates': '2023 – 2026',
        'extracurricular.eclub.b1': 'Liderazgo de iniciativas: actividades de innovación, proyectos estudiantiles y competencias para fomentar creatividad y cultura startup.',
        'extracurricular.eclub.b2': 'Coordinación del trabajo en equipo entre miembros, reforzando liderazgo, comunicación y gestión de proyectos.',
        'extracurricular.eclub.b3': 'Participación en talleres de innovación y desarrollo de negocio, explorando oportunidades de proyectos con compañeros.',
        'extracurricular.aclub.org': 'Club de música y artes',
        'extracurricular.aclub.orgdates': '2024 – 2026',
        'extracurricular.aclub.president.role': 'Presidente',
        'extracurricular.aclub.president.dates': 'Feb 2024 – Ene 2026',
        'extracurricular.aclub.president.b1': 'Dirección del club de música y artes, organizando eventos artísticos y culturales para participación y creatividad estudiantil.',
        'extracurricular.aclub.president.b2': 'Gestión de operaciones del club y coordinación de miembros para ejecutar eventos e iniciativas.',
        'extracurricular.aclub.president.b3': 'Entorno colaborativo e inclusivo, reforzando liderazgo, comunicación y gestión de equipos.',
        'extracurricular.aclub.tutor.role': 'Tutor — Sesión de guitarra clásica',
        'extracurricular.aclub.tutor.dates': 'Mar 2024 – Feb 2025',
        'extracurricular.aclub.tutor.b1': 'Tutorías en teoría musical e instrumentos para apoyar el desarrollo musical de los estudiantes.',
        'extracurricular.aclub.tutor.b2': 'Adaptación de métodos a distintos niveles, fomentando un ambiente de aprendizaje positivo y participativo.',
        'extracurricular.aclub.tutor.b3': 'Refuerzo de comunicación, mentoría y docencia mediante interacción regular con estudiantes.',
        'extracurricular.aclub.cap1': 'Sesión de guitarra clásica',
        'extracurricular.aclub.cap2': 'Sesión — guitarra y piano',
        'extracurricular.aclub.cap3': 'Enseñanza en taller',
        'extracurricular.aclub.cap4': 'Sesión de guitarra con jóvenes',
        'extracurricular.cclub.org': 'Club de ajedrez',
        'extracurricular.cclub.orgspan': 'Ene 2023 – Ene 2026',
        'extracurricular.cclub.vp.role': 'Vicepresidente',
        'extracurricular.cclub.vp.dates': 'Jun 2024 – Ene 2026',
        'extracurricular.cclub.vp.b1': 'Ascenso a vicepresidente tras compromiso y desempeño como miembro activo.',
        'extracurricular.cclub.vp.b2': 'Colaboración con la Federación Real Marroquí de Ajedrez para organizar un torneo oficial.',
        'extracurricular.cclub.vp.b3': 'Desarrollo de liderazgo, toma de decisiones y pensamiento estratégico.',
        'extracurricular.cclub.member.role': 'Miembro',
        'extracurricular.cclub.member.dates': 'Ene 2023 – Jun 2024',
        'extracurricular.cclub.member.b1': 'Contribución a la planificación estratégica y coordinación de entrenamientos y competiciones para estudiantes.',
        'extracurricular.cclub.member.b2': 'Mentoría a miembros más jóvenes y fomento de un entorno colaborativo y disciplinado.',
        'extracurricular.cclub.m1': 'Torneo de ajedrez con la Federación Real Marroquí de Ajedrez',
        'extracurricular.cclub.m2': 'Montaje del torneo de ajedrez',
        'extracurricular.cclub.m3': 'Aparición en televisión nacional con la Federación Real Marroquí de Ajedrez',
        'extracurricular.cclub.m4': 'Montaje de un torneo anterior',
        'extracurricular.cclub.m5': 'Con el campeón marroquí de ajedrez',
        'extracurricular.cclub.m6': 'Montaje profesional de ajedrez',
        'extracurricular.cclub.m7': 'Evento de ajedrez al aire libre con la Federación Real Marroquí de Ajedrez',
        'extracurricular.cclub.m8': 'Nuestro torneo de ajedrez en televisión nacional',
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
        'commercialskills.ecommerce': 'Gestión de ventas',
        'softskills.title': 'Habilidades Blandas',
        'softskills.subtitle': 'Competencias personales y profesionales clave',
        'softskills.leadership.title': 'Liderazgo',
        'softskills.leadership.description': 'Orientar a las personas y las iniciativas con claridad',
        'softskills.teamwork.title': 'Trabajo en equipo',
        'softskills.teamwork.description': 'Colaborar de forma efectiva hacia objetivos compartidos',
        'softskills.accountability.title': 'Responsabilidad',
        'softskills.accountability.description': 'Asumir resultados y cumplir compromisos',
        'softskills.integrity.title': 'Integridad',
        'softskills.integrity.description': 'Actuar con honestidad y estándares éticos sólidos',
        'softskills.curiosity.title': 'Curiosidad',
        'softskills.curiosity.description': 'Mantener ganas de aprender y explorar ideas nuevas',
        'softskills.creativity.title': 'Creatividad',
        'softskills.creativity.description': 'Encontrar enfoques originales y soluciones frescas',
        'softskills.problemsolving.title': 'Resolución de problemas',
        'softskills.problemsolving.description': 'Desglosar retos y ofrecer soluciones prácticas',
        'softskills.initiative.title': 'Iniciativa',
        'softskills.initiative.description': 'Avanzar de forma proactiva para generar progreso',
        'softskills.criticalthinking.title': 'Pensamiento crítico',
        'softskills.criticalthinking.description': 'Evaluar la información con rigor para decidir y actuar bien',
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
        'certifications.cpp.provider': 'EPFL',
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
    const animateElements = document.querySelectorAll('.experience-card, .about-card, .about-timeline, .skill-category, .cert-card, .contact-item, .activity-block, .experience-media-item, .activity-gallery-item');
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