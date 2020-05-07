$(document).ready(function () {
    $(".js-accordion .head").click(function () {
        $(".body").not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

    $(".js-modal-open").click(function () {
        $(".js-modal").fadeIn();
    });

    $(".js-modal-close").click(function () {
        $(this).closest(".js-modal").fadeOut();
    });
});