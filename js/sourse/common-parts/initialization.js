let owlMain = $('.owl-main');

owlMain.owlCarousel({
  items: 1,
  nav: true,
  dots: false,
  margin: 30
});

let owlAbout = $('.about-carousel');

owlAbout.owlCarousel({
  items: 1,
  nav: true,
  dots: false,
  // autoHeight:true
});

let owlTeam = $('.owl-team');

owlTeam.owlCarousel({
  items: 1,
  nav: true,
  dots: true,
  responsive:{
    0:{
      dots: false,
    },
    991:{
      dots: true,
      
    }
  }
});

let owlDetail = $('.detail-owl');

owlDetail.owlCarousel({

  nav: true,
  dots: false,
  loop: true,
  margin: 10,
  responsive:{
    0:{
      items: 2,
      margin: 8,
      nav: true,
      stagePadding: 30,
      loop: true
    },
    577:{
      items: 3,
      margin: 15,
      nav: true,
      stagePadding: 50,
      loop: true
    },
    991:{
      items: 5,
      margin: 15,
      stagePadding: 155,
      nav: true,
      
    }
  }
});

let owlYachtsItemImg = $('.yachts-item-img-owl');

owlYachtsItemImg.owlCarousel({
  items: 1,
  nav: false,
  dots: true,
});

let owlSecond = $('.owl-second');

owlSecond.owlCarousel({
  
  margin: 30,
  responsive:{
    0:{
      items:1,
      margin: 15,
      nav: true,
      dots: false,
    },
    577:{
      items: 2,
      margin: 15,
      nav: true,
      dots: true,
    },
    991:{
      items: 3,
      margin: 15,
      nav: true,
      dots: true,
    }
  }
});
let owlThree = $('.owl-three');

owlThree.owlCarousel({
  nav: true,
  dots: true,
  margin: 30,
  responsive:{
    0:{
      items:1,
      margin: 15
    },
    576:{
      items: 3,
      margin: 15
    },
    786:{
      items: 4,
      margin: 15
    }
  }
});
let owlFour = $('.owl-four');

owlFour.owlCarousel({
  nav: true,
  dots: true,
  margin: 30,
  responsive:{
    0:{
      items: 1,
      margin: 15,
      dots: false,
    },
    786:{
      items: 2,
      margin: 15
    }
  }
});



let owlDetailMain = $('.owl-detail-main');

owlDetailMain.owlCarousel({
  nav: true,
  dots: false,
  padding: 0,
  margin: 30,
  items: 1,
});
let owlDefault = $('.owl-default');

owlDefault.owlCarousel({
  nav: true,
  dots: true,
  items: 1,
});



if($(window).width() < 576){
  let owlMobile = $('.owl-mobile');

  owlMobile.owlCarousel({
    dots: false,
    nav: true,
    items:1,
    margin: 15
  });
}

let owlPartners = $('.owl-partners');

owlPartners.owlCarousel({
  dots:  false,
  // autoplay: true,
  // autoplayTimeout: 1001,
  // smartSpeed: 500,
  loop: true,
  responsive:{
    0:{
      items:2
    },
    567:{
      items: 4,
    },
    992:{
      items: 5,
    }
}
});

$('.input-date').each(function(){
  let dp = new AirDatepicker(this,{
    timepicker: true,
    timeFormat: 'hh:mm AA',
    onSelect({date}) {
      $(this).addClass('input-empty');
      // console.log('done', date) 
    }
  },
  );
})


// ------------------

$(".group2").colorbox({rel:'group2', transition:"fade"});