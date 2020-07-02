$(function() {
    $('.js-datatbl').wrap('<div class="responsive"></div>');
    $('.js-datatbl-gv').parent('<div>').addClass('.responsive');

    function_navigation();
    function_switcher();
    function_alert();
    function_accordion();
    function_modal();
    function_numerics();
});

function function_navigation() {
    $('.js-toggleclass').click(function(e) {
        e.preventDefault()
        $(this).next().toggleClass('open');
    });

    $('.js-dropmenu').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('active');
        $('body').toggleClass('menu-active');
    });
};

function function_switcher() {
    $('.js-tabs a').click(function(e) {
        e.preventDefault();
        var parent = "#" + $(this).data("parent");
        var target = $(this).attr("href");
        //console.log(parent);
        $(parent).find(".js-tabs a").removeClass("active");
        $(parent).find(".js-pane").removeClass("active");
        $(this).addClass("active");
        $(target).addClass("active");
    });
};

function function_alert() {
    $('.js-alert-close').click(function(e) {
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
};

function function_modal() {
    $('.js-modal-call').click(function(e) {
        e.preventDefault();
        $('body').addClass('modal-active');
        var target = $(this).attr("href");
        $(target).addClass("show");
    });
    $('.js-modal-close').click(function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('body').addClass('modal-closing').removeClass('modal-active').delay(600).queue(function() {
            $(this).removeClass('modal-closing').dequeue();
            $(target).removeClass('show');
        });
    });
}

function function_numerics() {
    $(".allownumericwithdecimal").on("keypress keyup blur", function (event) {
        //this.value = this.value.replace(/[^0-9\.]/g,'');
        $(this).val($(this).val().replace(/[^0-9\.]/g, ''));
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    $(".allownumericwithoutdecimal").on("keypress keyup blur", function (event) {
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
}