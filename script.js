document.addEventListener('DOMContentLoaded', () => {

    // Simulação do carrinho, idealmente viria de um backend
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountSpan = document.querySelector('.cart-count');

    // Funções de utilidade
    function updateCartCount() {
        cartCountSpan.textContent = cart.length;
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Lógica para adicionar itens ao carrinho
    const addToCartButtons = document.querySelectorAll('.btn-add');
    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                // Apenas para demonstração, vamos simular que adicionamos um item
                const newItem = { name: "Produto de Exemplo", price: "R$ 100,00" };
                cart.push(newItem);
                saveCart();
                updateCartCount();
                alert(`${newItem.name} adicionado ao carrinho!`);
            });
        });
    }

    // Lógica para a página de Pagamento (pagamento.html)
    if (document.body.classList.contains('pagamento-page')) {
        const cartItemsList = document.getElementById('cart-items');
        const cartTotalValue = document.getElementById('cart-total-value');
        const paymentForm = document.getElementById('payment-form');

        function renderCartItems() {
            cartItemsList.innerHTML = ''; // Limpa a lista
            let total = 0;
            cart.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${item.name}</span><span>${item.price}</span>`;
                cartItemsList.appendChild(li);
                total += parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
            });
            cartTotalValue.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }
        
        renderCartItems();

        paymentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert("Pagamento processado com sucesso! Obrigado por sua compra.");
            localStorage.removeItem('cart'); // Limpa o carrinho após a compra
            window.location.href = 'index.html'; // Redireciona para a página inicial
        });
    }

    // Chamada inicial para atualizar o contador
    updateCartCount();
});