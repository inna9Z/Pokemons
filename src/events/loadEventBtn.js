import dom from "../dom.js";
import loadPokemon from "../handlers/loadPokemon.js";

const loadEventBtn = () => {
    dom.btn.addEventListener('click', loadPokemon);
}
export default loadEventBtn;