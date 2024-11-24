const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

export function verificarListaVazia(lista) {
    //seleciona todas as vezes que aparece li e coloca numa nova lista. Se essa lista tiver um comprimento 0, ela aparecerá a mensagem de lista vazia
    if (lista.querySelectorAll("li").length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}