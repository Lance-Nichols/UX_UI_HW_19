$(function() {
    var marqueeClass = ".marquee__content";
    var $tickerText = $(marqueeClass).children();
    $tickerText.clone().appendTo(marqueeClass);
    $tickerText.clone().appendTo(marqueeClass);
  });
  $(function() {
    var marqueeClass2 = ".marquee__content2";
    var $tickerText = $(marqueeClass2).children();
    $tickerText.clone().appendTo(marqueeClass2);
    $tickerText.clone().appendTo(marqueeClass2);
  });

  /*
LottieInteractivity.create({
    player:'#lottieHeader',
    mode:"cursor",
    actions: [
        {
            type: "click",
            forceFlag: false
        }
    ]
}); 
*/


LottieInteractivity.create({
  player: '#lottieHeader',
  mode: 'chain',
  actions: [
      {
          state: 'autoplay',
          repeat: 0
      },
  ]
});

LottieInteractivity.create({
  player:'#lottieHeader',
  mode:"cursor",
  actions: [
      {
          type: "toggle"
      }
]
});

LottieInteractivity.create({
  player:'#emailMeButton',
  mode:"cursor",
  actions: [
      {
          type: "toggle"
      }
]
});

jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});
$(document).ready(function(){
  $('.toggle').click(function(){
      $('.menu').toggleClass('active');
  });
});

$(".navMenuBars").on("click", function(){
  $(".navMenuBars").toggleClass("active");
  if ($(".navMenuBars").hasClass("active")) {
    $(".navMenuBars").removeClass("fa-bars").addClass("fa-times");
  }
  else {
    $(".navMenuBars").removeClass("fa-times").addClass("fa-bars");
  }
});

$(".toggle").click(function(){
  $(".toggle").addClass("active");
});
 