document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const quantityInput = this.closest('.cart-item').querySelector('.quantity');
            const priceElement = this.closest('.cart-item').querySelector('.product-price');
            const price = parseFloat(priceElement.getAttribute('data-price'));
            const quantity = parseInt(quantityInput.value, 10);

            if (quantity > 0) {
                const cartItem = cart.find(item => item.id === productId);
                if (cartItem) {
                    cartItem.quantity += quantity;
                } else {
                    cart.push({ id: productId, quantity: quantity, price: price });
                }
                updateTotalPrice();
            }
        });
    });

    function updateTotalPrice() {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    }

    const clearCartButton = document.querySelector('.clear-cart');
    clearCartButton.addEventListener('click', function() {
        cart.length = 0;
        updateTotalPrice();
    });

    const checkoutButton = document.querySelector('.check-out');
    checkoutButton.addEventListener('click', function() {
        const distance = prompt('W jakiej odległości mieszkasz od sklepu (w km)?');
        const invoice = confirm('Czy chcesz otrzymać produkty na fakturę?');
        const delivery = confirm('Czy preferujesz dostawę do paczkomatu zamiast pod drzwi?');

        let finalPrice = parseFloat(document.getElementById('total-price').textContent);
        if (distance) {
            const deliveryCharge = calculateDeliveryCharge(distance, delivery);
            finalPrice += deliveryCharge;
        }

        if (invoice) {
            finalPrice *= 1.23;
        }

        alert(`Dziękujemy za zakupy! Ostateczna cena produktu to: ${finalPrice.toFixed(2)} PLN`);
    });

    function calculateDeliveryCharge(distance, toPaczkomat) {
        const baseCharge = 10; 
        const perKmCharge = 0.5; 
        let charge = baseCharge + (perKmCharge * Math.max(0, distance - 10)); 

        if (toPaczkomat) {
            charge *= 0.8; 
        }

        return charge;
    }
});