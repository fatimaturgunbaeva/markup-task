var selector = '.categories a';
$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

var menu = 'nav a';
$(menu).on('click', function(){
    $(menu).removeClass('active');
    $(this).addClass('active');
});