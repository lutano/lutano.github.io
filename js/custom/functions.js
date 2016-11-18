'use strict';

var AnimEnd = 'animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd';
var nav = $('.nav');
var navButton = $('.nav-el');
var overlay = $('.overlay');

$(navButton).click(function() {
    /* Remove old previous classes */

    $(navButton).removeClass('inactive_reverse active_reverse');
    $(overlay).removeClass('active active_reverse');

    /* Add classes on menu elements */
    $(this).siblings().addClass('inactive');
    $(this).addClass('active');

    /* Activate related overlay */
    var oTarget = $(this).data('id');
    $('#' + oTarget).addClass('active');

    /* Prevent scrolling */
    $('body').addClass('noscroll');

});

$('.close').click(function() {

    /* Remove old classes and add new ones on menu elements */
    $('.active', nav).removeClass('active').addClass('active_reverse');
    $('.inactive', nav).addClass('inactive_reverse');

    /* Bring back our overlay to its default state */
    $(this).parent().addClass('active_reverse');

    /* Remove .noscroll and .inactive when reverse animation is finished */
    $('.inactive_reverse').bind(AnimEnd, function() {
        $('body').removeClass('noscroll');
        $(navButton).removeClass('inactive');
        $('.inactive_reverse').unbind(AnimEnd);
        $(navButton).removeClass('inactive_reverse active_reverse');
    });

});


// var htmlData = [{
//     value: 94,
//     color: "#1abc9c"
// }, {
//     value: 6,
//     color: "#ecf0f1"
// }];

// var cssData = [{
//     value: 98,
//     color: "#1abc9c"
// }, {
//     value: 2,
//     color: "#ecf0f1"
// }];

// var jsData = [{
//     value: 80,
//     color: "#1abc9c"
// }, {
//     value: 20,
//     color: "#ecf0f1"
// }];

// var uxData = [{
//     value: 65,
//     color: "#1abc9c"
// }, {
//     value: 35,
//     color: "#ecf0f1"
// }];

// var psData = [{
//     value: 85,
//     color: "#1abc9c"
// }, {
//     value: 15,
//     color: "#ecf0f1"
// }];

// var illData = [{
//     value: 50,
//     color: "#1abc9c"
// }, {
//     value: 50,
//     color: "#ecf0f1"
// }];

// var cData = [{
//     value: 70,
//     color: "#1abc9c"
// }, {
//     value: 30,
//     color: "#ecf0f1"
// }];

// var wpData = [{
//     value: 60,
//     color: "#1abc9c"
// }, {
//     value: 45,
//     color: "#ecf0f1"
// }];
// var myDoughnut = new Chart($('.chart')[0].getContext("2d")).Doughnut($(this).attr('id') doughnutData);
