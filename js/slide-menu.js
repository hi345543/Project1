var objSlideMenu = document.getElementById("slide-menu");
var objSlideMenuImageActive = document.getElementById("slide-menu-image-active");
var objSlideMenuImageInactive = document.getElementById("slide-menu-image-inactive");

var slidemenuTransition = "0.3s"        //Defines the value of the Menu Transition In-/ outwards
var slidemenuImageTransition = "0.8s";  //Defines the value of the Image transition duration
var slidemenuImageRotation = "90deg";   //Defines the value of the Rotation Degree


objSlideMenu.style.transition = slidemenuTransition;
objSlideMenuImageInactive.style.transition = slidemenuImageTransition;
objSlideMenuImageActive.style.transition = slidemenuImageTransition;

function SlideOut(){
    objSlideMenu.style.marginLeft = "0px";

    objSlideMenuImageActive.style.opacity = 1;
    objSlideMenuImageActive.style.transform = "rotate(" + slidemenuImageRotation + ")";

    objSlideMenuImageInactive.style.opacity = 0;
    objSlideMenuImageInactive.style.transform = "rotate(" + slidemenuImageRotation + ")";
}

function SlideIn() {
    objSlideMenu.style.marginLeft = "-202px";

    objSlideMenuImageActive.style.opacity = 0;
    objSlideMenuImageActive.style.transform = "rotate(0deg)";

    objSlideMenuImageInactive.style.opacity = 1;
    objSlideMenuImageInactive.style.transform = "rotate(0deg)";
}