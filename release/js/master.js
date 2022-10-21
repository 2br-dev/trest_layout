(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"C:\\2Br-projects\\Trest\\Layout\\src\\js\\master.js":[function(require,module,exports){
var sidenav;
let storedStyle;
let mbox;

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

    let hash = window.location.hash;
    if( hash != "" ){
        let pos = $(hash).offset().top;
        $('html, body').scrollTop( pos - 90); 
    }

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

    $( 'body' ).on( 'click', '.backlink', switchFloors);
}

function switchFloors(){

    let currentShown = $('section#rooms').attr('data-shown');
    console.log( currentShown );

    switch ( currentShown ){
        case 'rooms':
            $('section#rooms').attr('data-shown', 'room')
            break;
        case 'room':
            $('section#rooms').attr('data-shown', 'rooms')
            break;
    }

    $('.lazy').lazy({
        afterload: () => {
            $('.lazy').addClass('complete');
        }
    })
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
},{}]},{},["C:\\2Br-projects\\Trest\\Layout\\src\\js\\master.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgc2lkZW5hdjtcclxubGV0IHN0b3JlZFN0eWxlO1xyXG5sZXQgbWJveDtcclxuXHJcbiQoKCkgPT4ge1xyXG5cclxuICAgIGluaXQoKTtcclxuICAgIGluaXRFdmVudHMoKTtcclxuXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgJCgnLmxhenknKS5sYXp5KHtcclxuICAgICAgICBlZmZlY3Q6ICdmYWRlSW4nLFxyXG4gICAgICAgIGVmZmVjdFRpbWU6IDQwMCxcclxuICAgICAgICB0aHJlc2hvbGQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIHNpZGVuYXYgPSBNLlNpZGVuYXYuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZW5hdicpKTtcclxuXHJcbiAgICAkKCdwJykuaHlwaGVuYXRlKCk7XHJcblxyXG4gICAgaWYoICQoJyNtYXAnKS5sZW5ndGggKXtcclxuICAgICAgICBpbml0TWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWJveCA9IE0uTWF0ZXJpYWxib3guaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0ZXJpYWxib3hlZCcpLCB7XHJcbiAgICAgICAgb25PcGVuU3RhcnQ6IGVsID0+IHtcclxuICAgICAgICAgICAgc3RvcmVkU3R5bGUgPSBlbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsb3NlRW5kOiBlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHN0b3JlZFN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIE0uVGFicy5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykpO1xyXG5cclxuICAgIHVwZGF0ZUZpeGVkKCk7XHJcbiAgICBpbml0RGlzYWJsZWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdERpc2FibGVkKCl7XHJcbiAgICBcclxuICAgIGxldCByb29tcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5yb29tLnJlbnRlZCcpO1xyXG5cclxuICAgIHJvb21zLmZvckVhY2goIHJvb20gPT4ge1xyXG4gICAgICAgIGxldCByb29tUGF0aCA9IHJvb20uZGF0YXNldFsncm9vbSddO1xyXG4gICAgICAgIGxldCBwYXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncGF0aCMnICsgcm9vbVBhdGgpO1xyXG4gICAgICAgICQocGF0aCkuYWRkQ2xhc3MoICdkaXNhYmxlZCcgKTtcclxuICAgIH0gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEV2ZW50cygpe1xyXG5cclxuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgdXBkYXRlRml4ZWQpO1xyXG4gICAgJCgnYm9keScpLm9uKCAnY2xpY2snLCAnLm1hcGJveGdsLW1hcmtlcicsIG9wZW5HTWFwcyApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuR01hcHMoKXtcclxuICAgIGxldCB1cmwgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS8lRDElODMlRDAlQkIuKyVEMCU5QSVEMCVCOCVEMSU4MCVEMCVCRSVEMCVCMiVEMCVCMCwrMTgsKyVEMCVBMyVEMSU4MSVEMSU4MiVEMSU4Qy0lRDAlOUElRDElODMlRDElODIsKyVEMCU5OCVEMSU4MCVEMCVCQSVEMSU4MyVEMSU4MiVEMSU4MSVEMCVCQSVEMCVCMCVEMSU4RislRDAlQkUlRDAlQjElRDAlQkIuLCs2NjY3ODQvQDU2Ljc3ODA3MDksMTA1LjcyNzM5NDcsMTcuMjd6L2RhdGE9ITRtNSEzbTQhMXMweDVjZjg1MDhmMTEyZDQyNDU6MHg1MWNkYjI3YzRkNmQwYzlmIThtMiEzZDU2Ljc3ODExNjghNGQxMDUuNzI4NzU4OT9zaG9ydHVybD0xXCI7XHJcbiAgICB3aW5kb3cub3BlbiggdXJsLCAnX2JsYW5rJyApLmZvY3VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUZpeGVkKCl7XHJcblxyXG4gICAgaWYoICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUb3AoKSA+PSAzMDAgKXtcclxuICAgICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkU2NyaXB0KHVybCwgY2FsbGJhY2spe1xyXG5cclxuXHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxyXG5cdHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuXHJcblx0aWYgKHNjcmlwdC5yZWFkeVN0YXRlKXsgIC8vSUVcclxuXHRcdHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZiAoc2NyaXB0LnJlYWR5U3RhdGUgPT0gXCJsb2FkZWRcIiB8fFxyXG5cdFx0XHRcdFx0c2NyaXB0LnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKXtcclxuXHRcdFx0XHRzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcclxuXHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7ICAvL090aGVyc1xyXG5cdFx0c2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0c2NyaXB0LnNyYyA9IHVybDtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxufVxyXG5cclxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LrQsNGA0YLRi1xyXG5mdW5jdGlvbiBpbml0TWFwKCl7XHJcblxyXG4gICAgbG9hZFNjcmlwdCggXCJodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92Mi42LjAvbWFwYm94LWdsLmpzXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGNvb3JkcyA9IFsxMDUuNzI5NDQ0LCA1Ni43NzgyNzA5XTtcclxuICAgICAgICBsZXQgdG9rZW4gPSBcInBrLmV5SjFJam9pWjJWdVpYTjVjeUlzSW1FaU9pSmphMnh5ZWpWcWJUQXdOM2MyTW5Cd2RqWnZkSFZoT0hwaUluMC5Jcm1tYlVNVHRtWEJ4Wmp2OG1jSDhRXCI7XHJcblxyXG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgbGV0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICdtYXAnLFxyXG4gICAgICAgICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9nZW5lc3lzL2NrbHMyZHQwbDEyZmoxN3F4dGJ6OTFicWcnLFxyXG4gICAgICAgICAgICBjZW50ZXI6IGNvb3JkcyxcclxuICAgICAgICAgICAgem9vbTogMTdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIoKVxyXG4gICAgICAgICAgICAuc2V0TG5nTGF0KGNvb3JkcylcclxuICAgICAgICAgICAgLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIG1hcC5zY3JvbGxab29tLmRpc2FibGUoKVxyXG4gICAgICAgIG1hcC5hZGRDb250cm9sKG5ldyBtYXBib3hnbC5OYXZpZ2F0aW9uQ29udHJvbCgpKTtcclxuXHJcbiAgICB9IClcclxufSJdfQ==
