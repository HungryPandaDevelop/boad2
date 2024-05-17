

let fullUrl = window.location.href.split('?')[0];
let paramUrl = window.location.href.split('?')[1];

let countUpload = 0;
let sizeUpload = 50;
let allPostSize = 0;

let pageLang = $('.lang-yachts').data('lang');

let emptyText = pageLang === 'en' ? 'Empty List' : 'Список пуст'

const typelist = $('.catalog-view').find('a.active').data('type');

const extraInit = () => {
  let owlYachtsItemImg = $('.yachts-item-img-owl');

  owlYachtsItemImg.owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true
  });

  $('.img-cover').each(function () {
    let imgSrc = $(this).find('img').attr('src');

    $(this).css('background-image', 'url(' + imgSrc + ')');
  });
};

const appendYachts = (item, typelist) => {

  if (typelist === 'list') {
    $('.catalog-yachts').append(yachtsItemListTemplate(item));
    $('.catalog-yachts').removeClass('catalog-grid');
  } else {
    $('.catalog-yachts').append(yachtsItemTileTemplate(item));
    $('.catalog-yachts').addClass('catalog-grid');
  }

  extraInit();

};

const ajaxUpload = () => {

  let paramUrl = window.location.href.split('?')[1];
  $('.catalog-yachts').empty();
  $('.catalog-yachts').append(spinner);

  console.log('ajax')

  $.ajax({
    type: "GET",
    url: "/wp-json/search/yachts?" + paramUrl,
    data: {
      'countUpload': countUpload,
      'sizeUpload': sizeUpload,
      'lang': $('.lang-yachts').data('lang'),
      'yachtsCategory': $('.catalog-filter').find('.btn.active').data('href'),
    },
    success: function (result) {
      spinner.remove();

      if (result.length > 0) {

        result.map((item) => {
          appendYachts(item, typelist);
        });

      } else {
        $('.catalog-yachts').append('<div class="empty-list col-12">' + emptyText + '</div>')
      }

    }
  });

};

let yachtsFormSearch = $('.search-yachts-form');

$('.reset-filters').on('click', function (e) {
  e.preventDefault();

  window.location.href = fullUrl;
});


function handleFormChange() {
  let formSerialize = yachtsFormSearch.serialize();
  let finalUrl = fullUrl + "?" + formSerialize;
  window.history.pushState("data", "Title", finalUrl);

  $('.listing-tile-btn').attr('href', finalUrl);
  $('.listing-list-btn').attr('href', finalUrl + '&typelist=list');

  ajaxUpload();
}

// Обработчик для события change
yachtsFormSearch.find('input').on('change', function (e) {
  e.preventDefault();

  handleFormChange();
});



$('.apply-filters').on('click', function (e) {
  e.preventDefault();

  let formSerialize = yachtsFormSearch.serialize();

  let finalUrl = fullUrl + "?" + formSerialize;

  window.history.pushState("data", "Title", finalUrl);

  ajaxUpload();
});

/* tab active */
$('.search-tabs').on('click', 'span', function () {
  if (!$(this).hasClass('active')) {
    $(this).parents('.search-tabs').find('span').removeClass('active');
    $(this).addClass('active');
    let indexTab = $(this).index()

    $(this).parents('.sidebar-item-container').find('.tab-item').removeClass('active');
    $(this).parents('.sidebar-item-container').find('.tab-item').eq(indexTab).addClass('active');

  }


});

/* tab active */


/* change template */


$('.select-order-ajax li').on('click', function () {
  let sortVal = $(this).data('value');

  let formSerialize = yachtsFormSearch.serialize();
  let finalUrl = fullUrl + "?" + formSerialize + '&sort=' + sortVal;

  window.history.pushState("data", "Title", finalUrl);

  $('.listing-tile-btn').attr('href', finalUrl);
  $('.listing-list-btn').attr('href', finalUrl + '&typelist=list');

  ajaxUpload();

});


if ($('.catalog-yachts').length > 0) {
  ajaxUpload();
}

