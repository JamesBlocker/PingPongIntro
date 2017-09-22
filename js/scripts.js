            <!--back end-->
var ping = function(num) {
    for (var i = 1; i < num; i++) {
        if (i % 15 === 0) {
            $('#list').append('<li>Ping Pong Pandemonium</li>');
        } else if (i % 5 === 0) {
            $('#list').append('<li>Pong</li>');
        } else if (i % 3 === 0) {
            $('#list').append('<li>Ping</li>');
        } else {
            $('#list').append('<li>' + i +'</li>');
        }

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
