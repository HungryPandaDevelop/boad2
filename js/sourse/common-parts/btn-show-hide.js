
$('.close-js').on('click', function () {
    $(this).parents('.element-show').removeClass('show');
});
$('.popup-overlay-js').on('click', function (e) {
    $(this).parents('.element-show').removeClass('show');
});

$(document).on('keyup', (evt) => {
    if (evt.keyCode === 27) {
        $('.element-show').removeClass('show');
    }
});

$('body').on('click', '.element-btn', function (e) {
    e.preventDefault();
    $('.order-popup-part').removeClass('show')
    $('.element-show').removeClass('show');
    let activeIndex = $(this).attr('data-element');

    let text;
    let img;
    if (activeIndex == 6) {
        if ($(this).parents('.offer-item').length) {
            text = $(this).parents('.offer-item').find('h3').text();
        } else if ($(this).parents('.market-info').length) {
            console.log('in');
            text = $(this).parents('.market-info ').find('h1').text();
        }
        $('.kp-form h2 span').text(text);
        $('.kp-form').find('[name="your-prod"]').val(text.trim());
    }

    if (activeIndex == 50) {

        text = $(this).parents('.yachts-item').find('h3 a').text();
        img = $(this).parents('.yachts-item').find('.yachts-img img').attr('src');


        $('.popup-yacht-head-main h3').text(text);
        $('.extra-order-img-yachts img').addClass('show').attr('src', img);
        $('.yachts-input').val(text)
        console.log('b', img)
        // $('.kp-form').find('[name="your-prod"]').val(text.trim());
    }



    $('[data-element="' + activeIndex + '"].element-show').addClass('show');


});