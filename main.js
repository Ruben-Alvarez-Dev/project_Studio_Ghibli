import "./style.css";
import * as init from "./services/init.js";
// import * as db from "./services/db.js";

/* // Declaramos contenedores útiles
const hero = document.querySelector("#hero");
const gallery = document.querySelector("#gallery"); */

// Declaramos la URL de la API
const url = "https://ghibliapi.vercel.app/films";

// Pintamos la estructura básica del DOM
init.structure(document.querySelector("#app"));

// Pintamos los componentes HEADER, MAIN (Hero y Gallery) y FOOTER
init.components();

// Limpiamos el contenedor destino
init.container(gallery);

// Obtenemos los datos de la API
// data.get(url);

/* const pintar = async (url) => {
  const response = await fetch(url);
  const rawData = await response.json();
  console.log(rawData);
  //return rawData;
};
 */
// pintar(url);

init.data(url);

// data.get(url);
