import "./header.css";

// Este es el componente en HTML
export const navbarComponent = () => `
<div>
    <img class="logo" src="../public/logo.png" alt="Studio Ghibli Logo">
</div>
<navbar id="navbar" class="navbar">
    <a href="#">Home</a>
    <a href="#">Films</a>
    <a href="#">People</a>
    <a href="#">Vehicles</a>
    <a href="#">Others</a>
</navbar>
`;

// Esta es la función que pintará el componente anterior en el DOM
export const setupNavbar = (element) => {
  element.innerHTML = navbarComponent();
};
