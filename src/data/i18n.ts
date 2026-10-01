import { profile, projects } from "./portfolio";

export type Lang = "es" | "en";

export const content = {
  es: {
    profile,
    projects,
    ui: {
      description: "Portfolio de Ángela Navarro. Desarrollo de videojuegos, programación de gameplay y Technical Art con Unity y Unreal Engine.",
      skip: "Saltar al contenido", home: "Ángela Navarro, inicio", nav: "Navegación principal", aboutNav: "Sobre mí", projectsNav: "Proyectos", contactNav: "Contacto", pixel: "Modo pixel", openMenu: "Abrir menú", closeMenu: "Cerrar menú",
      heroLabel: "GAME DEVELOPER / TECHNICAL ART", scroll: "Descubrir más sobre mí",
      aboutKicker: "01 / DETRÁS DE LA PANTALLA", aboutHeadingStart: "Sobre", aboutHeadingAccent: "mí.", portraitCaption: "ÁNGELA NAVARRO", portraitRole: "PROGRAMACIÓN + ARTE", aboutLeadFirst: "Desarrollo gameplay.", aboutLeadSecond: "Me interesa el arte técnico.", skillsLabel: "Tecnologías y especialidades", experience: "Experiencia", education: "Formación",
      projectsKicker: "02 / PROYECTOS", projectsHeading: "Mis proyectos", project: "PROYECTO", details: "EN DETALLE", category: "VIDEOJUEGO", viewProject: "Ver en itch.io", showDetails: "Ver detalles de", showFront: "Ver portada de",
      contactKicker: "03 / CONTACTO", contactHeading: "¡Contáctame!", write: "Escribir a Ángela", contactIntro: "Puedes escribirme por correo o por LinkedIn.", copyEmail: "Copiar dirección de correo", copied: "Correo copiado.", copyFailed: "No se pudo copiar. Puedes usar el enlace de correo.", contactFooter: "DESARROLLO DE VIDEOJUEGOS / TECHNICAL ART", backTop: "Volver al inicio",
    },
  },
  en: {
    profile: {
      ...profile,
      role: "Game Developer | Technical Art",
      about: [
        "I'm a game developer specialising in Technical Art and programming. I have experience working with Unity and C#, and with Unreal Engine using C++ and Blueprints.",
        "I enjoy both the technical and visual sides of game development. I also have a background in web development and C programming, and have worked with Houdini.",
      ],
      images: {
        about: { ...profile.images.about, alt: "Animated pixel art portrait of Ángela Navarro" },
      },
      experience: [
        { date: "FEB — JUL 2026", title: "Junior Gameplay Programmer · Collaborator", place: "Aftos Studio", detail: "I collaborated on Afesis: Los cuatro Peldaños. I developed minigames and gameplay systems in Unity, integrated them with the project's existing systems, and worked with the programming, design and art teams." },
        { date: "JUN 2025 — MAR 2026", title: "Game Developer · Collaborator", place: "Fable's Garden", detail: "I collaborated with a small team to develop gameplay mechanics and systems in Unreal Engine with C++, taking features from prototypes to working implementations. The project was discontinued before release." },
        { date: "MAR — JUN 2022", title: "Mobile Game Development Intern", place: "Lab Cave", detail: "During my internship, I worked on mobile games and implemented monetisation systems. I also learned to use GitHub in day-to-day development." },
      ],
      education: [
        { date: "MAR — NOV 2026", title: "Advanced Master's in Technical Art for AAA Games", place: "Voxel School", detail: "I'm currently studying Technical Art for AAA games, combining my interests in programming and art." },
        { date: "SINCE SEP 2024", title: "Computer Programming", place: "42", detail: "I'm continuing to develop my programming skills at 42 and applying them to the projects I work on." },
        { date: "SEP 2019 — JUL 2024", title: "Degree in Video Game Design and Development", place: "UDIT", detail: "I studied video game design and development. This is the foundation for my current work in gameplay programming and Technical Art." },
      ],
    },
    projects: projects.map((project) => ({
      ...project,
      ...({
        babelship: { alt: "Characters and platforms from Babelship", description: "You can find the game, credits and more about Babelship: Tales from the Black Hole Suburb on itch.io." },
        competencia: { subtitle: "Video game project", alt: "Artwork for the game Competencia desleal", description: "You can see Competencia desleal and its credits on itch.io." },
        anulax: { subtitle: "Video game project", alt: "Cover art for the game Anulax", description: "You can see Anulax, check the credits and play the game on itch.io." },
      }[project.id] ?? {}),
    })),
    ui: {
      description: "Ángela Navarro's portfolio. Game development, gameplay programming and Technical Art with Unity and Unreal Engine.",
      skip: "Skip to content", home: "Ángela Navarro, home", nav: "Main navigation", aboutNav: "About", projectsNav: "Projects", contactNav: "Contact", pixel: "Pixel mode", openMenu: "Open menu", closeMenu: "Close menu",
      heroLabel: "GAME DEVELOPER / TECHNICAL ART", scroll: "Learn more about me",
      aboutKicker: "01 / BEHIND THE SCREEN", aboutHeadingStart: "About", aboutHeadingAccent: "me.", portraitCaption: "ÁNGELA NAVARRO", portraitRole: "PROGRAMMING + ART", aboutLeadFirst: "I develop gameplay.", aboutLeadSecond: "I'm interested in Technical Art.", skillsLabel: "Skills and technologies", experience: "Experience", education: "Education",
      projectsKicker: "02 / PROJECTS", projectsHeading: "My projects", project: "PROJECT", details: "DETAILS", category: "VIDEO GAME", viewProject: "View on itch.io", showDetails: "View details of", showFront: "View front of",
      contactKicker: "03 / CONTACT", contactHeading: "Contact me!", write: "Email Ángela", contactIntro: "You can email me or contact me on LinkedIn.", copyEmail: "Copy email address", copied: "Email copied.", copyFailed: "Couldn't copy the email. You can use the email link instead.", contactFooter: "GAME DEVELOPMENT / TECHNICAL ART", backTop: "Back to top",
    },
  },
};
