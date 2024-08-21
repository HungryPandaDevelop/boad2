$('.yachts-select select').attr('data', '')

// $('.yachts-order-btn').after(`<div class="yachts-order-btn-box"></div>`)

let langSite = $('header').data('lang');
let closeText = langSite === 'ru' ? 'Закрыть' : 'Close';
let choiseText = langSite === 'ru' ? 'Выбрать' : 'Choise';

let checkboxTemplateServ = ({ title, price, img }) => (`
  <div class="custom-checkbox custom-checkbox-js" data-img="${img}"><i></i>
    <div class="custom-checkbox-name"><b>${title}</b><span>${price}</span></div>
    <div class="custom-checkbox-img" style="background-image:url(${img})"></div>
  </div>
  `);
let checkboxTemplateRoute = ({ title, time, img }) => (`
  <div class="custom-checkbox custom-radio-js" data-img="${img.url}"><i></i>
    <div class="custom-checkbox-name"><b>${title}</b><span>${time}</span></div>
    <div class="custom-checkbox-img" style="background-image:url(${img.url})"></div>
  </div>
  `);

$.ajax({
  url: '/wp-json/get/serv?lang=' + langSite,
  type: 'GET',
  success: function (response) {
    response.forEach((item) => {
      let checkboxHTML = checkboxTemplateServ(item);
      $('.custom-checkbox-container').append(checkboxHTML)
    })
  }
});
$.ajax({
  url: '/wp-json/get/route?lang=' + langSite,
  type: 'GET',
  success: function (response) {
    console.log('response', response);

    response.forEach((item) => {
      let checkboxHTML = checkboxTemplateRoute(item);
      $('.custom-radio-container').append(checkboxHTML)
    });
    let IndividualTour = langSite === 'ru' ?
      { title: "Индивидуальный тур", time: "Вы можете спланировать собственный маршрут с нашим менеджером.", img: false } :
      { title: "Individual tour", time: "You can plan your own route with our manager.", img: false };

    $('.custom-radio-container').append(checkboxTemplateRoute(IndividualTour));
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

    btnChoise.parent().addClass('active');

    let servHtml = $('<ul class="ln"></ul>');
    arrServ.forEach(el => servHtml.append(`<li>+${el}</li>`))
    $('.yachts-serv-box').html(servHtml).addClass('active');
    $('.extra-order-img-serv').addClass('show').find('img').attr('src', arrImg[arrImg.length - 1])
  } else {

    // btnChoise.text(dataTextServices)
    btnChoise.parent().removeClass('active');
    $('.book-form-serv').text(closeText);
    $('.yachts-serv-box').text(arrServ).removeClass('active');
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
    name = '';
    $(this).removeClass('active');
    btnChoise.parent().removeClass('active');
    // btnChoise.text(dataTextRoute);
    // $('.book-form-route').text(closeText);
    img = null;
    $('.extra-order-img-route').removeClass('show').find('img').attr('src', img);
    $('.yachts-route-box').removeClass('active');
  } else {
    $('.custom-radio-js').removeClass('active');
    $(this).addClass('active');
    $('.route-input').val(name);
    btnChoise.parent().addClass('active');
    // btnChoise

    $('.book-form-route').text(choiseText);
    img = $(this).data('img')
    $('.extra-order-img-route').addClass('show').find('img').attr('src', img)
    $('.yachts-route-box').addClass('active');
  }
  $('.yachts-route-box').text(name);
});