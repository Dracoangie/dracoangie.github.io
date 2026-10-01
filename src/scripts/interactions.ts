const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const header = document.querySelector<HTMLElement>(".site-header");
const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
const labels = document.documentElement.lang === "en"
  ? { open: "Open menu", close: "Close menu", details: "View details of", front: "View front of", copied: "Email copied.", copyFailed: "Couldn't copy the email. You can use the email link instead." }
  : { open: "Abrir menú", close: "Cerrar menú", details: "Ver detalles de", front: "Ver portada de", copied: "Correo copiado.", copyFailed: "No se pudo copiar. Puedes usar el enlace de correo." };
const languageSwitch = document.querySelector<HTMLAnchorElement>("[data-language-switch]");
if (languageSwitch) {
  const path = languageSwitch.getAttribute("href") ?? "/";
  const updateLanguageLink = () => { languageSwitch.href = path + location.hash; };
  window.addEventListener("hashchange", updateLanguageLink);
  updateLanguageLink();
}

if (header && menuButton) {
  const setMenu = (open: boolean) => {
    header.classList.toggle("menu-expanded", open);
    menuButton.ariaExpanded = String(open);
    menuButton.ariaLabel = open ? labels.close : labels.open;
  };
  header.classList.add("menu-ready");
  menuButton.hidden = false;
  menuButton.addEventListener("click", () => setMenu(menuButton.ariaExpanded !== "true"));
  document.addEventListener("click", ({ target }) => {
    if (target instanceof Element && (!header.contains(target) || target.closest("#main-nav a"))) setMenu(false);
  });
  document.addEventListener("keydown", ({ key }) => {
    if (key === "Escape" && menuButton.ariaExpanded === "true") {
      setMenu(false);
      menuButton.focus();
    }
  });
  matchMedia("(min-width: 651px)").addEventListener("change", () => setMenu(false));
}

document.querySelectorAll<HTMLElement>("[data-project-card]").forEach((card) => {
  const button = card.querySelector<HTMLButtonElement>(".flip-control");
  const front = card.querySelector<HTMLElement>(".card-front");
  const back = card.querySelector<HTMLElement>(".card-back");
  if (!button || !front || !back) return;
  const setFlipped = (flipped: boolean) => {
    card.classList.toggle("is-flipped", flipped);
    button.ariaExpanded = String(flipped);
    button.ariaLabel = button.title = `${flipped ? labels.front : labels.details} ${card.dataset.title}`;
    front.inert = flipped;
    back.inert = !flipped;
  };
  setFlipped(false);
  button.hidden = false;
  card.classList.add("is-ready");
  button.addEventListener("click", () => setFlipped(button.ariaExpanded !== "true"));
  front.addEventListener("click", () => { setFlipped(true); button.focus({ preventScroll: true }); });
  back.addEventListener("click", ({ target }) => {
    if (target instanceof Element && target.closest("a, button")) return;
    setFlipped(false);
    button.focus({ preventScroll: true });
  });
  card.addEventListener("keydown", ({ key }) => {
    if (key === "Escape" && button.ariaExpanded === "true") {
      setFlipped(false);
      button.focus({ preventScroll: true });
    }
  });
});

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const { isIntersecting, target } of entries) if (isIntersecting) {
      target.classList.add("is-visible");
      observer.unobserve(target);
    }
  }, { threshold: 0.08 });
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
    if (element.getBoundingClientRect().top > innerHeight) element.classList.add("reveal-pending");
    observer.observe(element);
  });
}

const hero = document.querySelector<HTMLElement>(".hero");
const darkWorld = document.querySelector<HTMLElement>(".dark-world");
let framePending = false;
function updateScroll() {
  framePending = false;
  if (!hero || !darkWorld) return;
  const heroRect = hero.getBoundingClientRect(), darkRect = darkWorld.getBoundingClientRect();
  const headerHeight = header?.offsetHeight ?? 92;
  header?.classList.toggle("is-visible", heroRect.bottom <= headerHeight);
  header?.classList.toggle("is-dark", darkRect.top <= headerHeight && darkRect.bottom > headerHeight);
  darkWorld.style.setProperty("--edge-radius", `${reducedMotion.matches ? 0 : Math.max(0, Math.min(28, darkRect.top / 12))}px`);
}
function requestScrollUpdate() {
  if (framePending) return;
  framePending = true;
  requestAnimationFrame(updateScroll);
}
window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", requestScrollUpdate);
reducedMotion.addEventListener("change", requestScrollUpdate);
updateScroll();

const characterCanvas = document.querySelector<HTMLCanvasElement>("[data-character-sprite]");
const spriteUrl = characterCanvas?.dataset.characterSprite;
if (characterCanvas && spriteUrl) {
  const context = characterCanvas.getContext("2d");
  const sprite = new Image();
  const frameWidth = 1600, frameHeight = 900, frameCount = 20, frameDuration = 100;
  let frame = 0, previousTime = 0, animationFrame = 0;
  const drawFrame = () => {
    if (!context || !sprite.complete || !sprite.naturalWidth) return;
    const width = Math.max(1, Math.round(characterCanvas.clientWidth));
    const height = Math.max(1, Math.round(characterCanvas.clientHeight));
    if (characterCanvas.width !== width || characterCanvas.height !== height) {
      characterCanvas.width = width;
      characterCanvas.height = height;
    }
    const scale = Math.max(width / frameWidth, height / frameHeight);
    const drawWidth = frameWidth * scale, drawHeight = frameHeight * scale;
    const positionX = (parseFloat(getComputedStyle(characterCanvas).objectPosition) || 50) / 100;
    context.clearRect(0, 0, width, height);
    context.imageSmoothingEnabled = false;
    context.drawImage(sprite, frame * frameWidth, 0, frameWidth, frameHeight, (width - drawWidth) * positionX, (height - drawHeight) / 2, drawWidth, drawHeight);
  };
  const animate = (time: number) => {
    if (time - previousTime >= frameDuration) {
      frame = (frame + 1) % frameCount;
      previousTime = time;
      drawFrame();
    }
    animationFrame = requestAnimationFrame(animate);
  };
  const startAnimation = () => {
    cancelAnimationFrame(animationFrame);
    frame = 0;
    drawFrame();
    if (!reducedMotion.matches) animationFrame = requestAnimationFrame(animate);
  };
  sprite.addEventListener("load", startAnimation);
  window.addEventListener("resize", drawFrame);
  reducedMotion.addEventListener("change", startAnimation);
  sprite.src = spriteUrl;
}

const copyButton = document.querySelector<HTMLButtonElement>(".copy-email");
const copyStatus = document.querySelector<HTMLElement>(".copy-status");
if (copyButton && copyStatus && navigator.clipboard) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email ?? "");
      copyStatus.textContent = labels.copied;
    } catch {
      copyStatus.textContent = labels.copyFailed;
    }
  });
}
