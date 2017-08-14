
/*funcionalidad typing*/
var typed = new Typed('.subtitulo-principal--txt', {
	strings: ["Front-end Developer jr."],
	typeSpeed: 80,
	loop: false
});


/*termina funcionalidasd typing*/

/*aparición de elementos y efectos*/

/*navbar*/
var navegador = document.getElementsByClassName('contenedor-navegador')[0];


document.addEventListener("scroll",aparicionNav);

function aparicionNav() {
	var distancia = window.scrollY;
	if (distancia > 560) {
		navegador.style.display = "block";
		navegador.style.position = "fixed";
	}
	else if(distancia < 560){
    navegador.style.display="none";
	}
	
var mq = window.matchMedia( "(max-width: 480px)" );
if (mq.matches) {
    navegador.style.display = "none";
}
}




/*inicializacion de wow*/

new WOW().init();
