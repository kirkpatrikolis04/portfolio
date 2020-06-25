
$(document).ready(function(){

	window.addEventListener('scroll', function(){

	 var page = window.pageYOffset;

	 if(page > 184){
		 $('#sticky-nav').css({
		 	'height': '56px',
		 	'transition': '0.5s'
		 });
	 } else {
	 	 $('#sticky-nav').css('height', '0');
	 }

	});






	$('.link').on('click', function(e){

		if(this.hash !== ''){

			e.preventDefault();

			const hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800);

		}
	});



	$('#elementary-btn').click(function(){

		$(this).addClass('active');
		$('#secondary-btn').removeClass('active');
		$('#tertiary-btn').removeClass('active');
		$('#elementary').css({'display': 'grid'});
		$('#secondary').css({'display': 'none'});
		$('#tertiary').css({'display': 'none'});

	});

	$('#secondary-btn').click(function(){

		$(this).addClass('active');
		$('#elementary-btn').removeClass('active');
		$('#tertiary-btn').removeClass('active');
		$('#secondary').css('display', 'grid');
		$('#elementary').css('display', 'none');
		$('#tertiary').css('display', 'none');

	});

	$('#tertiary-btn').click(function(){

		$(this).addClass('active');
		$('#elementary-btn').removeClass('active');
		$('#secondary-btn').removeClass('active');
		$('#secondary').css('display', 'none');
		$('#elementary').css('display', 'none');
		$('#tertiary').css('display', 'grid');

	});

	var boolean = false;

	$('.hamburger-menu').click(function(){

		if(!boolean){
			boolean = true;
			$('#responsive-nav').css({'height': '250px'});
			return;
		}

		if(boolean){
			boolean = false;
			$('#responsive-nav').css('height', '56px');
			return;
		}

	});


});



window.sr = ScrollReveal();

sr.reveal('.reveal-profile', {
	duration:2000,
	origin:'left',
	distance: '200px'
});


sr.reveal('.reveal-menu', {
	duration:2000,
	origin:'top',
	distance: '200px'
});

sr.reveal('.reveal-portfolio', {
	duration:2000,
	origin:'bottom',
	distance: '200px'
});

sr.reveal('.social-icon', {
	duration:2000,
	delay:1500,
	origin:'bottom',
	distance:'10px'
});







sr.reveal('.portrait', {
	duration:2000,
	origin:'top',
	distance:'30px'
});

sr.reveal('.reveal-about', {
	duration:2000,
	origin:'right',
	distance:'300px'
});

sr.reveal('.about-button', {
	duration:2000,
	delay:1000,
	origin:'bottom',
	distance:'10px'
});

sr.reveal('.about-text', {
	duration:2000,
	delay:500,
	origin:'bottom',
	distance:'10px'
});





sr.reveal('.skills-left', {
	duration:2000,
	origin:'left',
	distance:'300px'
});

sr.reveal('.skills-right', {
	duration:2000,
	origin:'right',
	distance:'300px'
});


sr.reveal('.skills-percent', {
	duration:2000,
	delay:400,
	origin:'left',
	distance:'300px'
});




sr.reveal('.work-left', {
	duration:2000,
	origin:'left',
	distance:'300px'
});

sr.reveal('.work-right', {
	duration:2000,
	origin:'right',
	distance:'300px'
});






sr.reveal('#elementary-btn', {
	duration:2000,
	origin:'bottom',
	distance:'10px'
});

sr.reveal('#secondary-btn', {
	duration:2000,
	delay:300,
	origin:'bottom',
	distance:'10px'
});

sr.reveal('#tertiary-btn', {
	duration:2000,
	delay:400,
	origin:'bottom',
	distance:'10px'
});

sr.reveal('.education-image', {
	duration:2000,
	origin:'top',
	distance:'20px'
});

sr.reveal('.education-text', {
	duration:2000,
	origin:'bottom',
	distance:'20px'
});






sr.reveal('.reveal-contact', {
	duration:2000,
	origin:'bottom',
	distance:'20px'
});

sr.reveal('.map', {
	duration:2000,
	origin:'bottom',
	distance:'20px'
});