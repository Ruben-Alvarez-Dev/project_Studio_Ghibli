import "./hero.css";

// Este es el componente en HTML
export const heroComponent = () => `
<div>
    <h1>HERO</h1>
</div>
`;

// Esta es la función que pintará el componente anterior en el DOM
export const setupHero = (element) => {
  element.innerHTML = heroComponent();
};

export const heroCard = (element) => {
  const card = `
    <div class="heroCard">
        <img class="heroImg" src="${element.poster}">
        <h2 class="heroTitle">${element.title}</h2>
        <p class="heroDescription">${element.description}</p>
    </div>
  `;
  return card;
};
