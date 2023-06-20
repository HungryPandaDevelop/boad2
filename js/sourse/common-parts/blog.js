// console.log('blog-tags');

let countBlogUpload = 1;
let sizeUploadBlog = 12;

$('.blog-tags').on('click','a',function(e){
  e.preventDefault();

  $('.blog-tags a').removeClass('active');
  $(this).addClass('active');

  let thisCat = $(this).data('href');
  $('.blog-grid').empty();
  countBlogUpload = 1;
  ajaxBlogUpload(thisCat);
}); 



const ajaxBlogUpload = (category)=>{
 
 
  

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
      'sizeUpload': sizeUploadBlog,
      'blogCategory': category
    },
    success: function(result){
      
      spinner.remove();
      // console.log('retur',result);
      if(result.length > 0){
        result.map((item)=>{
          // console.log('item',item)
          appendBlog(item);
        });
        allBlogSize = result[0].sizePosts;
        // console.log('allPostSize', allBlogSize)
        if (allBlogSize <= (sizeUploadBlog * countBlogUpload)){
          $('.btn-more-ajax').hide();
        }else{
          // console.log('show btn')
          $('.btn-more-ajax').show();
        }
      }else{
        $('.btn-more-ajax').hide();
        $('.blog-grid').append('<div class="empty-list col-12">Список пуст</div>')
      }


      countBlogUpload++;
    }
  });

};
if(  $('.blog-grid').length > 0){
  ajaxBlogUpload();
}



$('.btn-more-ajax-blog').on('click',function(e){
  e.preventDefault();
  
  // $('.search-yachts-form').submit()
  // console.log('serialize', formObj)

  ajaxBlogUpload();
});