$("#carrousel").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2500,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('#carrousel img').click(function() {
  var currentSlide = $('#carrousel').slick('slickCurrentSlide');

  switch(currentSlide){
    case 0:
    $("html, body").animate({ scrollTop: 700 }, "slow");
    break;
    case 1:
    $("html, body").animate({ scrollTop: 1200 }, "slow");
    break;
    case 2:
    $("html, body").animate({ scrollTop: 1795 }, "slow");
  }
});
