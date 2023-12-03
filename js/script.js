$(document).ready(function () {

    var headerPosition = $('header').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > headerPosition) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
});

var currentYear = new Date().getFullYear();

// Set the current year in the HTML element
document.getElementById('currentYear').innerText = currentYear;

