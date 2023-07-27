
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
