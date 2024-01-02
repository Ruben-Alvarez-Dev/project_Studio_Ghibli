import "./gallery.css";

// Este es el componente en HTML
export const galleryComponent = () => `
<div>
    <h1>GALLERY</h1>
</div>
`;

// Esta es la función que pintará el componente anterior en el DOM
export const setupGallery = (element) => {
  element.innerHTML = galleryComponent();
};
