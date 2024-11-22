const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
botaoSalvarItem.addEventListener("click", adicionarItem);
let contador = 0; // inicializando o contador

function adicionarItem(evento) {
    evento.preventDefault()
   
        const itemDaLista = document.createElement("li");
            const containerItemLista = document.createElement("div");
            containerItemLista.classList.add("lista-item-container");

                const containerNomeDoItem = document.createElement("div");

                    const containerCheckbox = document.createElement("div");
                    containerCheckbox.classList.add("container-checkbox");

                    const checkboxInput = document.createElement("input");
                    checkboxInput.type = "checkbox";
                    checkboxInput.classList.add("input-checkbox");
                    checkboxInput.id = "checkbox-" + contador++;

                    const checkboxLabel = document.createElement("label");
                    checkboxLabel.setAttribute("for", checkboxInput.id);

                    checkboxLabel.addEventListener("click", function (evento) {  //criada uma FUNÇÃO ANÔNIMA;
                        const checkboxInput = evento.currentTarget.querySelector (".input-checkbox");
                        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
                        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");
                
                        //para saber se o checboxinput está selecionado
                        if ( checkboxInput.checked) {
                            checkboxCustomizado.classList.add("checked");
                            itemTitulo.style.textDecoration = "line-through";
                            listaComprados.appendChild(itemDaLista);
                        } else {
                            checkboxCustomizado.classList.remove("checked");
                            itemTitulo.style.textDecoration = "none";
                            listaDeCompras.appendChild(itemDaLista);
                        }
                    })

                    const checkboxCustomizado = document.createElement("div");
                    checkboxCustomizado.classList.add("checkbox-customizado");

                    checkboxLabel.appendChild(checkboxInput);
                    checkboxLabel.appendChild(checkboxCustomizado);
                    containerCheckbox.appendChild(checkboxLabel);
                    containerNomeDoItem.appendChild(containerCheckbox);

                    const nomeDoItem = document.createElement("p");
                    nomeDoItem.id = "item-titulo";
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
                
                    const botaoEditar = document.createElement("button");
                    botaoEditar.classList.add("item-lista-button");
                        const imagemEditar = document.createElement("img");
                        imagemEditar.src = "./img/edit.svg";
                        imagemEditar.alt = "editar";
                        botaoEditar.appendChild(imagemEditar);
                    containerBotoes.appendChild(botaoEditar);
                containerItemLista.appendChild(containerBotoes);

                const itemData = document.createElement("p")
                itemData.classList.add("texto-data");
                itemData.innerText = `${new Date().toLocaleDateString("pt-BR" , {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-br" , {hour: "numeric" , minute: "numeric"})}`;

        itemDaLista.appendChild(containerItemLista);
        itemDaLista.appendChild(itemData);
    listaDeCompras.appendChild(itemDaLista);
}