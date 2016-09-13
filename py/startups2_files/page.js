
$(function(){ //ready


  //$('#ads').scrollToFixed();

/*
  $("img.lazy").lazyload({
    //threshold : 200,
     effect : "fadeIn",
     event : "scroll"
});


  $("#wrap img.lazy").unveil(200, function() {
   $(this).load(function() {
     this.style.opacity = 1;
    });
}); */
  $("#wrap img.lazy").unveil(500);//500px offset

 $('body').bind('scroll', debounce(function(ev){
   // console.log('body - scoll');
    $(window).trigger('scroll');
 },200));//debounce 200ms


  $(window).bind('scroll', function(ev){
    // now this fires!!!
    //console.log('WINDOW - scoll');
 })

  $('#cityDrop').bind('change', function () {
            var url = $(this).val(); // get selected value
          //  alert(url);
            if (url) { // require a URL
                window.location = url; // redirect
            }
            return false;
        });


$(' .filter .f').click(function(ev){
  ev.stopPropagation();
 ev.preventDefault();
  $('.f').removeClass('active');
  var id = $(this).addClass('active').data('id');
  if(id == '*'){
    var sel = '*';
  }else{
    var sel = '.'+id;
  }
  //hide all, just show other?
  //console.log(sel);
  $('#wrap').isotope({ filter: sel });
  //$('#nav ').isotope({ filter: sel });
  if(sel == '*'){
    $('#nav tr').show();
  }else{
    $('#nav tr').hide();
     $('#nav tr'+sel).show();
  }

})

$('  #bt_more').click(function(ev){
  ev.stopPropagation();
 ev.preventDefault();
  $(this).hide(0);
  $('  #more').slideDown(300);
})


//$(document).ready(function(){
  $('#ress p').urlToLink({
    target : '_blank'
  });
//});


      // BACK TO TOP
        var offset = 800; // window.height;
         var duration = 200;
        // jQuery(window).scroll(function() {
        $(window).bind("scroll", function(){

           //console.log('scrolling')
          //$("img.lazy").unveil(200);
          //$(window).trigger('resize');// for nasty image load...

            //show scroll top BTN
             if ($(this).scrollTop() > offset) { // it WAS working before...
                 $('#backtotop').fadeIn(duration);
             } else {
                 $('#backtotop').fadeOut(duration);
             }
         });

               $("#search_form").submit(function(e) {
                   e.preventDefault();//prevent the form from actually submitting
                   var txt = $('#search_txt').val();//get the selected option
                   if (txt)// if an option is selected
                       window.location = '/search/'+ txt; //todo: escape sclashes
               });



 $('.bt_report').click(function(ev){
    ev.stopPropagation();
   ev.preventDefault();
    report_id = $(this).parent().attr('data-id');
    report_name = $(this).parent().attr('data-name');
    $('#report_modal').modal('show');
    return false;
  });



$('.bt_categories').click(function(ev){
  $('#category_modal').modal();
 });

  $('.report').click(function(ev){
    ev.preventDefault();
    var type = $(this).attr('data-type');

   /* console.log($(this));
    console.log($(this).parent());
    console.log($(this).parent().parent());
    console.log('TYPE: '+type);*/
    var report = {
      startup: report_id ,
      problem: type,
      name: report_name,
      city: cityNum,
      citySlug: citySlug

      //place_phone: report_place_phone,
//      user_loc: locArray
    };

    // parralax FX on landing

    $.post('/api/report', { report: report }, function(data) {
      console.log(data);


      alert('Thank you for your feedback!');
     // showPlaces(data.places);
     // showLocation(data.location);
      //section('results');
       //$('.result').html(data);
     });
     $('#report_modal').modal('hide');
     return false;
  })




  $('#form_city_update button').click(function(ev){
    ev.preventDefault();
    var email = $('#email').val();
    if(!email) return false;
    $.post('/api/mailinglist/signup', { data: {
      email:email,
      cityNum: cityNum,
      citySlug: citySlug,
      cityName: cityName
     }},
     function(data) {
      console.log(data);
     });


     $('#form_city_update').hide(200);
     $('#thanks').show(200);

    if(window.mixpanel)  mixpanel.track("City Email Subscribe", {
         "city": cityName
     });
     return false;
  })




 if($ && $.stellar){
    $.stellar({
            horizontalScrolling: false,
            verticalOffset: 40
       });
    }


// ADMIN: create lists:

  $('.bt_addTwitter').click(function(ev){
    ev.preventDefault();
    var handles = $(this).data('h');
    var list = $(this).parent().find('select').val();
     var url = '/api/twitter/addtolist/'+list ;
     console.log(url);
    $.post(url, {data: {handles: handles}}, function(data) {
      console.log('Added to the list!  '+url);
    });

  })

// EXITLIST landingpage
    $('#form_waitlist button').click(function(ev){
      ev.preventDefault();
      var email = $('#email').val();
      if(!email) return false;
      $.post('/api/betalist', { data: {email:email} }, function(data) {
        console.log(data);
       });
       $('#form_waitlist').hide(200);
       $('#thanks').show(200);

      if(ga) ga('betalist', 'betalist');
      if(window.mixpanel)  mixpanel.track("Beta Email Subscribe", {
        email: email
      });
       return false;
    })







     $('#backtotop').click(function(ev){
       ev.stopPropagation();
      ev.preventDefault();
        document.documentElement.scrollTop = 0;
      });




var SCROLL_HOVER_DISABLE_DELAY = 200 //ms

function disablehover() {
  var cover = document.querySelector('.block-mouse'),
      coverStyle = cover.style,
      trackMousePos = false,
      timer;

  function updatePos(e) {
      coverStyle.webkitTransform = 'translate3d('+ (e.clientX-50) + 'px,' + (e.clientY-50) + 'px,' + '0)';
  }

  document.addEventListener('scroll', function() {
    clearTimeout(timer);
    if(!trackMousePos) {
      mousePos();
      trackMousePos = true;
    }

    timer = setTimeout(function(){
      trackMousePos = false;
      coverStyle.pointerEvents = 'none';
      window.removeEventListener('mousemove', updatePos, false);
    },SCROLL_HOVER_DISABLE_DELAY);
  }, false);

  function mousePos(e) {
    coverStyle.pointerEvents = 'auto';
    window.addEventListener('mousemove', updatePos, false);
  }

}


})



function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

