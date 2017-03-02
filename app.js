var buttonR = document.getElementById("right");

buttonR.addEventListener("click", function rightGallery() {

    for (var i=0; i<10; i++) {

        var start = document.getElementById("zdj");
        var image ="<img src=\"img/hex" + i + ".png\">";

        start.innerHTML = image;
    }
})






