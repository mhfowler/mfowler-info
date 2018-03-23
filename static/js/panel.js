
function setMood(mood) {
  var baseBody = $(".base-body");
  baseBody.removeClass('standard');
  baseBody.removeClass('asmr');
  baseBody.removeClass('sponsored');
  baseBody.removeClass('test');
  baseBody.removeClass('professional');
  baseBody.addClass(mood);
  $('.mood-button').removeClass('clicked');
  var elt = $('.mood-button[data-src="' + mood + '"]');
  elt.addClass('clicked');
  $.cookie('mood', mood);
}


$(document).ready(function() {
  //
  // var mood =  $.cookie('mood');
  // if (mood) {
  //   setMood(mood);
  // }
  // $('body').css('display', 'block');
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
    setMood(className);
  });

   // $( "#slider-vertical" ).slider({
   //    orientation: "vertical",
   //    range: "min",
   //    min: 12,
   //    max: 64,
   //    value: 16,
   //    slide: function( event, ui ) {
   //      $( "#amount" ).val( ui.value );
   //      $('body').css('font-size', ui.value);
   //    }
   //  });
   //  $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );

   // $(document).mousemove(function(event) {
   //      currentMousePos.x = event.pageX;
   //      currentMousePos.y = event.pageY;
   //  });

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