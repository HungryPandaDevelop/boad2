
$('.close-js').on('click', function () {
    $(this).parents('.element-show').removeClass('show');
});
$('.popup-overlay-js').on('click',function(e){
    $(this).parents('.element-show').removeClass('show');
});

$(document).on('keyup', (evt) => {
    if (evt.keyCode === 27) {
        $('.element-show').removeClass('show');
    }
});

$('body').on('click','.element-btn', function (e) {
    e.preventDefault();
    
    $('.element-show').removeClass('show');
    let activeIndex = $(this).attr('data-element');
  
    let text;
    if(activeIndex == 6){
        if($(this).parents('.offer-item').length){
            text = $(this).parents('.offer-item').find('h3').text();
        }else if($(this).parents('.market-info').length){
            console.log('in');
            text = $(this).parents('.market-info ').find('h1').text();
        }       
        $('.kp-form h2 span').text(text);
        $('.kp-form').find('[name="your-prod"]').val(text.trim());
    }
    $('[data-element="' + activeIndex + '"].element-show').addClass('show');

    
});