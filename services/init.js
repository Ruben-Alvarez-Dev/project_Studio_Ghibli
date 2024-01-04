import { setupNavbar } from "../components/header/header.js";
import { setupFooter } from "../components/footer/footer.js";
import { setupHero } from "../components/hero/hero.js";
import { setupGallery } from "../components/gallery/gallery.js";
import { app } from "../app/app.js";
import * as db from "./db.js";

export const structure = (target) => {
  // Inyectamos los componentes de la estructutra básica del DOM
  /* target.innerHTML = `
        <header id="header" class="header"></header>
        <main id="main" class="main">
            <div id="hero" class="hero"></div>
            <div id="gallery" class="gallery"></div>
        </main>
        <footer id="footer" class="footer"></footer>
      `;
 */

  target.innerHTML = app();

  // Declaramos contenedores útiles
  const gallery = document.querySelector("#gallery");
  const hero = document.querySelector("#hero");
  const footer = document.querySelector("#footer");
  const header = document.querySelector("#header");
};
export const components = () => {
  setupNavbar(document.querySelector("#header"));
  setupFooter(document.querySelector("#footer"));
  setupHero(document.querySelector("#hero"));
  setupGallery(document.querySelector("#gallery"));
};
export const container = (cont) => {
  cont.innerHTML = "";
};
export const data = async (url) => {
  const rawData = await db.toGet(url);
  const mappedData = await db.toMap(rawData);
  const listData = await db.toList(mappedData);
  await db.toRender(listData, gallery);
};
