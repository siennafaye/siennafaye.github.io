(function() {

    'use strict';
    console.log('reading js');

    var myForm = document.querySelector('#myForm');
    var madlib = document.querySelector('#madlib');

    var minorArcana = ["ace of cups", "ace of pentacles", "ace of swords", "ace of wands"];
    
    var majorArcana = ["The Sun", "Temperance", "Death", "The Tower"];
    var majorDescription = ["joy, success, and positivity", "balance, meaning, and harmony", "new beginnings, shedding the old, and starting fresh", "upheaval, change, and sudden chaos"];

    // opens overlay
    myForm.addEventListener('submit', function(event){
        console.log("overlay opened");
        event.preventDefault();
        document.getElementById("overlay-background").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    })
    
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


        if (firstName && adjective && desire && feeling) {
            myText = `Hello, <a>${firstName}</a>! <br>The cards have something very <a>${adjective}</a> in store for you. I see you desire <a>${desire}</a>. I pulled the <a>${cardMinor}</a>—you’re in luck! <a>${desire}</a> is in your future. New beginnings with <a>${desire}</a> are coming soon. So you’ve been feeling <a>${feeling}</a>? It could be because of the <a>${cardMajor}</a> card. This is the card of <a>${cardMajorMeaning}</a>. Remember, this phase is temporary, so you can either enjoy it while it lasts or ride it out until it’s over! I hope you enjoyed your reading, see you next time. <br>Love,<h3> Your virtual mystic</h3>`
        }
        else {
            myText = "Please fill all the fields so I can give you your tarot reading<br>-your virtual mystic!"
        }
        madlib.innerHTML = myText;
    });

})();
(function() {
    // closes overlay
    document.getElementById('.close', function(event){

        event.preventDefault();

        console.log("close pressed");

        document.getElementById("overlay-background").style.display = "none";
        document.getElementById("overlay").style.display = "none";

    });

    document.addEventListener('keydown', function(event){

        if (event.key === 'Escape') {
            console.log("escape key pressed");
            document.getElementById("overlay-background").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }
    });
})();
