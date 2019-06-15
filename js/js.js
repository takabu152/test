
$(function () {
    $('#ABOUT-JS').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

$(function () {
    $('#COURSE-JS').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});


$(function () {
    $('#NEWS-JS').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});


$(function () {
    $('#ACCESS-JS').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});


$(function () {
    $('#CONTACT-JS').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});


$(function () {
    $('.top-button').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

$(function () {
    $('a[href^=#]').click(function () {
    });
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        slidesToShow: 3,
        autoplay: true
        // prevArrow: '<div class="prev">PREV</div>',
        // nextArrow: '<div class="next">NEXT</div>'
        // setting- name: setting-value
    });
});

$("#email").emailautocomplete({
    //domains: ["gmail.com", "yahoo.co.jp"]
});

$(function () {
    $("#header-logo").on({
        "click": function () {
            $(this).addClass("animated swing");
        },
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend": function () {
            $(this).removeClass("animated swing");
        }
    });
});

$(function () {
    $("#header-logo").on({
        "mouseover": function () {
            $(this).addClass("animated swing");
        },
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend": function () {
            $(this).removeClass("animated swing");
        }
    });
});

$(function () {
    $(".main-navi-text-title").on({
        "mouseover": function () {
            $(this).addClass("animated swing");
        },
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend": function () {
            $(this).removeClass("animated swing");
        }
    });
});


$(function () {
    $("#COURSE-JS").on({
        "mouseover": function () {
            $(this).addClass("animated swing");
        },
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend": function () {
            $(this).removeClass("animated swing");
        }
    });
});


$(function () {
    $("#NEWS-JS").on({
        "mouseover": function () {
            $(this).addClass("animated swing");
        },
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend": function () {
            $(this).removeClass("animated swing");
        }
    });
});


$(function () {
    $("#ACCESS-JS").on({
        "mouseover": function () {
            $(this).addClass("animated swing");
        },
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend": function () {
            $(this).removeClass("animated swing");
        }
    });
});


$(function () {
    $("#CONTACT-JS").on({
        "mouseover": function () {
            $(this).addClass("animated swing");
        },
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend": function () {
            $(this).removeClass("animated swing");
        }
    });
});


$(function () {
    $("#about_01_jpg").on({
        "click": function () {
            $('#about_01_jpg').attr('src', 'img/meat.jpg');
        }
    });
});


$(function () {
    $("#about_02_jpg").on({
        "click": function () {
            $('#about_02_jpg').attr('src', 'img/meat2.jpeg');
        }
    });
});


$(function () {
    $("#about_03_jpg").on({
        "click": function () {
            $('#about_03_jpg').attr('src', 'img/meat3.jpg');
        }
    });
});

$(function () {
    $("#about_04_jpg").on({
        "click": function () {
            $('#about_04_jpg').attr('src', 'img/meat4.jpg');
        }
    });
});


$(function () {
    $("#about_02_jpg_flex").on({
        "mouseover": function () {
            $(this).addClass("animated swing");
            $('#about_02_jpg_flex').attr('src', 'img/meat4.jpg');
        },
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend": function () {
            $(this).removeClass("animated swing");
        }
    });
});

$(function () {
    $("#about_02_jpg_flex").on({
        "mouseout": function () {
            $(this).addClass("animated swing");
            $('#about_02_jpg_flex').attr('src', 'img/about_02.jpg');

        },
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend": function () {
            $(this).removeClass("animated swing");
        }
    });
});

$(function () {
    $("#h1_title_text").on({
        "click": function () {
            document.getElementById("h1_title_text").innerText = "セカイを変える肉を焼こう";
        }
    });
});

$(function () {
    $("#h2_title_text").on({
        "click": function () {
            document.getElementById("h1_title_text").innerText = "焼肉職人養成学校「ミートアカデミーFUKUOKA";
        }
    });
});

$(function () {
    $("#header").on({
        "click": function () {
            $('#header').css({
                backgroundImage: 'url("https://img.gifmagazine.net/gifmagazine/images/3313754/original.gif")' // "" で括っていないとIEでは表示されない
            });
        }
    });
});


// $('.slider').slick({
//     autoplay: true,
//     autoplaySpeed: 5000,
//     dots: true,
// });