export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en';
export type Lang = keyof typeof languages;

/**
 * UI string table. Keys are shared across locales; values diverge.
 * Content (projects, bio, experience) lives in content collections / src/data.
 */
export const ui = {
  en: {
    'site.title': 'Luz Mulinaris — Graphic Designer',
    'site.description':
      'Portfolio of Luz Mulinaris, graphic designer from Córdoba, Argentina. Editorial, packaging, visual identity and social design.',

    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.blog': 'Journal',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',

    'hero.role': 'Graphic Designer',
    'hero.location': 'Córdoba, Argentina',
    'hero.lead':
      'I design editorial systems, packaging and visual identities — turning ideas into printed and digital pieces with care for type, image and detail.',
    'hero.available': 'Available for freelance',
    'hero.scroll': 'Scroll',

    'home.selectedWork': 'Selected Work',
    'home.selectedWork.note': 'A selection of projects & explorations',
    'home.viewAll': 'View all work',
    'home.aboutTitle': 'About',
    'home.aboutLink': 'More about me',

    'work.title': 'Work',
    'work.intro': 'Projects & explorations across editorial, packaging and identity.',
    'work.all': 'All',
    'work.count': 'projects',

    'about.title': 'About me',
    'about.experience': 'Experience',
    'about.education': 'Education',
    'about.skills': 'Capabilities',
    'about.courses': 'Courses & workshops',
    'about.tools': 'Tools',
    'about.present': 'Present',

    'project.role': 'Role',
    'project.year': 'Year',
    'project.category': 'Category',
    'project.client': 'Client',
    'project.type': 'Type',
    'project.next': 'Next project',
    'project.back': 'Back to work',
    'project.live': 'Live',
    'project.gallery': 'Gallery',

    'blog.title': 'Journal',
    'blog.intro': 'Notes on design, process and things I am learning.',
    'blog.readMore': 'Read',
    'blog.empty': 'No entries yet — soon.',
    'blog.published': 'Published',
    'blog.backToBlog': 'Back to journal',

    'contact.title': "Let's talk",
    'contact.lead': 'Interested in my work? Let’s build something.',
    'contact.email': 'Email',
    'contact.cta': 'Write to me',

    'footer.tagline': 'Graphic designer — Córdoba, AR',
    'footer.sitemap': 'Sitemap',
    'footer.elsewhere': 'Elsewhere',
    'footer.backToTop': 'Back to top',
    'footer.rights': 'All rights reserved',
    'footer.builtWith': 'Built with Astro',

    'cat.editorial': 'Editorial',
    'cat.packaging': 'Packaging',
    'cat.social': 'Social',
    'cat.identity': 'Visual Identity',
    'cat.other': 'Other',
  },

  es: {
    'site.title': 'Luz Mulinaris — Diseñadora Gráfica',
    'site.description':
      'Portfolio de Luz Mulinaris, diseñadora gráfica de Córdoba, Argentina. Editorial, packaging, identidad visual y diseño para redes.',

    'nav.work': 'Trabajos',
    'nav.about': 'Sobre mí',
    'nav.blog': 'Bitácora',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',

    'hero.role': 'Diseñadora Gráfica',
    'hero.location': 'Córdoba, Argentina',
    'hero.lead':
      'Diseño sistemas editoriales, packaging e identidades visuales — convierto ideas en piezas impresas y digitales cuidando la tipografía, la imagen y el detalle.',
    'hero.available': 'Disponible para freelance',
    'hero.scroll': 'Desliza',

    'home.selectedWork': 'Trabajos Seleccionados',
    'home.selectedWork.note': 'Una selección de proyectos y exploraciones',
    'home.viewAll': 'Ver todos los trabajos',
    'home.aboutTitle': 'Sobre mí',
    'home.aboutLink': 'Más sobre mí',

    'work.title': 'Trabajos',
    'work.intro': 'Proyectos y exploraciones en editorial, packaging e identidad.',
    'work.all': 'Todos',
    'work.count': 'proyectos',

    'about.title': 'Sobre mí',
    'about.experience': 'Experiencia',
    'about.education': 'Formación académica',
    'about.skills': 'Conocimientos',
    'about.courses': 'Cursos y talleres',
    'about.tools': 'Herramientas',
    'about.present': 'Actualidad',

    'project.role': 'Rol',
    'project.year': 'Año',
    'project.category': 'Categoría',
    'project.client': 'Cliente',
    'project.type': 'Tipo',
    'project.next': 'Siguiente proyecto',
    'project.back': 'Volver a trabajos',
    'project.live': 'Ver online',
    'project.gallery': 'Galería',

    'blog.title': 'Bitácora',
    'blog.intro': 'Notas sobre diseño, proceso y cosas que voy aprendiendo.',
    'blog.readMore': 'Leer',
    'blog.empty': 'Todavía no hay entradas — pronto.',
    'blog.published': 'Publicado',
    'blog.backToBlog': 'Volver a la bitácora',

    'contact.title': 'Hablemos',
    'contact.lead': '¿Te interesa mi trabajo? Construyamos algo juntos.',
    'contact.email': 'Email',
    'contact.cta': 'Escribime',

    'footer.tagline': 'Diseñadora gráfica — Córdoba, AR',
    'footer.sitemap': 'Mapa del sitio',
    'footer.elsewhere': 'En otros lados',
    'footer.backToTop': 'Volver arriba',
    'footer.rights': 'Todos los derechos reservados',
    'footer.builtWith': 'Hecho con Astro',

    'cat.editorial': 'Editorial',
    'cat.packaging': 'Packaging',
    'cat.social': 'Redes',
    'cat.identity': 'Identidad Visual',
    'cat.other': 'Otros',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];
