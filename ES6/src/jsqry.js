$(document).ready(() => {
    // по событию "button any action"
    $('#button').on('click', () => {
        console.log('i m from jquery');
    });

    $('div').add('input').addClass('body');
});