$.fn.pager = function(options) {
	// Set wrapper to the element Pager is running on
	var wrapper = '#' + this.attr('id');

	// Setup default values if they aren't declared by the Pager initialization
	var defaults = {
		// The element used for page links
		link:					'.pagination a',
		// Pull only the entries within the wrapper of the next page
		pull:					wrapper + ' > *',
		// The ID of the loader element
		loaderID:			'loader',
		// Where the browser should scroll to after the page loads
		scrollTo:			wrapper,
		// Speed of the fade animation
		fadeSpeed:		100,
		// Opacity of the wrapper when loading the next page of entries
		fadeOpacity:	.5
	};


	// Extend all default settings into usable options
	var options = $.extend(defaults, options);


	// Add the correct hash to the URL when a user interacts with the pagination
	$(wrapper).on("click", options.link, function(e) {
		e.preventDefault();
		var linkPath = $(this).attr('href');
		window.location = '#' + linkPath;
	});


	// If a user uses a hash in the URL, load it
	if (location.hash) {
		var hash = location.hash;
		var hashURL = hash.replace( /^#/, '');
		loadPagination(hashURL);
	}

	// Hashchange history
	$(window).hashchange(function() {
		var hash = location.hash;
		var hashURL = hash.replace( /^#/, '');

		if (hash) {
			// If the URL has a hash, load the page content into the wrapper
			loadPagination(hashURL);
		} else {
			// If the URL does not have a hash, load the original content into the wrapper
			loadPagination(window.location.href);
		}
	});

	// Load selected page
	function loadPagination(loadURL) {
		$(wrapper, function() {
			// Fade out wrapper during load
			$(wrapper).fadeTo(options.fadeSpeed, options.fadeOpacity);
			// Insert loading element
			$(wrapper).after('<i id="' + options.loaderID + '" style="display: none;"></i>');
			// Fade in loading element
			$('#' + options.loaderID).fadeIn(options.fadeSpeed);
		}).load(loadURL + ' ' + options.pull, function() {
			// After load, fade results in
			$(wrapper).fadeTo(options.fadeSpeed, 1);
			// Scroll up to top of content
			var scroller = $(options.scrollTo).offset().top - 20
			$('body, html').animate({
				scrollTop: scroller
			}, 500);
			// Remove loading element
			$('#' + options.loaderID).fadeOut(options.fadeSpeed, function() {
				$('#' + options.loaderID).remove();
			});
		});
	}
};