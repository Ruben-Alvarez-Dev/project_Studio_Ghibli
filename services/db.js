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
  // creo un elemento lista vacío, con clase list
  const list = document.createElement("div");
  list.classList.add("list");

  // añado los elementos del array a la lista
  data.forEach((element) => {
    const card = `
      <div class="card">
          <img class="card__img" src="${element.poster}">
          <h2 class="card__title">${element.title}</h2>
      </div>
    `;
    list.innerHTML += card;
  });
  // devuelvo la lista
  return list;
};

export const toRender = (data, target) => {
  target.appendChild(data);
};
