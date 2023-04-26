
ymaps.ready(function () {
	let massCoord = [];
	$('.contacts-address-line').each(function (index) {
		let oneCoordX = $(this).data('coord-x');
		let oneCoordY = $(this).data('coord-y');
		let oneCord = [];
		oneCord.push(oneCoordX, oneCoordY, (index + 1))
		massCoord.push(oneCord);
	});

	let masMark = massCoord;
	// console.log("masMark", masMark);
	let mapMarker = $('#map').data('marker');
	console.log(mapMarker);

	let myMap = new ymaps.Map('map', {
		center: [masMark[0][0], masMark[0][1]],
		zoom: 9
	});


	let myPlacemarkWithContent = [];
	for (let i = 0; i < masMark.length; i++) {
		let addressEl = $('#address-' + i);
		let addressImg = addressEl.find('.photo-address').attr("src");
		let addressPhone = addressEl.find('.phone-feedback').html();
		let addressText = addressEl.find('.address').html();




		BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
		'<div class="box-map">' +
		'<img scr="' + addressImg + '">' +
		'<div class="box-map-content"><div>' + addressText + '</div>' +
		'<div>' + addressPhone + '</div>' +
		'</div></div>');

		var x = masMark[i][0];
		var y = masMark[i][1];

	// console.log("for", x, y);

		myPlacemarkWithContent[i] = new ymaps.Placemark([x, y], {
			id: i + 1,
			hintContent: 'Собственный значок метки с контентом',
			balloonContent: 'А эта — новогодняя'
		}, {
			balloonContentLayout: BalloonContentLayout,
			// Опции.
			// Необходимо указать данный тип макета.
			hideIconOnBalloonOpen: false,
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: mapMarker,
			// Размеры метки.
			iconImageSize: [30, 37],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-15, -37],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [15, 37] //,
			// Макет содержимого.
			//iconContentLayout: MyIconContentLayout
		});
		myMap.geoObjects
			.add(myPlacemarkWithContent[i]);

		myMap.setBounds(myMap.geoObjects.getBounds(), {
			checkZoomRange: true
		}).then(function () {
			if (myMap.getZoom() > 12) {myMap.setZoom(12)};
		});

	//});

	}

	$('.btn-map-center').on('click', function (e) {
		e.preventDefault();
		// var itemIndex = $(this).parents('.contacts-address-line').data("index");
		let itemIndex = $(this).data("index");
		$('html,body').animate({
			scrollTop: $('.map_home').offset().top - 200
		}, 1000);

		// console.log("forCenter", [masMark[itemIndex][0], masMark[itemIndex][1]]);


		myMap.setCenter([masMark[itemIndex][0], masMark[itemIndex][1]]);

		myPlacemarkWithContent[itemIndex].balloon.open();
	});

});

