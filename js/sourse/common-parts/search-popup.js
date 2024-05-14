let lang = $('.search-main').data('lang');

const ajaxSeatch = (searchVal) => {



  $.ajax({
    type: "GET",
    url: "/wp-json/search/all",
    data: { 'search': searchVal, lang: lang },
    success: function (result) {
      console.log('run', result);

      generateContent(result);
    }
  });
}

let mainBox = $('.search-popup');



const generateContent = async (result) => {


  mainBox.empty();



  let templateHtml = (linkNum, titleNum, list) => {

    let linkMass = ['yachts', 'services', 'routes', 'blog'];
    let titleMass = lang === 'ru' ? ['Яхты', 'Услуги', 'Маршруты', 'Блог'] : ['Yachts', 'Services', 'Cruises', 'Blog'];

    return (`
    <div class="search-popup-line">
          <h3> <a href="${linkMass[linkNum]}">${titleMass[titleNum]}</a></h3>
          <ul class="ln">
            ${list.map(item => `<li><a href="${item.link}">${item.title}</a></li>`).join('')}
          </ul>
        </div>
    `)
  };

  result.yachts.length > 0 && (mainBox.append(templateHtml(0, 0, result.yachts)));
  result.services.length > 0 && (mainBox.append(templateHtml(1, 1, result.services)));
  result.routes.length > 0 && (mainBox.append(templateHtml(2, 2, result.routes)));
  result.blog.length > 0 && (mainBox.append(templateHtml(3, 3, result.blog)));

  let resCount = result.yachts.length + result.services.length + result.routes.length + result.blog.length;

  if (resCount === 0) {
    mainBox.append(`<div class="empty-list">${lang === 'ru' ? 'Список пуст' : 'List empty'}</div>`);
  }
}

let result = {};
let searchTimeId;

$('.input-search').on('keyup', function () {
  let inputLength = $(this).val().length;
  if (inputLength > 0) {
    $(this).parents('.search-main').addClass('search-on');
  } else {
    $(this).parents('.search-main').removeClass('search-on');
  }
});

$('.search-main').on('click', '.close-ico', function () {
  $(this).parents('.search-main').removeClass('search-on');
  $(this).parents('.search-main').find('.input-search').val('');
  mainBox.removeClass('active');
});

$('.input-search-ajax').on('keyup', function () {

  let searchVal = $(this).val();


  if (searchVal.length > 0) {
    mainBox.addClass('active');
    mainBox.append(spinner);
    clearTimeout(searchTimeId);

    searchTimeId = setTimeout(function () {

      ajaxSeatch(searchVal);

    }, 2000);


  } else {
    mainBox.removeClass('active');

  }




});