document.addEventListener('DOMContentLoaded', function() {

            var dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(function(dropdown) {

                dropdown.addEventListener('shown.bs.dropdown', function() {
                    var dropdownMenu = this.querySelector('.dropdown-menu');
                    if (!dropdownMenu) return;

                    dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";

                });
        
                dropdown.addEventListener('hidden.bs.dropdown', function() {
                    var dropdownMenu = this.querySelector('.dropdown-menu');
                    if (!dropdownMenu) return;

                    dropdownMenu.style.maxHeight = "";

        });
    });
});