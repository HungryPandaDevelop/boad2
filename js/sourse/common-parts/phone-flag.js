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
		initialCountry: 'auto',
		geoIpLookup: function (callback,) {
			console.log('re', callback)
			$.get('https://ipinfo.io', function () { }, 'jsonp').always(function (resp) {

				var countryCode = (resp && resp.country) ? resp.country : '';

				callback(countryCode);
				console.log('countryCode', countryCode)
				switch (countryCode) {
					case 'RU': // Россия
						$('input.phone').mask('+7 ddd ddd-dd-dd');
						break;
					case 'AE': // ОАЭ
						$('input.phone').mask('+971 ddd ddd-ddd');
						break;
					case 'US': // США
						$('input.phone').mask('+1 ddd ddd-dddd');
						break;
					case 'GB': // Великобритания
						$('input.phone').mask('+44 ddddd ddddd');
						break;
					default: // Маска по умолчанию
						$('input.phone').mask('+ddd ddd ddd dddd');
						break;
				}
				// console.log('selectedCountryData 2', selectedCountryData, selectedCountryPlaceholder)

			});
		},
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



