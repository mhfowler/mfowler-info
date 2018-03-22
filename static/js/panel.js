

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

  // $('.mood-button').click(function(e) {
  //   var imgUrl =  $(this).data('src');
  //   if (imgUrl === 'white') {
  //     $('body').css('background-image', '');
  //   } else {
  //     $('body').css('background-image', 'url(' + imgUrl + ')');
  //   }
  //   if (imgUrl === '/static/img/bp.png') {
  //     $('body').css('background-size', '200px 200px')
  //   } else {
  //     $('body').css('background-size', 'contain')
  //   }
  // })

  $('.mood-button').click(function(e) {
    var className =  $(this).data('src');
    var baseBody = $(".base-body");
    baseBody.removeClass('standard');
    baseBody.removeClass('asmr');
    baseBody.removeClass('sponsored');
    baseBody.removeClass('test');
    baseBody.addClass(className);
    $('.mood-button').removeClass('clicked');
    $(this).addClass('clicked');
  })

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