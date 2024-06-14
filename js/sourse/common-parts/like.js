
let idLikeArr = localStorage.getItem('likedId') ? JSON.parse(localStorage.getItem('likedId')) : [];



const headLikeBtn = $('header .liked-btn');

const btnLikeSpan = headLikeBtn.find('span');
const catalogTotalInfo = $('.catalog-total-ifno span');
const mainFavBox = $('.catalog-favorites');
const thisLink = headLikeBtn.attr('href');
const showHideCountLike = (idLikeArrParam) => {

  const countLike = idLikeArrParam.length;

  if (countLike > 0) {
    headLikeBtn.addClass('added');

    headLikeBtn.attr('href', thisLink + '?ids=' + idLikeArrParam);

  } else {
    headLikeBtn.removeClass('added');
    headLikeBtn.attr('href', thisLink);
  }
  btnLikeSpan.html(countLike);
  catalogTotalInfo.html(countLike);

}


showHideCountLike(idLikeArr);



if (idLikeArr && !paramUrl && mainFavBox.length > 0) {


  let finalUrl = fullUrl + '?ids=' + idLikeArr;
  window.location.href = finalUrl;
}

const addLike = (thisEl) => {
  let idLiked = thisEl.data('id');

  if (thisEl.hasClass('active')) {
    thisEl.removeClass('active');
    idLikeArr = idLikeArr.filter(item => item !== idLiked);
  } else {
    thisEl.addClass('active');
    idLikeArr = [...idLikeArr, idLiked];
  };


  localStorage.setItem('likedId', JSON.stringify(idLikeArr));

  console.log('idLikeArr', idLikeArr)

  showHideCountLike(idLikeArr);
}

$('body').on('click', '.yachts-like-js', function (e) {
  e.preventDefault();
  addLike($(this));
});



$('.delete-btn').on('click', function (e) {
  e.preventDefault();
  let idLiked = $(this).data('id');

  let typeList = $('.listing-btn.active').data('type')
  let sorting = $('.style-select option:selected').attr('value');

  console.log('sorting 2', sorting)

  idLikeArr = idLikeArr.filter(item => item !== idLiked);

  showHideCountLike(idLikeArr);

  localStorage.setItem('likedId', JSON.stringify(idLikeArr));

  let finalUrl = fullUrl + '?ids=' + idLikeArr + '&typelist=' + typeList + '&sort=' + sorting;

  window.location.href = finalUrl;
});



setTimeout(() => {

  $('.yachts-like-js').each(function () {

    let thisId = $(this).data('id');

    idLikeArr.forEach(item => {
      if (item === thisId) {
        $(this).addClass('active');
      };
    });

  });
}, 1500);

$('.select-order-ajax-favorites').on('click', 'li', function () {

  let sort = $(this).data('value');

  let newUrl = $(this).parents('.catalog-sorting-container').data('value');
  window.location.href = newUrl + '&sort=' + sort;

});




$('.empty-favorites, .language-select a').on('click', function (e) {
  localStorage.clear();
});
