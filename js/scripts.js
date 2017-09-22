$(document).ready(function() {
    $('#form').submit(function(event) {
        $('.output').show();

        event.preventDefault();
    });
});
