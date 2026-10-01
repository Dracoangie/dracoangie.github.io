# Portfolio de Angela Navarro

Portfolio con Astro, TypeScript y CSS. La portada clara da paso a las secciones
oscuras de presentacion, experiencia y proyectos; el contacto cierra en amarillo.
Las cartas de proyecto se giran con clic, toque o teclado.

## Desarrollo local

Usa Node.js 24 (indicado en `.nvmrc`) y npm 10 o superior.

```sh
nvm use
npm install
npm run dev
```

Abre la URL que imprime Astro, normalmente http://localhost:4321.
No abras un HTML directamente para probar la nueva web.

```sh
npm run check
npm run build
npm run preview
```

`build` comprueba los tipos y genera el sitio estatico en `dist/`.
El Node.js 18 que habia en WSL es demasiado antiguo para esta version de Astro.

## Editar el contenido

El archivo principal es **`src/data/portfolio.ts`**:

- `profile`: nombre, correo, textos, enlaces, experiencia y estudios.
- `profile.images.hero`: imagen de la intro y texto alternativo.
- `profile.images.about`: imagen de la seccion sobre mi.
- `projects`: una entrada por carta, con titulo, imagen, descripcion, enlace y color.
- `color` admite `yellow`, `orange` y `coral`.

La paleta esta centralizada en `src/styles/global.css`: fondo `#21181B`,
texto claro `#F5FFE8`, violeta `#594A8C`, amarillo `#F2CF63`,
naranja `#F2A25C` y coral `#F27B50`.

Los datos profesionales, estudios y enlaces estan en `src/data/portfolio.ts`.
Las traducciones y todos los textos de interfaz estan en `src/data/i18n.ts`.

## Cambiar imagenes

1. Pon tus imagenes en `public/images/`.
2. Actualiza sus rutas y textos alternativos en `src/data/portfolio.ts`.
3. Escribe las rutas como `images/mi-imagen.webp`, sin `public/` ni barra inicial.

La portada se compone con las capas `hero-sky.png`, `hero-clouds.png` y
`hero-city.png`. El personaje se anima desde `hero-character-sprite.png`.
Las cartas usan imagenes cuadradas y el retrato de presentacion es `icon-me.gif`.
Se admiten WebP, GIF, JPG y PNG. Los nombres respetan mayusculas y minusculas.

## Estructura

```text
src/
  components/        Header, Hero, About, Projects, ProjectCard y Contact
  data/portfolio.ts  Contenido editable
  layouts/          Metadatos, fuentes y estructura HTML
  pages/index.astro  Orden de las secciones
  scripts/          Menu, personaje animado, cartas y copia del correo
  styles/global.css Colores, tipografia y estilos responsive
public/images/      Imagenes de la nueva web
pixel/              Juego original y motor propio en JavaScript
deprecated/         Web antigua y prototipos
scripts/            Preparacion de los archivos estaticos
.github/workflows/  Despliegue de GitHub Pages
```

## Juego y archivo historico

Edita el juego en `pixel/`. Sigue siendo JavaScript clasico y mantiene el orden
original de carga. El enlace Modo pixel abre `/pixel/index.html`.

Antes de `dev` y `build`, `scripts/prepare-static.mjs` copia `pixel/`,
`deprecated/` y el acceso antiguo `Pixel.html` a `public/`. Esas copias se
ignoran en Git; no las edites. Si cambias el juego durante el desarrollo,
reinicia `npm run dev` para regenerarlas.

La web antigua queda disponible en `/deprecated/index.html`.
El prototipo `deprecated/a.html` conserva una referencia de fuente incorrecta y
`deprecated/b.html` referencia videos que ya faltaban en el repositorio.

## GitHub Pages

La configuracion usa `https://dracoangie.github.io`.
En GitHub, selecciona **Settings > Pages > Source > GitHub Actions**.
El workflow se ejecuta al subir cambios a `main` y tambien permite ejecucion manual.
Publica `dist/`, incluyendo el juego y la web archivada.

El contacto usa `mailto:` y enlaces directos; no necesita servidor ni formulario externo.
Las fuentes se sirven localmente. El contenido sigue accesible sin JavaScript,
y las animaciones respetan la preferencia de movimiento reducido del dispositivo.
