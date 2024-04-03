// controller.js
import { Filme } from "../Modelo/modelo.js";
import { viewFilme } from "../View/viewFilme.js";

async function init() {
    const filmeModelo = new Filme();
    const filmes = await filmeModelo.getFilmes(); // Aguardar a resolução da promessa
    viewFilme(filmes);
}

init();