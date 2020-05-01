var i = 0;
var w = 0;
var licznikikon = 0;
var txt3 = "Nazywam się Wojciech Gołda i oto moje portfolio";
var speed = 75;
typeWriter();
var umiejetności = ["Android", "HTML5", "CSS3", "JavaScript", "Java", "Github", "React.js", "Node.js"];
var icons = ["fa-android", "fa-html5", "fa-css3-alt", "fa-js", "fa-java", "fa-git-square", "fa-react", "fa-node-js"];
var opisy = ["Mam roczne komercyjne doświadczenie w programowaniu aplikacji na system android dodatkowo tematem mojej pracy inżynierskiej było między innymi zaprogramowanie aplikacji mobilnej "
    , "Na studiach nauka obejmowała zakres HTML5 stąd znam podstawy. Od 5 miesięcy szkole się projektując własne strony za pomocą HTML5. Wiedzę zdobywałem również na kusie WebSamuraja na platformie Udemy",
    "Nauke kaskadowego arkusza stylów rozpocząłem na studiach i od 5 miesięcy równolegle z HTMLem uczę sie kolejnych informacji"
    , "Nauke JavaScripta rozpocząłem również na studiach i po poznaniu HTMLa oraz CSS zdobywam kolejną bardziej zaawansowaną wiedzę",
    "Język Java jest przeze mnie najbardziej znany ponieważ w jęzku tym pracowałem z klinetami komercyjnymi oraz poznawałem go pisząc prace dyplomową",
    "Platforme Github poznałem na studiach i od początku tworzenia przeze mnie projektów korzystam z niej i wrzucam na nią swoją pracę",
    "Reacta zaczałem uczyć sie od miesiąca i staram się go coraz bardziej poznawać"
    , "W przyszłości planuje zgłebiać swoją wiedze na temad Node.js"];
var liczbaumiejetnosci = icons.length;
$(".opis").text(opisy[0]);
$(".umiejetnosc").text(umiejetności[0]);
zmientlo(0);




$(".fa-arrow-right").on("click", function () {

    $(".fab").removeClass(icons[licznikikon]);
    $(".umiejetnosc").removeClass("efekt");
    $(".opis").removeClass("efektopis");


    licznikikon++;
    $(".fa-arrow-right").animate({ right: '0' }, "slow");
    $(".fa-arrow-right").animate({ right: '5%' }, "slow");


    $(".umiejetnosc").animate({ opacity: '0.3' }, "fast");
    $(".umiejetnosc").animate({ opacity: '1' }, "fast");

    if (licznikikon == icons.length) {
        licznikikon = 0;
    }


    // console.log(licznikikon);
    $(".fab").animate({ opacity: '0' }, "slow");
    $(".umiejetnosc").addClass("efekt");
    $(".fab").addClass(icons[licznikikon]);
    $(".opis").text(opisy[licznikikon]);
    $(".opis").addClass("efektopis");
    $(".umiejetnosc").text(umiejetności[licznikikon]);
    $(".fab").animate({ opacity: '1' }, "slow");
    zmientlo(licznikikon);


})
$(".fa-arrow-left").on("click", function () {
    $(".fab").removeClass(icons[licznikikon]);
    licznikikon--;
    $(".fa-arrow-left").animate({ left: '0' }, "slow");
    $(".fa-arrow-left").animate({ left: '5%' }, "slow");
    $(".umiejetnosc").animate({ opacity: '0.3' }, "fast");
    $(".umiejetnosc").animate({ opacity: '1' }, "fast");
    if (licznikikon < 0) {
        licznikikon = icons.length - 1;
    }
    zmientlo(licznikikon);

    console.log(licznikikon);
    $(".fab").animate({ opacity: '0' }, "slow");
    $(".fab").addClass(icons[licznikikon]);
    $(".opis").text(opisy[licznikikon]);
    $(".umiejetnosc").text(umiejetności[licznikikon]);

    $(".fab").animate({ opacity: '1' }, "slow");
})
function zmientlo(licznik) {
    for (i = 1; i <= 8; i++) {
        $(".tlo3 div.kropki div.kropka:nth-of-type(" + i + ")").removeClass("dodawanietla");
        $(".tlo3 div.kropki div.kropka:nth-of-type(" + i + ")").removeClass("odejmowanietla");
        if (i <= licznik + 1) {
            $(".tlo3 div.kropki div.kropka:nth-of-type(" + i + ")").addClass("dodawanietla");
            console.log("dodaj" + i);

        }
        else {
            console.log("odejmij" + i);
            $(".tlo3 div.kropki div.kropka:nth-of-type(" + i + ")").addClass("odejmowanietla");
        }
    }
}

function typeWriter() {
    if (w < txt3.length) {
        document.getElementById("text2").innerHTML += txt3.charAt(w);
        w++;
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



$("div.three img.git").on("click", function () {
    document.querySelector("div.three a:nth-of-type(1)").href = "#";
    window.open("https://github.com/sterownik/mPogoda", "_self");
})
$("div.second img.git").on("click", function () {
    document.querySelector("div.three a:nth-of-type(1)").href = "#";
    window.open("https://github.com/sterownik/mPogoda", "_self");
})
$("div.three img.git").on("click", function () {
    document.querySelector("div.three a:nth-of-type(1)").href = "#";
    window.open("https://github.com/sterownik/mPogoda", "_self");
})
$("div.logogita").on("click", function () {
    window.open("https://github.com/sterownik?tab=repositories", "_self");
})
$(".menu ul li a.nauka").on("click", function () {
    $('body,html').animate({
        scrollTop: $(".schools").offset().top
    }, 1000);
})
$(".menu ul li a.projekty").on("click", function () {
    $('body,html').animate({
        scrollTop: $(".projects").offset().top
    }, 1000);
})
$(".menu ul li a.kontakty").on("click", function () {
    $('body,html').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
})


