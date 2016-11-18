/*globals Chart, Modernizr*/
'use strict';
var mySkills;

var loadSkills = function() {
    console.log('initSkills');
    $.ajax({
        type: 'GET',
        url: 'js/mySkills.json',
        dataType: 'json',
        success: function(skills) {
            mySkills = skills;
        },
        fail: function() {
            console.log('Error loading JSON file');
        }
    });
};

//Render skills charts

function renderSkills(mySkills) {
    //Make sure the AJAX request has been completed
    if (mySkills) {
        var anotherSkill;

        $('[data-stats]').each(function(index) {
            var oneSkill = $(this).data('stats');
            $(this).parent().removeClass('surprising');
            anotherSkill = new Chart($(this)[0].getContext('2d')).Doughnut(mySkills[oneSkill]);
        });
        $('#skillswrap').off('inview');

    } else {
        setTimeout(function() {
            renderSkills(mySkills);
            console.log('Another try');
        }, 2000);
    }
}

(function($) {
    //Format emails at run time
    jQuery.fn.mailto = function() {
        return this.each(function() {
            var emailAdd = $(this).attr('href').replace(/\s*\(.+\)\s*/, '@');
            var emailText = $(this).html().replace(/\s*\(.+\)\s*/, '@');
            $(this).before('<a href=\'mailto:' + emailAdd + '\' rel=\'nofollow\' title=\'Say hello!\'>' + emailText + '</a>').remove();
        });
    };
    $(function() {
        $('.email').mailto();

        //Load skills with AJAX
        loadSkills();

        // Bind the event to the charts rendering
        $('#skillswrap').bind('inview', function() {

            renderSkills(mySkills);
        });
    });

})(jQuery);