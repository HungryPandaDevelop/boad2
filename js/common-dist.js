




$(document).ready(function(){

let owlMain = $('.owl-main');

owlMain.owlCarousel({
  items: 1,
  nav: true,
  dots: false,
  margin: 30
});

let owlAbout = $('.about-carousel');

owlAbout.owlCarousel({
  items: 1,
  nav: true,
  dots: false,
  // autoHeight:true
});
let owlSale = $('.sale-carousel');

owlSale.owlCarousel({
  items: 1,
  loop: true,
  dots: false,
  // autoHeight:true
  responsive: {
    0: {
      dots: true,
      nav: false,
    },
    991: {
      dots: false,
      nav: true,

    }
  }
});

let owlTeam = $('.owl-team');

owlTeam.owlCarousel({
  items: 1,
  nav: true,
  dots: true,
  responsive: {
    0: {
      dots: false,
    },
    991: {
      dots: true,

    }
  }
});

let owlDetail = $('.detail-owl');

owlDetail.owlCarousel({

  nav: true,
  dots: false,
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 2,
      margin: 8,
      nav: true,
      stagePadding: 30,
      loop: true
    },
    577: {
      items: 3,
      margin: 15,
      nav: true,
      stagePadding: 50,
      loop: true
    },
    991: {
      items: 5,
      margin: 15,
      stagePadding: 155,
      nav: true,

    }
  }
});

let owlYachtsItemImg = $('.yachts-item-img-owl');

owlYachtsItemImg.owlCarousel({
  items: 1,
  nav: false,
  dots: true,
  loop: true
});

let owlSecond = $('.owl-second');

owlSecond.owlCarousel({

  margin: 30,
  responsive: {
    0: {
      items: 1,
      margin: 15,
      nav: true,
      dots: false,
    },
    577: {
      items: 2,
      margin: 15,
      nav: true,
      dots: true,
    },
    991: {
      items: 3,
      margin: 15,
      nav: true,
      dots: true,
    }
  }
});
let owlThree = $('.owl-three');

owlThree.owlCarousel({
  nav: true,
  dots: true,
  margin: 30,
  responsive: {
    0: {
      items: 1,
      margin: 15
    },
    576: {
      items: 2,
      margin: 15
    },
    786: {
      items: 3,
      margin: 15
    },
    992: {
      items: 4,
      margin: 15
    },
    1920: {
      items: 4,
      margin: 15
    }
  }
});
let owlFour = $('.owl-four');

owlFour.owlCarousel({
  nav: true,
  dots: true,
  margin: 30,
  responsive: {
    0: {
      items: 1,
      margin: 15,
      dots: false,
    },
    786: {
      items: 2,
      margin: 15
    }
  }
});



let owlDetailMain = $('.owl-detail-main');

owlDetailMain.owlCarousel({
  nav: true,
  dots: false,
  padding: 0,
  margin: 30,
  items: 1,
});
let owlDefault = $('.owl-default');

owlDefault.owlCarousel({
  nav: true,
  dots: true,
  items: 1,
});



if ($(window).width() < 576) {
  let owlMobile = $('.owl-mobile');

  owlMobile.owlCarousel({
    dots: false,
    nav: true,
    items: 1,
    margin: 15
  });
}

let owlPartners = $('.owl-partners');

owlPartners.owlCarousel({
  dots: false,
  // autoplay: true,
  // autoplayTimeout: 1001,
  // smartSpeed: 500,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    567: {
      items: 4,
    },
    992: {
      items: 5,
    }
  }
});

$('.input-date').each(function () {
  let thisEl = $(this);
  let dp = new AirDatepicker(this, {
    timepicker: true,
    minDate: new Date(),
    timeFormat: 'hh:mm AA',
    onSelect({ date }) {
      thisEl.addClass('input-empty');
      console.log('done', date)
    }
  },
  );
})


// ------------------
if ($('.group2').length > 0) {
  $(".group2").colorbox({
    rel: 'group2',
    transition: "fade",
    width: "95%"
  });
}
let idSearchTime;
function toInput(date) {
  // console.log(date)
  // console.log(date.from)
  // console.log(date.to)

  $(date.input).parents('.range-slider-box').find('.from').val(date.from)
  $(date.input).parents('.range-slider-box').find('.to').val(date.to)
  clearTimeout(idSearchTime);
  idSearchTime = setTimeout(() => {
    handleFormChange();
  }, 1500)
}

$(".range-slider").each(function () {
  let type = $(this).data('type');
  let min = $(this).data('min');
  let max = $(this).data('max');
  let from = $(this).data('from');
  let to = $(this).data('to');

  $(this).ionRangeSlider({
    type: type,
    min: min,
    max: max,
    from: from,
    to: to,
    skin: "round",
    drag_interval: false,
    grid_snap: true,
    grid_num: 10,
    onChange: toInput
  });
});
$(".range-slider-price").each(function () {
  let type = $(this).data('type');
  let min = $(this).data('min');
  let max = $(this).data('max');
  let from = $(this).data('from');
  let to = $(this).data('to');

  $(this).ionRangeSlider({
    type: type,
    min: min,
    max: max,
    from: from,
    to: to,
    skin: "round",
    drag_interval: false,
    grid_snap: true,
    grid_num: 10,
    onChange: toInput,
    step: 100
  });
});
		// check email
		var r = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		var mailInput;
		var mailFlag = 1;
		var isEmpty = false;
		function checkMail(elThis) {
				mailInput = elThis.val();

				if (!r.test(mailInput)) {
						isEmpty = false;
						elThis.addClass("mail-error");

				} else {
						isEmpty = true;
						elThis.removeClass("mail-error")
				}
		}

		$(".check-mail").on("keyup", function () {
				checkMail($(this));

				if (mailInput.length == 0) {
						$(this).removeClass("mail-error")
				}
		});
		// check email

		// check require

		$(".btn-send").on("click", function (e) {
		
				isEmpty = false;

				checkMail($(this).parents(".form").find(".check-mail"));

				$(this).parents(".form").find(".require").each(function () {

						if ($(this).attr("type") == "checkbox") {
								if (!$(this).is(":checked")) {
										$(this).parent().addClass("input-error");
										isEmpty = true;
								}
						}
						if ($(this).is(".style-select")) {

								if ($(this).prev().attr("data-val") == 0) {

										$(this).prev().addClass("input-error");
										isEmpty = true;
								}
						}

						if ($(this).attr("type") == "file") {
								$(this).next().addClass("input-error");
								isEmpty = true;
						}

						if (!$(this).val()) {
								isEmpty = true;
								$(this).addClass("input-error");
						}
				});

				setTimeout(function () {
						$(".input-error").removeClass("input-error");
				}, 3000);

				if (isEmpty == true) {
						e.preventDefault();
				};
		});

		// check require
$('.wpcf7-form-control-wrap').each(function () {
  let sizeVal = $(this).find('.wpcf7-form-control').attr('id');
  $(this).addClass(sizeVal);
});


document.addEventListener('wpcf7mailsent', function (event) {
  console.log(event.detail.contactFormId)
  let endPopup = $('.order-popup-part[data-id="end"]');
  if (event.detail.contactFormId === 3169 || event.detail.contactFormId === 3170) {
    endPopup.addClass('show')
    setTimeout(() => {
      endPopup.removeClass('show')
    }, 5000)
  }
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
    "chatId": "97145254242@c.us",
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
  }, 1500);

}, false);

console.log('mail sent err');

document.addEventListener('wpcf7invalid', function (event) {
  console.log('mail sent err');
  // Stuff
  setTimeout(function () {
    $('.wpcf7-form').addClass('init');
  }, 4500);

}, false);



// img cover start
$('.img-cover').each(function(){
  let imgSrc = $(this).find('img').attr('src');
  //console.log(imgSrc);
  
  $(this).css('background-image', 'url('+imgSrc+')');
});
// img cover file start
 // style input file start

let ObjfieldFile = $('.input-file');
let flagFileMulti;
let textChoise;
let sizeFile;
let nameFile;

function createNewFileContainer(textChoiseParam, flagFileMultiParam, hintParam){
		let fileContainer = $('<div class="file-input-item"><input class="input-file" type="file" data-flagM="'+flagFileMultiParam+'" accept=".jpg,.png"></div>')
		let noticeFile = $('<div class="notice-file notice-big-file"><span>Файл слишком большой</span><i></i></div>');
		let docorateFile = $('<div class="file-decorate"><span>'+textChoiseParam+'</span><i></i></div>');
		if(hintParam){
				let hintFile = $('<div class="hint-input-file">'+hintParam+'</div>');
				return fileContainer.append(hintFile).append(docorateFile).append(noticeFile);
		}
		else{
				return fileContainer.append(docorateFile).append(noticeFile);
		}
}

ObjfieldFile.each(function(){
		let appendFlag = 0;
		textChoise = $(this).data('textchoise') ? $(this).data('textchoise') : $(this).hasClass('rew-file-en') ? 'Upload an image' : 'Загрузите изображение';
		flagFileMulti = $(this).data('multy') ?  $(this).data('multy') : 0;
		textHint = $(this).data('hint');

		$(this).replaceWith(createNewFileContainer(textChoise, flagFileMulti, textHint));

});



$('body').on('click', '.file-decorate', function () {
		console.log('cl');
		let container = $(this).parents('.file-input-item');
		container.find('.input-file').trigger('click');
});

$('body').on('change', '.input-file', function () {
		nameFile = $(this).val().replace(/C:\\fakepath\\/i, '');
		let container = $(this).parents('.file-input-item');
		
		if(nameFile.length>0){
				sizeFile = this.files[0].size;
				if(sizeFile < 500000){
						container.find('span').text(nameFile);
						container.addClass('file-decorate-full');

						flagFileMulti = $(this).data('flagm');

						if (flagFileMulti == 1) {
								$(this).parents('.file-input-item').after(createNewFileContainer(textChoise,"1"));
						}
				}
				else{
						console.log('to big');
					$(this).parents('.file-input-item').find('.notice-big-file').addClass('notice-file--show');

					setTimeout(function(){
						$('.notice-big-file').removeClass('notice-file--show');
					},3000);
				}
		}
});

$("body").on("click", ".file-decorate i", function (e) {
		e.stopPropagation();
		flagFileMulti = $(this).parents('.file-input-item').find('.input-file').data('flagm');
		let container = $(this).parents('.file-input-item');
		console.log(flagFileMulti);
		if (flagFileMulti == 1) {
				container.remove();
		}
		else{
				container.replaceWith(createNewFileContainer(textChoise,"0"));
		}
});
 // style input file end
// custom-select

$('.style-select').each(function () {
  const select = $(this);
  const selectedText = select.find('option:selected').text();

  // let placeholder;
  let placeholderObj = select.parents('.wpcf7-form-control-wrap').next('label');

  if (select.hasClass('select-with-label')) {

    // placeholder = placeholderObj.text();
    placeholderObj.remove();

    // console.log('placeholder', placeholderObj);
  }

  console.log('selectedText', placeholderObj.length)
  const dataText = placeholderObj.length === 0 ? (selectedText ? selectedText : select.data('text')) : '';
  const dataClass = select.data('class') ?? '';

  let selectOptions = '';

  select.find('option').each(function (index, option) {
    selectOptions +=
      `<li
          data-index="${index}" 
          data-value="${$(option).val()}"
          ${$(this).attr('selected') ? 'class="hide-selected"' : ''}
          >
          ${$(option).text()}
        </li>`;
  });

  let labelHtml = placeholderObj.length ? placeholderObj[0].outerHTML : '';

  const customSelectBox = $(
    `<div class='custom-select ${dataClass}' >
        ${placeholderObj ? labelHtml : ''}
        <span>${dataText}</span>
        <ul class='ln'>${selectOptions}</ul>
        <i></i>
      </div> `
  );

  select.before(customSelectBox).hide();
});

$('body').on('click', function (evt) {
  const target = $(evt.target);
  if (!target.closest('.custom-select').length) {
    $('.custom-select').removeClass('active');
  }
});


$(document).on('click', '.custom-select', function (e) {
  e.preventDefault();
  const currentSelect = $(this);
  $('.custom-select').not(currentSelect).removeClass('active');
  currentSelect.toggleClass('active');
});


$(document).on('click', '.custom-select li', function () {
  const li = $(this);
  const index = li.data('index');
  const parent = li.closest('.custom-select');
  const select = parent.next('.style-select');

  parent.find('label').addClass('active')
  select.find('option').eq(index).prop('selected', true);
  parent.find('span').text(li.text());



  parent.find('li').removeClass('hide-selected');
  li.addClass('hide-selected');
});


// custom-select

$('.close-js').on('click', function () {
    $('body').removeClass('open-popup')
    $(this).parents('.element-show').removeClass('show');
});
$('.popup-overlay-js').on('click', function (e) {
    $('body').removeClass('open-popup')
    $(this).parents('.element-show').removeClass('show');
});

$(document).on('keyup', (evt) => {
    if (evt.keyCode === 27) {
        $('body').removeClass('open-popup')
        $('.element-show').removeClass('show');
    }
});

$('body').on('click', '.element-btn', function (e) {
    e.preventDefault();
    $('body').addClass('open-popup')
    $('.order-popup-part').removeClass('show')
    $('.element-show').removeClass('show');
    $('.extra-order-img-yachts').removeClass('show')
    let activeIndex = $(this).attr('data-element');

    let text;
    let img;
    if (activeIndex == 6) {
        if ($(this).parents('.offer-item').length) {
            text = $(this).parents('.offer-item').find('h3').text();
        } else if ($(this).parents('.market-info').length) {
            console.log('in');
            text = $(this).parents('.market-info ').find('h1').text();
        }
        $('.kp-form h2 span').text(text);
        $('.kp-form').find('[name="your-prod"]').val(text.trim());
    }

    if (activeIndex == 50) {
        $('.extra-order-img-yachts').addClass('show')
        if ($(this).hasClass('element-btn-yachts')) {
            console.log('element-btn-yachts')

            text = $(this).parents('.yachts-item').find('h3 a').text();
            img = $(this).parents('.yachts-item').find('.yachts-img img').attr('src');

        } else {

            text = $(this).parents('.content').find('h1').text();
            img = $(this).parents('.content').find('.yachts-detail-img img').attr('src');
            console.log(text, img)
        }



        $('.popup-yacht-head-main h3').text(text);
        $('.extra-order-img-yachts img').addClass('show').attr('src', img);
        $('.yachts-input').val(text)
        console.log('b', img)
        // $('.kp-form').find('[name="your-prod"]').val(text.trim());
    }



    $('[data-element="' + activeIndex + '"].element-show').addClass('show');


});

$('.reviews-stars').on('click','i',function(){
  console.log('cl',$(this).index());
  $(this).parent().addClass('selected');
  $('.reviews-stars i').removeClass('active');
  let numRating = ($(this).index()+1);
  $(this).addClass('active');
  $('.com_block_star #rating-'+numRating).addClass('choise').prop('checked', true);
}); 
$('.password-field').on('click','i',changeStatePass);
let visibility = true;
function changeStatePass(){

  console.log(visibility);

  let thisEl = $(this);

  let changePass = (el,type,bool) => {
    $('.password-field').find('input').attr('type',type);
    el.attr('data-visibility', bool);
    visibility = !visibility;
  }

  visibility ? changePass(thisEl,'text', visibility) : changePass(thisEl,'password', visibility)

}


let phoneObj = '';
function phone_mask() {
	$.mask.definitions['9'] = '';
	$.mask.definitions['d'] = '[0-9]';

	// $('.phone').mask('+7 ddd ddd-dd-dd');
	$('.phone').mask('+971 ddd ddd-ddd');
	$('.phone').intlTelInput({
		autoHideDialCode: false,
		autoPlaceholder: 'aggressive',
		placeholderNumberType: 'MOBILE',
		preferredCountries: ['ae', 'ru'],
		separateDialCode: true,
		utilsScript: '/wp-content/themes/pandadev/frontend/js/sourse/other-js/phone/utils.js',
		// utilsScript:'../js/sourse/other-js/phone/utils.js',
		customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
			// console.log('selectedCountryData.dialCode 1', selectedCountryData, selectedCountryData)
			phoneObj = selectedCountryData;
			return '+' + selectedCountryData.dialCode + ' ' + selectedCountryPlaceholder.replace(/[0-9]/g, '_');
		},
		//allowDropdown:false,
		//dropdownContainer:document.body,
		//excludeCountries:['us'],
		//formatOnDisplay:false,
		// geoIpLookup:function(callback,){
		// 	$.get('http://ipinfo.io',function(){},'jsonp').always(function(resp){
		// 		var countryCode =(resp&&resp.country)?resp.country:'';

		// 		callback(countryCode);
		// 		// console.log('selectedCountryData 2', selectedCountryData, selectedCountryPlaceholder)

		// 	});
		// },
		//hiddenInput:'full_number',
		//initialCountry:'auto',
		//localizedCountries:{'de':'Deutschland'},
		//nationalMode:false,
		//onlyCountries:['us','gb','ch','ca','do'],
	});

	let textPhone = $('header').data('lang') === 'ru' ? 'Ваш телефон*' : 'Your phone*';

	$('.phone').after('<label class="label-animate" >' + textPhone + '</label>');
	$('.phone').next().on('click', function () {
		$(this).prev().focus();
	});
	// $('.phone-null').after('<label class="label-animate" for="phone-flag-null">' + textPhone + '</label>');
	// $('.phone-main').after('<label class="label-animate" for="phone-flag">' + textPhone + '</label>');
	// $('.phone-second').after('<label class="label-animate" for="phone-second">' + textPhone + '</label>');
	// $('.phone-three').after('<label class="label-animate" for="phone-three">' + textPhone + '</label>');
	// $('.phone-four').after('<label class="label-animate" for="phone-four">' + textPhone + '</label>');
	// $('.phone-five').after('<label class="label-animate" for="phone-five">' + textPhone + '</label>');

	// $('.phone-six').after('<label class="label-animate" for="phone-six">' + textPhone + '</label>');

	// $('.phone-null-en').after('<label class="label-animate" for="phone-flag-null">' + textPhoneEn + '</label>');
	// $('.phone-main-en').after('<label class="label-animate" for="phone-flag">' + textPhoneEn + '</label>');
	// $('.phone-second-en').after('<label class="label-animate" for="phone-second">' + textPhoneEn + '</label>');
	// $('.phone-three-en').after('<label class="label-animate" for="phone-three">' + textPhoneEn + '</label>');
	// $('.phone-four-en').after('<label class="label-animate" for="phone-four">' + textPhoneEn + '</label>');
	// $('.phone-five-en').after('<label class="label-animate" for="phone-five-en">' + textPhoneEn + '</label>');

	// $('.phone-six-en').after('<label class="label-animate" for="phone-six-en">' + textPhoneEn + '</label>');


	$('.phone').on('close:countrydropdown', function (e, countryData) {
		console.log('countryData', phoneObj.dialCode)
		$(this).val('');
		if (phoneObj.dialCode == 7) {
			$('input.phone').mask('+7 ddd ddd-dd-dd');
		} else {
			$(this).mask($(this).attr('placeholder').replace(/[_]/g, 'd'));
		}

	});
}

phone_mask();




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


//
// $('h1').on('click',function(){
//   localStorage.clear();
// });
// console.log(localStorage.getItem('likedId'));
let getCount = localStorage.getItem('likedId') ? localStorage.getItem('likedId') : [];
if (getCount.length > 0) {
  getCount = getCount.split(',');
  getCount = getCount.map(Number);
};


// console.log(getCount)
let yachtsItemTileTemplate = ({
  id,
  title,
  link,
  yachts_price,
  god_refit,
  naznachenie,
  yachts_harakteristiki,
  yachts_galereya,
  lang,
  refit_text
}, isFavorites) => {
  // console.log('l', yachts_harakteristiki)
  return (`
  <div class="col-4 col-lg-6 col-sm-6 col-xs-12 yachts-item-wrapper">
    <div class="yachts-item">
      <div class="yachts-item-img">
      ${yachts_galereya ? (
      `<div class="yachts-item-img-owl owl-carousel">
        ${yachts_galereya.map((item, index) => {
        if (index < 3) {
          return (`<div class="yachts-img img-cover"><img src="${item.full_image_url}" alt=""></div>`)
        }
      }).join('')}
        </div>`
    ) : ''}
        
        <div class="yachts-logo"> <span>${refit_text}</span></div>
        <div class="yachts-like-js yachts-item-liked ${getCount && getCount.includes(id) && 'active'}" data-id="${id}"> </div>
        
      </div>
      <div class="yachts-item-info"> 
        <h3><a href="${link}">${title}</a></h3>
        <ul class="ln yachts-item-description">
          ${(naznachenie) && (
      `<li>
            <b>${lang === 'ru' ? 'Назначение' : 'Purpose'}:</b>
            <div>${naznachenie}</div>
          </li>`
    )}
          
          <li>
            <b>${lang === 'ru' ? 'Вервь' : 'Rope'}:</b>
            <div>${yachts_harakteristiki.yachts_char_element_1}</div>
          </li>
        </ul>
        <div class="yachts-item-price">${yachts_price} AED/${lang === 'ru' ? 'час' : 'hour'}</div>
        <div class="yachts-item-adv">
          <div class="yachts-adv-icons"> 
            <div class="yachts-adv-icon yachts-adv-icon-1"></div>
            <span>

            ${lang === 'ru' ?
      `
              ${yachts_harakteristiki.yachts_char_element_32} м
              <br> (${yachts_harakteristiki.yachts_char_element_3}ft)
              `
      :
      `
              ${yachts_harakteristiki.yachts_char_element_3} ft 
              <br> (${yachts_harakteristiki.yachts_char_element_32} m)
              `
    }
              
            </span>
          </div>
          <div class="yachts-adv-icons"> 
            <div class="yachts-adv-icon yachts-adv-icon-2"></div>
            <span>
              ${yachts_harakteristiki.yachts_char_element_5} <br/>
              ${lang === 'ru' ? 'гостей' : 'guests'}
            </span>
          </div>
          <div class="yachts-adv-icons"> 
            <div class="yachts-adv-icon yachts-adv-icon-3"></div>
              <span>
                ${yachts_harakteristiki.yachts_char_element_8} <br/>
                ${lang === 'ru' ? 'человека' : 'crew members'}
              </span>
          </div>
          <div class="yachts-adv-icons"> 
            <div class="yachts-adv-icon yachts-adv-icon-4"></div>
            <span>
              ${yachts_harakteristiki.yachts_char_element_6}<br/>
              ${lang === 'ru' ? 'каюты' : 'cabins'}
            </span>
          </div>
        </div>
        <div class="btn-yachts-container">
          <a class="btn btn--blue element-btn element-btn-yachts" data-element="50" href="#">${lang === 'ru' ? 'Забронировать' : 'Book'}</a>
          <a class="btn btn--blue-border" href="${link}">${lang === 'ru' ? 'Подробнее' : 'More'}</a>
        </div>
      </div>
    </div>
  </div>
`)
};

let yachtsItemListTemplate = ({
  id,
  title,
  link,
  yachts_price,
  god_postrojki,
  naznachenie,
  yachts_harakteristiki,
  yachts_galereya,
  lang
}, isFavorites) => {
  return (
    `
    <div class="yachts-item-grid yachts-item-wrapper">
    <div class="col-3">
      <div class="yachts-item-img">
        ${yachts_galereya && (
      `<div class="yachts-item-img-owl owl-carousel">
          ${yachts_galereya.map((item, index) => {
        if (index < 3) {
          return (`<div class="yachts-img img-cover"><img src="${item.full_image_url}" alt=""></div>`)
        }
      }).join('')}
          </div>`
    )}
        <div class="yachts-logo"> <span>Full refit ${god_postrojki}</span></div>
        <div class="yachts-like-js yachts-item-liked ${getCount && getCount.includes(id) && 'active'}" data-id="${id}"> </div>
      </div>
    </div>
    <div class="col-6">
      <div class="yachts-item-info"> 
        ${isFavorites ? (`<div class="delete-btn" data-id="${id}"></div>`) : ''}
        <h3><a href="${link}">${title}</a></h3>
        <div class="yachts-item-middle">
          <ul class="ln yachts-item-description">

          <li><b>${lang === 'ru' ? 'Вервь' : 'Rope'}:</b>
            <div>${yachts_harakteristiki.yachts_char_element_1}</div>
          </li>
          </ul>
          <div class="yachts-item-middle-delimetr"></div>
          <div class="yachts-item-adv">
            <div class="yachts-adv-icons"> 
              <div class="yachts-adv-icon yachts-adv-icon-1"></div>
              <span>
                ${yachts_harakteristiki.yachts_char_element_4} м. <br/>
                (${yachts_harakteristiki.yachts_char_element_3} ft.)
              </span>
            </div>
            <div class="yachts-adv-icons"> 
              <div class="yachts-adv-icon yachts-adv-icon-2"></div>
              <span>
                ${yachts_harakteristiki.yachts_char_element_5} <br/>
                ${lang === 'ru' ? 'гостей' : 'guests'}
              </span>
            </div>
            <div class="yachts-adv-icons"> 
              <div class="yachts-adv-icon yachts-adv-icon-3"></div>
                <span>
                  ${yachts_harakteristiki.yachts_char_element_8} <br/>
                  ${lang === 'ru' ? 'человека' : 'crew members'}
                </span>
            </div>
            <div class="yachts-adv-icons"> 
              <div class="yachts-adv-icon yachts-adv-icon-4"></div>
              <span>
                ${yachts_harakteristiki.yachts_char_element_6}<br/>
                ${lang === 'ru' ? 'каюты' : 'cabins'}
              </span>
            </div>
          </div>
        </div>
        <div class="yachts-item-bottom">
          <div class="yachts-item-price">${yachts_price} AED/час</div>
          <div class="btn-yachts-container">
            <a class="btn btn--blue element-btn element-btn-yachts" data-element="50" href="#">${lang === 'ru' ? 'Забронировать' : 'Book'}</a>
            <a class="btn btn--blue-border" href="${link}">${lang === 'ru' ? 'Подробнее' : 'More'}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `)
}


let spinner = $(`
  <div class="col-12 spinner-container">
    <div class="spinner">
      <span class="spinner-inner-1"></span>
      <span class="spinner-inner-2"></span>
      <span class="spinner-inner-3"></span>
    </div>
  </div>
`);
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


let fullUrl = window.location.href.split('?')[0];
let paramUrl = window.location.href.split('?')[1];

let countUpload = 0;
let sizeUpload = 50;
let allPostSize = 0;

const catalogYachts = $('.catalog-yachts');
let pageLang = $('.lang-yachts').data('lang');
let yachtsCategory = $('.catalog-filter').find('.btn.active').data('href');
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
    catalogYachts.append(yachtsItemListTemplate(item));
    catalogYachts.removeClass('catalog-grid');
  } else {
    catalogYachts.append(yachtsItemTileTemplate(item));
    catalogYachts.addClass('catalog-grid');
  }

  extraInit();

};

const ajaxUpload = () => {

  let paramUrl = window.location.href.split('?')[1];

  catalogYachts.empty();
  catalogYachts.append(spinner);

  console.log('ajax')

  $.ajax({
    type: "GET",
    url: "/wp-json/search/yachts?" + paramUrl,
    data: {
      'countUpload': countUpload,
      'sizeUpload': sizeUpload,
      'lang': pageLang,
      'yachtsCategory': yachtsCategory,
    },
    success: function (result) {
      spinner.remove();

      if (result.length > 0) {
        const yachtElements = result.map(item => appendYachts(item, typelist));
        catalogYachts.append(yachtElements);

      } else {
        catalogYachts.append('<div class="empty-list col-12">' + emptyText + '</div>')
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



let idLikeArr = localStorage.getItem('likedId') ? JSON.parse(localStorage.getItem('likedId')) : [];



const headLikeBtn = $('header .liked-btn');

const btnLikeSpan = headLikeBtn.find('span');
const catalogTotalInfo = $('.catalog-total-ifno span');
const mainFavBox = $('.catalog-favorites');
const thisLink = headLikeBtn.attr('href');
const showHideCountLike = (idLikeArrParam) => {

  const countLike = idLikeArrParam.length;

  if (countLike > 0) {
    headLikeBtn.addClass('added');

    headLikeBtn.attr('href', thisLink + '?ids=' + idLikeArrParam);

  } else {
    headLikeBtn.removeClass('added');
    headLikeBtn.attr('href', thisLink);
  }
  btnLikeSpan.html(countLike);
  catalogTotalInfo.html(countLike);

}


showHideCountLike(idLikeArr);



if (idLikeArr && !paramUrl && mainFavBox.length > 0) {


  let finalUrl = fullUrl + '?ids=' + idLikeArr;
  window.location.href = finalUrl;
}

const addLike = (thisEl) => {
  let idLiked = thisEl.data('id');

  if (thisEl.hasClass('active')) {
    thisEl.removeClass('active');
    idLikeArr = idLikeArr.filter(item => item !== idLiked);
  } else {
    thisEl.addClass('active');
    idLikeArr = [...idLikeArr, idLiked];
  };


  localStorage.setItem('likedId', JSON.stringify(idLikeArr));

  console.log('idLikeArr', idLikeArr)

  showHideCountLike(idLikeArr);
}

$('body').on('click', '.yachts-like-js', function (e) {
  e.preventDefault();
  addLike($(this));
});



$('.delete-btn').on('click', function (e) {
  e.preventDefault();
  let idLiked = $(this).data('id');

  let typeList = $('.listing-btn.active').data('type')
  let sorting = $('.style-select option:selected').attr('value');

  console.log('sorting 2', sorting)

  idLikeArr = idLikeArr.filter(item => item !== idLiked);

  showHideCountLike(idLikeArr);

  localStorage.setItem('likedId', JSON.stringify(idLikeArr));

  let finalUrl = fullUrl + '?ids=' + idLikeArr + '&typelist=' + typeList + '&sort=' + sorting;

  window.location.href = finalUrl;
});



setTimeout(() => {

  $('.yachts-like-js').each(function () {

    let thisId = $(this).data('id');

    idLikeArr.forEach(item => {
      if (item === thisId) {
        $(this).addClass('active');
      };
    });

  });
}, 1500);

$('.select-order-ajax-favorites').on('click', 'li', function () {

  let sort = $(this).data('value');

  let newUrl = $(this).parents('.catalog-sorting-container').data('value');
  window.location.href = newUrl + '&sort=' + sort;

});




$('.empty-favorites, .language-select a').on('click', function (e) {
  localStorage.clear();
});

const yachtsItemPopup = ({
  title,
  yachts_harakteristiki,
  yachts_galereya,
}) => {
  return (`
  <div class="yachts-select-popup-item">
    <div class="yachts-select-img ${yachts_galereya ? 'img-cover' : ''}">
      ${yachts_galereya ? `<img src="${yachts_galereya[0].full_image_url}" alt="">` : ``}
    </div>
    <div class="yachts-select-info">
      <h3>${title}</h3>
      <div class="yachts-select-char-box">
        <div class="yachts-select-char">
          <div class="char-popup-ico char-popup-ico-1"></div>
          <span>${yachts_harakteristiki.yachts_char_element_5}м.</span>
        </div>
      <div class="yachts-select-char">
        <div class="char-popup-ico char-popup-ico-2"></div>
        <span>${yachts_harakteristiki.yachts_char_element_7} гостей</span>
      </div>
      <div class="yachts-select-char">
        <div class="char-popup-ico char-popup-ico-3"></div>
        <span>${yachts_harakteristiki.yachts_char_element_8} каюты</span>
      </div>
      <div class="yachts-select-char">
        <div class="char-popup-ico char-popup-ico-4"></div>
        <span>${yachts_harakteristiki.yachts_char_element_10} человека</span>
        </div>
      </div>
    </div>
    <div class="yachts-select-arr"></div>
  </div>
  `)
};

const appendYachtsPopup = (item) => {

  $('.yachts-select-popup').append(yachtsItemPopup(item));

  $('.img-cover').each(function () {
    let imgSrc = $(this).find('img').attr('src');
    $(this).css('background-image', 'url(' + imgSrc + ')');
  });

};

const ajaxUploadYachtsLite = () => {
  $.ajax({
    type: "GET",
    url: "/wp-json/search/yachts?lang=ru&sizeUpload=-1",
    success: function (result) {
      console.log('result', result);
      $('.yachts-select-popup').empty();

      if (result.length > 0) {
        result.map((item) => {
          appendYachtsPopup(item);
        });
      };

    }
  });
};
if ($('.yachts-select-popup').length > 0) {
  ajaxUploadYachtsLite();

}

$('.yachts-select-input').on('click', function () {
  $('.yachts-select-popup').addClass('active');

});

$('.yachts-select-popup').on('click', '.yachts-select-popup-item', function () {
  let yachtsName = $(this).find('h3').text();
  $('.yachts-select-input').addClass('input-empty');
  $('.yachts-select-input').val(yachtsName);
  $('.yachts-select-popup').removeClass('active');
});

$('body').on('click', function (evt) {
  if (!$(evt.target).is('.yachts-select-input, .yachts-select-popup  *')) {
    $('.yachts-select-popup').removeClass('active');
  }
});
let blogItemTileTemplate = ({
  img,
  title,
  link,
  text,
  date,
  lang
}) => {
  // console.log('l', yachts_harakteristiki)
  return (`
  <div class="col-4 col-sm-6 col-xs-12">
    <div class="blog-item">
      <a class="blog-item-img " href="${link}">
        <div class="img-cover" >
          <img src="${img}" alt="">
        </div>
      </a>
    <div class="blog-item-info">
      <div class="blog-item-date">
      ${date}
      </div>
      <h3>
        <a href="${link}">
        ${title}
        </a>
      </h3>
      <div class="blog-item-text">
      ${text}
     </div>
      <div class="btn-container">
        <a class="btn btn--blue-border" href="${link}">
        ${lang === 'ru' ? 'Прочитать' : 'Read'}      
        </a>
      </div>
    </div>
    </div>    
  </div>
`)
};
// console.log('blog-tags');

let countBlogUpload = 1;
let sizeUploadBlog = 12;

$('.blog-tags').on('click','a',function(e){
  e.preventDefault();

  $('.blog-tags a').removeClass('active');
  $(this).addClass('active');

  let thisCat = $(this).data('href');
  $('.blog-grid').empty();
  countBlogUpload = 1;
  ajaxBlogUpload(thisCat);
}); 



const ajaxBlogUpload = (category)=>{
 
 
  

  $('.blog-grid').append(spinner);

  const appendBlog = (item)=>{


    $('.blog-grid').append(blogItemTileTemplate(item));
    // $(containerAppend).removeClass('catalog-grid');

    $('.img-cover').each(function(){
      let imgSrc = $(this).find('img').attr('src');
      //console.log(imgSrc);
      
      $(this).css('background-image', 'url('+imgSrc+')');
    });
  };
  let allBlogSize;
  $.ajax({
    type: "GET",
    url: "/wp-json/search/blog",
    data: {
      // ...formObj,
      'lang': $('.blog-grid').data('lang'),
      'countUpload': countBlogUpload,
      'sizeUpload': sizeUploadBlog,
      'blogCategory': category
    },
    success: function(result){
      
      spinner.remove();
      // console.log('retur',result);
      if(result.length > 0){
        result.map((item)=>{
          // console.log('item',item)
          appendBlog(item);
        });
        allBlogSize = result[0].sizePosts;
        // console.log('allPostSize', allBlogSize)
        if (allBlogSize <= (sizeUploadBlog * countBlogUpload)){
          $('.btn-more-ajax').hide();
        }else{
          // console.log('show btn')
          $('.btn-more-ajax').show();
        }
      }else{
        $('.btn-more-ajax').hide();
        $('.blog-grid').append('<div class="empty-list col-12">Список пуст</div>')
      }


      countBlogUpload++;
    }
  });

};
if(  $('.blog-grid').length > 0){
  ajaxBlogUpload();
}



$('.btn-more-ajax-blog').on('click',function(e){
  e.preventDefault();
  
  // $('.search-yachts-form').submit()
  // console.log('serialize', formObj)

  ajaxBlogUpload();
});
});