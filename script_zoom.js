// Add JavaScript to handle the zoom-in effect
$(document).ready(function() {
    $('.zoom-image').on('click', function() {
        var targetModalId = $(this).data('target');
        $(targetModalId).modal('show');
    });

    $('.modal').on('shown.bs.modal', function() {
        $(this).find('.modal-content').css('transform', 'scale(1)');
    });

    $('.modal').on('hidden.bs.modal', function() {
        $(this).find('.modal-content').css('transform', 'scale(0)');
    });
});

$(document).ready(function() {
    $('#productCarousel').carousel();
});