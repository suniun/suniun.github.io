/*** 
    Simple jQuery Slideshow Script
    Released by Jon Raasch (jonraasch.com) under FreeBSD license: free to use or modify, not responsible for anything, etc.  Please link out to me if you like it :)
***/

function slideSwitch() {
	//Use strict statement
	"use strict";
    var $active = $('#slideshow div.active');

    if ( $active.length === 0 ) $active = $('#slideshow div:last');

    // use this to pull the divs in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow div:first');

    //uncomment below to pull the divs randomly
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
	//Use strict statement
	"use strict";
    setInterval( "slideSwitch()", 3000 );
});




// Get the modal
window.onload = function(){ 
//Use strict statement
	"use strict";
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
	
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
};
