import "./style.css";
import * as init from "./services/init.js";

// Declaramos la URL de la API
const urlBase = "https://ghibliapi.vercel.app";
let urlEnd = "/films";
let url = urlBase + urlEnd;

// Iniciamos estructura, componentes, limpiamos gallery y pintamos FILMS por defecto
export const ignition = (url) => {
  init.structure(document.querySelector("#app"));
  init.components();
  init.container(gallery);
  init.data(url);
};
// Iniciamos la aplicación por defecto
ignition(url);
