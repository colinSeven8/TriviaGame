// Colin Reesor
// Trivia Game
// Timer homework

$(document).ready(function () {

    // GLOBALS
    // Game objects
    let trivia = [
        {
            question: "Which hit song featured the following lyric: 'The love we share seems to go nowhere and I've lost my light.'",
            answer1: <button class='question correct'>Tainted Love</button>,
            answer2: <button class='question'>"NAME"</button>,
            answer3: <button class='question'>"NAME"</button>,
            answer4: <button class='question'>"NAME"</button>,
            gif: <div></div>
        },
        {
            question: "The Magic Number was a 1989 hit for the band, De La Soul. Which album of theirs did it appear on?",
            answer1: <button class="question"></button>,
            answer2: <button class="question"></button>,
            answer3: <button class="question"></button>,
            answer4: <button class="question correct">3 Feet High and Rising</button>,
            gif: <div></div>
        },
        {
            question: "Which 80's CLash song, when re-released in 1991 went stright to number 1 in the UK?",
            answer1: <button class="question"></button>,
            answer2: <button class="question"></button>,
            answer3: <button class="question correct">Should I stay or Should I Go?</button>,
            answer4: <button class="question"></button>,
            gif: <div></div>
        },
        {
            question: "Which Duran Duran song opened with the laughter of the keyboardist's girlfriend?",
            answer1: <button class="question correct">Hungry Like the Wolf</button>,
            answer2: <button class="question"></button>,
            answer3: <button class="question"></button>,
            answer4: <button class="question"></button>,
            gif: <div></div>
        },
        {
            question: "Which Pet Shop Boys' song was about the lead singer's Catholic upbringing?",
            answer1: <button class="question"></button>,
            answer2: <button class="question"></button>,
            answer3: <button class="question correct">It's a Sin</button>,
            answer4: <button class="question"></button>,
            gif: <div></div>
        },
        {
            question: "Need You Tonight was released by which band?",
            answer1: <button class="question"></button>,
            answer2: <button class="question"></button>,
            answer3: <button class="question"></button>,
            answer4: <button class="question correct">INXS</button>,
            gif: <div></div>
        },
        {
            question: "Which movie featured the song, 'Danger Zone'?",
            answer1: <button class="question"></button>,
            answer2: <button class="question correct">Top Gun</button>,
            answer3: <button class="question"></button>,
            answer4: <button class="question"></button>,
            gif: <div></div>
        },
        {
            question: "Which movie featured the song, 'The Heat is On'?",
            answer1: <button class="question"></button>,
            answer2: <button class="question correct">Beverly Hills Cop</button>,
            answer3: <button class="question"></button>,
            answer4: <button class="question"></button>,
            gif: <div></div>
        },
        {
            question: "Which Frankie Goes to Hollywood song was banned in the UK because of it's lyrics?",
            answer1: <button class="question"></button>,
            answer2: <button class="question"></button>,
            answer3: <button class="question correct">Relax</button>,
            answer4: <button class="question"></button>,
            gif: <div></div>
        }
    ];
    // Variables
    let gameOver;
    let currentIndex;
    let correct;
    let incorrect;
    let questionAnswered;
    let startSong;
    let seconds;
    let timerRunning;
    let interval;
    const timerDiv = $('<h3 class="timer">');
    const questionDiv = $('<h3 class="question">');
    const answersDiv = $('<div class="answers">');

    $(document).on('click', '.start-btn', function () {

        //Initialize the game
        init();

        //Ask the next question
        askQuestion();

        //Check if game is over yet
        if (gameOver) {
            displayEnd();
        }
    });

    function init() {

        //Set the background of the container and clear the contents
        $('.container').css('background-color', 'rgba(173, 216, 130, 0.8)');
        $('.container').empty();

        //Play background music
        startSong = new Audio("assets/audio/whip_it.mp3");
        startSong.play();

        //Empty the contents
        $('.game-content').empty();

        //Keep the game title here
        $('.game-title').html("<strong>Crucial 80's Trivia!</strong>");

        //Append the new divs
        $('.game-content').append(timerDiv);
        $('.game-content').append(questionDiv);
        $('.game-content').append(answersDiv);

        //Display the timer
        let timeRemaining = $('<div class="time-rem"><h1>').text('Time Remaining: ' + time + ' Seconds</h1></div>');

        //Get the current question
        let currentQuestion = getCurrentQuestion();

        //Display the current question
        let question = $('<div class="question"><h1>').text(currentQuestion + '</h1></div>');

        //Add the question and possible answers to the DOM
        for (let i = 0, seconds = 30; i < trivia.length; i++ , seconds--) {

            //Add the question first
            $(questionDiv).text("Time Remaining: " + seconds + " Seconds");
            //Add the answers second
            let a = $('<h1>');
            a.addClass('answer');
            a.attr('data-name', trivia[i].question);
            a.text(trivia[i].answers0);
        }

        //Set global values
        gameOver = false;
        currentIndex = 0;
        correct = 0;
        incorrect = 0;
        questionAnswered = false;
        seconds = 30;
        timerRunning = false;
    }

    function getCurrentQuestion() {

        //Get the current question
        let q = trivia[currentIndex].question;

        //Set the next index
        currentIndex++;

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