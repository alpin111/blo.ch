
document.write(
'<header>'+
'<nav><ul><div id="navigaton">'+

'<li ><a href="portfolio">Portfolio</a></li>'+
'<li ><a href="about">About</a></li>'+

'</div></ul></nav></header>'+

'<div class="logo">'+
'<a href="index">'+
'<span class="text_concept">text & concept</span>'+
'<span class="kevin_bloch">Kevin Bloch</span>'+
'<span class="cursor">|    </span>'+
'</a>'+
'</div>'
);





$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $("header").addClass("scrolledHeader");
        $("nav").addClass("scrollednav");
        $(".scroll").addClass("scroll_element");

    } else {
        $("header").removeClass("scrolledHeader");
        $("nav").removeClass("scrollednav");
        $(".scroll").removeClass("scroll_element");
    }
});
