import "./header.css";
import { ignition } from "../../../main.js";

// Este es el componente en HTML
export const navbarComponent = () => `
<div>
    <img class="logo" src="../public/logo.png" alt="Studio Ghibli Logo">
</div>
<navbar id="navbar" class="navbar">
    <a id="home" href="#">Home</a>
    <a id="films" href="#">Films</a>
    <a id="people" href="#">People</a>
    <a id="vehicles" href="#">Vehicles</a>
    <a id="locations" href="#">Locations</a>
</navbar>
`;

// Esta es la función que pintará el navbar en el DOM y le añadirá función a los botones
export const setupNavbar = (element) => {
  element.innerHTML = navbarComponent();
  const a_home = document.querySelector("#home");
  const a_films = document.querySelector("#films");
  const a_people = document.querySelector("#people");
  const a_vehicles = document.querySelector("#vehicles");
  const a_locations = document.querySelector("#locations");

  const urlBase = "https://ghibliapi.vercel.app/";

  a_home.addEventListener("click", () => ignition(urlBase + "films"));
  a_films.addEventListener("click", () => ignition(urlBase + "films"));
  a_people.addEventListener("click", () => ignition(urlBase + "people"));
  a_vehicles.addEventListener("click", () => ignition(urlBase + "vehicles"));
  a_locations.addEventListener("click", () => ignition(urlBase + "locations"));
};
