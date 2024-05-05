// Function Loader
$(window).on('load', function() {
    $(".overlay").fadeOut(1000, function(){
        $("body").css("overflow", "auto");
        $(this).remove();
    });
});

// Index Page :: Make Animation

setTimeout(function() {
    var img = document.getElementById("name");
    img.setAttribute("src", "images/khaled-yousef-white.svg");
}, 1440); 

document.getElementById("showPasswordButton").addEventListener("click", function() {
    var passwordInput = document.getElementById("passwordInput");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});