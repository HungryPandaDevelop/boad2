$('.wpcf7-form-control-wrap').each(function(){
  let sizeVal = $(this).find('.wpcf7-form-control').attr('id');
  $(this).addClass(sizeVal);
});


document.addEventListener( 'wpcf7mailsent', function( event ) {
  console.log('mail sent OK');
  // Stuff
  setTimeout(function(){
    $('.element-show').removeClass('active');
  },1500);
  
}, false ); 

// document.addEventListener( 'wpcf7invalid', function( event ) {
  
//   // Stuff
//   setTimeout(function(){
//     $('.wpcf7-form').addClass('init');
//   },1500);
  
// }, false ); 