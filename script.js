function changeContent(title, description) {
    document.getElementById('card-title').textContent = title;
    document.getElementById('card-description').textContent = description;
}

const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Função para alternar a visibilidade do dropdown
function toggleDropdown(event) {
    event.stopPropagation(); // Impede o clique de se propagar para o documento
    dropdownContent.classList.toggle('active'); // Alterna a classe active
}

// Abre o dropdown ao clicar no botão
dropbtn.addEventListener('click', toggleDropdown);

// Fecha o dropdown ao clicar em uma opção
dropdownContent.addEventListener('click', function(event) {
    const selectedValue = event.target.getAttribute('data-value');
    if (selectedValue) { // Verifica se selectedValue não é null
        console.log("Opção selecionada:", selectedValue); // Exibe o valor selecionado
        changeContent(selectedValue, "Descrição para " + selectedValue); // Chama a função de mudança de conteúdo
    }
    dropdownContent.classList.remove('active'); // Fecha o dropdown
});

// Fecha o dropdown ao clicar fora dele
document.addEventListener('click', function() {
    dropdownContent.classList.remove('active'); // Fecha o dropdown
});

  window.addEventListener('resize', changeTitleText);
  window.addEventListener('load', changeTitleText);