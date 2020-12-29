
AOS.init();
$(document).ready(function() {
setTimeout(function() {
$('.wrapper').addClass('loaded');
}, 100);
AOS.init();
});

function openNav() {
    document.getElementById("mySidenav").style.right = "0";
}
function closeNav() {
    document.getElementById("mySidenav").style.right = "-250px";
}
// Search Bar
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

$(document).ready(function() {
    setTimeout(function() {
        $('.wrapper').addClass('loaded');
    }, 100);
});

$(function(){
    $("#default_header").load("include/default_header.html");
    $("#default_footer").load("include/default_footer.html");
});
$(window).scroll(function() {
    if ($(this).scrollTop() >= 350) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

new WOW().init();
    $(function(){
        $.scrollIt({topOffset: -100});
});

$(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 80) {
        $('.navbar').addClass('affix');
    } else{
        $('.navbar').removeClass('affix');
    }
});
