
$('.close-js').on('click', function () {
    $('body').removeClass('open-popup')
    $(this).parents('.element-show').removeClass('show');
});
$('.popup-overlay-js').on('click', function (e) {
    $('body').removeClass('open-popup')
    $(this).parents('.element-show').removeClass('show');
});

$(document).on('keyup', (evt) => {
    if (evt.keyCode === 27) {
        $('body').removeClass('open-popup')
        $('.element-show').removeClass('show');
    }
});

$('body').on('click', '.element-btn', function (e) {
    e.preventDefault();
    $('body').addClass('open-popup')
    $('.order-popup-part').removeClass('show')
    $('.element-show').removeClass('show');
    $('.extra-order-img-yachts').removeClass('show')
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
        $('.extra-order-img-yachts').addClass('show')
        if ($(this).hasClass('element-btn-yachts')) {
            console.log('element-btn-yachts')

            text = $(this).parents('.yachts-item').find('h3 a').text();
            img = $(this).parents('.yachts-item').find('.yachts-img img').attr('src');

        } else {

            text = $(this).parents('.content').find('h1').text();
            img = $(this).parents('.content').find('.yachts-detail-img img').attr('src');
            console.log(text, img)
        }



        $('.popup-yacht-head-main h3').text(text);
        $('.extra-order-img-yachts img').addClass('show').attr('src', img);
        $('.yachts-input').val(text)
        console.log('b', img)
        // $('.kp-form').find('[name="your-prod"]').val(text.trim());
    }



    $('[data-element="' + activeIndex + '"].element-show').addClass('show');


});