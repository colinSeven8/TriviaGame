// Colin Reesor
// Trivia Game
// Timer homework

$(document).ready(function () {

    // GLOBALS
    // Game objects
    let trivia = [
        {
            question: "Which hit song featured the following lyric: 'The love we share seems to go nowhere and I've lost my light.'",
            answer0: "<div><button class='btn correct'>Tainted Love</button></div>",
            answer1: "<div><button class='btn'>BLAH1</button></div>",
            answer2: "<div><button class='btn'>BLAH2</button></div>",
            answer3: "<div><button class='btn'>BLAH3</button></div>",
            gif: "<div></div>"
        },
        {
            question: "The Magic Number was a 1989 hit for the band, De La Soul. Which album of theirs did it appear on?",
            answer0: "<div><button class='btn'>BLAH1</button></div>",
            answer1: "<div><button class='btn'>BLAH1</button></div>",
            answer2: "<div><button class='btn'>BLAH1</button></div>",
            answer3: "<div><button class='btn correct'>3 Feet High and Rising</button></div>",
            gif: "<div></div>"
        },
        {
            question: "Which 80's CLash song, when re-released in 1991 went stright to number 1 in the UK?",
            answer0: "<div><button class='btn'>BLAH1</button></div>",
            answer1: "<div><button class='btn'>BLAH1</button></div>",
            answer2: "<div><button class='btn correct'>Should I stay or Should I Go?</button></div>",
            answer3: "<div><button class='btn'>BLAH1</button></div>",
            gif: "<div></div>"
        },
        {
            question: "Which Duran Duran song opened with the laughter of the keyboardist's girlfriend?",
            answer0: "<div><button class='btn correct'>Hungry Like the Wolf</button></div>",
            answer1: "<div><button class='btn'>BLAH1</button></div>",
            answer2: "<div><button class='btn'>BLAH1</button></div>",
            answer3: "<div><button class='btn'>BLAH1</button></div>",
            gif: "<div></div>"
        },
        {
            question: "Which Pet Shop Boys' song was about the lead singer's Catholic upbringing?",
            answer0: "<div><button class='btn'>BLAH1</button></div>",
            answer1: "<div><button class='btn'>BLAH1</button></div>",
            answer2: "<div><button class='btn correct'>It's a Sin</button></div>",
            answer3: "<div><button class='btn'>BLAH1</button></div>",
            gif: "<div></div>"
        },
        {
            question: "Need You Tonight was released by which band?",
            answer0: "<div><button class='btn'>BLAH1</button></div>",
            answer1: "<div><button class='btn'>BLAH1</button></div>",
            answer2: "<div><button class='btn'>BLAH1</button></div>",
            answer3: "<div><button class='btn correct'>INXS</button></div>",
            gif: "<div></div>"
        },
        {
            question: "Which movie featured the song, 'Danger Zone'?",
            answer0: "<div><button class='btn'>BLAH1</button></div>",
            answer1: "<div><button class='btn correct'>Top Gun</button></div>",
            answer2: "<div><button class='btn'>BLAH1</button></div>",
            answer3: "<div><button class='btn'>BLAH1</button></div>",
            gif: "<div></div>"
        },
        {
            question: "Which movie featured the song, 'The Heat is On'?",
            answer0: "<div><button class='btn'>BLAH1</button></div>",
            answer1: "<div><button class='btn correct'>Beverly Hills Cop</button></div>",
            answer2: "<div><button class='btn'>BLAH1</button></div>",
            answer3: "<div><button class='btn'>BLAH1</button></div>",
            gif: "<div></div>"
        },
        {
            question: "Which Frankie Goes to Hollywood song was banned in the UK because of it's lyrics?",
            answer0: "<div><button class='btn'>BLAH1</button></div>",
            answer1: "<div><button class='btn'>BLAH1</button></div>",
            answer2: "<div><button class='btn correct'>Relax</button></div>",
            answer3: "<div><button class='btn'>BLAH1</button></div>",
            gif: "<div></div>"
        }
    ];
    // Variables
    let gameOver;
    let currentIndex;
    let correct;
    let incorrect;
    let isAlreadyAnswered;
    let startSong;
    let seconds;
    let timerRunning;
    let interval;
    const timerDiv = $('<div class="timer">');
    const questionDiv = $('<div class="question">');
    const answersDiv = $('<div class="answers">');
    const gifDiv = $('<div class="gif">');
    const answerMsg = $('<div class="msg">');

    $('.start-btn').on('click', function () {

        //Get rid of the 'Start' button
        $(this).remove();

        //Initialize the game
        init();

        //Start asking the questions
        askQuestions();
    });

    function init() {

        //Set the background of the container and clear the contents
        $('.container').css('background-color', 'rgba(173, 216, 130, 0.8)');

        //Play background music
        startSong = new Audio("assets/audio/whip_it.mp3");
        startSong.play();

        //Empty the contents
        $('.game-content').empty();

        //Keep the game title here
        $('.game-title').html("<strong>Crucial 80's Trivia!</strong>");

        //Append the new divs
        $('.game-content').empty().append(timerDiv);
        $('.game-content').empty().append(questionDiv);
        $('.game-content').empty().append(answersDiv);

        //Set global values
        gameOver = false;
        currentIndex = 0;
        correct = 0;
        incorrect = 0;
        questionAnswered = false;
        seconds = 30;
        timerRunning = false;

        askQuestions();
    }

    function askQuestions() {

        //Check if game is over yet
        if (gameOver) {
            displayEnd();
        }
        else {

            //Display the timer
            let timeRemaining = $('<h3><strong>Time Remaining: ' + seconds + ' Seconds</strong></h3>');
            timerDiv.empty().append(timeRemaining);

            //Get the current question
            let currentQuestion = getCurrentQuestion();

            //Display the current question
            questionDiv.empty().append('<h3><strong>' + currentQuestion);

            //Get the current answers
            $(answersDiv).empty().append(trivia[currentIndex].answer0);
            $(answersDiv).empty().append(trivia[currentIndex].answer1);
            $(answersDiv).empty().append(trivia[currentIndex].answer2);
            $(answersDiv).empty().append(trivia[currentIndex].answer3);
        }
    }

    //This function is triggered by the button 'onclick' event from the DOM
    function answerSelected() {

        //Make sure it's the correct answer and it hasn't already been answered
        if ($(this).hasClass('correct') === true && isAlreadyAnswered === false) {

            //Set the 'answered' flag
            isAlreadyAnswered = true;

            //Display the message and the gif
            $('.question').empty().append("That's right'!");
            $('.game-content').append(gifDiv);
            $('.gif').append(trivia[currentIndex].gif);

            //Reset the timer
            clearInterval(interval);

            //Increment the index and the 'correct' counter
            currentIndex++;
            correct++;
        }
        else if () {
            
            $('.game-content').append(answerMsg);
        }
        else {
            
        }
    }

    function getCurrentQuestion() {

        //Get the current question
        let q = trivia[currentIndex].question;

        return q;
    }

    function startTimer() {

        //One second interval
        let ONE_SECOND = 1000;

        //If timer is not running, start it
        if (!timerRunning) {

            interval = setInterval(seconds, ONE_SECOND);
            timerRunning = true;
        }

    }

    function stopTimer() {

        //Reset the interval, timer is not running
        clearInterval(interval);
        timerRunning = false;
    }

})