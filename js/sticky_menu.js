$(document).ready(function() {
	var distance = $(window).scrollTop();
	var $nav = $('nav');
	// console.log($(window).scrollTop());
	if (distance > 340) {
		$nav.animate({
			top: Math.floor(distance),
		}, 100);
	}
	$(window).scroll(function () {
		var distance = $(window).scrollTop();
		var $nav = $('nav');
		// if (distance >= 306) {
		// 	$nav.addClass('fixed-top');
		// }
		// else {
		// 	$nav.removeClass('fixed-top');
		// }

		if (distance > 340) {
			$nav.stop();
			$nav.animate({
				top: Math.floor(distance),
			}, distance);
			var que = 'mayor';
		}
		else {
			$nav.stop();
			$nav.animate({
				top:306,	
			});
			var que = 'menor';
		}
		// console.log(distance + ' / ' + que);
	});

	///// SUBMENU

	// $('nav li').mouseover( function() {
	// 	stop();
	// 	$(this).find('ul').slideDown('fast');
	// });

$('nav li').hover(function(){
	$(this).find('ul').slideDown('fast');
}, function(){
	$(this).find('ul').hide()
	});


$('a.js-toggle').click(function(e){
	e.preventDefault();
	$(this).next('ul').slideToggle('fast');
});


	///// MAYORDOMO

	var $butler = $('#butler');
	var $bocadillo = $('#bocadillo');
	var setText = function(i) {
		switch (i)
		{
		case 1:
		  text="Esta es la primera";
		  break;
		case 2:
		  text="Esta es la segunda";
		  break;
		case 3:
		  text="Esta es la tercera";
		  break;
		case 4:
		  text="TEsta es la cuarta";
		  break;
		case 5:
		  text="Esta es la quinta";
		  break;
		case 6:
		  text="Esta es la última";
		  break;
		} 
		$bocadillo.text(text);
	};
	var changeMouth = function () {

	};
	var i = 0;
	$butler.mouseover(function () {
		if (i === 6){
			i = 1;
		}
		else {
			i += 1;
		}
		console.log(i);
		setText(i);
		changeMouth();
		$bocadillo.show();
	});
	$butler.mouseout(function () {
		$bocadillo.hide();
	});
	// $bocadillo.mouseover(function (event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();

	// });

	mayordomo = {
		nombre : 'igor',
		mouths : {
			talk: 'open',
			enfando: 'Angry'
		},
		phrases : {
			hi: 'Hola',
			sugerencia: 'Le gustaría?',
			enfando: ''
		}
	}
});