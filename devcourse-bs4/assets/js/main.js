$(document).ready(function() {
    
    
    /* ======= Scrollspy ======= */
   $('body').scrollspy({ target: '#section-nav', offset: 100});

    
    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
        if ($(window).width() < 992){
	        $('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
	    }
	    else {
	        $('body').scrollTo(target, 800, {offset: -64, 'axis':'y'});
	    }
		
		
	});
	
	/* ======= Fixed page nav when scrolled ======= */    
    $(window).on('scroll resize', function() {
        
         $('#section-nav-wrapper').removeClass('fixed');
         
         var scrollTop = $(this).scrollTop();
                  
         // Check fixednav contains any element before get the offset - https://stackoverflow.com/questions/20175094/uncaught-typeerror-cannot-read-property-top-of-undefined
         
         var fixednav = $('#section-nav-wrapper');
         
         if  (fixednav.length) {
	        var topDistance = $('#section-nav-wrapper').offset().top;
         }
         
         if ( (topDistance) > scrollTop ) {
            $('#section-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-section-nav');
         }
         else {
            $('#section-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-section-nav');
         }

    });
    

    /* ======= Modules accordion ======= */
    $('.module-toggle').on('click', function () {
      if ($(this).find('svg').attr('data-icon') == 'plus' ) {
        $(this).find('svg').attr('data-icon', 'minus');
      } else {
        $(this).find('svg').attr('data-icon', 'plus');
      };
    });

    
    /* ======= Play/Stop Video in Bootstrpa Modal  ======= */
	/* ======= Note: Chrome 66+ doesn't allow vimeo video auto play (https://github.com/vimeo/player.js/issues/199) ====== */

    $('.video-play-trigger').on('click', function() {
        
        var theModal = $(this).data("target");
        var theVideo = $(theModal + ' iframe').attr('src');
        var theVideoAuto = theVideo + "?autoplay=1";
        
        $(theModal).on('shown.bs.modal', function () {
            $(theModal + ' iframe').attr('src', theVideoAuto);
        });
        
        $(theModal).on('hide.bs.modal', function () {
            $(theModal + ' iframe').attr('src', '');
        });
        
        $(theModal).on('hidden.bs.modal', function () {
            $(theModal + ' iframe').attr('src', theVideo);
        });
 
    });

});