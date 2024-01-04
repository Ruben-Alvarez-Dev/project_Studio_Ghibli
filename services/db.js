import { cardComponent } from "../app/components/gallery/card/card.js";
import * as check from "./active.js";

export const toGet = async (url) => {
  const response = await fetch(url);
  const rawData = await response.json();
  return rawData;
};
export const toMap = (rawData) => {
  const mappedData = rawData.map((item) => {
    return {
      id: item.id,
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
    // Aquí acabo de componentizar el elemtento card a un js independiente
    const card = cardComponent(element);
    card.addEventListener("click", () => {
      hero.innerHTML = card;
    });
    list.innerHTML += card;
    // devuelvo la lista
    return list;
  });
};

export const toRender = (data, target) => {
  target.appendChild(data);
};
export const toHero = (element) => {
  console.log(element);
};
