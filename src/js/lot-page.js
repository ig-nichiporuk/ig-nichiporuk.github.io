$(document).ready(function() {
	if($('body').hasClass('touch')){
		check_device = true
	}
	else {
		check_device = false
	}
	/*$('.js-lot-zoom').jqPhotoSwipe({
		closeEl:true,
		captionEl: true,
		fullscreenEl: true,
		zoomEl: false,
		shareEl: false,
		counterEl: true,
		arrowEl: true,
		preloaderEl: true,
		clickToCloseNonZoomable: true,
		tapToClose: true,
		tapToToggleControls: true,
		closeOnScroll: false,
		loop: true,

		// getDoubleTapZoom : false,
		// forceSingleGallery: true
	});*/

	$('.js-lot-zoom').lightGallery({
		speed: 200,
		preload: 3,
		swipeThreshold: 10,
		enableDrag:false,
		thumbnail: false,
		autoplayControls: false,
		hash: false,
		share: false,
		rotate:false,
		download: false,
		zoom: false,
		actualSize: false,

		controls: check_device ? false : true,
	});

	$('.js-lot-slider').on('breakpoint init', function () {
		$('.js-lot-slider-controls').empty();
		$('.slick-prev').prependTo('.js-lot-slider-controls');
		$('.slick-dots').appendTo('.js-lot-slider-controls');
		$('.slick-next').appendTo('.js-lot-slider-controls');
	});
	$('.js-lot-slider').slick({
		// lazyLoad: 'ondemand',
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: check_device ? false : true,
		dots: true,
		fade: false,
		autoplay: false,
		swipe: check_device ? true : false,
		speed: 300,
		touchThreshold: 100,
	});

})