
$('.range').on('change input', function (e) {
  console.log('change',e)
  setRangeNum('.range-slider-container', '.range-num', $(this));

});

let minGap = 1;



function setRangeNum(wrap, num, thisEl, pos){
  let rangeMin = thisEl.attr('max') - thisEl.attr('min');
  
  let offsetLeftRange = (100/(rangeMin))*(thisEl.val() - thisEl.attr('min'));
  
  let rangeNum = thisEl.parents(wrap).find(num);

  //console.log(thisEl.val(), rangeNum.attr('data-name')); //rangeNum

  rangeNum.html(thisEl.val());

  // rangeNum.addClass('test');

  rangeNum.css({left: offsetLeftRange+'%',transform: 'translateX(-'+offsetLeftRange+'%)'});
  if(pos === 'left'){
    thisEl.parents(wrap).find('.slider-track-color').css({left: offsetLeftRange+'%'});
    thisEl.parents(wrap).prev().find('.range-input-from').val(thisEl.val());

  }else if(pos === 'right') {
    thisEl.parents(wrap).find('.slider-track-color').css({right: (100 - offsetLeftRange)+'%'});
    thisEl.parents(wrap).prev().find('.range-input-to').val(thisEl.val());
  }
}



$('.range-sliders-container').each(function(){

  let sliderOne = $(this).find('.slider-1');
  let sliderTwo = $(this).find('.slider-2');

  sliderOne.on('change input', function () {
    if(parseInt(sliderTwo.val()) - parseInt(sliderOne.val()) <= minGap){
      sliderOne.val(parseInt(sliderTwo.val()) - minGap);
    }
    setRangeNum('.range-sliders-container', '.range-num-1', $(this), 'left');
  });


  sliderTwo.on('change input', function () {
    if(parseInt(sliderTwo.val()) - parseInt(sliderOne.val()) <= minGap){
      sliderTwo.val(parseInt(sliderOne.val()) + minGap);
    }
  
    setRangeNum('.range-sliders-container', '.range-num-2', $(this), 'right');
  });

  setRangeNum('.range-sliders-container', '.range-num-1', $(this).find('.slider-1'), 'left');
  setRangeNum('.range-sliders-container', '.range-num-2', $(this).find('.slider-2'), 'right');

});