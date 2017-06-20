
document.write(
'<header>'+
'<nav><ul>'+
'<li id="index"><a href="index">Home</a></li>'+
'<li id="portfolio"><a href="portfolio">Portfolio</a></li>'+
'<li id="about"><a href="about">About</a></li>'+
'<li id="contact"><a href="contact">Contact</a></li>'+
'</ul></nav></header>'
);




if (page=="portfolio") {
    $('li').removeClass('active');
    $('li#portfolio').addClass('active');
};

if (page=="about") {
    $('li').removeClass('active');
    $('li#about').addClass('active');
};


if (page=="index") {
    $('li').removeClass('active');
    $('li#index').addClass('active');
};

if (page=="contact") {
    $('li').removeClass('active');
    $('li#contact').addClass('active');
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
