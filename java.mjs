$( "[type|= 'button']" ).click(function() {
    $('html,body').animate({
        scrollTop: $(".AboutMe").offset().top}, 'slow');
});

$( "[type|='button2']" ).click(function() {
    $('html,body').animate({
        scrollTop: $(".third").offset().top}, 'slow');
});