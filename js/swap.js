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