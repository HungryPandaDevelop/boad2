$('.route-btn-popup').on('click', function () {
  $('.element-show[data-element="51"]').addClass('show')
});

let arrServ = [];

$('.custom-checkbox').on('click', function () {
  let name = $(this).find('b').text();
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    arrServ = arrServ.filter(item => item !== name)
  } else {
    $(this).addClass('active');

    arrServ.push(name);
  }
  $('.serv-input').val(arrServ)
  console.log('arr', arrServ)
});