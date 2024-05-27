
function resizeMap() {
    var image = document.querySelector('img[usemap]');

    if (!image) return;

    var widthPercent = image.width / image.naturalWidth;
    var map = image.getAttribute('usemap').replace('#', '');
    var areas = document.querySelectorAll('map[name="' + map + '"] area');

    areas.forEach(function(area) {
        var originalCoords = area.dataset.originalCoords;
        if (!originalCoords) {
            originalCoords = area.getAttribute('coords');
            area.dataset.originalCoords = originalCoords;
        }
        var coords = originalCoords.split(',').map(function(coord) {
            return Math.round(coord * widthPercent);
        }).join(',');
        area.setAttribute('coords', coords);
    });
}

window.onresize = resizeMap;
window.onload = resizeMap;