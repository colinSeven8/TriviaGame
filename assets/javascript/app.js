// // Colin Reesor
// // Trivia Game
// // Timer homework


// Game objects
let trivia = [
    {
        question: "Which hit song featured the following lyric: 'The love we share seems to go nowhere and I've lost my light.'",
        answer0: "<h4><button class='btn correct'>Tainted Love</button></h4>",
        answer1: "<h4><button class='btn'>Say Hello, Wave Goodbye</button></h4>",
        answer2: "<h4><button class='btn'>Torch</button></h4>",
        answer3: "<h4><button class='btn'>Seedy Films</button></h4>",
        correct: "Tainted Love",
        gif: "<iframe src='https://giphy.com/embed/YuJq61a4KGcA8' width='480' height='326' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/80s-soft-cell-YuJq61a4KGcA8'>"
    },
    {
        question: "The Magic Number was a 1989 hit for the band, De La Soul. Which album of theirs did it appear on?",
        answer0: "<h4><button class='btn'>Oooh</button></h4>",
        answer1: "<h4><button class='btn'>Eye Know</button></h4>",
        answer2: "<h4><button class='btn'>Ring Ring Ring</button></h4>",
        answer3: "<h4><button class='btn correct'>3 Feet High and Rising</button></h4>",
        correct: "3 Feet High and Rising",
        gif: '<iframe src="https://giphy.com/embed/55eIKNKr2KiVsRrJFY" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/delasoul-2-chainz-55eIKNKr2KiVsRrJFY">'
    },
    {
        question: "Which 80's Clash song, when re-released in 1991 went stright to number 1 in the UK?",
        answer0: "<h4><button class='btn'>Rock the Casbah</button></h4>",
        answer1: "<h4><button class='btn'>London Calling</button></h4>",
        answer2: "<h4><button class='btn correct'>Should I stay or Should I Go?</button></h4>",
        answer3: "<h4><button class='btn'>Bank Robber</button></h4>",
        correct: "Should I Stay or Should I Go?",
        gif: '<iframe src="https://giphy.com/embed/2WohsE4o9BQAg" width="480" height="384" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-clash-theclash-joestrummer-2WohsE4o9BQAg">'
    },
    {
        question: "Which Duran Duran song opened with the laughter of the keyboardist's girlfriend?",
        answer0: "<h4><button class='btn correct'>Hungry Like the Wolf</button></h4>",
        answer1: "<h4><button class='btn'>Come Undone</button></h4>",
        answer2: "<h4><button class='btn'>Ordinary World</button></h4>",
        answer3: "<h4><button class='btn'>Serious</button></h4>",
        correct: "Hungry Like the Wolf",
        gif: '<iframe src="https://giphy.com/embed/rbXHrvaIg7Zfy" width="480" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/80s-duran-simon-le-bon-rbXHrvaIg7Zfy">'
    },
    {
        question: "Which Pet Shop Boys' song was about the lead singer's Catholic upbringing?",
        answer0: "<h4><button class='btn'>West End Girls</button></h4>",
        answer1: "<h4><button class='btn'>Go West</button></h4>",
        answer2: "<h4><button class='btn correct'>It's a Sin</button></h4>",
        answer3: "<h4><button class='btn'>Being Boring</button></h4>",
        correct: "It's a Sin",
        gif: '<iframe src="https://giphy.com/embed/bYEA1gLDhhrK8" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pet-shop-boys-west-end-girls-bYEA1gLDhhrK8">'
    },
    {
        question: "Need You Tonight was released by which band?",
        answer0: "<h4><button class='btn'>U2</button></h4>",
        answer1: "<h4><button class='btn'>Tears for Fears</button></h4>",
        answer2: "<h4><button class='btn'>Foreigner</button></h4>",
        answer3: "<h4><button class='btn correct'>INXS</button></h4>",
        correct: "INXS",
        gif: '<iframe src="https://giphy.com/embed/6bdjnre6TByWhIdT8m" width="480" height="362" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/inxs-new-sensation-6bdjnre6TByWhIdT8m">'
    },
    {
        question: "Which movie featured the song, 'Danger Zone'?",
        answer0: "<h4><button class='btn'>The Goonies</button></h4>",
        answer1: "<h4><button class='btn correct'>Top Gun</button></h4>",
        answer2: "<h4><button class='btn'>Breakfast Club</button></h4>",
        answer3: "<h4><button class='btn'>Ferris Bueller's Day Off</button></h4>",
        correct: "Top Gun",
        gif: '<iframe src="https://giphy.com/embed/m9523AAgxz9Lj7ZMau" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/topgun-m9523AAgxz9Lj7ZMau">'
    },
    {
        question: "Which movie featured the song, 'The Heat is On'?",
        answer0: "<h4><button class='btn'>The Terminator</button></h4>",
        answer1: "<h4><button class='btn correct'>Beverly Hills Cop</button></h4>",
        answer2: "<h4><button class='btn'>Raider's of the Lost Ark</button></h4>",
        answer3: "<h4><button class='btn'>Gremlins</button></h4>",
        correct: "Beverly Hills Cop",
        gif: '<iframe src="https://giphy.com/embed/9Vo3RrXKk9Z6mGzfyK" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/starz-eddie-murphy-beverly-hills-cop-9Vo3RrXKk9Z6mGzfyK">'
    },
    {
        question: "Which Frankie Goes to Hollywood song was banned in the UK because of it's lyrics?",
        answer0: "<h4><button class='btn'>Watching the Wildlife</button></h4>",
        answer1: "<h4><button class='btn'>Rage Hard</button></h4>",
        answer2: "<h4><button class='btn correct'>Relax</button></h4>",
        answer3: "<h4><button class='btn'>Born to Run</button></h4>",
        correct: "Relax",
        gif: '<iframe src="https://giphy.com/embed/l4FGtFECqTZyhH8DS" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hornetapp-80s-gay-l4FGtFECqTZyhH8DS">'
    }
];

// GLOBALS
// Variables
let gameOver;
let currentIndex;
let correct;
let incorrect;
let isAlreadyAnswered;
let startSong;
let seconds;
let intervalId;
let timerRunning = false;
let interval;
const TIME = 10;
const timerDiv = $('<div class="timer">');
const questionDiv = $('<div class="question">');
const answersDiv = $('<div class="answers">');
const gifDiv = $('<div class="gif">');
const answerDiv = $('<div class="answer">');

function startGame() {

    //Get rid of the 'Start' button
    $(this).remove();

    //Initialize the game
    init();
    console.log("Asking first question...");

    //Ask the first question. After this time, this function will be triggered by a click event.
    askQuestions();
}

function init() {

    //Set the background of the container and clear the contents
    $('.container').css('background-color', 'rgba(173, 216, 130, 0.8)');

    //Play background music
    startSong = new Audio("assets/audio/whip_it.mp3");
    //startSong.play();

    //Empty the contents
    $('.game-content').empty();

    //Keep the game title here
    $('.game-title').html("<strong>Crucial 80's Trivia!</strong>");

    //Append the new divs
    $('.game-content').append(timerDiv);
    $('.game-content').append(questionDiv);
    $('.game-content').append(answersDiv);

    //Set global values
    gameOver = false;
    currentIndex = 0;
    correct = 0;
    incorrect = 0;
    seconds = TIME;
}

function countDown() {

    //Countdown by 1 second
    seconds--;
    timerRunning = true;
    console.log("countDown!");

    //Display the timer
    let timeRemaining = $('<h3><strong>Time Remaining: ' + seconds + ' Seconds</strong></h3>');
    timerDiv.empty();
    timerDiv.append(timeRemaining);

    if (seconds <= 0) {
        $('.question').empty().append("Time's up! The correct answer is " + trivia[currentIndex].answer0);
        // Gif here....
        isAlreadyAnswered = true;
        clearInterval();
        timesUp();
    }
}

function askQuestions() {

    //Check if game is over yet
    if (gameOver) {
        displayEnd();
    }
    else {
        //Get the current question and answer
        let currentQuestion = getCurrentQuestion();
        let correctAnswer = getCurrentCorrectAnswer();
        console.log(currentQuestion + " " + correctAnswer);

        //Display the timer
        seconds = TIME;
        let timeRemaining = $('<h3><strong>Time Remaining: ' + seconds + ' Seconds</strong></h3>');
        timerDiv.empty();
        timerDiv.append(timeRemaining);

        //Display the current question
        questionDiv.empty().append('<h3><strong>' + currentQuestion);

        //Get the current answers
        $(answersDiv).empty();
        $(answersDiv).append(trivia[currentIndex].answer0);
        $(answersDiv).append(trivia[currentIndex].answer1);
        $(answersDiv).append(trivia[currentIndex].answer2);
        $(answersDiv).append(trivia[currentIndex].answer3);

        intervalId = setInterval(countDown(), 1000);

        // THe user clicked on an answer...
        $(document).on('click', '.btn', function () {
            console.log("askQuestion() click");
            //Make sure it's the correct answer and it hasn't already been answered
            if ($(this).hasClass('correct') === true && isAlreadyAnswered === false) {

                console.log("askQuestion() correct");
                //Display the message and the gif
                $('.question').empty().append("That's right!");
                $('.game-content').append(gifDiv);
                $('.gif').append(trivia[currentIndex].gif);

                correct++;
            }
            // User answwered a question incorrectly
            else if ($(this).hasClass('correct') === false && isAlreadyAnswered === false) {

                console.log("askQuestion() incorrect");
                //Display the message and the gif
                $('.question').empty().append("You're way off!");
                $('.game-content').append(answerDiv);
                $('.answer').append("The correct answer is " + $(this).val());
                $('.game-content').append(gifDiv);
                $('.gif').append(trivia[currentIndex].gif);

                incorrect++;
            }
            isAlreadyAnswered = true;
            stopTimer();
            nextQuestion();
            $('game-content').empty();
            currentIndex++;

            // Check if game is over...
            if (currentIndex === trivia.length) gameOver = true;
        });
    }
}

function displayEnd() {

}

function getCurrentCorrectAnswer() {
    for (let i = 0; i < trivia[currentIndex].length; i++) {
        let answer = 'answer' + i;
        console.log('answer ' + answer);
        let hasAnswerClass = trivia[currentIndex][answer];
        if ($(hasAnswerClass).hasClass('correct')) {
            return trivia[currentIndex].correct;
        }
    }
}

function getCurrentQuestion() { return trivia[currentIndex].question; }

function stopTimer() {
    timerRunning = false;
    clearInterval(intervalId);
}

function nextQuestion() { setTimeout(askQuestions, 5000); }

$(document).ready(function () {
    $('.start-btn').on('click', startGame);
})