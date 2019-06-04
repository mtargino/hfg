// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Listen to tab events to enable outlines (accessibility improvement)
document.body.addEventListener('keyup', function (e) {
    if (e.which === 9) /* tab */ {
        document.documentElement.classList.remove('no-focus-outline');
    }

    document.body.addEventListener("click", function () {
        document.documentElement.classList.add('no-focus-outline');
    });
});

var bamboo =  0; 

function ShowMenu() {
    if (bamboo == 0) {
        $('.navbar__links__list').css({ left: "0" });
        $('.navbar__hamburger').css({transform: "translateX(calc(75vw - 75px))"});
        $('#hbg-icon').addClass("uil-multiply");
        $('#hbg-icon').removeClass("uil-subject");
        $('.menu-shadow').css({display: "flex"});
        $('.menu-shadow').css({opacity: "1"});
        bamboo = 1;
    } else {
        $('.navbar__links__list').css({ left: "-100vw" });
        $('.navbar__hamburger').css({transform: "none"});
        $('#hbg-icon').removeClass("uil-multiply");
        $('#hbg-icon').addClass("uil-subject");
        $('.menu-shadow').css({display: "none"});
        $('.menu-shadow').css({opacity: "0"});
        bamboo =  0;
    }

}

function post01() {
    $('#control-2').removeClass("banner__controls__item__button--active");
    $('#control-3').removeClass("banner__controls__item__button--active");
    $('#control-1').addClass("banner__controls__item__button--active");

    $('#post-1').removeClass("post--out");
    $('#post-2').addClass("post--out");
    $('#post-3').addClass("post--out");
    $('.banner__image').css({ background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('assets/images/banner-image.png')" });
}
function post02() {
    $('#control-1').removeClass("banner__controls__item__button--active");
    $('#control-3').removeClass("banner__controls__item__button--active");
    $('#control-2').addClass("banner__controls__item__button--active");

    $('#post-1').addClass("post--out");
    $('#post-2').removeClass("post--out");
    $('#post-3').addClass("post--out");

    $('.banner__image').css({ background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('assets/images/banner-image_3.jpg')" });
}
function post03() {
    $('#control-1').removeClass("banner__controls__item__button--active");
    $('#control-2').removeClass("banner__controls__item__button--active");
    $('#control-3').addClass("banner__controls__item__button--active");

    $('#post-1').addClass("post--out");
    $('#post-2').addClass("post--out");
    $('#post-3').removeClass("post--out");

    $('.banner__image').css({ background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url('assets/images/banner-image_2.png')" });
}