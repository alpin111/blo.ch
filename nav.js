
document.write(
'<header>'+
'<nav><ul>'+

'<li id="portfolio"><a href="portfolio">Portfolio</a></li>'+
'<li id="about"><a href="about">About</a></li>'+

'</ul></nav></header>'+

'<div class="logo">'+
'<a href="index">'+
'<span class="text_concept">text & concept</span>'+
'<span class="kevin_bloch">Kevin Bloch</span>'+
'<span class="cursor">|    </span>'+
'</a>'+
'</div>'
);





if (page=="portfolio") {
    $('li').removeClass('active');
    $('li#portfolio').addClass('active');
};

if (page=="about") {
    $('li').removeClass('active');
    $('li#about').addClass('active');
};



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
