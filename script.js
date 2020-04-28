var i = 0;
var licznikikon = 0;
var txt = 'Witam, nazywam się Wojciech Gołda i oto moje porfolio.';
var speed = 75;
typeWriter();
var icons = ["fa-android", "fa-html5", "fa-css3-alt", "fa-js", "fa-java", "fa-git-square", "fa-react", "fa-node-js"];
var opisy = ["Android" + document.write('<br') + " Mam roczne komercyjne doświadczenie w programowaniu aplikacji na system android dodatkowo tematem mojej pracy inżynierskiej było między innymi zaprogramowanie aplikacji mobilnej "
    , "HTML5<br>Na studiach nauka obejmowała zakres HTML5 stąd znam podstawy. Od 5 miesięcy szkole się projektując własne strony za pomocą HTML5. Wiedzę zdobywałem również na kusie WebSamuraja na platformie Udemy",
    "CSS3<br>Nauke kaskadowego arkusza stylów rozpocząłem na studiach i od 5 miesięcy równolegle z HTMLem uczę sie kolejnych informacji"
    , "JavaScript<br> Nauke JavaScripta rozpocząłem również na studiach i po poznaniu HTMLa oraz CSS zdobywam kolejną bardziej zaawansowaną wiedzę",
    "Java<br>Język Java jest przeze mnie najbardziej znany ponieważ w jęzku tym pracowałem z klinetami komercyjnymi oraz poznawałem go pisząc prace dyplomową",
    "GitHub<br>Platforme Github poznałem na studiach i od początku tworzenia przeze mnie projektów korzystam z niej i wrzucam na nią swoją pracę",
    "React<br>Reacta zaczałem uczyć sie od miesiąca i staram się go coraz bardziej poznawać"
    , "Node<br>W przyszłości planuje zgłebiać swoją wiedze na temad Node.js"];
var liczbaumiejetnosci = icons.length;
$(".numer").text(licznikikon + 1 + " / " + liczbaumiejetnosci);
$(".opis").text(opisy[0]);
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
    $(".opis").text(opisy[licznikikon]);

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
    $(".opis").text(opisy[licznikikon]);
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


