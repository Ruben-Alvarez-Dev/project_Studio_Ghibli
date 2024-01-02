import "./style.css";

import { setupNavbar } from "./components/header/header.js";
import { setupFooter } from "./components/footer/footer.js";
import { setupHero } from "./components/hero/hero.js";
import { setupGallery } from "./components/gallery/gallery.js";

setupNavbar(document.querySelector("#header"));
setupFooter(document.querySelector("#footer"));
setupHero(document.querySelector("#hero"));
setupGallery(document.querySelector("#gallery"));
