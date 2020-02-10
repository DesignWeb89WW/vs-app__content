$(function () {
    $('.ge-asp-gridview').parent().addClass('responsive');
    $('.ge-asp-repeater').parent().addClass('responsive');
    //$('.select2-control').select2();
    function_navigation();
    function_switcher();
    function_alert();
    function_accordion();
    function_modal();
});

function function_navigation() {
    $('.ge-menu-button').click(function (e) {
        e.preventDefault()
        $(this).toggleClass('open');
        $('.ge-body').toggleClass('open');
    });

    $('.ge-menu-main li > button').click(function (e) {
        e.preventDefault()
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-folder-open');
        $(this).next().slideToggle();
    });
};

function function_switcher() {
    $('.tab-switcher .ge-tabs a').click(function (e) {
        e.preventDefault();
        var parent = "#" + $(this).data("parent");
        var target = $(this).attr("href");
        //console.log(parent);
        $(parent).find(".ge-tabs a").removeClass("active");
        $(parent).find(".ge-switcher-pane").removeClass("active");
        $(this).addClass("active");
        $(target).addClass("active");
    });
};

function function_alert() {
    $('.ge-alert .close').click(function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });
};

function function_accordion() {
    $('.ge-accordion-title').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
        if ($(this).next().hasClass('open')) {
            //$(this).next().removeClass('open');
        }
    });
};

function function_modal() {
    $('.call-modal').click(function (e) {
        e.preventDefault();
        $('body').addClass('modal-active');
        var target = $(this).attr("href");
        $(target).addClass("show");
    });
    $('.close-modal').click(function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('body').addClass('modal-closing').removeClass('modal-active').delay(600).queue(function () {
            $(this).removeClass('modal-closing').dequeue();
            $(target).removeClass('show');
        });
    });
}