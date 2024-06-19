$('.wpcf7-form-control-wrap').each(function () {
  let sizeVal = $(this).find('.wpcf7-form-control').attr('id');
  $(this).addClass(sizeVal);
});


document.addEventListener('wpcf7mailsent', function (event) {

  console.log('send wazap start', event.detail.contactFormId)
  if (event.detail.contactFormId === 1595) { // Замените 1234 н
    var phoneNumber = "+79852826532"; // Замените на ваш номер телефона в международном формате
    var message = "Спасибо за вашу заявку. Мы свяжемся с вами в ближайшее время.";

    // Создайте ссылку для отправки сообщения через WhatsApp
    var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

    // Откройте ссылку в новом окне
    console.log('send wazap ok')
    window.open(whatsappUrl, '_blank');
  }



  console.log('mail sent OK');
  // Stuff
  setTimeout(function () {
    $('.element-show').removeClass('show');
    $('.wpcf7-form').addClass('init');
  }, 1500);





}, false);

console.log('mail sent err');

document.addEventListener('wpcf7invalid', function (event) {
  console.log('mail sent err');
  // Stuff
  setTimeout(function () {
    $('.wpcf7-form').addClass('init');
  }, 1500);

}, false);


