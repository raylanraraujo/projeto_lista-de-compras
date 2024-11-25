import { adicionarData } from "./adicionarData.js";


//exportação direta quando se tem apenas uma funcionalidade dentro do arquivo
export const editarItem = (elemento) => {
    const novoItem = prompt('Digite o nome do novo item');
    //o .trim() é uma função essencial do JS que remove espaços em branco no iníco e no final das strings
    //se o resultado for diferente de uma string vazia ele vai permitir a edição da string
    if ( novoItem !== null && novoItem.trim() !== ""){
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        if(estavaComprado) {
            elemento.querySelector("input-checkbox") = true;
            elemento.querySelector("checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-trought";
        }

        //gera nova data ao execultar o processo de edição
        const dataGerada = elemento.querySelector(".texto-data");
        dataGerada.textContent = adicionarData();
    }
}