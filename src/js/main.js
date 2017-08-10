/*funcionalidad typing*/
var typed = new Typed('.subtitulo-principal--txt', {
	strings: ["Front-end Developer jr."],
	typeSpeed: 80,
	loop: false,
});

var typed = new Typed('.typing-subtitulos', {
	strings: ["técnicas"],
	typeSpeed: 220,
	loop: false,
});

var typed = new Typed('.typing-subtitulos_blandas', {
	strings: ["Además del código.."],
	typeSpeed: 100,
	loop: false,
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
		 /*subtitulos.className = "swing";*/
	}
	else if(distancia < 560){
    navegador.style.display="none";
	}
}
/*subtitulos*/


/*var subtitulos = document.getElementsByClassName('subtitulo');

document.addEventListener("scroll",efectosSubtitulos);


function efectosSubtitulos(){
	var distancia = window.scrollY;
	if (distancia > 590) {
		
		var longitud = subtitulos.length;
for (i = 0; i < elements.length; i++) {
    elements[i].className += ' ' + subtitulos[i%len];
	
      	

}
	}
}*/


