import { card } from "../app/components/gallery/card/card.js";

export const toGet = async (url) => {
  const response = await fetch(url);
  const rawData = await response.json();
  return rawData;
};
export const toMap = (rawData) => {
  const mappedData = rawData.map((item) => {
    return {
      title: item.title,
      description: item.description,
      poster: item.image,
    };
  });
  return mappedData;
};
export const toList = (data) => {
  // creo un elemento lista vacío, con clase list
  const list = document.createElement("div");
  list.classList.add("list");

  // añado los elementos del array a la lista
  data.forEach((element) => {
    /* const card = `
      <div class="card">
          <img class="card__img" src="${element.poster}">
          <h2 class="card__title">${element.title}</h2>
      </div>
    `; */

    // Aquí acabo de componentizar el elemtento card a un js independiente
    const ccard = card(element);
    list.innerHTML += ccard;
  });
  // devuelvo la lista
  return list;
};
export const toRender = (data, target) => {
  target.appendChild(data);
};
