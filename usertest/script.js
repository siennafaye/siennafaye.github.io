(function() {

    'use strict';
    console.log('reading js');

    alert("Welcome to Sienna's User Test! Please complete the following tasks: (1) Fill out the form. (2) See which cards were pulled for your tarot reading. (3) Find out what your full tarot reading is. (4) Exit your reading and start over. Thank you for your participation!")

    var myForm = document.querySelector('#myForm');
    var madlib = document.querySelector('#madlib');

    var card1 = document.querySelector('#card1');
    var card2 = document.querySelector('#card2');
    
    var readingButton = document.querySelector('#display-reading');
    const button = document.getElementById("close");
    var restartButton = document.querySelector('#restart');

    var minorArcana = ["ace of cups", "ace of pentacles", "ace of swords", "ace of wands"];
    
    var majorArcana = ["The Sun", "Temperance", "Death", "The Tower"];
    var majorDescription = ["joy, success, and positivity", "balance, meaning, and harmony", "new beginnings, shedding the old, and starting fresh", "upheaval, change, and sudden chaos"];

    // triggers fade and cards display
    myForm.addEventListener('submit', function(event){
        console.log("fade started");

        event.preventDefault();

        document.getElementById("fade").style.display = "block";
        document.getElementById("cards").style.display = "inline-flex";
    })
    
    // generates script for reading with user input
    myForm.addEventListener('submit', function(event){
        console.log("submit pressed");

        event.preventDefault();

        var firstName = document.querySelector('#fname').value;

        var adjective = document.querySelector('#adjective').value;

        var desire = document.querySelector('#desire').value;
        
        var feeling = document.querySelector('#feeling').value;

        var myText;

        // script for input for what do you desire, assigning variable to include the card based on the radio input

        var cardMinor;
        if (desire === "love"){
            console.log("love was chosen");
            cardMinor = minorArcana[0];
        } else if (desire === "money"){
            console.log("money was chosen");
            cardMinor = minorArcana[1];
        } else if (desire === "truth") {
            console.log("truth was chosen");
            cardMinor = minorArcana[2];
        }
        else if (desire === "inspiration") {
            console.log("inspiration was chosen");
            cardMinor = minorArcana[3];
        }
        else {
            console.log('oopsies');
        }

        var cardMajor;
        var cardMajorMeaning;
        if (feeling === "excited"){
            cardMajor = majorArcana[0];
            cardMajorMeaning = majorDescription[0];
        } else if (feeling === "content"){
            cardMajor = majorArcana[1];
            cardMajorMeaning = majorDescription[1];
        } else if (feeling === "anxious") {
            cardMajor = majorArcana[2];
            cardMajorMeaning = majorDescription[2];
        }
        else if (feeling === "sad") {
            cardMajor = majorArcana[3];
            cardMajorMeaning = majorDescription[3];
        }
        else {
            console.log('oopsies');
        }

        // triggers card reveal

        card1.addEventListener('click', function(event) {
            console.log("reveal card 1");

            event.preventDefault();

            card1.innerHTML = `<img src="images/${cardMinor}.png" alt="${cardMinor} tarot card">`
        })

        card2.addEventListener('click', function(event) {
            console.log("reveal card 2");

            event.preventDefault();

            card2.innerHTML = `<img src="images/${cardMajor}.png" alt="${cardMajor} tarot card">`

            document.getElementById("display-reading").style.display = "block";
        })

        // triggers reading script display with overlay 
        readingButton.addEventListener('click', function(event){
            console.log('reading button clicked');

            event.preventDefault();

            document.getElementById("overlay-background").style.display = "block";

            document.getElementById("overlay").style.display = "block";

        })
        if (firstName && adjective && desire && feeling) {
            myText = `Hello, <a>${firstName}</a>! <br>The cards have something very <a>${adjective}</a> in store for you. I see you desire <a>${desire}</a>. I pulled the <a>${cardMinor}</a>—you’re in luck! <a>${desire}</a> is in your future. New beginnings with <a>${desire}</a> are coming soon. So you’ve been feeling <a>${feeling}</a>? It could be because of the <a>${cardMajor}</a> card. This is the card of <a>${cardMajorMeaning}</a>. Remember, this phase is temporary, so you can either enjoy it while it lasts or ride it out until it’s over! I hope you enjoyed your reading, see you next time. <br>Love,<h3> Your virtual mystic</h3>`
        }
        else {
            myText = "Please fill all the fields so I can give you your tarot reading<br>-your virtual mystic!"
        }
        madlib.innerHTML = myText;
    });
    // close overlay with close button
    button.addEventListener('click', function(event){
        console.log("close button clicked");

        event.preventDefault();

        document.getElementById("overlay-background").style.display = "none";

        document.getElementById("overlay").style.display = "none";

        document.getElementById("restart").style.display = "block";
    })
    // close overlay with escape key
    document.addEventListener('keydown', function(event){

        if (event.key === 'Escape') {
            console.log("escape key pressed");
            document.getElementById("overlay-background").style.display = "none";
            document.getElementById("overlay").style.display = "none";

            document.getElementById("restart").style.display = "block";
        }
    })
    // refresh page
    restartButton.addEventListener('click', function(event){
        console.log("restarting");

        event.preventDefault();

        location.reload();
    })
})();

