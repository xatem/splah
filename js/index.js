// Show or hide password 
$(function(){
  $('.abm-hide-show').show();
  $('.abm-hide-show span').addClass('abm-show')
  
  $('.abm-hide-show span').click(function(){
    if( $(this).hasClass('abm-show') ) {
      $(this).text('GİZLE');
      $('.abm-password').attr('type','text');
      $(this).removeClass('abm-show');
    } else {
       $(this).text('Göster');
       $('.abm-password').attr('type','password');
       $(this).addClass('abm-show');
    }
  }); 
});

// Display loader after login button click
$( ".abm-login-button" ).click(function() {
  $( this ).addClass( "abm-show" );
});