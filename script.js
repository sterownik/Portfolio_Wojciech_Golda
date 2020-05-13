var i = 0;
var w = 0;
var sprawdz = 1;
var sprawdz2 = 1;
var licznikikon = 0;
var txt3 = "Nazywam się Wojciech Gołda i oto moje portfolio";
var speed = 75;
typeWriter();
// napisy do wstawienia w sekcji umiejetnosci
var umiejetności = ["Android", "HTML5", "CSS3", "JavaScript", "Java", "Github", "React.js", "Node.js"];
var icons = ["fa-android", "fa-html5", "fa-css3-alt", "fa-js", "fa-java", "fa-git-square", "fa-react", "fa-node-js"];
var opisy = ["Mam roczne komercyjne doświadczenie w programowaniu aplikacji na system android dodatkowo tematem mojej pracy inżynierskiej było między innymi zaprogramowanie aplikacji mobilnej ", "Na studiach nauka obejmowała zakres HTML5 stąd znam podstawy. Od 5 miesięcy szkole się projektując własne strony za pomocą HTML5. Wiedzę zdobywałem również na kusie WebSamuraja na platformie Udemy",
    "Nauke kaskadowego arkusza stylów rozpocząłem na studiach i od 5 miesięcy równolegle z HTMLem uczę sie kolejnych informacji", "Nauke JavaScripta rozpocząłem również na studiach i po poznaniu HTMLa oraz CSS zdobywam kolejną bardziej zaawansowaną wiedzę",
    "Język Java jest przeze mnie najbardziej znany ponieważ w jęzku tym pracowałem z klinetami komercyjnymi oraz poznawałem go pisząc prace dyplomową",
    "Platforme Github poznałem na studiach i od początku tworzenia przeze mnie projektów korzystam z niej i wrzucam na nią swoją pracę",
    "W bliskiej przyszłosci planuje uczyć się Reacta.js", "W przyszłości planuje zgłebiać swoją wiedze na temad Node.js"
];
var liczbaumiejetnosci = icons.length;
$(".opis").text(opisy[0]);
$(".umiejetnosc").text(umiejetności[0]);
zmientlo(0);
//animacja nacisniecia zeby strzalka szla w prawo
function prawe() {


    $(".tlo3 .fa-arrow-right").removeClass("prawastrzalka");
    $(".tlo3 .fa-arrow-right").animate({
        right: '0'
    }, "slow");
    $(".tlo3 .fa-arrow-right").animate({
        right: '5%'
    }, "slow");
    sprawdz = 2;


}
//animacja nacisniecia zeby strzalka szla w lewo
function lewe() {
    $(".tlo3 .fa-arrow-left").removeClass("lewastrzalka");
    $(".tlo3 .fa-arrow-left").animate({
        left: '0'
    }, "slow");
    $(".tlo3 .fa-arrow-left").animate({
        left: '5%'
    }, "slow");
    sprawdz = 2;
}
$(".fa-arrow-right").on("click", function () {
    $("p.opis").removeClass("dodajopiszdolu");
    $(".fab").removeClass(icons[licznikikon]);
    $(".umiejetnosc").removeClass("efekt");
    $("p.opis").removeClass("efektopis");
    licznikikon++;
    $(".umiejetnosc").animate({
        opacity: '0.3'
    }, "fast");
    $(".umiejetnosc").animate({
        opacity: '1'
    }, "fast");

    if (licznikikon == icons.length) {
        licznikikon = 0;
    }
    $(".fab").animate({
        opacity: '0'
    }, "slow");
    $(".umiejetnosc").addClass("efekt");
    $(".fab").addClass(icons[licznikikon]);
    $(".opis").text(opisy[licznikikon]);
    $(".opis").addClass("efektopis");
    $(".umiejetnosc").text(umiejetności[licznikikon]);
    $(".fab").animate({
        opacity: '1'
    }, "slow");
    zmientlo(licznikikon);

})
$(".fa-arrow-left").on("click", function () {
    $(".tlo3p .opis").removeClass("dodajopiszdolu");
    $(".tlo3 .fab").removeClass(icons[licznikikon]);
    $(".tlo3 .umiejetnosc").removeClass("efekt");
    $("p.opis").removeClass("efektopis");

    $(".umiejetnosc").animate({
        opacity: '0.3'
    }, "fast");
    $(".umiejetnosc").animate({
        opacity: '1'
    }, "fast");
    licznikikon--;

    if (licznikikon < 0) {
        licznikikon = icons.length - 1;
    }
    $(".opis").css("opacity", "1");
    $(".fab").animate({
        opacity: '0'
    }, "slow");
    $(".umiejetnosc").addClass("efekt");
    $(".fab").addClass(icons[licznikikon]);
    $(".opis").text(opisy[licznikikon]);
    $(".opis").addClass("efektopis");
    $(".umiejetnosc").text(umiejetności[licznikikon]);
    $(".fab").animate({
        opacity: '1'
    }, "slow");
    zmientlo(licznikikon);


})
//zmiana umiejetnosci po nacisneiu
function zmientlo(licznik) {
    for (i = 1; i <= 8; i++) {
        $(".tlo3 div.kropki div.kropka:nth-of-type(" + i + ")").removeClass("dodawanietla");
        $(".tlo3 div.kropki div.kropka:nth-of-type(" + i + ")").removeClass("odejmowanietla");
        if (i <= licznik + 1) {
            $(".tlo3 div.kropki div.kropka:nth-of-type(" + i + ")").addClass("dodawanietla");
            console.log("dodaj" + i);

        } else {
            console.log("odejmij" + i);
            $(".tlo3 div.kropki div.kropka:nth-of-type(" + i + ")").addClass("odejmowanietla");
        }
    }
}
//automatyczne pisanie
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
        setTimeout(function () {
            $('.menu ').addClass("active");
        }, 500);
    }
})
// animacja strzalki w headerze
$(".fa-arrow-down").on("click", function () {
    console.log("kliknieto");
    //robi odrazu id

    $('.schools').addClass("height");
    $('body,html').animate({
        scrollTop: $(".schools").offset().top
    }, 1000);
    setTimeout(function () {
        $('.menu ').addClass("active");
    }, 1000);

})


// otwieranie repozytoriow na gicie
$("div.three img.git").on("click", function () {
    document.querySelector("div.three a:nth-of-type(1)").href = "#";
    window.open("https://github.com/sterownik/mPogoda", "_self");
})
$("div.second img.git").on("click", function () {
    document.querySelector("div.three a:nth-of-type(1)").href = "#";
    window.open("https://github.com/sterownik/mFiszki", "_self");
})
$("div.three img.git").on("click", function () {
    document.querySelector("div.three a:nth-of-type(1)").href = "#";
    window.open("https://github.com/sterownik/mPogoda", "_self");
})

$("div.four img.git").on("click", function () {
    document.querySelector("div.three a:nth-of-type(1)").href = "#";
    window.open("https://github.com/sterownik/mCoronovirus", "_self");
})
$("div.four img.focus").on("click", function () {
    document.querySelector("div.three a:nth-of-type(1)").href = "#";
    window.open("https://sterownik.github.io/mCoronovirus/", "_self");
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

// dodanie animacji po skrollu na dany element
$(window).on("scroll", function () {
    const skroll = $(window).scrollTop();
    const wys2 = $(".highschool").outerHeight();
    const pos2 = $(".highschool").offset().top;

    const wys3 = $(".studies").outerHeight();
    const pos3 = $(".studies").offset().top;

    const wys4 = $(".skills").outerHeight();
    const pos4 = $(".skills").offset().top;

    const wys5 = $(".first").outerHeight();
    const pos5 = $(".first").offset().top;

    const wys6 = $(".second").outerHeight();
    const pos6 = $(".second").offset().top;

    const wys7 = $(".three").outerHeight();
    const pos7 = $(".three").offset().top;

    const wys8 = $(".four").outerHeight();
    const pos8 = $(".four").offset().top;

    const windowHeight = $(window).height();

    if (skroll > pos2 + wys2 - windowHeight) {
        $(".tlo .budynek").addClass("activeb");
        $(".tlo p").addClass("tekst");
        console.log("teraz");
    }

    if (skroll > pos3 + wys3 - windowHeight) {
        $(".tlo2 .budynek").addClass("active");
        $(".tlo2 p").addClass("tekst2");
    }

    if (skroll > pos4 + wys4 - windowHeight) {
        $(".tlo3 .fa-arrow-right").css("opacity", "1");
        $(".tlo3 .fa-arrow-left").css("opacity", "1");
        if (sprawdz != 2) {
            $(".tlo3 .fa-arrow-right").addClass("prawastrzalka");
            $(".tlo3 .fa-arrow-left").addClass("lewastrzalka");

        }
        $(".tlo3 p.umiejetnosc").css("opacity", "1");
        $(".tlo3 p.opis").css("opacity", "1");
        $(".tlo3 .fab").addClass("fabadd");
        $(".tytul").addClass("efekttytul");
        $(".kropki").addClass("dodajkropki");


        $(".tlo3 p.umiejetnosc").addClass("dodajanimacjanazwa");
        $(".tlo3 p.opis").addClass("dodajopiszdolu");
    }
    if (skroll > pos5 + wys5 - windowHeight) {
        $("div.first a:nth-of-type(1)").addClass("klasaprojektyanimacja");
        $("p.first").addClass("animacjatytulprojektu");
    }
    if (skroll > pos6 + wys6 - windowHeight) {
        $("div.second a:nth-of-type(1)").addClass("klasaprojektyanimacja");
        $("p.second").addClass("animacjatytulprojektu");

    }
    if (skroll > pos7 + wys7 - windowHeight) {
        $("div.three a:nth-of-type(1)").addClass("klasaprojektyanimacja");
        $("p.three").addClass("animacjatytulprojektu");
    }

    if (skroll > pos8 + wys8 - windowHeight) {
        $("div.four a:nth-of-type(1)").addClass("klasaprojektyanimacja");
        $("p.four").addClass("animacjatytulprojektu");
    }

    // usuwanie animacji zeby byly nie widoczne po powroocie do poczatku
    if (skroll < 100) {
        //    $(".fa-arrow-left").animate({ opacity: '0' }, "0.2s");
        // $(".fa-arrow-right").animate({ opacity: '0' }, "0.2s");
        sprawdz = 1;
        sprawdz2 = 1;
        $(".tlo3 .fa-arrow-right").css("opacity", "0");
        $(".tlo3 .fa-arrow-left").css("opacity", "0");
        $(".tlo3 .fa-arrow-right").removeClass("prawastrzalka");
        $(".tlo3 .fa-arrow-left").removeClass("lewastrzalka");
        $(".umiejetnosc").removeClass("efekt");

        $(".opis").removeClass("efektopis");
        // $(".fa-arrow-left").addClass("lewa");
        $(".tlo .budynek").removeClass("activeb");
        $(".tlo p").removeClass("tekst");
        $(".tlo2 .budynek").removeClass("active");
        $(".tlo2 p").removeClass("tekst2");
        $(".tlo3 .fab").removeClass("fabadd");
        $(".tytul").removeClass("efekttytul");
        $(".kropki").removeClass("dodajkropki");
        // $(".tlo3 .fa-arrow-right").removeClass("prawa");
        $(".tlo3 p.umiejetnosc").removeClass("dodajanimacjanazwa");
        $(".tlo3 p.umiejetnosc").css("opacity", "0");

        $(".tlo3 p.opis").removeClass("dodajopiszdolu");
        $(".tlo3 p.opis").css("opacity", "0");
        $("div.first a:nth-of-type(1)").removeClass("klasaprojektyanimacja");
        $("p.first").removeClass("animacjatytulprojektu");
        $("div.second a:nth-of-type(1)").removeClass("klasaprojektyanimacja");
        $("p.second").removeClass("animacjatytulprojektu");
        $("div.three a:nth-of-type(1)").removeClass("klasaprojektyanimacja");
        $("p.three").removeClass("animacjatytulprojektu");

        $("div.four a:nth-of-type(1)").removeClass("klasaprojektyanimacja");
        $("p.four").removeClass("animacjatytulprojektu");
    }
})