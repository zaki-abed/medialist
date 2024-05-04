// Function Loader
$(window).on('load', function() {
    $(".overlay").fadeOut(1000, function(){
        $("body").css("overflow", "auto");
        $(this).remove();
    });
});
