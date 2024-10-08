
var st = 0;
window.addEventListener('scroll', function (e) {

  st = $(this).scrollTop();

  if (st > 0) {
    $('header').addClass('stick');
  }
  else {
    $('header').removeClass('stick');
  }

});



// $('.dropdown-link').on('click',function(e){
//   e.preventDefault();
//   $(this).toggleClass('dropdown-link--active');
//   $('.header-menu-hidden-wrapper').toggleClass('active');
// });

$('.faq-head').on('click', function () {
  $(this).parent().toggleClass('faq-item--active');
});


$('.question-home-tabs span').on('click', function () {
  $('.question-home-tabs span').removeClass('active');
  $(this).addClass('active');

  $('.question-home-item').removeClass('active');
  $('.question-home-item').eq($(this).index()).addClass('active');

  $('.question-hide').removeClass('show');
  $('.question-more').removeClass('hide');
});

$('.question-more').on('click', function (e) {
  e.preventDefault();
  $(this).addClass('hide');
  $(this).parent().prev().addClass('show');
});


$('.warning-show').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.warning-item').addClass('active');
});
$('.warning-close').on('click', function () {
  $(this).parents('.warning-item').removeClass('active');
});

$('.sidebar-search-item h3, .sidebar-search-item i').on('click', function () {
  $(this).parents('.sidebar-search-item').toggleClass('active');
});

let detailTabs = $('.detail-tabs');
if (detailTabs.length > 0) {
  const onHoverMoveCarriage = function (num) {
    let widthCarriage = detailTabs.find('li').eq(num).width();
    let offsestLeftCarriage = detailTabs.find('li').eq(num).position().left;
    $('.detail-tabs-carriage').css({ width: widthCarriage + 'px', left: offsestLeftCarriage + 'px' });
  }
  let timeOutId;
  let curretTabs = 0;
  let timeReturn = 500;

  detailTabs.find('li').hover(
    function () {

      clearInterval(timeOutId)
      onHoverMoveCarriage($(this).index());


    }, function () {

      timeOutId = setTimeout(function () {
        onHoverMoveCarriage(curretTabs);
      }, timeReturn);
    });

  detailTabs.find('li').on('click', function () {

    curretTabs = $(this).index();
    detailTabs.find('li').removeClass('active').eq(curretTabs).addClass('active');
    onHoverMoveCarriage(curretTabs);

    $('.detail-tabs-item').removeClass('active').eq(curretTabs).addClass('active');
  });

  onHoverMoveCarriage(0);

}

$(window).on('load', function () {
  $('.preload').addClass('load');
  setTimeout(function () {
    $('.preload').addClass('hide');
  }, 2000)
});

/* tabs routes moving */
let offsetTop = $(window).width() < 992 ? 90 : 160;
$('.tabs-routes').on('click', 'li', function () {

  let indexLi = $(this).data('point');

  console.log(indexLi)
  $("body, html").animate({
    scrollTop: $('.point-' + (indexLi)).offset().top - offsetTop
  }, 500);
});

$('.form-go').on('click', function (e) {
  e.preventDefault();
  $("body, html").animate({
    scrollTop: $('.feedback-home').offset().top - offsetTop
  }, 500);
});

$('.go-tour-form').on('click', function (e) {
  e.preventDefault();
  $("body, html").animate({
    scrollTop: $('.feedback-origin').offset().top - offsetTop
  }, 500);
});
/* tabs routes moving */


/* animate label all form */
$('.input-box').each(function () {
  $(this).find('input, textarea').on('keyup', function () {
    let lengthInput = $(this).val().length;
    if (lengthInput > 0) {
      $(this).addClass('input-empty');
    }
    else {
      $(this).removeClass('input-empty');
    }
  })

});
/* animate label all form */

// video play rew

$('.video-play').on('click', function () {
  $(this).hide();
  $(this).prev()[0].play();
});



$('.services-item').mousemove(function (event) {

  let curX = (event.offsetX - 42);
  let curY = (event.offsetY - 42);

  $(this).find('.btn-item-plus').css({
    left: (curX) + 'px',
    top: (curY) + 'px'
  });
});

/*servises yachts add title to input */
if ($('.serv-name-input').length > 0) {
  $('.serv-name-input').val($('.services-main h1').text().trim());
};
/*servises yachts add title to input*/
$('.hamburger-btn').on('click', function () {
  $(this).toggleClass('active');
  $('.menu-hamburger').toggleClass('show');
});

$('.popup-nav .menu-item-has-children > a').on('click', function (e) {
  e.preventDefault();
  console.log('testing')
  if ($(this).parent().hasClass('active')) {
    $('.popup-nav li').removeClass('active');
    $(this).parent().removeClass('active');
  } else {
    $('.popup-nav li').removeClass('active');
    $(this).parent().addClass('active');
  }


});
$('.back-link').on('click', function (e) {
  e.preventDefault();
  if ($(this).hasClass('back-link')) {
    $('.popup-nav li').removeClass('active');
    $(this).parent().removeClass('active');
  }
});

/*servises yachts add title to input popup*/
// $('.element-btn-serv').on('click',function(){
//   let title = $(this).parents('.yachts-item-second').find('h3').text().trim();
//   $('.large-popup .serv-name-input').val(title);
// });

$('body').on('click', '.element-btn-yachts', function () {
  let title = $(this).parents('.yachts-item').find('h3').text().trim();

  $('.large-popup .yachts-name-input').val(title);
  $('.large-popup h3 span').text(title);
});
$('.element-btn-yachts-second').on('click', function () {
  let title = $(this).parents('.yachts-item-second').find('h3').text().trim();

  $('.large-popup .yachts-name-input').val(title);
  $('.large-popup h3 span').text(title);
});


/*servises yachts add title to input popup*/

$('.sidebar-btn').on('click', function () {
  $('.catalog-sidebar-container').addClass('active');
});
$('.close-sidebar-search, .apply-filters').on('click', function () {
  $('.catalog-sidebar-container').removeClass('active');
});
$('.sort-btn').on('click', function () {
  $('.catalog-sort-mobile').addClass('active');
});
$('.close-sort-mobile').on('click', function () {
  $('.catalog-sort-mobile').removeClass('active');
});
$('.order-select-box').on('click', function () {
  $('.catalog-sort-mobile').removeClass('active');
});
$('.input-num').each(function () {
  $(this).attr('inputmode', 'numeric');
})
$('.input-num').on('keypress', function (e) {
  // Удаляем все символы, кроме цифр
  if (e.which < 48 || e.which > 57) {
    e.preventDefault();
  }
});
$('.input-date').on('keypress', function (e) {
  e.preventDefault();
});

// forma 7 submit

$('#wpcf7-f1595-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-open-form-ru'); return true;");
$('#wpcf7-f1591-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-open-form-ru'); return true;");

$('#wpcf7-f1688-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-open-form-en'); return true;");
$('#wpcf7-f2340-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-open-form-en'); return true;");

$('#wpcf7-f102-o1 form').attr("onsubmit", "ym(96996333,'reachGoal','send-consultation-form-ru'); return true;");
$('#wpcf7-f1680-o1 form').attr("onsubmit", "ym(96996333,'reachGoal','send-consultation-form-en'); return true;");

$('#wpcf7-f1589-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-consultation-form-ru'); return true;");
$('#wpcf7-f2337-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-consultation-form-en'); return true;");


$('#wpcf7-f1592-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-review-ru'); return true;");
$('#wpcf7-f2339-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-review-en'); return true;");


$('#wpcf7-f1614-o4 form').attr("onsubmit", "ym(96996333,'reachGoal','send-booking-form-ru'); return true;");
$('#wpcf7-f1732-o4 form').attr("onsubmit", "ym(96996333,'reachGoal','send-booking-form-en'); return true;");


$('#wpcf7-f1688-o7 form').attr("onsubmit", "ym(96996333,'reachGoal','send-open-form-en'); return true;");
$('#wpcf7-f1595-o7 form').attr("onsubmit", "ym(96996333,'reachGoal','send-open-form-ru'); return true;");

$('#wpcf7-f1725-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-booking-additional-service-en'); return true;");
$('#wpcf7-f1588-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-booking-additional-service-ru'); return true;");

$('.form-routes #wpcf7-f1725-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-booking-cruise-en'); return true;");
$('.form-routes #wpcf7-f1588-o6 form').attr("onsubmit", "ym(96996333,'reachGoal','send-booking-cruise-ru'); return true;");

$('#wpcf7-f2338-o2 form').attr("onsubmit", "ym(96996333,'reachGoal','send-booking-additional-service-en'); return true;");
$('#wpcf7-f1613-o2 form').attr("onsubmit", "ym(96996333,'reachGoal','send-booking-additional-service-ru'); return true;");


$('#wpcf7-f3170-o5 form').attr("onsubmit", "ym(96996333,'reachGoal','send-booking-form-en'); return true;");
$('#wpcf7-f3169-o5 form').attr("onsubmit", "ym(96996333,'reachGoal','send-booking-form-ru'); return true;");

// MAIN PAGE BLOCK SALES
$('.sale-description').each(function () {
  let defaultText = $(this).find('.btn').attr('href');
  let topicSales = $(this).find('h3').text().trim();

  $(this).find('.btn').attr('href', defaultText + ' ' + topicSales)


})
// MAIN PAGE BLOCK SALES


$('body').on('click', '.price-hint-bottom', function () {
  $(this).next().addClass('active')
});
$('body').on('click', '.price-hint-popup .close-btn', function () {
  $(this).parent().removeClass('active');
});

$(document).click(function (event) {
  // Проверяем, если клик был не по элементу попапа и не по элементам внутри него
  if (!$(event.target).closest('.price-hint-bottom').length) {
    $('.price-hint-popup').removeClass('active'); // Удаляем класс 'active' у попапа
    $('.overlay').hide(); // Скрываем оверлей или сам попап
  }
});