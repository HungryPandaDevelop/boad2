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



