$('.phone-mask-choise').on('keypress',function(event){
    return event.charCode >= 48 && event.charCode <= 57
});


var longPhone = 16;
$(".phone-mask").on("keydown", function (e) {

    // if (!parseInt(e.originalEvent.key)) {
    //     if (e.originalEvent.key != "Backspace") {
    //         e.preventDefault();
    //     }
    // }
    if ($(this).val().length < longPhone) {
        longPhone = 16;
        $(".phone-mask").mask("+7(999)999-99-999", {
            placeholder: " + 7(   )   -  -  "
        });
    } else {
        longPhone = 11;
        $(this).unmask();
        $(".phone-mask").mask("999999999999999999");
    }
});


$('body').on('click', function (evt) {
    if (!$(evt.target).is('.country-select-box, .country-select-box > *')) {
        $('.country-select').removeClass('active');
    }
});
$(".phone-mask-choise").mask("999-999-99-99", {
    // placeholder: "___-___-__-__"
});

$('.country-select-box').on('click',function(){
    $('.country-select').toggleClass('active')
});

$('.rus-select').on('click',function(){
    $('.country-select').removeClass('active');

    if($('.country-select-box').find('.oae-flag').length>0){
        $('.country-select-box').find('.oae-flag').remove();
        $('.country-select-box').find('em').text('+7');
        $('.country-select-box').prepend('<div class="rus-flag"/>');

        $(".phone-mask-choise").val('');
        $(".phone-mask-choise").mask("999-999-99-99", {
            // placeholder: "___-___-__-__"
        });
    }
});
$('.oae-select').on('click',function(){
    $('.country-select').removeClass('active');

    if($('.country-select-box').find('.rus-flag').length>0){
        $('.country-select-box').find('.rus-flag').remove();
        $('.country-select-box').find('em').text('+971');
        $('.country-select-box').prepend('<div class="oae-flag"/>');

        $(".phone-mask-choise").val('');
        $(".phone-mask-choise").mask("9-999-9999", {
            // placeholder: "_-___-____"
        });
    }
});