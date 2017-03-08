var next = document.getElementById("right");
var prev = document.getElementById("left");

var viewer = document.getElementById("viewer");
var images = [];
var image;


for (var l = 0; l < 8; l++) {

    image = new Image();
    image.src = './img/hex' + l + '.png';
    images.push(image);
}

var i=0;

next.addEventListener("click", function() {

    (i == images.length-1) ? i = 0 : i++;
    viewer.src = images[i].src;

});

prev.addEventListener("click", function() {

    (i == 0) ? i = images.length-1 : i--;
    viewer.src = images[i].src;

});






