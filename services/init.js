import { setupNavbar } from "../components/header/header.js";
import { setupFooter } from "../components/footer/footer.js";
import { setupHero } from "../components/hero/hero.js";
import { setupGallery } from "../components/gallery/gallery.js";

export const structure = (target) => {
  target.innerHTML = `
        <header id="header" class="header"></header>
        <main id="main" class="main">
            <div id="hero" class="hero"></div>
            <div id="gallery" class="gallery"></div>
        </main>
        <footer id="footer" class="footer"></footer>
      `;
};
export function components() {
  setupNavbar(document.querySelector("#header"));
  setupFooter(document.querySelector("#footer"));
  setupHero(document.querySelector("#hero"));
  setupGallery(document.querySelector("#gallery"));
}
