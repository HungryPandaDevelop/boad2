// console.log('blog-tags');

let countBlogUpload = 1;

$('.blog-tags').on('click','a',function(e){
  e.preventDefault();

  $('.blog-tags a').removeClass('active');
  $(this).addClass('active');

  let thisCat = $(this).data('href');
  $('.blog-grid').empty();
  countBlogUpload = 0;
  ajaxBlogUpload(thisCat);
}); 



const ajaxBlogUpload = (category)=>{
 
 
  let sizeUpload = 12;

  $('.blog-grid').append(spinner);

  const appendBlog = (item)=>{


    $('.blog-grid').append(blogItemTileTemplate(item));
    // $(containerAppend).removeClass('catalog-grid');

    $('.img-cover').each(function(){
      let imgSrc = $(this).find('img').attr('src');
      //console.log(imgSrc);
      
      $(this).css('background-image', 'url('+imgSrc+')');
    });
  };
  let allBlogSize;
  $.ajax({
    type: "GET",
    url: "http://boad.panda-dev.ru/wp-json/search/blog",
    data: {
      // ...formObj,
      'lang': $('.blog-grid').data('lang'),
      'countUpload': countBlogUpload,
      'sizeUpload': sizeUpload,
      'blogCategory': category
    },
    success: function(result){
      countBlogUpload++;
      spinner.remove();
      // console.log('retur',result);
      if(result.length > 0){
        result.map((item)=>{
          appendBlog(item);
        });
        allBlogSize = result[0].sizePosts;
        // console.log('allPostSize', allBlogSize)
        if (allBlogSize <= (sizeUpload * countBlogUpload)){
          $('.btn-more-ajax').hide();
        }else{
          // console.log('show btn')
          $('.btn-more-ajax').show();
        }
      }else{
        $('.btn-more-ajax').hide();
        $('.blog-grid').append('<div class="empty-list col-12">Список пуст</div>')
      }

    }
  });

};
ajaxBlogUpload();


$('.btn-more-ajax').on('click',function(e){
  e.preventDefault();
  
  // $('.search-yachts-form').submit()
  // console.log('serialize', formObj)

  ajaxBlogUpload();
});