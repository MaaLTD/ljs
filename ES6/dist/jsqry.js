'use strict';

$(document).ready(function () {
    // по событию "button any action"
    $('#button').on('click', function () {
        console.log('i m from jquery');
    });

    $('div').add('input').addClass('body');
});