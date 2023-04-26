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