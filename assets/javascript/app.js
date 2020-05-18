// // Colin Reesor
// // Trivia Game
// // Timer homework

// For the area where the game will take place and the seconds allowed
var card = $("#game-content");
var countStartNumber = 30;

// Game objects
var trivia = [
  {
    question:
      "Which hit song featured the following lyric: 'The love we share seems to go nowhere and I've lost my light.'",
    answers: [
      "Tainted Love",
      "Say Hello, Wave Goodbye",
      "Torch",
      "Seedy Films",
    ],
    correct: "Tainted Love",
    gif:
      '<iframe src="https://giphy.com/embed/KQBB3QhDw46Uo" width="480" height="361" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cheezburger-funny-dancing-KQBB3QhDw46Uo"></a></p>',
  },
  {
    question:
      "The Magic Number was a 1989 hit for the band, De La Soul. Which album of theirs did it appear on?",
    answers: ["Oooh", "Eye Know", "Ring Ring Ring", "3 Feet High and Rising"],
    correct: "3 Feet High and Rising",
    gif:
      '<iframe src="https://giphy.com/embed/LPDH1s2GCFOk8" width="480" height="364" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mandc-me-myself-and-i-de-la-soul-LPDH1s2GCFOk8"></a></p>',
  },
  {
    question:
      "Which 80's Clash song, when re-released in 1991 went stright to number 1 in the UK?",
    answers: [
      "Rock the Casbah",
      "London Calling",
      "Should I stay or Should I Go?",
      "Bank Robber",
    ],
    correct: "Should I stay or Should I Go?",
    gif:
      '<iframe src="https://giphy.com/embed/8FSMeYKEVf0QUb1PpX" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/applemusic-music-video-rock-8FSMeYKEVf0QUb1PpX"></a></p>',
  },
  {
    question:
      "Which Duran Duran song opened with the laughter of the keyboardist's girlfriend?",
    answers: [
      "Hungry Like the Wolf",
      "Come Undone",
      "Ordinary World",
      "Serious",
    ],
    correct: "Hungry Like the Wolf",
    gif:
      '<iframe src="https://giphy.com/embed/T9YUCsC6pIxLG" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/80s-duran-simon-le-bon-T9YUCsC6pIxLG"></a></p>',
  },
  {
    question:
      "Which Pet Shop Boys' song was about the lead singer's Catholic upbringing?",
    answers: ["West End Girls", "Go West", "It's a Sin", "Being Boring"],
    correct: "It's a Sin",
    gif:
      '<iframe src="https://giphy.com/embed/Vi0DrJq7l9riLzcPiS" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/songdestages-funny-petshopboys-Vi0DrJq7l9riLzcPiS"></a></p>',
  },
  {
    question: "Need You Tonight was released by which band?",
    answers: ["U2", "Tears for Fears", "Foreigner", "INXS"],
    correct: "INXS",
    gif:
      '<iframe src="https://giphy.com/embed/1foX1NDILhYxXiQoes" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/inxs-need-you-tonight-1foX1NDILhYxXiQoes"></a></p>',
  },
  {
    question: "Which movie featured the song, 'Danger Zone'?",
    answers: [
      "The Goonies",
      "Top Gun",
      "Breakfast Club",
      "Ferris Bueller's Day Off",
    ],
    correct: "Top Gun",
    gif:
      '<iframe src="https://giphy.com/embed/m9523AAgxz9Lj7ZMau" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/topgun-m9523AAgxz9Lj7ZMau">',
  },
  {
    question: "Which movie featured the song, 'The Heat is On'?",
    answers: [
      "The Terminator",
      "Beverly Hills Cop",
      "Raider's of the Lost Ark",
      "Gremlins",
    ],
    correct: "Beverly Hills Cop",
    gif:
      '<iframe src="https://giphy.com/embed/9Vo3RrXKk9Z6mGzfyK" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/starz-eddie-murphy-beverly-hills-cop-9Vo3RrXKk9Z6mGzfyK">',
  },
  {
    question:
      "Which Frankie Goes to Hollywood song was banned in the UK because of it's lyrics?",
    answers: ["Watching the Wildlife", "Rage Hard", "Relax", "Born to Run"],
    correct: "Relax",
    gif:
      '<iframe src="https://giphy.com/embed/3ohhwmWYx1au41aQPm" width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/georgemichael-george-michael-careless-whisper-3ohhwmWYx1au41aQPm"></a></p>',
  },
];

// Our game timer
var timer;

// The game, itself
var game = {
  trivia: trivia,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  // Property called every second in loadQuestion(), decrements with each call and updates the DOM, if it hits 0 it will call timeUp()
  countdown: function () {
    this.counter--;
    $("#counter-number").text(this.counter);
    if (this.counter === 0) {
      this.timeUp();
    }
  },

  // Property creates the timer and begins countdown, posts the current question and all answer button
  loadQuestion: function () {
    timer = setInterval(this.countdown.bind(this), 1000);

    card.html("<h2>" + trivia[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < trivia[this.currentQuestion].answers.length; i++) {
      card.append(
        "<button class='answer-button' id='button' data-name='" +
          trivia[this.currentQuestion].answers[i] +
          "'>" +
          trivia[this.currentQuestion].answers[i] +
          "</button>"
      );
    }
  },

  nextQuestion: function () {
    this.counter = window.countStartNumber;
    $("#counter-number").text(this.counter);
    this.currentQuestion++;
    console.log("this ", this);
    this.loadQuestion.bind(this)();
  },

  // Property called by countdown() when timer hits 0, clears the timer and updates the DOM, displays the correct answer and gif, if last question end game, else call the next question
  timeUp: function () {
    clearInterval(window.timer);

    $("#counter-number").text(this.counter);

    card.html("<h2>Out of Time!</h2>");
    card.append(
      "<h3>The Correct Answer was: " + trivia[this.currentQuestion].correct
    );
    card.append(trivia[this.currentQuestion].gif);

    if (this.currentQuestion === trivia.length - 1) {
      setTimeout(this.results, 3000);
    } else {
      console.log("this ", this);
      setTimeout(this.nextQuestion.bind(this), 3000);
    }
  },

  results: function () {
    clearInterval(window.timer);

    card.html("<h2>All done, here's how you did!</h2>");

    $("#counter-number").text(this.counter);

    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append(
      "<h3>Unanswered: " +
        (trivia.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
    card.append("<br><button id='start-over'>Start Over?</button>");
  },

  // Clear timer and see if the user clicked the right or wrong answer
  clicked: function (e) {
    clearInterval(window.timer);
    if (
      $(e.target).attr("data-name") === trivia[this.currentQuestion].correct
    ) {
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },

  // Increment 'incorrect' counter, clear counter, update the DOM and call next question or the final results
  answeredIncorrectly: function () {
    this.incorrect++;
    clearInterval(window.timer);

    card.html("<h2>Nope!</h2>");
    card.append(
      "<h3>The Correct Answer was: " +
        trivia[this.currentQuestion].correct +
        "</h3>"
    );
    card.append(trivia[this.currentQuestion].gif);

    if (this.currentQuestion === trivia.length - 1) {
      setTimeout(this.results.bind(this), 3000);
    } else {
      setTimeout(this.nextQuestion.bind(this), 3000);
    }
  },

  answeredCorrectly: function () {
    clearInterval(window.timer);

    this.correct++;

    card.html("<h2>Correct!</h2>");
    card.append(trivia[this.currentQuestion].gif);

    if (this.currentQuestion === trivia.length - 1) {
      setTimeout(this.results.bind(this), 3000);
    } else {
      setTimeout(this.nextQuestion.bind(this), 3000);
    }
  },

  // Reset game values
  reset: function () {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  },
};

// Click events
$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function (e) {
  game.clicked.bind(game, e)();
});

// Start the game
$(document).on("click", "#start-btn", function () {
  $("#inner-container").prepend(
    "<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>"
  );
  game.loadQuestion.bind(game)();
});
