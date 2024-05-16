
let idLikeArr = localStorage.getItem('likedId') ? JSON.parse(localStorage.getItem('likedId')) : [];

console.log('id', idLikeArr)
const headLikeBtn = $('header .liked-btn');

const btnLikeSpan = headLikeBtn.find('span');
const catalogTotalInfo = $('.catalog-total-ifno span');

const showHideCountLike = (idLikeArrParam) => {

  const countLike = idLikeArrParam.length;

  if (countLike > 0) {
    headLikeBtn.addClass('added');

    headLikeBtn.attr('href', '/favorites?ids=' + idLikeArrParam);

  } else {
    headLikeBtn.removeClass('added');
    headLikeBtn.attr('href', '/favorites');
  }
  btnLikeSpan.html(countLike);
  catalogTotalInfo.html(countLike);
}


showHideCountLike(idLikeArr);

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

$('.content').on('click', '.yachts-like-js', function (e) {
  addLike($(this));
});



$('.delete-btn').on('click', function (e) {
  e.preventDefault();
  let idLiked = $(this).data('id');

  idLikeArr = idLikeArr.filter(item => item !== idLiked);

  showHideCountLike(idLikeArr);

  localStorage.setItem('likedId', JSON.stringify(idLikeArr));

  let finalUrl = fullUrl + '?ids=' + idLikeArr;

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
