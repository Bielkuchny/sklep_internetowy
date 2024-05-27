
  var navbar = document.getElementById("mainNavbar");


  function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      navbar.style.top = "-70px"; 
    } else {
      navbar.style.top = "0";
    }
  }

  window.onscroll = function() {
    scrollFunction();
  };