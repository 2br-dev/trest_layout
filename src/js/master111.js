var sidenav;
let storedStyle;
let mbox;

import mg from './modules/mini-gallery';

$(() => {

    init();
    initEvents();

})

function init(){

    $('.lazy').lazy({
        effect: 'fadeIn',
        effectTime: 400,
        threshold: 0
    });

    sidenav = M.Sidenav.init(document.querySelector('.sidenav'));

    $('p').hyphenate();

    if( $('#map').length ){
        initMap();
    }

    mbox = M.Materialbox.init(document.querySelectorAll('.materialboxed'), {
        onOpenStart: el => {
            storedStyle = el.style.backgroundImage;
        },
        onCloseEnd: el => {
            el.style.backgroundImage = storedStyle;
        }
    });

    M.Tabs.init(document.querySelectorAll('.tabs'));

    updateFixed();
    initDisabled();
}

function initDisabled(){
    
    let rooms = document.querySelectorAll('div.room.rented');

    rooms.forEach( room => {
        let roomPath = room.dataset['room'];
        let path = document.querySelector('path#' + roomPath);
        $(path).addClass( 'disabled' );
    } );
}

function initEvents(){

    $(window).on('scroll', updateFixed);
    $('body').on( 'click', '.mapboxgl-marker', openGMaps );
}

function openGMaps(){
    let url = "https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D0%B0,+18,+%D0%A3%D1%81%D1%82%D1%8C-%D0%9A%D1%83%D1%82,+%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+666784/@56.7780709,105.7273947,17.27z/data=!4m5!3m4!1s0x5cf8508f112d4245:0x51cdb27c4d6d0c9f!8m2!3d56.7781168!4d105.7287589?shorturl=1";
    window.open( url, '_blank' ).focus();
}

function updateFixed(){

    if( $('html, body').scrollTop() >= 300 ){
        $('header').addClass('fixed');
    }else{
        $('header').removeClass('fixed');
    }
}

function loadScript(url, callback){

	var script = document.createElement("script")
	script.type = "text/javascript";

	if (script.readyState){  //IE
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" ||
					script.readyState == "complete"){
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {  //Others
		script.onload = function(){
			callback();
		};
	}

	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

// Инициализация карты
function initMap(){

    loadScript( "https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.js", () => {

        let coords = [105.729444, 56.7782709];
        let token = "pk.eyJ1IjoiZ2VuZXN5cyIsImEiOiJja2xyejVqbTAwN3c2MnBwdjZvdHVhOHpiIn0.IrmmbUMTtmXBxZjv8mcH8Q";

        mapboxgl.accessToken = token;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/genesys/ckls2dt0l12fj17qxtbz91bqg',
            center: coords,
            zoom: 17
        });

        let marker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);

        map.scrollZoom.disable()
        map.addControl(new mapboxgl.NavigationControl());

    } )
}