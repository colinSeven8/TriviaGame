// Colin Reesor
// Trivia Game
// Timer homework

// GLOBALS
// Game objects
let trivia = [
    {
        "question":   "Which hit song featured the following lyric: 'The love we share seems to go nowhere and I've lost my light.'",
        "answers":    ["a", "b", "Tainted Love", "d"]
    },
    {
        "question":   "The Magic Number was a 1989 hit for the band, De La Soul. Which album of theirs did it appear on?",
        "answers":    ["a", "b", "c", "3 Feet High and Rising"]
    },
    {
        "question":   "Which 80's CLash song, when re-released in 1991 went stright to number 1 in the UK?",
        "answers":    ["a", "b", "Should I stay or Should I Go?", "d"]
    },
    {
        "question":   "Which Duran Duran song opened with the laughter of the keyboardist's girlfriend?",
        "answers":    ["Hungry Like the Wolf", "b", "c", "d"]
    },
    {
        "question":   "Which Pet Shop Boys' song was about the lead singer's Catholic upbringing?",
        "answers":    ["a", "b", "c", "It's a Sin"]
    },
    {
        "question":   "Need You Tonight was released by which band?",
        "answers":    ["a", "INXS", "c", "d"]
    },
    {
        "question":   "Which movie featured the song, 'Danger Zone'?",
        "answers":    ["a", "Top Gun", "c", "d"]
    },
    {
        "question":   "Which movie featured the song, 'The Heat is On'?",
        "answers":    ["a", "b", "Beverly Hills Cop", "d"]
    },
    {
        "question":   "Which Frankie Goes to Hollywood song was banned in the UK because of it's lyrics?",
        "answers":    ["a", "b", "c", "Relax"]
    }
];
// Variables
let gameOver = false;
let correct = 0;
let incorrect = 0;

//Initialize the game
init();

function init() {

let timeRemaining = $('<div class="time-rem"><h1>"Time Remaining: " + time + " Seconds"</h1></div>');
let currentQuestion = getCurrentQuestion();
let question = $('<div class="question"><h1>currentQuestion</h1></div>');
}

function getCurrentQuestion() {

    let index = randomNumber(trivia);
    let q = ;////////////////////////

    return q;
}

//Returns a random index for the trivia object array
function randomNumber(arr) { return Math.floor(Math.random() * arr.length); }