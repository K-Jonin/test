$(function () {
	$.each($(".container p"), function(index, elem) {
		setTimeout(function () {
			$(elem).addClass("animation");
		}, 200 * index);
	});
});