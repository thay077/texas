document.addEventListener('DOMContentLoaded', () => {

    const cart = [];
    const addToCartButtons = document.querySelectorAll('.btn-add');
    const cartCountSpan = document.querySelector('.cart-count');

    // Função para atualizar o número de itens no ícone do carrinho
    function updateCartCount() {
        cartCountSpan.textContent = cart.length;
    }

    // Adiciona um evento de clique a todos os botões "Adicionar ao Carrinho"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão do link

            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('p').textContent;

            const newItem = {
                name: productName,
                price: productPrice,
                id: Date.now() // Gera um ID único simples
            };

            cart.push(newItem);
            console.log("Carrinho atual:", cart); // Exibe o carrinho no console do navegador

            updateCartCount();
            alert(`${productName} adicionado ao carrinho!`);
        });
    });
});