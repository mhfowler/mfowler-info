 
$(function(){ 
$('.bt_star').click(function(ev){
  ev.preventDefault();
    //console.log('click');
  var id = $(this).data('id');
  var id2 = $(this).data('id2');
  var adding = (! $(this).hasClass('highlight'));
  
  console.log(adding + ' : '+id);
  if(adding){
    var verb = 'add'
  }else{
    var verb = 'remove'
  }
  
  //update database on server
  $.get('/api/startup/'+id+'/star/'+verb, function() {  });
   $.get('/api/startup/'+id2+'/star/'+verb, function() {  });
   //update btn state
    if(adding){
      //TODO: add inner text in the button, if any
      $(this).addClass('highlight btn-warning').find('span').html('Saved');
    }else{
      $(this).removeClass('highlight btn-warning').find('span').html('Save');
    }
   
   //todo: also highlight other instances of the same buttons.
   
   return false;
});


$('.bt_ban_startup').click(function(ev){
  ev.preventDefault();
  var id = $(this).data('id');
  var id2 = $(this).data('id2');
  var adding = (! $(this).hasClass('highlight'));
  
  console.log(adding + ' : '+id);
  if(adding){
    var verb = 'add'
  }else{
    var verb = 'remove'
  }
  
  //update database on server
  $.get('/api/startup/'+id+'/ban/'+verb, function() {  });
   $.get('/api/startup/'+id2+'/ban/'+verb, function() {  });

    if(adding){
       //TODO: add inner text in the button, if any
       $(this).addClass('highlight btn-warning').find('span').html('Hidden');
     }else{
       $(this).removeClass('highlight ').find('span').html('Hide');
     }
   return false  
});


$('.bt_market_subscribe').click(function(ev){
  ev.preventDefault();
  var id = $(this).data('id');
  var id2 = $(this).data('id2');
  var adding = (! $(this).hasClass('highlight'));
  
  console.log(adding + ' : '+id);
  if(adding){
    var verb = 'add'
  }else{
    var verb = 'remove'
  }
  
  //update database on server
  $.get('/api/market/'+id+'/subscribe/'+verb, function() {  }); 
  
    if(adding){
       //TODO: add inner text in the button, if any
       $(this).addClass('highlight  ').find('span').html('Hidden');
     }else{
       $(this).removeClass('highlight ').find('span').html('Hide');
     }
   ev.preventDefault();  
})






})

