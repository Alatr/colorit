@@include('./libs.js');
(function ($) {
	const $body = $('body');
	var loader = function () {
		$(".loader-wrap").delay(500).fadeOut(500);
	};
	loader();

if (screen.width <= 1024) {
	$('.has-submenu .header-menu-item__title').on('click', function (e) {
		e.preventDefault();
	})
}


	$(".js-up-btn").click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	$('.js-dropdown-btn').on('click', function(e) {
		
		$(`.js-dropdown-menu-list`).slideUp();
		$(this).next('ul').slideDown(300);
	});




	let stageModalIsOpen = false;
	const $modal = $('.js-menu');





	function openStageModal() {
		$modal.css("display", "flex").hide().fadeToggle();
		stageModalIsOpen = true;
	};

	function closeStageModal() {
		$modal.fadeOut(300);
		stageModalIsOpen = false;

	};

	function toggleStageModal() {
		if (stageModalIsOpen) {
			$body.removeClass('modal-active');
			closeStageModal();
		} else {
			$body.addClass('modal-active');
			openStageModal();
		}
	}

	$body.on('click', '.js-header-menu-btn, .js-menu-btn-close', function () {
		toggleStageModal();
	});




})(jQuery);