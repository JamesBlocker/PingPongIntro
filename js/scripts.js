            <!--back end-->
var ping = function(num) {
    for (var i = 1; i < num; i++) {
        $('#list').append('<li>' + i +'</li>');
        }

    return num;
};

            <!--front end-->

$(document).ready(function() {
    $('#form').submit(function(event) {
        var userInput = $('#userInput').val();
        var result = ping(userInput);

        $('.output').show();
        event.preventDefault();
    });
});
