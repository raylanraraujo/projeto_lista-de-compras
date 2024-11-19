const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()
   
        const itemDaLista = document.createElement("li");
            const containerItemLista = document.createElement("div");
            containerItemLista.classList.add("lista-item-container");

                const containerNomeDoItem = document.createElement("div");

                    //criar a div do container checkbox aqui

                    const nomeDoItem = document.createElement("p");
                    nomeDoItem.innerText = item.value;
                    containerNomeDoItem.appendChild(nomeDoItem);
                containerItemLista.appendChild(containerNomeDoItem);
                
                const containerBotoes = document.createElement("div");
                    const botaoRemover = document.createElement("button");
                    botaoRemover.classList.add("item-lista-button");
                        const imagemRemover = document.createElement("img");
                        imagemRemover.src = "./img/delete.svg";
                        imagemRemover.alt = "remover";
                        botaoRemover.appendChild(imagemRemover);
                    containerBotoes.appendChild(botaoRemover);
                containerItemLista.appendChild(containerBotoes);

                    // criar o botao editar aqui

        itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
}