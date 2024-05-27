
  var photoCarousel = document.getElementById('photoCarousel');
  var radioButtons = document.querySelectorAll('input[name="radio-btn"]');

  photoCarousel.addEventListener('slid.bs.carousel', function (event) {
    var activeIndex = event.to;
    radioButtons.forEach(function (radio, index) {
      radio.checked = index === activeIndex;
    });
  });
