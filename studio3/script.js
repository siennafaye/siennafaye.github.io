(function() {

    'use strict';
    console.log('reading js');

    const closeOverlay = document.getElementById('heading');

    const matchSound = new Audio('sounds/match.mp3');
    const noMatchSound = new Audio('sounds/noMatch.mp3');
    const unmatchSound = new Audio('sounds/unmatch.mp3');

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const profile = document.getElementById('profile');

    const gameData = {
        profiles: ['images/profile1.jpg', 'images/profile2.jpg', 'images/profile3.jpg', 'images/profile4.jpg', 'images/profile5.jpg'],
        players: ['player 1'],
        score: [0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };
    // to close overlay
    closeOverlay.addEventListener("click", function() {
        console.log("clicked");
        // document.getElementById("overlaybackground").style.display = "none";
        document.getElementById("heading").style.display = "none";
        document.getElementById("profiles").style.display = "flex";
        document.getElementById("gamecontrol").style.display = "flex";
    });

    startGame.addEventListener("click", function() {
        // randomly set game index here
        // gameData.index = Math.round(Math.random());
        // console.log(gameData.index);

        gameControl.innerHTML = '<h2>Start matching!</h2>';
        gameControl.innerHTML += '<button id="quit">Give up and delete Tinder?</button>';

        // new button
        document.getElementById('quit').addEventListener("click", function(){
            document.getElementById('quit').addEventListener("click", function(){
                location.reload();
            });
            // console.log("set up the turn!");
        })
        setUpTurn();
    });

    function setUpTurn() {
        game.innerHTML = `<p>Test your luck. Click to reveal a profile, then swipe right to see if you match!</p>`;
        actionArea.innerHTML = '<button id="roll">Show profile</button>';
        document.getElementById('roll').addEventListener('click',function() {
            // triggers dice throw function
            throwDice();
        })
    };

    function throwDice() {
        actionArea.innerHTML = '';

        gameData.roll1 = Math.floor(Math.random()* 6) + 1;
        gameData.roll2 = Math.floor(Math.random()* 6) + 1;

        profile.innerHTML = `<img src="images/profile${gameData.roll1}.png" alt="dating app profile image for sienna">`

        // game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;

        // adds matching images of the dice
        // game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"><img src="${gameData.dice[gameData.roll2-1]}">`;

        // score
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // if two 1s are rolled
        if( gameData.rollSum === 2 ){
            console.log("snake eyes");

            game.innerHTML += '<p>Oh no, your match unmatched you. Start from scratch.</p>';

            // clear score
            gameData.score[gameData.index] = 0;
            // switch player
            // gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            unmatchSound.play();

            showCurrentScore();

            setTimeout(setUpTurn, 4000);
        }
        // if either die is a 1
        else if( gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log("one of the dice was a 1");

            // switch player
            // gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>You two didn't match. No points gained.</p>`;

            noMatchSound.play();

            showCurrentScore();

            setTimeout(setUpTurn, 4000);
        }

        // if neither die is a 1
        else {
            // console.log("game proceeds");

            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;

            game.innerHTML += `<p>Nice! You matched and gained ${gameData.rollSum} points.</p>`;
            actionArea.innerHTML = '<button id="rollagain">Show another profile</button>';

            matchSound.play();

            document.getElementById('rollagain').addEventListener('click', function() {
                setUpTurn();

                showCurrentScore();
            });

            // document.getElementById('pass').addEventListener('click', function() {
            //     // switch player
            //     gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            //     // show current score
            //     showCurrentScore();
            //     setUpTurn();
            // });

            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if( gameData.score[gameData.index]> gameData.gameEnd ) {
            gameControl.innerHTML = '<h2>Want to try again?</h2>';
            score.innerHTML = `<h2>Congratulations! With <strong>${gameData.score[0]} points</strong>, you got Sienna a date!</h2>`;

            actionArea.innerHTML = '';
            gameControl.innerHTML += '<button id="quit">Try for Another Date</button>';
        }
        else {
            //show current score
            showCurrentScore();
        }
    }
    function showCurrentScore() {
        score.innerHTML = `<p>Sienna currently has <strong>${gameData.score[0]} points.`;
    }

})();