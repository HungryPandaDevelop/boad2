

let fullUrl = window.location.href.split('?')[0];
let paramUrl = window.location.href.split('?')[1];
// console.log('paramUrl 1 point',paramUrl)
let countUpload = 0;
let sizeUpload = 30;
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

const ajaxUpload = (paramUrl, plusElements, typelist2, containerAppend, isFavorites)=>{
  console.log('isFavorites', isFavorites)

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
      'lang': $('.lang-yachts').data('lang'),
      'yachtsCategory':  $('.catalog-filter').find('.btn.active').data('href'),
    },
    success: function(result){
      spinner.remove();
      console.log('retur',result);
      if(result.length > 0){
        result.map((item)=>{
          appendYachts(item, typelist, containerAppend, isFavorites);
        });
        allPostSize = result[0].sizePosts;
        console.log('allPostSize', allPostSize)
        if (allPostSize <= (sizeUpload * countUpload)){
          $('.btn-more-ajax').hide();
        }else{
          // console.log('show btn')
          $('.btn-more-ajax').show();
        }
      }else{
        $('.btn-more-ajax').hide();
        $(containerAppend).append('<div class="empty-list col-12">Список пуст</div>')
      }

    }
  });

};
// let categoryName;
// let changeCategory = ()=>{
//   // console.log('paramUrl 2 point',paramUrl)
//   let yachtsCategory = $('.catalog-filter').find('.btn.active').data('href');
//   // categoryName = yachtsCategory;
//   // console.log('yachtsCategory',yachtsCategory);
  
//   let downloadUrl;
  
//   if(yachtsCategory){

//     if(paramUrl){

//       // downloadUrl = paramUrl + '&yachtsCategory='  + yachtsCategory;
//     }else{

//       // downloadUrl = 'yachtsCategory='  + yachtsCategory;
      
//     }

//   }else{
//     downloadUrl = paramUrl
//   }
//   // console.log('paramUrl 3 point',yachtsCategory, downloadUrl)
//   ajaxUpload(downloadUrl, true, urlParams.get('typelist'), '.catalog-yachts');
// }


let yachtsFormSearch = $('.search-yachts-form');

$('.btn-more-ajax').on('click',function(e){
  e.preventDefault();
  
  // $('.search-yachts-form').submit()
  // console.log('serialize', formObj)

  ajaxUpload(paramUrl, 0, urlParams.get('typelist'), '.catalog-yachts');
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
    $('.search-tabs span').removeClass('active');
    $(this).addClass('active');
    
    const fromEl = $(this).parents('.sidebar-item-container').find('.range-input-from');
    const toEl = $(this).parents('.sidebar-item-container').find('.range-input-to');

    fromEl.attr('name', $(this).data('from'));
    toEl.attr('name', $(this).data('to'));
  
  }

  
});

/* tab active */


// console.log(paramUrl)
/* change template */

const urlParametrs = new URLSearchParams(window.location.search);

const keys = urlParams.keys();
let countKey = 0;
let useSorting = false;

for (const key of keys){
  countKey++;
  if ((key)==='sort'){
    useSorting = true;
  }

};

$('.select-order-ajax li').on('click',function(){


  let sortType = $(this).data('value');

  if(countKey === 1 && useSorting){
    window.history.pushState("data","Title",fullUrl + '?sort=' + sortType);
    ajaxUpload('sort=' + sortType, true, urlParams.get('typelist'), '.catalog-yachts');
  }
  else if(countKey > 1 && useSorting){
    let formSerialize =yachtsFormSearch.serialize();
    let finalUrl = fullUrl+"?"+formSerialize;


    window.history.pushState("data","Title",finalUrl + '&sort' + sortType);
    
    ajaxUpload(formSerialize + '&sort=' + sortType, true, urlParams.get('typelist'));
  }else{

    window.history.pushState("data","Title",fullUrl + '?sort=' + sortType);

    ajaxUpload('sort=' + sortType, true, urlParams.get('typelist'), '.catalog-yachts');
  }
});

// if(useFilter === true){
//   console.log('1')
//   let addFormParam = yachtsFormSearch.serialize();

//   // window.history.pushState("data","Title",fullUrl + '?' + addFormParam + 'sort=' + sortType);

//   ajaxUpload('sort=' + sortType, true, urlParams.get('typelist'), '.catalog-yachts');
// }
// else if(useSorting === true){
//   console.log('2')
//   // window.history.pushState("data","Title",fullUrl + '?sort=' + sortType);
//   ajaxUpload('sort=' + sortType, true, urlParams.get('typelist'), '.catalog-yachts');
// }
// else{
//   console.log('3')
//   // window.history.pushState("data","Title",fullUrl + '?sort=' + sortType);

//   ajaxUpload('sort=' + sortType, true, urlParams.get('typelist'), '.catalog-yachts');
// }
if($('.catalog-yachts').length>0){
  // changeCategory();
  ajaxUpload(paramUrl, 0, false, '.catalog-yachts');
}
// ajaxUpload(paramUrl, true, urlParams.get('typelist'));


