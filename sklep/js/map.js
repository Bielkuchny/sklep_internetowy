let map;
let activeInfoWindow;

function initMap() {

    const mapOptions = {
        center: { lat: 52.409538, lng: 	16.931992}, 
        zoom: 8
};


map = new google.maps.Map(document.getElementById('map'), mapOptions);

  
const locations = [
        {
            position: { lat: 52.404760, lng: 16.931100 }, 
            title: "Sklep w Poznaniu",
            info: "Nasz sklep w Poznaniu <Br> znajduje się na ulicy Półwiejskiej",
            icon: "https://img.icons8.com/color/48/000000/shop.png",
            open_day: "Poniedziałek-Piątek",
            open: "8:00-20:00",
        },
        {
            position: { lat: 51.958024, lng: 17.510108 }, 
            title: "Sklep w Jarocinie",
            info: "Nasz sklep w Jarocinie <Br> znajduje się na ulicy Ojca Serafina Niedbały",
            icon: "https://img.icons8.com/color/48/000000/shop.png",
            open_day: "Poniedziałek-Piątek",
            open: "8:00-20:00",

            
        },
        {
            position: { lat: 52.396977, lng: 16.959488}, 
            title: "Sklep w Poznaniu",
            info: "Nasz sklep w Poznaniu <Br> znajduje się na ulicy Andrzeja Sobczaka",
            icon: "https://img.icons8.com/color/48/000000/shop.png",
            open_day: "Wtorek-Sobota",
            open: "8:00-20:00",

        },
        {
            position: { lat: 51.764355, lng: 18.508961 }, 
            title: "Sklep w Kaliszu",
            info: "Nasz sklep w Kaliszu <Br> znajduje się na ulicy Złotej",
            icon: "https://img.icons8.com/color/48/000000/shop.png",
            open_day: "Wtorek-Sobota",
            open: "10:00-20:00",

        },
        {
            position: { lat: 52.542358, lng: 17.607974 }, 
            title: "Sklep w Gnieźnie",
            info: "Nasz sklep w Gnieźnie <Br> znajduje się na ulicy Kwiatowej",
            icon: "https://img.icons8.com/color/48/000000/shop.png",
            open_day: "Wtorek-Sobota",
            open: "8:00-20:00",
        },
];


locations.forEach((location) => {

    const marker = new google.maps.Marker({

        position: location.position,
        map: map,
        title: location.title,
        icon: {
            url: location.icon,
            scaledSize: new google.maps.Size(35, 35)
        },
        animation: google.maps.Animation.DROP
        
    });

    const infowindow = new google.maps.InfoWindow({

        content: `<div class="infowindow-content"><strong>${location.title}</strong><br>
        <strong>Otwarty w dniach: </strong> ${location.open_day}
        <br><strong>Otwary w godzinach: </strong>${location.open}<br>${location.info}</div>`

    });

    marker.addListener('click', () => {

        if (activeInfoWindow) {
            activeInfoWindow.close();
        }
        infowindow.open(map, marker);
        activeInfoWindow = infowindow;

    });

    marker.addListener('dblclick', () => {

        window.location.href = location.destination;

    });
});
}
