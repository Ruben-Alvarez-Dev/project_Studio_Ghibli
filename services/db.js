export const toGet = async (url) => {
  const response = await fetch(url);
  const rawData = await response.json();
  return rawData;
};

export const toMap = (data) => {
  const mappedData = data.map((film) => {
    return {
      title: film.title,
      description: film.description,
      poster: film.image,
    };
  });
  return mappedData;
};

export const toList = (data) => {
  // creo un elemento lista vacío
  const list = document.createElement("ul");
  // le añado la clase gallery
  list.classList.add("gallery__list");
  // añado los elementos del array a la lista
  data.forEach((element) => {
    const card = `
      <li class="gallery__item">
        <article class="card">
          <img class="card__img" src="${element.poster}" alt="${element.title}">
          <h2 class="card__title">${element.title}</h2>
          <p class="card__description">${element.description}</p>
        </article>
    `;
    list.innerHTML += card;
  });
  // devuelvo la lista
  return list;
};

export const toRender = (data, target) => {
  target.appendChild(data);
};
