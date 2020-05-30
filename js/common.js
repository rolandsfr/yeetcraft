$("[data-src]").each(function(index, el) {
    $(el).css("background-image", "url(" + $(el).attr("data-src") + ")");
});

function normalizeViewport(el, outsider) {
    $(el).height($(window).height() - $(outsider).outerHeight());
}

function adaptForMenu(mainEl) {
    $(mainEl).css("transition", "0.5s ease-in").toggleClass("adaptForMenu");
}

function adaptForMenu2(mainEl) {
    $(mainEl).css("transition", "0.5s ease-in").toggleClass("adaptForMenu2");
}