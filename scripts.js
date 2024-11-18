const item = document.getElementById('input-name');
const botaoSalvarItem = document.getElementById('adicionar-botao');

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault(); //para prevenir que o evento padrão ocorra (nesse caso por se tratar de um formulário seria atualizar a tela)
    console.log('Item Adicionado');
}