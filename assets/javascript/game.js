$(document).ready(function () {
    var remaining_guessesCounter = 9;
    var wins = 0;
    var losts = 0;
    var my_guesses = []
    var random_comuter_choice = Math.floor((Math.random() * 25) + 65);

    $(document).keyup(function (e) {
        remaining_guessesCounter--;
        if (random_comuter_choice !== e.keyCode && remaining_guessesCounter >= 1) {
            my_guesses.push(e.key) + ",";
            $("#my_guesses").text("Your guesses so far: " + my_guesses);
            $("#remaining_guesses").text("Guesses Left: " + remaining_guessesCounter);

        } else {

            if (random_comuter_choice === e.keyCode) {
                wins++;
                $("#wins").text("Wins: " + wins);
                random_comuter_choice = Math.floor((Math.random() * 25) + 65);
               
            } else {
                losts++;
                $("#losses").text("Losses: " + losts);
                random_comuter_choice = Math.floor((Math.random() * 25) + 65);

            }

            my_guesses = []
            remaining_guessesCounter = 9;
            $("#my_guesses").text("Your guesses so far: " + my_guesses);
            $("#remaining_guesses").text("Guesses Left: " + remaining_guessesCounter);
        }
    });

});