//  Index Page :: Make Animation
// document.getElementById("showPasswordButton").addEventListener("click", function() {
//     var passwordInput = document.getElementById("passwordInput");
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//     } else {
//         passwordInput.type = "password";
//     }
// });

$(document).ready(function() {

    // Profile.html
    // Accordion Function
    // Add click event listener to accordion buttons
    $('.accordion').click(function() {
        var row2 = $(this).closest('.box').find('.row-2');
        if (row2.is(':hidden')) {
            row2.slideDown().css('display', 'flex');
        } else {
            row2.slideUp();
        }
    });

    // Function Tab: About As
    // to hide profile page then show about as tab
    $(".show-edit-about").click(function(){
        $(".profile").fadeOut(500); 
        $(".profile-tabs .about-as-tab").css("display", "flex");
        $(".profile-tabs .about-as-tab").fadeIn(500); 
    });

    // to show tab Nudo Changes
    $(".btn-nudo-changes-about-us").click(function(){
        $(".nudo-changes-about-us").fadeIn(500); 
    });
      
    // to close tab Nudo Change
    $(".btn-do-changes-about-us").click(function(){
        $(".nudo-changes-about-us").fadeOut(500); 
    });
    
    // to close tab Nudo Change
    $(".nudo-changes-about-us").click(function(){
        $(".nudo-changes-about-us").fadeOut(500); 
    });

    // to hide Tab About As and back to profile page
    $(".back-to-about").click(function(){
        $(".profile-tabs .about-as-tab").css("display", "none");
        $(".about-as-tabs").fadeOut(500);  
        $(".profile").fadeIn(500); 
    });

    
    // Function Tab: Add Experience
    $(".add-experience").click(function(){
        $(".profile").fadeOut(500); 
        $(".profile-tabs .add-experience-tab").fadeIn(500); 
    });
    
    $(".btn-add-experience").click(function(){
        $(".nudo-changes-add-experience").fadeIn(500); 
    });

    $(".nudo-changes-add-experience").click(function(){
        $(".nudo-changes-add-experience").fadeOut(500); 
    });

    $(".btn-do-changes-add-experience").click(function(){
        $(".nudo-changes-add-experience").fadeOut(500); 
    });

    $(".back-to-profile").click(function(){
        $(".profile-tabs .add-experience-tab").css("display", "none");
        $(".profile-tabs .add-experience-tab").fadeOut(500);  
        $(".profile").fadeIn(500); 
    });


    // Function Tab: Edit Experience
    $(".edit-experience").click(function(){
        $(".profile").fadeOut(500); 
        $(".profile-tabs .edit-experience-tab").fadeIn(500); 
    });
    
    $(".btn-edit-experience").click(function(){
        $(".nudo-changes-edit-experience").fadeIn(500); 
    });

    $(".nudo-changes-edit-experience").click(function(){
        $(".nudo-changes-edit-experience").fadeOut(500); 
    });

    $(".btn-do-changes-edit-experience").click(function(){
        $(".nudo-changes-edit-experience").fadeOut(500); 
    });

    $(".back-to-profile").click(function(){
        $(".profile-tabs .edit-experience-tab").css("display", "none");
        $(".profile-tabs .edit-experience-tab").fadeOut(500);  
        $(".profile").fadeIn(500); 
    });
    

    // Details.html Functions:
    $("#btn_desc").click(function() {
       $("#tab_desc").fadeIn(500); 
       $("#tab_company").fadeOut(500); 
       $("#tab_apply").fadeOut(500); 
    });

    $("#btn_company").click(function() {
        $("#tab_company").fadeIn(500); 
        $("#tab_desc").fadeOut(500); 
        $("#tab_apply").fadeOut(500); 
    });

    $("#btn_apply").click(function() {
        $("#tab_apply").fadeIn(500); 
        $("#tab_company").fadeOut(500); 
        $("#tab_desc").fadeOut(500); 
    });
});
