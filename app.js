var buttonR = document.getElementById("right");
var buttonL = document.getElementById("left");
var i=0;
buttonR.addEventListener("click", function rightGallery() {

        var start = document.getElementById("zdj");

        var i_right= i+1;
        if (i>8) i_right=1;

        var image ="<img src=\"img/hex" + i_right + ".png\">";
        start.innerHTML = image;

        i = i_right;

})


buttonL.addEventListener("click", function leftGallery() {

    var start = document.getElementById("zdj");

    var i_left =i-1;
    if (i<1) i_left=9;

    var image ="<img src=\"img/hex" + i_left + ".png\">";
    start.innerHTML = image;

    i = i_left;

})







