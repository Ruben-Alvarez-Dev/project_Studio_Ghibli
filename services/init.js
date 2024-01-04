import { setupNavbar } from "../app/components/header/header.js";
import { setupFooter } from "../app/components/footer/footer.js";
import { setupHero } from "../app/components/hero/hero.js";
import { setupGallery } from "../app/components/gallery/gallery.js";
import { app } from "../app/app.js";
import * as db from "./db.js";

export const structure = (target) => {
  // Inyectamos el componentes APP con la estructutra básica del DOM
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
