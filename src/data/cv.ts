import type { Lang } from '../i18n/ui';

export type L10n = Record<Lang, string>;

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: L10n;
  linkedin: string;
  linkedinUrl: string;
}

export interface ExperienceItem {
  org: string;
  role: L10n;
  kind: L10n;
  period: L10n;
  ongoing?: boolean;
  summary: L10n;
  /** Short capability tags shown under the entry. */
  tasks: L10n[];
}

export interface EducationItem {
  title: L10n;
  org: string;
  period: L10n;
  ongoing?: boolean;
}

export interface SkillGroup {
  label: L10n;
  items: (string | L10n)[];
}

export interface CourseItem {
  title: L10n;
  by: L10n;
  year: string;
}

export const contact: ContactInfo = {
  name: 'Luz Mulinaris',
  email: 'mluzmulinaris@gmail.com',
  phone: '+54 351 515 9059',
  phoneHref: 'tel:+543515159059',
  location: { en: 'Córdoba, Argentina', es: 'Córdoba, Argentina' },
  linkedin: 'in/marialuzmulinaris',
  linkedinUrl: 'https://www.linkedin.com/in/marialuzmulinaris',
};

export const about = {
  hello: { en: 'Hi! :)', es: '¡Hola! :)' },
  bio: [
    {
      en: 'I’m Luz, a graphic designer currently in my fourth year of the Graphic Design degree at Universidad Blas Pascal. I’m 22 and I live in Córdoba, Argentina.',
      es: 'Me llamo Luz, actualmente estoy cursando el cuarto año de la Licenciatura en Diseño Gráfico en la Universidad Blas Pascal. Tengo 22 años y vivo en Córdoba Capital.',
    },
    {
      en: 'I’m an active, organized and responsible person. I like to keep growing and learning new things.',
      es: 'Soy una persona activa, organizada y responsable. Me gusta estar en constante crecimiento y aprender cosas nuevas.',
    },
  ] satisfies L10n[],
};

export const experience: ExperienceItem[] = [
  {
    org: 'FiAD — Foro de Innovación para el Aprendizaje y el Desarrollo',
    role: { en: 'Graphic Designer', es: 'Diseñadora gráfica' },
    kind: { en: 'Freelance', es: 'Freelance' },
    period: { en: 'Apr 2025 — Present', es: 'Abr 2025 — Actualidad' },
    ongoing: true,
    summary: {
      en: 'I design and manage social media pieces — mainly Instagram and LinkedIn — and give support to the website, working with WordPress for updates and maintenance.',
      es: 'Me encargo del diseño y la gestión de piezas para redes sociales, principalmente Instagram y LinkedIn. También doy soporte a la página web y trabajo con WordPress para su actualización y mantenimiento.',
    },
    tasks: [
      { en: 'Social media', es: 'Redes' },
      { en: 'Brochure', es: 'Brochure' },
      { en: 'Stationery', es: 'Papelería' },
      { en: 'Web design', es: 'Diseño web' },
      { en: 'Mailing', es: 'Mailing' },
    ],
  },
  {
    org: 'AAGOS — Asociación Argentina de Gestión Operativa en Salud',
    role: { en: 'Graphic Designer', es: 'Diseñadora gráfica' },
    kind: { en: 'Freelance', es: 'Freelance' },
    period: { en: 'Mar 2026 — Present', es: 'Mar 2026 — Actualidad' },
    ongoing: true,
    summary: {
      en: 'Visual identity and an informative pieces system for the 3rd National Conference on Operational Health Management — social pieces, credentials and banners.',
      es: 'Identidad visual y un sistema de piezas informativas para la 3ra Jornada Nacional de Gestión Operativa en Salud — placas para redes, credenciales y banners.',
    },
    tasks: [
      { en: 'Identity', es: 'Identidad' },
      { en: 'Social pieces', es: 'Placas para redes' },
      { en: 'Credentials', es: 'Credenciales' },
      { en: 'Banners', es: 'Banners' },
    ],
  },
  {
    org: 'AAGOS — Asociación Argentina de Gestión Operativa en Salud',
    role: { en: 'Graphic Designer', es: 'Diseñadora gráfica' },
    kind: { en: 'Freelance', es: 'Freelance' },
    period: { en: 'Jul 2025 — Nov 2025', es: 'Jul 2025 — Nov 2025' },
    summary: {
      en: 'Visual identity and a system of informative pieces to promote the 2nd National Conference on Operational Health Management — including social pieces, credentials, banners and a brochure.',
      es: 'Identidad visual y un sistema de piezas informativas para promocionar la 2da Jornada Nacional de Gestión Operativa en Salud — placas para redes, credenciales, banners y brochure.',
    },
    tasks: [
      { en: 'Identity', es: 'Identidad' },
      { en: 'Social pieces', es: 'Placas para redes' },
      { en: 'Video editing & motion', es: 'Edición y animación de video' },
      { en: 'Brochure', es: 'Brochure' },
    ],
  },
  {
    org: 'Estancia Los Murinas',
    role: { en: 'Graphic Designer', es: 'Diseñadora gráfica' },
    kind: { en: 'Freelance', es: 'Freelance' },
    period: { en: 'Mar 2025 — Jun 2025', es: 'Mar 2025 — Jun 2025' },
    summary: {
      en: 'Logo and round label design for the cheese wheels of the “Estancia Los Murinas” dairy farm.',
      es: 'Diseño de logo y etiqueta redonda para las hormas de queso del tambo “Estancia Los Murinas”.',
    },
    tasks: [
      { en: 'Logo', es: 'Logo' },
      { en: 'Label', es: 'Etiqueta' },
    ],
  },
  {
    org: 'Independent',
    role: { en: 'Freelance Graphic Designer', es: 'Diseñadora gráfica freelance' },
    kind: { en: 'Freelance', es: 'Freelance' },
    period: { en: 'Feb 2025 — Present', es: 'Feb 2025 — Actualidad' },
    ongoing: true,
    summary: {
      en: 'I work freelance developing visual identity projects, digital pieces and communication for social media.',
      es: 'Trabajo de forma freelance desarrollando proyectos de identidad visual, piezas digitales y comunicación para redes sociales.',
    },
    tasks: [
      { en: 'Visual identity', es: 'Identidad visual' },
      { en: 'Social pieces', es: 'Placas para redes' },
      { en: 'Digital pieces', es: 'Piezas digitales' },
    ],
  },
  {
    org: 'Editorial freelance',
    role: { en: 'Editorial Designer', es: 'Diseñadora editorial' },
    kind: { en: 'Freelance', es: 'Freelance' },
    period: { en: 'Apr 2024 — Nov 2024', es: 'Abr 2024 — Nov 2024' },
    summary: {
      en: 'Page layout, copy editing and print-file preparation for printed editorial pieces.',
      es: 'Puesta en página, edición de textos y preparación de archivos para impresión de piezas editoriales.',
    },
    tasks: [
      { en: 'Page layout', es: 'Puesta en página' },
      { en: 'Copy editing', es: 'Edición de textos' },
      { en: 'Print prep', es: 'Preparación de archivos' },
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: { en: 'BA in Graphic Design', es: 'Licenciatura en Diseño Gráfico' },
    org: 'Universidad Blas Pascal',
    period: { en: '2022 — Present', es: '2022 — Actualidad' },
    ongoing: true,
  },
  {
    title: {
      en: 'High School — Social Sciences',
      es: 'Bachiller en Ciencias Sociales',
    },
    org: 'Colegio Del Carmen',
    period: { en: '2017 — 2021', es: '2017 — 2021' },
  },
];

export const skills: SkillGroup[] = [
  {
    label: { en: 'Disciplines', es: 'Disciplinas' },
    items: [
      { en: 'Editorial', es: 'Editorial' },
      { en: 'Packaging', es: 'Packaging' },
      { en: 'Visual Identity', es: 'Identidad visual' },
      { en: 'Typography', es: 'Tipografía' },
      { en: 'Illustration', es: 'Ilustración' },
      { en: 'Social / Digital', es: 'Redes / Digital' },
      { en: 'Motion', es: 'Animación' },
      { en: 'Print production', es: 'Preparación para imprenta' },
    ],
  },
  {
    label: { en: 'Adobe Creative Cloud', es: 'Adobe Creative Cloud' },
    items: [
      'Illustrator', 'InDesign', 'Photoshop', 'After Effects',
      'Premiere Pro', 'Lightroom',
    ],
  },
  {
    label: { en: 'Web & tools', es: 'Web y herramientas' },
    items: ['Figma', 'WordPress'],
  },
  {
    label: { en: 'Print prep', es: 'Preparación para imprenta' },
    items: ['Artwork setup', 'PDF/X', 'Color profiles'],
  },
];

export const languages: { name: L10n; level: L10n }[] = [
  {
    name: { en: 'Spanish', es: 'Español' },
    level: { en: 'Native', es: 'Nativo' },
  },
  {
    name: { en: 'English', es: 'Inglés' },
    level: { en: 'Intermediate', es: 'Intermedio' },
  },
];

export const courses: CourseItem[] = [
  {
    title: { en: 'Embroidery & Typography Workshop', es: 'Taller de Bordado y Tipografía' },
    by: { en: 'with Alejandra Perié', es: 'Por Alejandra Perié' },
    year: '2023',
  },
  {
    title: { en: 'Cyanotype Workshop', es: 'Taller de Cianotipia' },
    by: { en: 'with Malena Key', es: 'Por Malena Key' },
    year: '2024',
  },
  {
    title: { en: 'Marker Painting Workshop', es: 'Taller de Pintar con Marcadores' },
    by: { en: 'with Constanza Delfino', es: 'Por Constanza Delfino' },
    year: '2025',
  },
  {
    title: { en: 'Design & Typography Meetup', es: 'Encuentro de Diseño y Tipografía' },
    by: { en: 'as collaborator', es: 'Participación como colaboradora' },
    year: '2025',
  },
  {
    title: { en: 'Figma Course', es: 'Curso de Figma' },
    by: { en: 'Domestika', es: 'Domestika' },
    year: '2025',
  },
  {
    title: { en: 'WordPress Course', es: 'Curso de WordPress' },
    by: { en: 'Coursera', es: 'Coursera' },
    year: '2025',
  },
];
