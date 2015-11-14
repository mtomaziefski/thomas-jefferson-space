var mouseX = 0, mouseY = 0;

$(document).mousemove(function(e){
   	mouseX = e.pageX;
   	mouseY = e.pageY; 
});

// cache the selector
var follower = $("#thomas-jefferson-container");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // set delay
    xp += (mouseX - xp) / 50;
    yp += (mouseY - yp) / 50;
    follower.css({left:xp, top:yp});
	    
}, 30);

//spin the bozo
var img = $('.jefferson-image');
if(img.length > 0){
    var offset = img.offset();
    function mouse(evt){
        var center_x = (offset.left) + (img.width()/2);
        var center_y = (offset.top) + (img.height()/2);
        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (180 / Math.PI) * -1) + 90; 
        img.css('-moz-transform', 'rotate('+degree+'deg)');
        img.css('-webkit-transform', 'rotate('+degree+'deg)');
        img.css('-o-transform', 'rotate('+degree+'deg)');
        img.css('-ms-transform', 'rotate('+degree+'deg)');
    }

    $(document).mousemove(mouse);

    /* Declaring the global variables */
            var imageOne;

            /* Calling the initialization function */
            $(init);

            /* The images need to re-initialize on load and on resize, or else the areas
             * where each image is displayed will be wrong. */
            $(window).load(init);
            $(window).resize(init);

            /* Setting the mousemove event caller */
            $(window).mousemove(getMousePosition);

            /* This function is called on document ready, on load and on resize
             * and initiallizes all the images */
            function init(){
                
                /* Instanciate the mouse position variables */
                mouseX = 600;
                mouseY = 300;
                
                /* Instanciate a HeadImage class for every image */
                imageOne = new HeadImage("one");
            }

            /* This function is called on mouse move and gets the mouse position. 
             * It also calls the HeadImage function to display the correct image*/
            function getMousePosition(event){
                
                /* Setting the mouse position variables */
                mouseX = event.pageX;
                mouseY = event.pageY;
                
                /*Calling the setImageDirection function of the HeadImage class
                 * to display the correct image*/
                imageOne.setImageDirection();
            }

            //Get mouse position on ready
            $(document).ready(getMousePosition);
}

            
