export const profile = {
  name: "Ángela Navarro",
  role: "Desarrolladora de videojuegos | Technical Art",
  email: "anavaro.sala@gmail.com",
  about: [
    "Soy desarrolladora de videojuegos y me estoy especializando en Technical Art y programación. Tengo experiencia trabajando con Unity y C#, y con Unreal Engine mediante C++ y Blueprints.",
    "Me gusta trabajar tanto en la parte técnica como en la visual. También tengo conocimientos de desarrollo web y programación en C, y he utilizado Houdini.",
  ],
  images: {
    about: { src: "icon-me.gif", alt: "Retrato pixel art animado de Ángela Navarro" },
  },
  skills: ["Unity", "C#", "Unreal Engine", "C++", "Blueprints", "Git", "GitHub", "C", "Houdini"],
  experience: [
    { date: "FEB — JUL 2026", title: "Junior Gameplay Programmer · Collaborator", place: "Aftos Studio", detail: "Colaboré en Afesis: Los cuatro Peldaños. Desarrollé minijuegos y sistemas de gameplay en Unity, los integré con los sistemas del proyecto y trabajé con programación, diseño y arte." },
    { date: "JUN 2025 — MAR 2026", title: "Desarrolladora de videojuegos · Colaboradora", place: "Fable's Garden", detail: "Colaboré en un equipo reducido desarrollando mecánicas y sistemas de gameplay en Unreal Engine con C++, desde prototipos hasta funcionalidades completas. El proyecto se descontinuó antes de su lanzamiento." },
    { date: "MAR — JUN 2022", title: "Desarrolladora de videojuegos móviles en prácticas", place: "Lab Cave", detail: "Durante mis prácticas trabajé en juegos móviles e implementé sistemas de monetización. También aprendí a utilizar GitHub en el trabajo diario." },
  ],
  education: [
    { date: "MAR — NOV 2026", title: "Máster Avanzado en Technical Artist para Videojuegos AAA", place: "Voxel School", detail: "Actualmente me estoy formando en Technical Art para videojuegos AAA, una especialidad en la que puedo combinar mi interés por la programación y el arte." },
    { date: "DESDE SEP 2024", title: "Programación informática", place: "42", detail: "Continúo ampliando mis conocimientos de programación en 42 y aplicándolos a los proyectos en los que colaboro." },
    { date: "SEP 2019 — JUL 2024", title: "Grado en Diseño y Desarrollo de Videojuegos", place: "UDIT", detail: "Estudié diseño y desarrollo de videojuegos. Esta formación es la base de mi trabajo actual en programación de gameplay y arte técnico." },
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/angela-navarro-sala/" },
    { label: "GitHub", url: "https://github.com/Dracoangie" },
    { label: "itch.io", url: "https://dracoangie.itch.io" },
  ],
};

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category?: string;
  image: string;
  alt: string;
  description: string;
  url: string;
  color: "yellow" | "orange" | "coral";
}

// Add a new entry here to create another card. Images live in public/images/.
export const projects: Project[] = [
  {
    id: "babelship",
    title: "Babelship",
    subtitle: "Tales from the black hole suburb",
    image: "images/babelship.webp",
    alt: "Ilustración de personajes y plataformas de Babelship",
    description: "Puedes consultar el juego, sus créditos y más información sobre Babelship: Tales from the Black Hole Suburb en itch.io.",
    url: "https://rainbow-bears-studio.itch.io/babelship-tales-from-the-black-hole-suburb",
    color: "yellow",
  },
  {
    id: "competencia",
    title: "Competencia desleal",
    subtitle: "Proyecto de videojuego",
    image: "images/competencia.webp",
    alt: "Arte del videojuego Competencia desleal",
    description: "Puedes ver Competencia desleal y consultar sus créditos en itch.io.",
    url: "https://xshoganai.itch.io/competencia-desleal",
    color: "orange",
  },
  {
    id: "anulax",
    title: "Anulax",
    subtitle: "Proyecto de videojuego",
    image: "images/anulax.webp",
    alt: "Portada del videojuego Anulax",
    description: "Puedes ver Anulax, consultar sus créditos y probar el juego en itch.io.",
    url: "https://mario-gallego-cano.itch.io/anulax",
    color: "coral",
  },
];
