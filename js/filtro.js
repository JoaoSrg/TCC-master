/**
 * filtro.js
 * Redireciona para a página de opções com base na categoria selecionada.
 */

function filterPlants() {
    const checkboxes = [
        { id: 'category-verduras', category: 'folhas' },
        { id: 'category-temperos', category: 'temperos' },
        // Adicione outras categorias aqui no futuro (ex.: { id: 'category-flores', category: 'flores' })
    ];

    const selectedCategories = checkboxes.filter(cb => document.getElementById(cb.id).checked).map(cb => cb.category);

    if (selectedCategories.length === 0) {
        alert('Por favor, selecione pelo menos uma categoria de planta.');
        return;
    }

    if (selectedCategories.length === 1) {
        // Redireciona para opcoes.html com a categoria selecionada
        window.location.href = `opcoes.html?category=${selectedCategories[0]}`;
    } else {
        alert('Por favor, selecione apenas uma categoria por vez.');
    }
}