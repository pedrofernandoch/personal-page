$(document).ready(function () {
	$(".hexagon").mouseenter(function () {
		var title_color = $(this).attr("data-color");
		var title_name = $(this).attr("data-title");
		var desc_name = $(this).attr("data-content");
		var bar_width = $('.' + desc_name + ' .skillbar .bar-1 .bar').attr("data-width");
		hex_description(title_color, title_name, desc_name, bar_width);
	});
});

// function hex_initial_animation() {
// 	$(".hexagon").velocity("transition.expandIn", {
// 		stagger: 150
// 	});
// 	$(".hexagon").velocity("callout.pulse");
// }
//hex_initial_animation();

function hex_description(title_color, title_name, desc_name, bar_width) {
	$('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
	$('.' + desc_name).siblings().removeClass('desc-active');

	const style = $('.' + desc_name + ' .skillbar .bar-1 .bar .bar-inner')[0].style
	if (style && style.width == bar_width) {
		$('.' + desc_name + ' .skillbar .bar-1 .bar .bar-inner').velocity({
			width: 0
		}, {
			queue: false
		});
	}

	setTimeout(function () {
		$('.' + desc_name).addClass('desc-active');
		$('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", {
			stagger: 100
		});

		$('.' + desc_name + ' .skillbar > div, .desc-active').addClass('desc-active');

		$('.' + desc_name + ' .skillbar > div > div, .desc-active').addClass('desc-active');

		$('.' + desc_name + ' .skillbar > div > div > div, .desc-active').addClass('desc-active');

		$('.' + desc_name + ' .skillbar .bar-1 .bar .bar-inner').velocity({
			backgroundColor: title_color
		}, {
			queue: false
		});

		$('.code-title, .desc-active span').velocity({
			color: title_color
		}, {
			queue: false
		});
		$('.code-title').text(title_name)

		setTimeout(function () {
			$('.' + desc_name + ' .skillbar .bar-1 .bar .bar-inner').animate({
				width: bar_width
			}, 150)
		}, 1000)
	}, 0);
}