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