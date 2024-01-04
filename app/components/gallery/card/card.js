export const card = (element) => `
    <div id="${element.id}" class="card">
        <img class="card__img" src="${element.poster}">
        <h2 class="card__title">${element.title}</h2>
    </div>
`;
