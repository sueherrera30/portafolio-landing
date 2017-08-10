/*carousel*/ 
$(document).ready(function () {
   	$('.carousel').carousel();

   	autoplay()

   	function autoplay() {
   		$('.carousel').carousel('next');
   		setTimeout(autoplay, 2000);
   	}

   });

/*nav*/
var $titulosLista = $('.titulos-nav');

$titulosLista.mouseover(animarLi);

function animarLi(){
	console.log(this);
  $titulosLista.addClass('animated flipInX');
	
};

 

