
/*funcionalidad typing*/
var typed = new Typed('.subtitulo-principal--txt', {
	strings: ["Front-end Developer jr."],
	typeSpeed: 80,
	loop: false
});

/*var typed = new Typed('.typing-subtitulos_blandas', {
	strings: ["Además del código"],
	typeSpeed: 100,
	loop: true
});
var typed = new Typed('.typing-subtitulos_tecnicas', {
	strings: ["Con la compu"],
	typeSpeed: 100,
	loop: true
});*/



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
}


new WOW().init();
