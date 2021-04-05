$(document).ready(function () {
	$('.js-symbol-can').on('click', function(e){
		e.preventDefault();
	})
	$('.js-symbol-can').on('mouseenter', function(){
		const link = $(this).attr('href').split('#')[1];
		const activeListItem = $(`[data-can=${link}]`);
		activeListItem.addClass('highlight')
	})
	$('.js-symbol-can').on('mouseleave', function(){
		const link = $(this).attr('href').split('#')[1];
		const listItems = $('.symbols-list__item');
		listItems.removeClass('highlight')
	})
});