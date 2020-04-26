var i = 0;
var txt = 'Witam, nazywam się Wojciech Gołda i oto moje porfolio.';
var speed = 75;
typeWriter();

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
$(document).on("scroll", function () {
    var pos = $(window).scrollTop().toFixed();
    if (pos > 300) {
        setTimeout(function () { $('.menu ').addClass("active"); }, 500);
    }
})

$(".fas").on("click", function () {
    console.log("kliknieto");
    //robi odrazu id

    $('.schools').addClass("height");
    $('body,html').animate({
        scrollTop: $(".schools").offset().top
    }, 1000);
    setTimeout(function () { $('.menu ').addClass("active"); }, 1000);

})


