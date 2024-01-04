import "./header.css";
import { ignition } from "../../../main.js";

// Este es el componente en HTML
export const navbarComponent = () => `
<div>
    <img class="logo" src="../public/logo.png" alt="Studio Ghibli Logo">
</div>
<navbar id="navbar" class="navbar">
    <a id="a_home" href="#">Home</a>
    <a id="a_films" href="#">Films</a>
    <a id="a_people" href="#">People</a>
    <a id="a_vehicles" href="#">Vehicles</a>
    <a id="a_locations" href="#">Locations</a>
</navbar>
`;

// Esta es la función que pintará el navbar en el DOM y le añadirá función a los botones
export const setupNavbar = (element) => {
  element.innerHTML = navbarComponent();
  const a_home = document.querySelector("#a_home");
  const a_films = document.querySelector("#a_films");
  const a_people = document.querySelector("#a_people");
  const a_vehicles = document.querySelector("#a_vehicles");
  const a_locations = document.querySelector("#a_locations");

  a_home.addEventListener("click", () =>
    ignition("https://ghibliapi.vercel.app/films")
  );
  a_films.addEventListener("click", () =>
    ignition("https://ghibliapi.vercel.app/films")
  );
  a_people.addEventListener("click", () =>
    ignition("https://ghibliapi.vercel.app/people")
  );
  a_vehicles.addEventListener("click", () =>
    ignition("https://ghibliapi.vercel.app/vehicles")
  );
  a_locations.addEventListener("click", () =>
    ignition("https://ghibliapi.vercel.app/locations")
  );
};
