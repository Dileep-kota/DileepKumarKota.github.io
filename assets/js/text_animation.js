

	function tm_animate_text(){
	
		"use strict";
		
		var animateSpan			= jQuery('.animation_text_word');
		
			animateSpan.typed({
				strings: ["Senior Software Engineer", "Senior Associate", "Lead Software Engineer", "Software Developer", "Full Stack Engineer"],
				loop: true,
				startDelay: 0,
				backDelay: 0
			});
	}

	jQuery(document).on('ready', function () {
		(function ($) {
			tm_animate_text();
		})(jQuery);
	});