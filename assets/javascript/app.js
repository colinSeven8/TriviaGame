// Colin Reesor
// Trivia Game
// Timer homework

// GLOBALS
// Game objects
let trivia = [
    {
        "question": "Which hit song featured the following lyric: 'The love we share seems to go nowhere and I've lost my light.'",
        "answers": ["a", "b", "Tainted Love", "d"]
    },
    {
        "question": "The Magic Number was a 1989 hit for the band, De La Soul. Which album of theirs did it appear on?",
        "answers": ["a", "b", "c", "3 Feet High and Rising"]
    },
    {
        "question": "Which 80's CLash song, when re-released in 1991 went stright to number 1 in the UK?",
        "answers": ["a", "b", "Should I stay or Should I Go?", "d"]
    },
    {
        "question": "Which Duran Duran song opened with the laughter of the keyboardist's girlfriend?",
        "answers": ["Hungry Like the Wolf", "b", "c", "d"]
    },
    {
        "question": "Which Pet Shop Boys' song was about the lead singer's Catholic upbringing?",
        "answers": ["a", "b", "c", "It's a Sin"]
    },
    {
        "question": "Need You Tonight was released by which band?",
        "answers": ["a", "INXS", "c", "d"]
    },
    {
        "question": "Which movie featured the song, 'Danger Zone'?",
        "answers": ["a", "Top Gun", "c", "d"]
    },
    {
        "question": "Which movie featured the song, 'The Heat is On'?",
        "answers": ["a", "b", "Beverly Hills Cop", "d"]
    },
    {
        "question": "Which Frankie Goes to Hollywood song was banned in the UK because of it's lyrics?",
        "answers": ["a", "b", "c", "Relax"]
    }
];
// Variables
let gameOver = false;
let correct = 0;
let incorrect = 0;

//Initialize the game and run it
init();
main();

function main() {

    window.onload = function () {

        $('.btn').on("click", this.updateWindow);

        //Create the divs for the question
        //Create the divs for the possible answers
        //Create the timer and display it
        //If the timer runs out, display the appropriate the screen data
        //If the answer was right, display the appropriate data
        //If the answer was wrong, display the appropriate data.
    };
}

function updateWindow() {

    const timerDiv = $('<h3 class="timer">');
    const questionDiv = $('<h3 class="question">');
    const answersDiv = $('<div class="answers">');

    //Get rid of the 'Start' button
    $('.btn').remove();

    //Empty the contents
    $('.game-content').empty();

    //Keep the game title here
    $('.game-title').html("<strong>Crucial 80's Trivia!</strong>");

    //Append the new divs
    $('.game-content').append(timerDiv);
    $('.game-content').append(questionDiv);
    $('.game-content').append(answersDiv);

    //Add the question and possible answers to the DOM
    for (let i = 0, seconds = 30; i < trivia.length; i++, seconds--) {

        //Add the question first
        $(questionDiv).text("Time Remaining: " + seconds + " Seconds");
        //Add the answers second
        let a = $('<h1>');
        a.addClass('answer');
        a.attr('data-name', trivia[i].question);
        a.text(trivia[i].answers0);
    }
}

function init() {

    let timeRemaining = $('<div class="time-rem"><h1>"Time Remaining: " + time + " Seconds"</h1></div>');
    let currentQuestion = getCurrentQuestion();
    let question = $('<div class="question"><h1>currentQuestion</h1></div>');
}

function getCurrentQuestion() {

    let index = randomNumber(trivia);
    let q = trivia[index].question;////////////////////////

    return q;
}

//Returns a random index for the trivia object array
function randomNumber(arr) { return Math.floor(Math.random() * arr.length); }