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
});*/
LottieInteractivity.create({
  player:'#lottieHeader',
  mode:"cursor",
  actions: [
      {
          type: "toggle"
      }
]
});
