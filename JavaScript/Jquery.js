/************************************************************************
Light Box
************************************************************************/

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></P>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);







$("#gallery a").click(function(event){
    event.preventDefault();
    var imagelocation = $(this).attr("href");
    
    $image.attr("src", imagelocation);
    
    $overlay.show();
    
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});


$overlay.click(function(){
    
   $overlay.hide(); 
});



/************************************************************************
Light Box
************************************************************************/


var $select = $("<select id='nav-menu'></select");
$("#menu").append($select);

$("#menu a").each(function(){
    var $anchor = $(this);
    
    var $option = $("<option></option>");
    
    $option.val($anchor.attr("href"));
    
    $option.text($anchor.text());
    
    $select.append($option);
    
});

var $button = $("<button id='nav-button'>Go</button>");
$("#menu").append($button);

$button.click(function(){
    
 window.location = $select.val();
    
});


















