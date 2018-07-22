$(document).ready(function () {
    var remaining_guessesCounter = 9;
    var my_guesses = []
    var c = 65;
    console.log(Math.floor((Math.random() * 25) + 65));

    $(document).keyup(function (e) {

        if (c === e.keyCode) {
            $("#remaining_guesses").text("Guesses Left: " + remaining_guessesCounter);
        }

        remaining_guessesCounter--;
        if (c !== e.keyCode && remaining_guessesCounter >= 1) {
            console.log("Nope");
            my_guesses.push(e.key) + ",";
            $("#remaining_guesses").text("Guesses Left: " + remaining_guessesCounter);
            $("#my_guesses").text("Your guesses so far: " + my_guesses);
            console.log(remaining_guessesCounter);
        } else {
            console.log("Yep");
            my_guesses = []
            remaining_guessesCounter = 9;
            $("#my_guesses").text("Your guesses so far: " + my_guesses);
            $("#remaining_guesses").text("Guesses Left: " + remaining_guessesCounter);

        }
    });

});