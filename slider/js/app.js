$(function () {
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true,
		swipe: false,
		asNavFor: '.slider-nav'
	  });
	  $('.slider-nav').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		swipe: false,
		asNavFor: '.slider-for',
	  });
	  $(".next").on("click", function() {
		$('.slider-for').slick("slickNext");
	  })
});