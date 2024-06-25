$('.wpcf7-form-control-wrap').each(function () {
  let sizeVal = $(this).find('.wpcf7-form-control').attr('id');
  $(this).addClass(sizeVal);
});


document.addEventListener('wpcf7mailsent', function (event) {

  console.log('send wazap start', event.detail)
  if (event.detail.contactFormId === 1595) { // Замените 1234 н
    // var phoneNumber = "+79852826532"; // Замените на ваш номер телефона в международном формате
    // var message = "Спасибо за вашу заявку. Мы свяжемся с вами в ближайшее время.";

    // Создайте ссылку для отправки сообщения через WhatsApp
    var whatsappUrl = "https://7103.api.greenapi.com/waInstance7103951192/sendMessage/ee81b265dfca48f6a50f9bd59659514e8d9d3b3095a84906aa";


    let inputs = event.detail.inputs;

    let formData = {};
    inputs.forEach(input => formData[input.name] = input.value);

    let messages = `Name: ${formData['your-name']}\nPhone: ${formData['your-phones']}\nMessage: ${formData['your-message']}\nAccepted: ${formData['accept-this']}`;


    let payload = {
      "chatId": "79852826532@c.us",
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
        console.log('Message sent successfully:', response);
      },
      error: function (error) {
        console.error('Error sending message:', error);
      }
    });

    // Откройте ссылку в новом окне

    // window.open(whatsappUrl, '_blank');
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


