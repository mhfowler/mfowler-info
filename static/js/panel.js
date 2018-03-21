

$(document).ready(function() {
  //
  // $('.iw-carousel').slick({
  //     slidesToShow: 1
  // });
  //
  $('.carousel-focus').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.carousel-thumbnails'
  });
  $('.carousel-thumbnails').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.carousel-focus',
    dots: false,
    focusOnSelect: true,
    arrows: false,
    adaptiveHeight: true,
    variableWidth: true
  });

  console.log('++ carousel loaded');

});



//
//  $('.iw-carousel').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });