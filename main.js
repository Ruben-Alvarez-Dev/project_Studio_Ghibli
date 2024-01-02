const urlBase = "https://ghibliapi.vercel.app";
const urlEndpointFilms = "/films";
const urlEndpointPeople = "/people";
const urlEndpointLocations = "/locations";
const urlEndpointSpecies = "/species";
const urlEndpointVehicles = "/vehicles";

const app = document.querySelector("#app");
app.innerHTML = `<h2>Studio Ghibli API</h2>`;

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  mapData(data);
  //return data;
};

const mapData = async (data) => {
  const mappedData = data.map((film) => ({
    title: film.title,
    description: film.description,
    poster: film.image,
  }));

  mappedData.forEach((element) => {
    app.innerHTML += `
    <div class="card">
      <img src="${element.poster}" alt="${element.title}" />
      <h3>${element.title}</h3>
      <p>${element.description}</p>`;
  });

  console.log(mappedData);
  // return mappedData;
};

getData(urlBase + urlEndpointFilms);
