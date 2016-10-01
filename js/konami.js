$( document ).ready(function(){
    //cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () { setup(); });
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
      fallingMini();
      setInterval(function(){ fallingMini(); }, 200);
      $.get("http://ipinfo.io", function(response) {
            data = {
              time : Date($.now()),
              ip : response
            };

            $.ajax({
              type: "POST",
              url: '/minions',
              data: data
            });
      }, "jsonp");
    });
    var mi_array = [];
    mi_array.push("http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Happy-icon.png");
    mi_array.push("http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Hello-icon.png");
    mi_array.push("http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Dancing-icon.png");
    mi_array.push("http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Girl-icon.png");
    mi_array.push("http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Kungfu-icon.png");
    mi_array.push("http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Superman-icon.png");
    mi_array.push("http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Reading-icon.png");
    mi_array.push("http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Curious-icon.png");
    mi_array.push("http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Amazed-icon.png");
    mi_array.push("http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Big-icon.png");
    mi_array.push("http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Shy-icon.png");

    // Snow Falling
        function fallingMini() {

            var $minions = $(), qt = 1;

            for (var i = 0; i < qt; ++i) {
                var $mini = $('<div class="minions"></div>');
                url = 'url("'+ mi_array[Math.floor((Math.random() * 10))]+'")';
                $mini.css('background', url);
                $mini.css({
                    'left': (Math.random() * $(window).width()) + 'px',
                    'top': (- Math.random() * $(window).height()) + 'px'
                });
                // add this mini to the set of minions
                $minions = $minions.add($mini);
            }
            $('#snowZone').prepend($minions);

            $minions.animate({
                top: $(window).height() - 128,
                opacity : "80"
            }, Math.random() + 2500, function(){

            });
        }


});
