
// Customize bootstrap popover
$('.popper').popover({
    container: 'body',
    html: true,
    sanitize: false,
    content: function () {
        return $(this).next('.pop-content').html();
    }
});

// popup inside addtoplaylist button on queue page
$(document).on("click", ".popper2", function() {
    $(".pop-content2").addClass("d-block");
});
$(document).on("click", ".popper2-close", function() {
    $(".pop-content2").removeClass("d-block");
});