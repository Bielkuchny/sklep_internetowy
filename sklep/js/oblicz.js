
document.addEventListener('DOMContentLoaded', function() {

    function calculateSum() {

        return 100;
    }

    function updateTotalPriceDisplay(price) {
        document.getElementById('total-price').textContent = price.toFixed(2);
    }

    document.querySelector('.check-out').addEventListener('click', function() {

        var distance = prompt("Jak daleko mieszkasz od sklepu (w km)?");
        var invoice = confirm("Czy chcesz fakturę?");
        var delivery = confirm("Czy dostawa ma być pod dom? (Cancel dla paczkomatu)");


        var sum = calculateSum();

        if (distance) {
            sum += parseFloat(distance) * 0.5;
        }
        if (invoice) {
            sum += 5; 
        }
        if (!delivery) {
            sum += 10; 
        }

        updateTotalPriceDisplay(sum);

        alert("Dziękujemy za zakupy! Do zapłaty: " + sum.toFixed(2) + " PLN");
    });

    document.querySelector('.clear-cart').addEventListener('click', function() {
        updateTotalPriceDisplay(0);
    });
});



