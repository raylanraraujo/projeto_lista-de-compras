import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

//construção de uma FUNÇÃO ANÔNIMA do tipo ARROW FUNCTION 
const excluirItem = (elemento) => {
    let confirmacao = confirm ("Deseja realmente excluir o item?")

    if (confirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    }
}

export { excluirItem }; 
//método para exportar recomendada quando se tem mais de uma funcionalidade dentro do arquivo