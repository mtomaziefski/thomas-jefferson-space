<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

    <head>
    	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    	<title>Thomas Jefferson | Space?</title>
    	<link rel="stylesheet" type="text/css" href="css/style.css" />
    </head>

    <body>
        <!-- Animation Panes -->
        <div id="background"></div>
        <div id="midground"></div>
        <div id="thomas-jefferson-container" class="one">
            <img class="jefferson-image up" src="images/thomas-jefferson-up.png"/>
            <img class="jefferson-image up-left" src="images/thomas-jefferson-up-left.png"/>
            <img class="jefferson-image left" src="images/thomas-jefferson-left.png"/>
            <img class="jefferson-image down-left" src="images/thomas-jefferson-down-left.png"/>
            <img class="jefferson-image down" src="images/thomas-jefferson-down-left.png"/>
            <img class="jefferson-image down-right" src="images/thomas-jefferson-down-right.png"/>
            <img class="jefferson-image right" src="images/thomas-jefferson-right.png"/>
            <img class="jefferson-image up-right" src="images/thomas-jefferson-up-right.png"/>
            <img class="jefferson-image front" src="images/thomas-jefferson-right.png"/>
        </div>
        <div id="foreground"></div>
        <!-- Music -->
        <audio autoplay="autoplay" loop>
    	  <source src="mp3/space.mp3" type="audio/mpeg">
    	</audio>
    	<!--Scripts-->
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    	<script src="js/jefferson-changer.js" type="text/javascript"></script>
    	<script src="js/main.js" type="text/javascript"></script>
        <script>
            /* Declaring the global variables */
            var imageOne;
            var mouseXX;
            var mouseYY;

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
                mouseXX = 600;
                mouseYY = 300;
                
                /* Instanciate a HeadImage class for every image */
                imageOne = new HeadImage("one");
            }

            /* This function is called on mouse move and gets the mouse position. 
             * It also calls the HeadImage function to display the correct image*/
            function getMousePosition(event){
                
                /* Setting the mouse position variables */
                mouseXX = event.pageX;
                mouseYY = event.pageY;
                
                /*Calling the setImageDirection function of the HeadImage class
                 * to display the correct image*/
                imageOne.setImageDirection();
               
            }

            //Get mouse position on ready
            $(document).ready(getMousePosition);
            //Spoof resize
            $(window).resize();
        </script>

    </body>

</html>