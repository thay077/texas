// script.js

// Espera o documento HTML ser completamente carregado para executar o código
document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDADE DA BUSCA ---
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value; // Pega o texto digitado
        if (query) {
            // Em um site real, aqui você faria uma busca no servidor.
            // Por enquanto, vamos apenas mostrar um alerta.
            alert(`Você buscou por: "${query}"`);
        } else {
            alert('Por favor, digite algo para buscar.');
        }
    });

    // --- FUNCIONALIDADE DO CARRINHO (SIMULADO) ---
    const buyButtons = document.querySelectorAll('.buy-button');
    const cartCountElement = document.getElementById('cartCount');
    
    let cart = []; // Nosso carrinho de compras (um array para guardar os produtos)

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productName = productCard.dataset.name;
            const productPrice = parseFloat(productCard.dataset.price);

            // Adiciona o produto ao nosso array 'cart'
            cart.push({
                name: productName,
                price: productPrice
            });

            // Atualiza o número no ícone do carrinho
            cartCountElement.textContent = cart.length;

            // Mostra um feedback para o usuário
            alert(`"${productName}" foi adicionado ao carrinho!`);

            // Para ver o que está no carrinho, você pode checar o console do navegador
            console.log('Itens no carrinho:', cart);
        });
    });

});