$(function() {
	// 下からフェードイン
	const window_height = $(window).height();
	const fadein_bottom_top = $(".container2").offset().top;
	const fadein_side_top = $(".container3").offset().top;
	$(window).scroll(function () {
		if ($(this).scrollTop() > fadein_bottom_top - (window_height / 2)) {
			$(".container2 p").addClass("fadein__bottom");
		}
		if ($(this).scrollTop() > fadein_side_top - (window_height / 2)) {
			$(".container3 p").addClass("fadein__side");
		}
	});
	
	// 回転
	var angle = 0;
	setInterval(() => {
		angle += 0.5;
		$(".container4 div").css("transform", "rotate(" + angle + "deg)");
	}, 20);
});