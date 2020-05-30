$(".preloader-img").addClass("fadeIn");

$(window).on("load", () => {
    setTimeout(() => {
        $(".preloader").animate({opacity: 0}, 500, () => {
        $(".preloader").css("display", "none");
        $(".preloader-img").removeClass("rotate");
        $("body").css("overflow", "visible");})
        AOS.init();

    }, 1500);

});


let bars = $(".burger-menu");

$("#wrapper").css("min-height", ($(window).height() + "px"));


$(window).resize(() => {
    $("#wrapper").css("min-height", ($(window).height() + "px"));
})

$("a").each((index, el) => {
    $(el).on("click", (event) => {
        event.preventDefault();
        $("body").css("overflow", "hidden");
        $(".page-unloader").css("display", "block");
        $(".page-unloader").animate({opacity: 1}, 400);

        setTimeout(() => {
            window.location.href = $(el).attr("href");
        }, 500);
    });
});
