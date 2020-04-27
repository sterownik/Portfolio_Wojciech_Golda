var i = 0;
var licznikikon = 0;
var txt = 'Witam, nazywam się Wojciech Gołda i oto moje porfolio.';
var speed = 75;
typeWriter();
var icons = ["fa-android", "fa-html5", "fa-css3-alt", "fa-js", "fa-java", "fa-git-square", "fa-react", "fa-node-js"];
var liczbaumiejetnosci = icons.length;
$(".numer").text(licznikikon + 1 + " / " + liczbaumiejetnosci);
$(".fa-arrow-right").on("click", function () {

    $(".fab").removeClass(icons[licznikikon]);

    licznikikon++;
    $(".fa-arrow-right").animate({ right: '0' }, "slow");
    $(".fa-arrow-right").animate({ right: '5%' }, "slow");


    if (licznikikon == icons.length) {
        licznikikon = 0;
    }
    $(".numer").text(licznikikon + 1 + " / " + liczbaumiejetnosci);
    console.log(licznikikon);
    $(".fab").animate({ opacity: '0' }, "slow");


    $(".fab").addClass(icons[licznikikon]);

    $(".fab").animate({ opacity: '1' }, "slow");


})
$(".fa-arrow-left").on("click", function () {
    $(".fab").removeClass(icons[licznikikon]);
    licznikikon--;
    $(".fa-arrow-left").animate({ left: '0' }, "slow");
    $(".fa-arrow-left").animate({ left: '5%' }, "slow");

    if (licznikikon < 0) {
        licznikikon = icons.length - 1;
    }
    $(".numer").text(licznikikon + 1 + " / " + liczbaumiejetnosci)
    console.log(licznikikon);
    $(".fab").animate({ opacity: '0' }, "slow");
    $(".fab").addClass(icons[licznikikon]);
    $(".fab").animate({ opacity: '1' }, "slow");
})

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

$(".fa-arrow-down").on("click", function () {
    console.log("kliknieto");
    //robi odrazu id

    $('.schools').addClass("height");
    $('body,html').animate({
        scrollTop: $(".schools").offset().top
    }, 1000);
    setTimeout(function () { $('.menu ').addClass("active"); }, 1000);

})


