$('DIV#toggle_header').click(() => { 
    if($('HEADER').hasClass('green')){
        $('HEADER').addClass('red');
        $('HEADER').removeClass('green');
    } else {
        $('HEADER').addClass('green');
        $('HEADER').removeClass('red');
    }
});
