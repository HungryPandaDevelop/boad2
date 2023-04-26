let phoneObj = '';
function phone_mask(){
	$.mask.definitions['9']='';
	$.mask.definitions['d']='[0-9]';
  
	$('.phone').mask('+7 ddd ddd-dd-dd');
	$('.phone').intlTelInput({
		autoHideDialCode:false,
		autoPlaceholder:'aggressive',
		placeholderNumberType:'MOBILE',
		preferredCountries:['ru','ae'],
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
		geoIpLookup:function(callback,){
			$.get('http://ipinfo.io',function(){},'jsonp').always(function(resp){
				var countryCode =(resp&&resp.country)?resp.country:'';
				
				callback(countryCode);
				// console.log('selectedCountryData 2', selectedCountryData, selectedCountryPlaceholder)
				
			});
		},
		//hiddenInput:'full_number',
		//initialCountry:'auto',
		//localizedCountries:{'de':'Deutschland'},
		//nationalMode:false,
		//onlyCountries:['us','gb','ch','ca','do'],
	});
  $('.phone').after('<label class="label-animate" for="phone-flag">Ваш телефон</label>')
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



