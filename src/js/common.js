$(document).ready(function(){
	var clock1;

        clock1 = $('.countdown_1').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            language: 'russian',
            callbacks: {
                stop: function() {
                    $('.message').html('The clock has stopped!')
                }
            }
        });
        clock1.setTime(220880);
        clock1.setCountdown(true);
        clock1.start();

    var clock2;

        clock2 = $('.countdown_2').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            language: 'russian',
            callbacks: {
                stop: function() {
                    $('.message').html('The clock has stopped!')
                }
            }
        });
        clock2.setTime(220880);
        clock2.setCountdown(true);
        clock2.start();

    //Save iframe AspectRatio
    var w = $(".video iframe").first().width();
    console.log(w);
    $(".video iframe").height(w * 0.54);

    $(".menu_btn").click(function(){
        $(".menu").css("display", "block");
        $(".shadow").css("display", "block");
    });
    $(".close_btn").click(function(){
        $(".menu").css("display", "none");
        $(".shadow").css("display", "none");
    });
    $(".menu li a").click(function(){
        $(".menu").css("display", "none");
        $(".shadow").css("display", "none");
    });
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1
    });
});