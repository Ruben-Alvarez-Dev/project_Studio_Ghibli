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
