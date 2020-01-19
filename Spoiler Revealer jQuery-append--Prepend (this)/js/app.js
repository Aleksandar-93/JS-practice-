$('.spoiler').on('click', 'button', function(event) {
  console.log(event.target);
//Show spoiler text 
  $(this).prev().show();
////Hide the "Revivel Spoiler" button
 $(this).hide();
});

//create the "Revivel Spoiler" button
const $button = $('<button>Revivel Spoiler</button>'); 
//Append to web page
$('.spoiler').append($button);

//Hide the spoiler text
$('.spoiler span').hide();


