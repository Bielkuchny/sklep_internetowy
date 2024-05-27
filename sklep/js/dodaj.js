document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.querySelector('.cart'); 

  cartContainer.addEventListener('click', (event) => {
    const target = event.target;
    const inputField = target.closest('.cart-item').querySelector('.form-control.text-center');

    if (target.matches('.btn-minus')) {
      updateInputValue(inputField, -1);
    } else if (target.matches('.btn-plus')) {
      updateInputValue(inputField, 1);
    }
  });

  function updateInputValue(input, delta) {
    let currentValue = parseInt(input.value, 10) || 0;
    currentValue += delta;
    if (currentValue < 0) currentValue = 0;
    input.value = currentValue;
  }
});