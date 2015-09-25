// hide the modals and the background on load
$(document).ready(function() {
	if ($('.modal-go').length) {
		$('body').append('<a class="modal-bg"></a>');
		$('.modal').hide();
		$('.modal-bg').hide();
	}
	
	// Show me modal windows
	$('.modal-go').bind('click', function() {
		var dis_modal = $(this).attr('data-modal-id')
		$('.modal').hide().removeClass('modal-on');
		$('.modal-bg').fadeIn();
		$('#' + dis_modal).fadeIn().addClass('modal-on');
	});

	// Close on button
	$('.close').bind('click', function() {
		$('.modal-bg').fadeOut();
		$('.modal').fadeOut().removeClass('modal-on');
	});

	// close on background click, sometimes
	$('.modal-bg').bind('click', function() {
		var close_bg = $('.modal-on').attr('data-modal-closebg')
		if (close_bg != 'false') {
			$('.modal-bg').fadeOut();
			$('.modal').fadeOut();
		}
	});

	$('span.close').bind('click', function() {
		$(this).parent().slideUp();
	});
	
	// Set the Mega Menu close anchor
	if ($('.mega-menu').length) {
		$('body').append('<a class="mega-menu-bg"></a>');
		$('.mega-menu-bg').hide();
	}
	
});

// off canvas nav
$('.off-canvas').bind('click', function() {
	$(this).toggleClass('open');
	if ($(this).hasClass('open')) {
		$(this).text('Close');
	}
	else {
		$(this).text('Menu');
	}
});

// Functions for both the Mega Menu
$('.drop').bind('click', function() {
	if ($('nav').hasClass('mega-menu')) {
		$('.drop-menu').slideToggle();
		$('.mega-menu-bg').show();
	} else {
		if ($('.off-canvas').hasClass('open')) {
			$(this).toggleClass('drop-open');
			if ($(this).hasClass('drop-open')) {
				var text = $(this).find('a:first').text();
				$(this).attr('data-text', text)
				$(this).find('a:first').text('Close');
			}
			else {
				var textback = $(this).data('text');
				$(this).find('a:first').text(textback);
	
			}
		}
	}
});	

$('a.mega-menu-bg').bind('click', function() {
	alert('click');
	$(this).hide();
	$('.drop-menu').hide();
});

// Tool Tips
$('span.tooltip').mouseenter(function() {
	var tip = $(this).attr('data-tip');
	var content = $(this).html();
	if (!$(this).hasClass('tip-open')){
		$(this).addClass('tip-open').html(content + '<div class="this-tip">' + tip + '</div>');
	} else {
		$(this).removeClass('tip-open');
		$('.this-tip').remove();
	}
});
$('span.tooltip').mouseleave(function() {
	if ($(this).hasClass('tip-open')) {
		$(this).removeClass('tip-open');
		$('.this-tip').remove();
	}
});
