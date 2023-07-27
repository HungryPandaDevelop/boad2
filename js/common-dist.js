 



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

let owlTeam = $('.owl-team');

owlTeam.owlCarousel({
  items: 1,
  nav: true,
  dots: true,
  responsive:{
    0:{
      dots: false,
    },
    991:{
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
  responsive:{
    0:{
      items: 2,
      margin: 8,
      nav: true,
      stagePadding: 30,
      loop: true
    },
    577:{
      items: 3,
      margin: 15,
      nav: true,
      stagePadding: 50,
      loop: true
    },
    991:{
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
});

let owlSecond = $('.owl-second');

owlSecond.owlCarousel({
  
  margin: 30,
  responsive:{
    0:{
      items:1,
      margin: 15,
      nav: true,
      dots: false,
    },
    577:{
      items: 2,
      margin: 15,
      nav: true,
      dots: true,
    },
    991:{
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
  responsive:{
    0:{
      items:1,
      margin: 15
    },
    576:{
      items: 2,
      margin: 15
    },
    786:{
      items: 3,
      margin: 15
    },
    992:{
      items: 4,
      margin: 15
    },
    1920:{
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
  responsive:{
    0:{
      items: 1,
      margin: 15,
      dots: false,
    },
    786:{
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



if($(window).width() < 576){
  let owlMobile = $('.owl-mobile');

  owlMobile.owlCarousel({
    dots: false,
    nav: true,
    items:1,
    margin: 15
  });
}

let owlPartners = $('.owl-partners');

owlPartners.owlCarousel({
  dots:  false,
  // autoplay: true,
  // autoplayTimeout: 1001,
  // smartSpeed: 500,
  loop: true,
  responsive:{
    0:{
      items:2
    },
    567:{
      items: 4,
    },
    992:{
      items: 5,
    }
}
});

$('.input-date').each(function(){
  let thisEl = $(this);
  let dp = new AirDatepicker(this,{
    timepicker: true,
    timeFormat: 'hh:mm AA',
    onSelect({date}) {
      thisEl.addClass('input-empty');
      console.log('done', date) 
    }
  },
  );
})


// ------------------
if($('.group2').length > 0){
  $(".group2").colorbox({rel:'group2', transition:"fade"});
}

function toInput (date) {
  console.log(date)
  console.log(date.from)
  console.log(date.to)
  
  $(date.input).parents('.range-slider-box').find('.from').val(date.from)
  $(date.input).parents('.range-slider-box').find('.to').val(date.to)
}

$(".range-slider").each(function(){
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
})
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
$('.wpcf7-form-control-wrap').each(function(){
  let sizeVal = $(this).find('.wpcf7-form-control').attr('id');
  $(this).addClass(sizeVal);
});


document.addEventListener( 'wpcf7mailsent', function( event ) {
  console.log('mail sent OK');
  // Stuff
  setTimeout(function(){
    $('.element-show').removeClass('show');
    $('.wpcf7-form').addClass('init');
  },1500);
  
}, false ); 

// document.addEventListener( 'wpcf7invalid', function( event ) {
  
//   // Stuff
//   setTimeout(function(){
//     $('.wpcf7-form').addClass('init');
//   },1500);
  
// }, false ); 
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
  let firstElOption = $(this).find('option:selected').text();
  let dataText = $(this).data('text');
  let dataClass = $(this).data('class');
  $(this).find('option').each(function(index){
    $(this).attr('data-index',index);
  });
  if(dataText){
      firstElOption = dataText;
  }


  let styleSelectBoxElement = 
    $(`<div class='custom-select ${dataClass}'>
        <span>${firstElOption}</span>
        <ul class='ln'></ul>
        <i></i>
      </div>
    `);

  $(this).before(styleSelectBoxElement).hide();

  $(this).find('option').each(function (index) {
      var optionText = $(this).text();
      $(this).parent().prev().find('ul').append('<li data-index="'+index+'" data-value="'+$(this).val()+'">' + optionText + '</li>');
  });
});

$(".custom-select").on('click', function (e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
      $(this).removeClass('active');
  } else {
      $('.custom-select').removeClass('active');
      $(this).addClass('active');
  }
});

$('body').on('click', function (evt) {
  if (!$(evt.target).is('.custom-select, .custom-select > *')) {
      $('.custom-select').removeClass('active');
  }
});

let tempSelectVal;
$('.custom-select').on('click', 'li', function () {
  let liIndex = $(this).data('index');
  let parentsEl = $(this).parents('.custom-select');

  // if(!tempSelectVal){   
  //   tempSelectVal = $(this).remove();
  // }else{
  //   $(this).after(tempSelectVal);
  //   tempSelectVal = $(this).remove();
  // }
  
  parentsEl.next().find('option[data-index="'+liIndex+'"]').prop('selected', true);

  parentsEl.find('span').text($(this).text());
});
// custom-select

$('.close-js').on('click', function () {
    $(this).parents('.element-show').removeClass('show');
});
$('.popup-overlay-js').on('click',function(e){
    $(this).parents('.element-show').removeClass('show');
});

$(document).on('keyup', (evt) => {
    if (evt.keyCode === 27) {
        $('.element-show').removeClass('show');
    }
});

$('body').on('click','.element-btn', function (e) {
    e.preventDefault();
    
    $('.element-show').removeClass('show');
    let activeIndex = $(this).attr('data-element');
  
    let text;
    if(activeIndex == 6){
        if($(this).parents('.offer-item').length){
            text = $(this).parents('.offer-item').find('h3').text();
        }else if($(this).parents('.market-info').length){
            console.log('in');
            text = $(this).parents('.market-info ').find('h1').text();
        }       
        $('.kp-form h2 span').text(text);
        $('.kp-form').find('[name="your-prod"]').val(text.trim());
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
function phone_mask(){
	$.mask.definitions['9']='';
	$.mask.definitions['d']='[0-9]';
  
	// $('.phone').mask('+7 ddd ddd-dd-dd');
	$('.phone').mask('+971 ddd ddd-dddd');
	$('.phone').intlTelInput({
		autoHideDialCode:false,
		autoPlaceholder:'aggressive',
		placeholderNumberType:'MOBILE',
		preferredCountries:['ae','ru'],
		separateDialCode:true,
		utilsScript:'/wp-content/themes/pandadev/frontend/js/sourse/other-js/phone/utils.js',
		// utilsScript:'../js/sourse/other-js/phone/utils.js',
		customPlaceholder:function(selectedCountryPlaceholder,selectedCountryData){
			// console.log('selectedCountryData.dialCode 1', selectedCountryData, selectedCountryData)
			phoneObj = selectedCountryData;
			return '+'+selectedCountryData.dialCode+' '+selectedCountryPlaceholder.replace(/[0-9]/g,'_');
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

	let textPhone = 'Ваш телефон';
	let textPhoneEn = 'Your phone';
  $('.phone-null').after('<label class="label-animate" for="phone-flag-null">'+textPhone+'</label>');
  $('.phone-main').after('<label class="label-animate" for="phone-flag">'+textPhone+'</label>');
  $('.phone-second').after('<label class="label-animate" for="phone-second">'+textPhone+'</label>');
  $('.phone-three').after('<label class="label-animate" for="phone-three">'+textPhone+'</label>');
  $('.phone-four').after('<label class="label-animate" for="phone-four">'+textPhone+'</label>');
  $('.phone-five').after('<label class="label-animate" for="phone-five">'+textPhone+'</label>');

  $('.phone-null-en').after('<label class="label-animate" for="phone-flag-null">'+textPhoneEn+'</label>');
  $('.phone-main-en').after('<label class="label-animate" for="phone-flag">'+textPhoneEn+'</label>');
  $('.phone-second-en').after('<label class="label-animate" for="phone-second">'+textPhoneEn+'</label>');
  $('.phone-three-en').after('<label class="label-animate" for="phone-three">'+textPhoneEn+'</label>');
  $('.phone-four-en').after('<label class="label-animate" for="phone-four">'+textPhoneEn+'</label>');
  $('.phone-five-en').after('<label class="label-animate" for="phone-five">'+textPhoneEn+'</label>');


	$('.phone').on('close:countrydropdown',function(e,countryData){
		console.log('countryData', phoneObj.dialCode)
		$(this).val('');
		if(phoneObj.dialCode == 7){ 
			$('input.phone').mask('+7 ddd ddd-dd-dd'); 
		}else{
			$(this).mask($(this).attr('placeholder').replace(/[_]/g,'d'));
		}
		
	});
}

phone_mask();





$('.range').on('change input', function (e) {
  console.log('change',e)
  setRangeNum('.range-slider-container', '.range-num', $(this));

});

let minGap = 0;



function setRangeNum(wrap, num, thisEl, pos){
  let rangeMin = thisEl.attr('max') - thisEl.attr('min');
  
  let offsetLeftRange = (100/(rangeMin))*(thisEl.val() - thisEl.attr('min'));
  
  let rangeNum = thisEl.parents(wrap).find(num);

  //console.log(thisEl.val(), rangeNum.attr('data-name')); //rangeNum

  rangeNum.html(thisEl.val());

  // rangeNum.addClass('test');

  rangeNum.css({left: offsetLeftRange+'%',transform: 'translateX(-'+offsetLeftRange+'%)'});
  if(pos === 'left'){
    thisEl.parents(wrap).find('.slider-track-color').css({left: offsetLeftRange+'%'});
    thisEl.parents(wrap).prev().find('.range-input-from').val(thisEl.val());

  }else if(pos === 'right') {
    thisEl.parents(wrap).find('.slider-track-color').css({right: (100 - offsetLeftRange)+'%'});
    thisEl.parents(wrap).prev().find('.range-input-to').val(thisEl.val());
  }
}



$('.range-sliders-container').each(function(){

  let sliderOne = $(this).find('.slider-1');
  let sliderTwo = $(this).find('.slider-2');

  sliderOne.on('change input', function () {
    if(parseInt(sliderTwo.val()) - parseInt(sliderOne.val()) <= minGap){
      sliderOne.val(parseInt(sliderTwo.val()) - minGap);
    }
    setRangeNum('.range-sliders-container', '.range-num-1', $(this), 'left');
  });


  sliderTwo.on('change input', function () {
    if(parseInt(sliderTwo.val()) - parseInt(sliderOne.val()) <= minGap){
      sliderTwo.val(parseInt(sliderOne.val()) + minGap);
    }
  
    setRangeNum('.range-sliders-container', '.range-num-2', $(this), 'right');
  });

  setRangeNum('.range-sliders-container', '.range-num-1', $(this).find('.slider-1'), 'left');
  setRangeNum('.range-sliders-container', '.range-num-2', $(this).find('.slider-2'), 'right');

});

// air-date

var st = 0;
window.addEventListener('scroll', function (e) {

  st = $(this).scrollTop();

  if(st > 0){
    $('header').addClass('stick');
  }
  else{
    $('header').removeClass('stick');
  }

});   



// $('.dropdown-link').on('click',function(e){
//   e.preventDefault();
//   $(this).toggleClass('dropdown-link--active');
//   $('.header-menu-hidden-wrapper').toggleClass('active');
// });

$('.faq-head').on('click',function(){
  $(this).parent().toggleClass('faq-item--active');
});


$('.question-home-tabs span').on('click',function(){
  $('.question-home-tabs span').removeClass('active');
  $(this).addClass('active');

  $('.question-home-item').removeClass('active');
  $('.question-home-item').eq($(this).index()).addClass('active');

  $('.question-hide').removeClass('show');
  $('.question-more').removeClass('hide');
});

$('.question-more').on('click',function(e){
  e.preventDefault();
  $(this).addClass('hide');
  $(this).parent().prev().addClass('show');
});


$('.warning-show').on('click',function(e){
  e.preventDefault();
  $(this).parents('.warning-item').addClass('active');
}); 
$('.warning-close').on('click',function(){
  $(this).parents('.warning-item').removeClass('active');
}); 

$('.sidebar-search-item h3, .sidebar-search-item i').on('click',function(){
  $(this).parents('.sidebar-search-item').toggleClass('active');
});

let detailTabs = $('.detail-tabs');
if(detailTabs.length > 0){
  const onHoverMoveCarriage = function(num){
    let widthCarriage = detailTabs.find('li').eq(num).width();
    let offsestLeftCarriage = detailTabs.find('li').eq(num).position().left;
    $('.detail-tabs-carriage').css({width: widthCarriage+'px', left: offsestLeftCarriage+'px'});
  }
  let timeOutId;
  let curretTabs = 0;
  let timeReturn = 500;

  detailTabs.find('li').hover(
  function(){

    clearInterval(timeOutId)
    onHoverMoveCarriage($(this).index());

  
  },function(){

    timeOutId = setTimeout(function(){
      onHoverMoveCarriage(curretTabs);
    }, timeReturn);
  });

  detailTabs.find('li').on('click',function(){
    
    curretTabs = $(this).index();
    detailTabs.find('li').removeClass('active').eq(curretTabs).addClass('active');
    onHoverMoveCarriage(curretTabs);

    $('.detail-tabs-item').removeClass('active').eq(curretTabs).addClass('active');
  });

  onHoverMoveCarriage(0);

}

$(window).on('load',function(){
  $('.preload').addClass('load');
  setTimeout(function(){
    $('.preload').addClass('hide');
  },2000)
});

/* tabs routes moving */
let offsetTop =  $(window).width() < 992 ? 90 : 160;
$('.tabs-routes').on('click','li',function(){

  let indexLi = $(this).data('point');
 
  console.log(indexLi)
  $("body, html").animate({
    scrollTop: $('.point-'+(indexLi)).offset().top - offsetTop
  }, 500);
});

$('.form-go').on('click',function(e){
  e.preventDefault();
  $("body, html").animate({
    scrollTop: $('.feedback-home').offset().top - offsetTop
  }, 500);
});

$('.go-tour-form').on('click',function(e){
  e.preventDefault();
  $("body, html").animate({
    scrollTop: $('.feedback-origin').offset().top - offsetTop
  }, 500);
});
/* tabs routes moving */


/* animate label all form */
$('.input-box').each(function(){
  $(this).find('input, textarea').on('keyup', function(){
    let lengthInput = $(this).val().length;
    if(lengthInput > 0){
      $(this).addClass('input-empty');
    }
    else{
      $(this).removeClass('input-empty');
    }
  })
  
});
/* animate label all form */

// video play rew

$('.video-play').on('click',function(){
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
if($('.serv-name-input').length>0){
  $('.serv-name-input').val($('.services-main h1').text().trim());
};
/*servises yachts add title to input*/
$('.hamburger-btn').on('click',function(){
  $(this).toggleClass('active');
  $('.menu-hamburger').toggleClass('show');
});

$('.popup-nav .menu-item-has-children > a').on('click',function(e){
    e.preventDefault();
    console.log('testing')
    if( $(this).parent().hasClass('active')){
      $('.popup-nav li').removeClass('active');
      $(this).parent().removeClass('active');
    }else{
      $('.popup-nav li').removeClass('active');
      $(this).parent().addClass('active');
    }
    

});
$('.back-link').on('click',function(e){
  e.preventDefault();
  if($(this).hasClass('back-link')){
    $('.popup-nav li').removeClass('active');
    $(this).parent().removeClass('active');
  }
});

/*servises yachts add title to input popup*/
// $('.element-btn-serv').on('click',function(){
//   let title = $(this).parents('.yachts-item-second').find('h3').text().trim();
//   $('.large-popup .serv-name-input').val(title);
// });

$('body').on('click', '.element-btn-yachts',function(){
  let title = $(this).parents('.yachts-item').find('h3').text().trim();

  $('.large-popup .yachts-name-input').val(title);
  $('.large-popup h3 span').text(title);
});
$('.element-btn-yachts-second').on('click', function(){
  let title = $(this).parents('.yachts-item-second').find('h3').text().trim();

  $('.large-popup .yachts-name-input').val(title);
  $('.large-popup h3 span').text(title);
});


/*servises yachts add title to input popup*/

$('.sidebar-btn').on('click',function(){
  $('.catalog-sidebar-container').addClass('active');
});
$('.close-sidebar-search, .apply-filters').on('click',function(){
  $('.catalog-sidebar-container').removeClass('active');
});
$('.sort-btn').on('click',function(){
  $('.catalog-sort-mobile').addClass('active');
});
$('.close-sort-mobile').on('click',function(){
  $('.catalog-sort-mobile').removeClass('active');
});
$('.order-select-box').on('click',function(){
  $('.catalog-sort-mobile').removeClass('active');
});
//
// $('h1').on('click',function(){
//   localStorage.clear();
// });
// console.log(localStorage.getItem('likedId'));
let getCount = localStorage.getItem('likedId') ? localStorage.getItem('likedId') : [] ;
if(getCount.length > 0){
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
},isFavorites) => {
  // console.log('l', yachts_harakteristiki)
  return (`
  <div class="col-4 col-lg-6 col-sm-6 col-xs-12 yachts-item-wrapper">
    <div class="yachts-item">
      <div class="yachts-item-img">
      ${yachts_galereya ? (
        `<div class="yachts-item-img-owl owl-carousel">
        ${yachts_galereya.map((item, index)=>{
          if(index<3){
            return(`<div class="yachts-img img-cover"><img src="${item.full_image_url}" alt=""></div>`)
          }
        }).join('')}
        </div>`
      ): ''}
        
        <div class="yachts-logo"> <span>${refit_text}</span></div>
        ${!isFavorites ? (`<div class="yachts-item-liked ${getCount && getCount.includes(id) && 'active'}" data-id="${id}"> </div>`) : (`<div class="delete-btn" data-id="${id}"></div>`)}
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
              ${yachts_harakteristiki.yachts_char_element_32} м.
              <br> (${yachts_harakteristiki.yachts_char_element_3}ft.)
              `
              :
              `
              ${yachts_harakteristiki.yachts_char_element_3}  / ft. 
              <br> (${yachts_harakteristiki.yachts_char_element_32} m.)
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
          <a class="btn btn--blue element-btn element-btn-yachts" data-element="3" href="#">${lang === 'ru' ? 'Забронировать' : 'Book'}</a>
          <a class="btn btn--blue-border" href="${link}">${lang === 'ru' ? 'Подробнее' : 'More'}</a>
        </div>
      </div>
    </div>
  </div>
`)
};

let yachtsItemListTemplate =({
  id,
  title,
  link,
  yachts_price,
  god_postrojki,
  naznachenie,
  yachts_harakteristiki,
  yachts_galereya,
  lang
}, isFavorites)=>{
  return(
    `
    <div class="yachts-item-grid yachts-item-wrapper">
    <div class="col-3">
      <div class="yachts-item-img">
        ${yachts_galereya && (
          `<div class="yachts-item-img-owl owl-carousel">
          ${yachts_galereya.map((item, index)=>{
            if(index<3){
              return(`<div class="yachts-img img-cover"><img src="${item.full_image_url}" alt=""></div>`)
            }
          }).join('')}
          </div>`
        )}
        <div class="yachts-logo"> <span>Full refit ${god_postrojki}</span></div>
        ${!isFavorites && (`<div class="yachts-item-liked ${getCount && getCount.includes(id) && 'active'}" data-id="${id}"> </div>`)}
      </div>
    </div>
    <div class="col-6">
      <div class="yachts-item-info"> 
        ${isFavorites ? (`<div class="delete-btn" data-id="${id}"></div>`) : ''}
        <h3><a href="${link}">${title}</a></h3>
        <div class="yachts-item-middle">
          <ul class="ln yachts-item-description">
          <li>
            <b>${lang === 'ru' ? 'Назначение' : 'Purpose'}:</b>
            <div>${naznachenie}</div>
          </li>
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
            <a class="btn btn--blue element-btn element-btn-yachts" data-element="3" href="#">${lang === 'ru' ? 'Забронировать' : 'Book'}</a>
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
const ajaxSeatch = (searchVal)=>{


  $.ajax({
    type: "GET",
    url: "http://boad.panda-dev.ru/wp-json/search/all",
    data: {'search': searchVal},
    success: function(result){
      console.log('run', result);

      generateContent(result);
    }
  });
}

let mainBox = $('.search-popup');



const generateContent = async (result)=>{


  mainBox.empty();



  let templateHtml = (linkNum, titleNum, list)=>{

    let linkMass = ['yachts', 'services','routes', 'blog'];
    let titleMass = ['Яхты', 'Услуги','Маршруты', 'Блог'];
    
    return(`
    <div class="search-popup-line">
          <h3> <a href="${linkMass[linkNum]}">${titleMass[titleNum]}</a></h3>
          <ul class="ln">
            ${list.map(item=>`<li><a href="${item.link}">${item.title}</a></li>`).join('')}
          </ul>
        </div>
    `)
  } ;

  result.yachts.length > 0 && (mainBox.append(templateHtml(0,0,result.yachts)));
  result.services.length > 0 && (mainBox.append(templateHtml(1,1,result.services)));
  result.routes.length > 0 && (mainBox.append(templateHtml(2,2,result.routes)));
  result.blog.length > 0 && (mainBox.append(templateHtml(3,3,result.blog)));

  let resCount = result.yachts.length + result.services.length + result.routes.length + result.blog.length;

  if  ( resCount === 0){
    mainBox.append('<div class="empty-list">Список пуст</div>');
  }
}

let result = {};
let searchTimeId;

$('.input-search').on('keyup',function(){
  let inputLength = $(this).val().length;
  if(inputLength>0){
    $(this).parents('.search-main').addClass('search-on');
  }else{
    $(this).parents('.search-main').removeClass('search-on');
  }
});

$('.search-main').on('click','.close-ico',function(){
  $(this).parents('.search-main').removeClass('search-on');
  $(this).parents('.search-main').find('.input-search').val('');
  mainBox.removeClass('active');
});

$('.input-search-ajax').on('keyup',function(){

  let searchVal = $(this).val();
  

  if(searchVal.length>0){
    mainBox.addClass('active');
    mainBox.append(spinner);
    clearTimeout(searchTimeId);

    searchTimeId = setTimeout(function(){
      
      ajaxSeatch(searchVal);

    }, 2000);


  }else{
    mainBox.removeClass('active');

  }

  


});


let fullUrl = window.location.href.split('?')[0];
let paramUrl = window.location.href.split('?')[1];
// console.log('paramUrl 1 point',paramUrl)
let countUpload = 0;
let sizeUpload = 50;
let allPostSize = 0;





const urlParams = new URLSearchParams(window.location.search);


const extraInit = ()=>{
  let owlYachtsItemImg = $('.yachts-item-img-owl');

  owlYachtsItemImg.owlCarousel({
    items: 1,
    nav: false,
    dots: true,
  });

  $('.img-cover').each(function(){
    let imgSrc = $(this).find('img').attr('src');
    //console.log(imgSrc);
    
    $(this).css('background-image', 'url('+imgSrc+')');
  });
};

const appendYachts = (item, typelist, containerAppend, isFavorites)=>{

  if(typelist==='list'){
    $(containerAppend).append(yachtsItemListTemplate(item, isFavorites));
    $(containerAppend).removeClass('catalog-grid');
  }else {
    $(containerAppend).append(yachtsItemTileTemplate(item, isFavorites));
    $(containerAppend).addClass('catalog-grid');
  }
  
  extraInit();

};

const ajaxUpload = (insideUrlParam, plusElements, sortVal, containerAppend, isFavorites)=>{

  let paramUrl = window.location.href.split('?')[1];
  if(isFavorites){
    paramUrl = insideUrlParam;
  }

  if(plusElements){
    countUpload = 1;
    $(containerAppend).empty();
  }
  else{
    countUpload++;
  };

  $(containerAppend).append(spinner);

  const typelist =  $('.catalog-view').find('a.active').data('type');
  // console.log('paramUrl', paramUrl)
  $.ajax({
    type: "GET",
    url: "http://boad.panda-dev.ru/wp-json/search/yachts?"+paramUrl,
    data: {
      // ...formObj,
      'countUpload': countUpload,
      'sizeUpload': sizeUpload,
      'sort': sortVal,
      'lang': $('.lang-yachts').data('lang'),
      'yachtsCategory':  $('.catalog-filter').find('.btn.active').data('href'),
    },
    success: function(result){
      spinner.remove();

      if(result.length > 0){

        result.map((item)=>{
          appendYachts(item, typelist, containerAppend, isFavorites);
        });

        allPostSize = result[0].sizePosts;
        console.log('allPostSize', allPostSize, countUpload, sizeUpload)
        if (allPostSize <= (sizeUpload * countUpload)){
          console.log('hide')
          $('.btn-more-ajax').hide();
        }else{
          console.log('show')
          $('.btn-more-ajax').show();
        }
      }else{
        $('.btn-more-ajax').hide();
        $(containerAppend).append('<div class="empty-list col-12">Список пуст</div>')
      }

    }
  });

};

let yachtsFormSearch = $('.search-yachts-form');

$('.btn-more-ajax-yachts').on('click',function(e){
  e.preventDefault();

  ajaxUpload(paramUrl, false, urlParams.get('typelist'), '.catalog-yachts');
});

$('.reset-filters').on('click',function(e){
  e.preventDefault();

  window.location.href = fullUrl;
});
 
yachtsFormSearch.find('input').on('change',function(e){
  e.preventDefault();

  let formSerialize =yachtsFormSearch.serialize();


  let finalUrl = fullUrl+"?"+formSerialize;

  window.history.pushState("data","Title",finalUrl);
  ajaxUpload(formSerialize, true, false, '.catalog-yachts');
});




$('.apply-filters').on('click',function(e){
  e.preventDefault();

  let formSerialize =yachtsFormSearch.serialize();


  let finalUrl = fullUrl+"?"+formSerialize;

  window.history.pushState("data","Title",finalUrl);


  ajaxUpload(formSerialize, true, false, '.catalog-yachts');
});

/* tab active */
$('.search-tabs').on('click','span',function(){
  if( !$(this).hasClass('active') ){
    $(this).parents('.search-tabs').find('span').removeClass('active');
    $(this).addClass('active');
    let indexTab = $(this).index()

    $(this).parents('.sidebar-item-container').find('.tab-item').removeClass('active');
    $(this).parents('.sidebar-item-container').find('.tab-item').eq(indexTab).addClass('active');
    // const fromEl = $(this).parents('.sidebar-item-container').find('.range-input-from');
    // const toEl = $(this).parents('.sidebar-item-container').find('.range-input-to');

    // fromEl.attr('name', $(this).data('from'));
    // toEl.attr('name', $(this).data('to'));
  
  }

  
});

/* tab active */


/* change template */

const urlParametrs = new URLSearchParams(window.location.search);

$('.select-order-ajax li').on('click',function(){
  let sortVal = $(this).data('value');
  console.log('sort', sortVal)
  ajaxUpload(paramUrl, 1, sortVal, '.catalog-yachts');

});


if($('.catalog-yachts').length>0){
  ajaxUpload(paramUrl, 0, false, '.catalog-yachts');
}



let idLikeArr = getCount;
// console.log('getCount', idLikeArr);



const showHideCountLike = (idLikeArrParam)=>{

  if(idLikeArrParam.length > 0){
    $('header .liked-btn').addClass('added');
    $('header .liked-btn span').html(idLikeArrParam.length);
    $('.catalog-total-ifno span').html(idLikeArrParam.length);
  }else{
    $('header .liked-btn').removeClass('added');
    $('header .liked-btn span').html(0);
    $('.catalog-total-ifno span').html(0);
  }
  
}


showHideCountLike(idLikeArr);

const addLike = (thisEl)=>{
  let idLiked = thisEl.data('id');

  if(thisEl.hasClass('active')){
    thisEl.removeClass('active');

    idLikeArr = idLikeArr.filter(item=> item !== idLiked);
  }else{
    thisEl.addClass('active');

    idLikeArr = [...idLikeArr, idLiked];
    
  };
  

  localStorage.setItem('likedId', idLikeArr);
  
  showHideCountLike(idLikeArr);
}

$('.catalog-yachts, .yachts-home').on('click','.yachts-item-liked',function(e){

  addLike($(this));
});

$('.liked-btn').not('header .liked-btn').on('click',function(e){
  e.preventDefault();
  addLike($(this));
});


$('.catalog-favorites').on('click','.delete-btn',function(){

  let idLiked = $(this).data('id');
  $(this).parents('.yachts-item-wrapper').remove();

  idLikeArr = idLikeArr.filter(item=> item !== idLiked);

  localStorage.setItem('likedId', idLikeArr);
  
  showHideCountLike(idLikeArr);

});

idLikeArr.map(item=>{
  // console.log($('.yachts-detail-controls .liked-btn').data('id'), item)
  if( item ===  $('.yachts-detail-controls .liked-btn').data('id')){
    $('.yachts-detail-controls .liked-btn').addClass('active');
  };
});

$('.yachts-item-liked').each(function(){
  let thisId = $(this).data('id');
  // console.log(thisId)
  idLikeArr.map(item=>{
    // console.log($('.yachts-detail-controls .liked-btn').data('id'), item)
    if( item ===  thisId){
      $(this).addClass('active');
    };
  });
});




$('.empty-favorites, .language-select a').on('click',function(e){
  localStorage.clear();
});

const loadFavorites = ()=>{

  let idLikeString 
  if(idLikeArr.length>0){
    idLikeString = idLikeArr.toString();
  }else{
    idLikeString = 'empty';
  }
  ajaxUpload('favorites='+idLikeString, true, urlParams.get('typelist'), '.catalog-favorites', true);
};

if($('.catalog-favorites').length>0){
  loadFavorites();
};

const yachtsItemPopup = ({
  id,
  title,
  link,
  yachts_price,
  god_refit,
  naznachenie,
  yachts_harakteristiki,
  yachts_galereya,
})=>{
  return(`
  <div class="yachts-select-popup-item">
    <div class="yachts-select-img ${yachts_galereya ? 'img-cover':''}">
      ${yachts_galereya ? `<img src="${yachts_galereya[0].full_image_url}" alt="">`:``}
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
} ;

const appendYachtsPopup = (item)=>{

  $('.yachts-select-popup').append(yachtsItemPopup(item));

  $('.img-cover').each(function(){
    let imgSrc = $(this).find('img').attr('src');
    $(this).css('background-image', 'url('+imgSrc+')');
  });

};

const ajaxUploadYachtsLite =()=>{
  $.ajax({
    type: "GET",
    url: "http://boad.panda-dev.ru/wp-json/search/yachts?lang=ru&sizeUpload=-1",
    success: function(result){
      console.log('result', result);
      $('.yachts-select-popup').empty();

      if(result.length > 0){
        result.map((item)=>{
          appendYachtsPopup(item);
        });
      };

    }
  });
};
if($('.yachts-select-popup').length>0){
  ajaxUploadYachtsLite();

}

$('.yachts-select-input').on('click',function(){
  $('.yachts-select-popup').addClass('active');
 
});

$('.yachts-select-popup').on('click','.yachts-select-popup-item', function(){
  let yachtsName  = $(this).find('h3').text();
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
    url: "http://boad.panda-dev.ru/wp-json/search/blog",
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