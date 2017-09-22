            <!--back end-->
var ping = function(num) {
    for (var i = 1; i <= num; i++) {
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

var pong = function(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            $('#list').prepend('<li>Ping Pong Pandemonium</li>');
        } else if (i % 5 === 0) {
            $('#list').prepend('<li>Pong</li>');
        } else if (i % 3 === 0) {
            $('#list').prepend('<li>Ping</li>');
        } else {
            $('#list').prepend('<li>' + i +'</li>');
        }
    }
    return num;
};




            <!--front end-->

$(document).ready(function() {
    $('#form1').submit(function(event) {
        var userInput = $('#userInput').val();
        $('#list').html("");
        $('#pong').fadeOut();
        var result = ping(userInput);

        $('.output').show();
        event.preventDefault();
    });

    $('#form2').submit(function(event) {
        var userInput = $('#userInput2').val();
        $('#list').html("");
        $('#pong').fadeOut();
        var result = pong(userInput);

        $('.output').show();
        event.preventDefault();
    });
});
