function scroll_top() {
    $("html, body").animate({
        scrollTop: "0px"
    });
};

function scroll_skill() {
    $("html, body").animate({
        scrollTop: "600px"
    });
};

function scroll_portfolio() {
    $("html, body").animate({
        scrollTop: "1306px"
    });
};
// $(window).scroll(function() {
//     var wScroll = $(this).scrollTop();
//     console.log(wScroll);
//     if (wScroll > 0) {
//         $('.menu').css({
//             'display': 'block',
//         });
//         if (wScroll < 150) {
//             $('#about_me').css({
//                 'background': '#424242',
//             });
//             $('#skill').css({
//                 'background': 'transparent',
//             });
//             $('#portfolio').css({
//                 'background': 'transparent',
//             });
//         } else if (wScroll >= 150 && wScroll < 500) {
//             $('#about_me').css({
//                 'background': 'transparent',
//             });
//             $('#skill').css({
//                 'background': '#424242',
//             });
//             $('#portfolio').css({
//                 'background': 'transparent',
//             });
//         } else if (wScroll >= 500) {
//             $('#about_me').css({
//                 'background': 'transparent',
//             });
//             $('#skill').css({
//                 'background': 'transparent',
//             });
//             $('#portfolio').css({
//                 'background': '#424242',
//             });
//         }
//     } else {
//         $('.menu').css({
//             'display': 'none',
//         });
//     }
// });



