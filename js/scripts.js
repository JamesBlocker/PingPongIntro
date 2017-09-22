            <!--back end-->

            <!--front end-->

$(document).ready(function() {
    $('#form').submit(function(event) {
        var userInput = $('#userInput').val();


        $('#list').append('<li>' + userInput +'</li>');
        $('.output').show();
        event.preventDefault();
    });
});
