$('.wpcf7-form-control-wrap').each(function () {
  let sizeVal = $(this).find('.wpcf7-form-control').attr('id');
  $(this).addClass(sizeVal);
});


document.addEventListener('wpcf7mailsent', function (event) {

  let endPopup = $('.order-popup-part[data-id="end"]');
  let endPopupAll = $('.form-popup-end');

  endPopupAll.addClass('show');
  if (event.detail.contactFormId === 3169 || event.detail.contactFormId === 3170) {
    endPopup.addClass('show')
    setTimeout(() => {
      endPopup.removeClass('show')
      endPopupAll.removeClass('show');

    }, 5000);
  };


  // Замените 1234 н
  // var phoneNumber = "+79852826532"; // Замените на ваш номер телефона в международном формате
  // var message = "Спасибо за вашу заявку. Мы свяжемся с вами в ближайшее время.";

  // Создайте ссылку для отправки сообщения через WhatsApp
  var whatsappUrl = "https://7103.api.greenapi.com/waInstance7103951192/sendMessage/ee81b265dfca48f6a50f9bd59659514e8d9d3b3095a84906aa";


  let inputs = event.detail.inputs;

  let formData = {};
  inputs.forEach(input => formData[input.name] = input.value);

  // let messages = `Name: ${formData['your-name']}\nPhone: ${formData['your-phones']}\nMessage: ${formData['your-message']}\nAccepted: ${formData['accept-this']}`;
  let messages = Object.entries(formData)
    .map(([key, value]) => `${capitalizeFirstLetter(key.replace(/-/g, ' '))}: ${value}`)
    .join('\n');

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let payload = {
    // "chatId": "79852826532@c.us",
    "chatId": "971565151724@c.us",
    "message": messages
  }
  let headers = {
    'Content-Type': 'application/json'
  }
  $.ajax({
    url: whatsappUrl,
    type: 'POST',
    headers: headers,
    data: JSON.stringify(payload),
    success: function (response) {
      console.log('Message sent successfully a:', response);
    },
    error: function (error) {
      console.error('Error sending message:', error);
    }
  });





  console.log('mail sent OK');
  // Stuff



  setTimeout(function () {
    $('.element-show').removeClass('show');
    $('.wpcf7-form').addClass('init');
    $('body').removeClass('open-popup')
  }, 5000);

}, false);

console.log('mail sent err');

document.addEventListener('wpcf7invalid', function (event) {
  console.log('mail sent err');
  // Stuff
  setTimeout(function () {
    $('.wpcf7-form').addClass('init');
  }, 4500);

}, false);


