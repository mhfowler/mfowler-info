// /**
//  *
//  */
$(document).ready(function(){
    var mcForm = $('#mc-embedded-subscribe-form');
    var mailchimp = {};
    mailchimp.dc='us5';
    mailchimp.id='xxxxxxxx';
    var url = '//' + mailchimp.dc + '.api.mailchimp.com/3.0/lists/' + mailchimp.id + '/members/';


    function beginMailchimpPost(email){
        var data = {
          "email_address": email,
          "status": "subscribed"
        };
        var params = JSON.stringify(data);
        $.ajax({
            url: url,
            method: 'POST',
            data: params,
            dataType: 'jsonp',
            contentType: 'application/json; charset=utf-8',
            error: function(res, text){
                console.log('Err', res);
            },
            success: function(res){
                console.log('Success', res);
            }
        });
    }
});