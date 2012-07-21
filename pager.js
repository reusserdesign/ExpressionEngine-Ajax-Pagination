(function($){
	$.fn.pager = function(options) {
		var wrapper = '#' + $(this).attr('id');
		var defaults = {
			link:			'.pagination a',
			pull:			wrapper + ' > *',
			loaderID:		'loader',
			scrollTo:		'body',
			fadeSpeed:		100,
			fadeOpacity:	.5
		};
		
		var options = $.extend(defaults, options);
		
		$(options.link).live('click', function(e) {
			e.preventDefault();
			var link = $(this).attr('href');
			
			$(wrapper, function() {
				$(wrapper).fadeTo(options.fadeSpeed, options.fadeOpacity);
				$(wrapper).after('<i id="' + options.loaderID + '" style="display: none;"></i>');
				$('#' + options.loaderID).fadeIn(options.fadeSpeed);
			}).load(link + ' ' + options.pull, function() {
				$(wrapper).fadeTo(options.fadeSpeed, 1);
				$(window).scrollTop($(options.scrollTo).position().top);
				$('#' + options.loaderID).fadeOut(options.fadeSpeed, function() {
					$('#' + options.loaderID).remove();
				});
			});
		});
	};
})(jQuery);