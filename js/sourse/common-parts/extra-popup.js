let langSite = $('header').data('lang');
let closeText = langSite === 'ru' ? 'Закрыть' : 'Close';
let choiseText = langSite === 'ru' ? 'Выбрать' : 'Choise';

let checkboxTemplateServ = ({ title, price, img }) => (`
  <div class="custom-checkbox custom-checkbox-js" data-img="${img}"><i></i>
    <div class="custom-checkbox-name"><b>${title}</b><span>${price}</span></div>
    <img src="${img}" />
  </div>
  `);
let checkboxTemplateRoute = ({ title, time, img }) => (`
  <div class="custom-checkbox custom-radio-js" data-img="${img.url}"><i></i>
    <div class="custom-checkbox-name"><b>${title}</b><span>${time}</span></div>
    <img src="${img.url}" />
  </div>
  `);

$.ajax({
  url: 'https://lsb.rent/wp-json/get/serv?lang=' + langSite,
  type: 'GET',
  success: function (response) {
    response.forEach((item) => {
      let checkboxHTML = checkboxTemplateServ(item);
      $('.custom-checkbox-container').append(checkboxHTML)
    })
  }
});
$.ajax({
  url: 'https://lsb.rent/wp-json/get/route?lang=' + langSite,
  type: 'GET',
  success: function (response) {
    console.log('response', response);

    response.forEach((item) => {
      let checkboxHTML = checkboxTemplateRoute(item);
      $('.custom-radio-container').append(checkboxHTML)
    })
  }
});



$('.yachts-order-btn').on('click', function () {
  let idParts = $(this).data('id');

  // console.log($(this))
  if ($(this).hasClass('active-btn')) {
    $('.order-popup-part').removeClass('show')
    $('.yachts-order-btn').removeClass('active-btn')
  }
  else {
    $('.order-popup-part').removeClass('show')
    $('.order-popup-part[data-id="' + idParts + '"]').addClass('show');
    $('.yachts-order-btn').removeClass('active-btn')
    $('.yachts-order-btn[data-id="' + idParts + '"]').addClass('active-btn');
  }

});

$('.book-form').on('click', function () {
  $('.order-popup-part').removeClass('show');
  $('.yachts-order-btn').removeClass('active-btn')
});

let arrServ = [];
let arrImg = [];
let btnServices = $('.yachts-order-btn[data-id="services"]');
let dataTextServices = btnServices.data('text');
let dataSubTextServices = btnServices.data('subtext');
let dataSubSubTextServices = btnServices.data('subsubtext');


$('body').on('click', '.custom-checkbox-js', function () {
  let name = $(this).find('b').text();
  let img = $(this).data('img');

  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    arrServ = arrServ.filter(item => item !== name)
    arrImg = arrImg.filter(item => item !== img)
  } else {
    $(this).addClass('active');
    arrServ.push(name);
    arrImg.push(img);
  }

  $('.serv-input').val(arrServ);
  let btnChoise = btnServices.find('span');
  if (arrServ.length > 0) {

    // if (arrServ.length > 1) {
    //   btnChoise.text(dataSubTextServices + ' ' + arrServ.length + ' ' + dataSubSubTextServices)
    // } else {
    //   btnChoise.text(arrServ[0])
    // }
    btnChoise.parent().addClass('active');

    $('.book-form-serv').text(choiseText);

    $('.extra-order-img-serv').addClass('show').find('img').attr('src', arrImg[arrImg.length - 1])
  } else {
    // btnChoise.text(dataTextServices)
    btnChoise.parent().removeClass('active');
    $('.book-form-serv').text(closeText);

    $('.extra-order-img-serv').removeClass('show').find('img').attr('src', '#')
  }



});

$('.close-extra-js').on('click', function () {
  $('.order-popup-part').removeClass('show');
  $('.yachts-order-btn').removeClass('active-btn')
});

let btnRoute = $('.yachts-order-btn[data-id="routes"]');
let dataTextRoute = btnRoute.data('text');

$('body').on('click', '.custom-radio-js', function () {

  let img;
  let name = $(this).find('b').text();
  let btnChoise = btnRoute.find('span');

  if ($(this).hasClass('active')) {
    $('.route-input').val('');
    $(this).removeClass('active');
    btnChoise.parent().removeClass('active');
    // btnChoise.text(dataTextRoute);
    $('.book-form-route').text(closeText);
    img = null;
    $('.extra-order-img-route').removeClass('show').find('img').attr('src', img)
  } else {
    $('.custom-radio-js').removeClass('active');
    $(this).addClass('active');
    $('.route-input').val(name);
    btnChoise.parent().addClass('active');
    // btnChoise.text(name);
    $('.book-form-route').text(choiseText);
    img = $(this).data('img')
    $('.extra-order-img-route').addClass('show').find('img').attr('src', img)
  }

});