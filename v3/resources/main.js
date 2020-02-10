$(function() {
    $('.data-tbl-gridview').wrap('<div class="responsive"></div>');
    $('.data-tbl-repeater').wrap('<div class="responsive"></div>');
    $('.report-table_details').wrap('<div class="responsive"></div>');
    //$('.select2-control').select2();
    function_navigation();
    function_switcher();
    function_alert();
    function_accordion();
    function_modal();
});

function function_navigation() {
    $('.menu-button').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('open');
        $('.body').toggleClass('open');
    });

    $('.menu-main li > button').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-folder-open');
        $(this).next().slideToggle();
    });

    $('.dropdown-button').click(function(e) {
        e.preventDefault()
        $(this).next().toggleClass('open');
    });
};

function function_switcher() {
    $('.tab-switcher .tabs a').click(function(e) {
        e.preventDefault();
        var parent = "#" + $(this).data("parent");
        var target = $(this).attr("href");
        //console.log(parent);
        $(parent).find(".tabs a").removeClass("active");
        $(parent).find(".switcher-pane").removeClass("active");
        $(this).addClass("active");
        $(target).addClass("active");
    });
};

function function_alert() {
    $('.alert .close').click(function(e) {
        e.preventDefault();
        $(this).parent().remove();
    });
};

function function_accordion() {
    $('.accordion-title').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).next().slideToggle();
    });

    $('.default-active').children(".accordion-title").addClass("open");
    $('.default-active').children(".accordion-content").addClass("open");

    $('.open-all').click(function (e) {
        e.preventDefault();
        $('.accordion-title').toggleClass('open');
        $('.accordion-content').slideToggle();
    });

    $('.sidebar .title').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).next().slideToggle();
    });
};

function function_modal() {
    $('.call-modal').click(function(e) {
        e.preventDefault();
        $('body').addClass('modal-active');
        var target = $(this).attr("href");
        $(target).addClass("show");
    });
    $('.close-modal').click(function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('body').addClass('modal-closing').removeClass('modal-active').delay(600).queue(function() {
            $(this).removeClass('modal-closing').dequeue();
            $(target).removeClass('show');
        });
    });
}