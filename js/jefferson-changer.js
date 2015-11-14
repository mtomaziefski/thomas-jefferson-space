/*
Modified version of: HeadImage.js
Originial Author: Jan Dellsperger
*/
var className;
var imageTop;
var imageLeft;
var imageBottom;
var imageRight;

function HeadImage(className){
    
    /* Setting the global instance of classname to the given parameter*/
    this.className = className;
    
    /* Calculating the borders of the image */
    this.imageLeft = $("."+this.className+">.jefferson-image").offset().left;
    this.imageRight = this.imageLeft + $("."+this.className+">.jefferson-image").width();
    this.imageTop = $("."+this.className+">.jefferson-image").offset().top;
    this.imageBottom = this.imageTop + $("."+this.className+">.jefferson-image").height();
    
    /* This function determines where the mouse pointer is relative to the image
     * and displays the correct image accordingly. */
    this.setImageDirection = function(){
        $("."+this.className+">.jefferson-image").css("opacity","0");
        if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY <= this.imageTop){
            $("."+this.className+">.up").css("opacity","1");
        } else if(mouseX < this.imageLeft && mouseY < this.imageTop){
            $("."+this.className+">.up-left").css("opacity","1");
        } else if(mouseX <= this.imageLeft && mouseY >= this.imageTop && mouseY <= this.imageBottom){
            $("."+this.className+">.left").css("opacity","1");
        } else if(mouseX < this.imageLeft && mouseY > this.imageBottom){
            $("."+this.className+">.down-left").css("opacity","1");
        } else if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY >= this.imageBottom){
            $("."+this.className+">.down").css("opacity","1");
        } else if(mouseX > this.imageRight && mouseY > this.imageBottom){
            $("."+this.className+">.down-right").css("opacity","1");
        } else if(mouseX >= this.imageRight && mouseY >= this.imageTop && mouseY <= this.imageBottom){
            $("."+this.className+">.right").css("opacity","1");
        } else if(mouseX > this.imageRight && mouseY < this.imageTop){
            $("."+this.className+">.up-right").css("opacity","1");
        } else{
            $("."+this.className+">.front").css("opacity","1");
            $(".text-holder").css("display","none");
            $("."+this.className+".text-holder").css("display","block");
        }
    };
}