
let checkboxTemplateServ = (title) => (`
  <div class="custom-checkbox custom-checkbox-js"><i></i>
    <div class="custom-checkbox-name"><b>${title}</b><span>from 350 AED per person</span></div>
  </div>
  `)

$.ajax({
  url: 'https://lsb.rent/wp-json/get/serv?lang=ru',
  type: 'GET',
  success: function (response) {
    response.forEach(item => {
      let checkboxHTML = checkboxTemplateServ(item.title);
      $('.custom-checkbox-container').append(checkboxHTML)
    })
  }
});



$('.yachts-order-btn').on('click', function () {
  let idParts = $(this).data('id');

  $('.order-popup-part[data-id="' + idParts + '"]').addClass('show');
});

$('.book-form').on('click', function () {
  $('.order-popup-part').removeClass('show');
});

let arrServ = [];
let btnServices = $('.yachts-order-btn[data-id="services"]');
let dataTextServices = btnServices.data('text');
let dataSubTextServices = btnServices.data('subtext');
let dataSubSubTextServices = btnServices.data('subsubtext');


$('body').on('click', '.custom-checkbox-js', function () {
  let name = $(this).find('b').text();
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    arrServ = arrServ.filter(item => item !== name)
  } else {
    $(this).addClass('active');
    arrServ.push(name);
  }

  $('.serv-input').val(arrServ);
  let btnChoise = btnServices.find('span');
  if (arrServ.length > 0) {

    if (arrServ.length > 1) {
      btnChoise.text(dataSubTextServices + ' ' + arrServ.length + ' ' + dataSubSubTextServices)
    } else {
      btnChoise.text(arrServ[0])
    }
    btnChoise.parent().addClass('active');

  } else {
    btnChoise.text(dataTextServices)
    btnChoise.parent().removeClass('active');
  }

  // console.log('arr', arrServ)
});

let btnRoute = $('.yachts-order-btn[data-id="routes"]');
let dataTextRoute = btnRoute.data('text');
$('.custom-radio-js').on('click', function () {
  let name = $(this).find('b').text();
  let btnChoise = btnRoute.find('span');

  if ($(this).hasClass('active')) {
    $('.route-input').val('');
    $(this).removeClass('active');
    btnChoise.parent().removeClass('active');
    btnChoise.text(dataTextRoute);
  } else {
    $('.custom-radio-js').removeClass('active');
    $(this).addClass('active');
    $('.route-input').val(name);
    btnChoise.parent().addClass('active');
    btnChoise.text(name);
  }




});