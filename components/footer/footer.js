import "./footer.css";

// Este es el componente en HTML
export const footerComponent = () => `
<div>
    <span>Studio Ghibli</span>
</div>
`;

// Esta es la función que pintará el componente anterior en el DOM
export const setupFooter = (element) => {
  element.innerHTML = footerComponent();
};
