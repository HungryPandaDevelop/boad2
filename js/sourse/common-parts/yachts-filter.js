

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

