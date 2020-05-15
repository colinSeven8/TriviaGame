// // Colin Reesor
// // Trivia Game
// // Timer homework

// For the area where the game will take place and the seconds allowed
let card = $("#game-content");
let countStartNumber = 30;

// Game objects
let trivia = [
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
      "<iframe src='https://giphy.com/embed/YuJq61a4KGcA8' width='480' height='326' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/80s-soft-cell-YuJq61a4KGcA8'>",
  },
  {
    question:
      "The Magic Number was a 1989 hit for the band, De La Soul. Which album of theirs did it appear on?",
    answers: ["Oooh", "Eye Know", "Ring Ring Ring", "3 Feet High and Rising"],
    correct: "3 Feet High and Rising",
    gif:
      '<iframe src="https://giphy.com/embed/55eIKNKr2KiVsRrJFY" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/delasoul-2-chainz-55eIKNKr2KiVsRrJFY">',
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
    correct: "Should I Stay or Should I Go?",
    gif:
      '<iframe src="https://giphy.com/embed/2WohsE4o9BQAg" width="480" height="384" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-clash-theclash-joestrummer-2WohsE4o9BQAg">',
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
      '<iframe src="https://giphy.com/embed/rbXHrvaIg7Zfy" width="480" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/80s-duran-simon-le-bon-rbXHrvaIg7Zfy">',
  },
  {
    question:
      "Which Pet Shop Boys' song was about the lead singer's Catholic upbringing?",
    answers: ["West End Girls", "Go West", "It's a Sin", "Being Boring"],
    correct: "It's a Sin",
    gif:
      '<iframe src="https://giphy.com/embed/bYEA1gLDhhrK8" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pet-shop-boys-west-end-girls-bYEA1gLDhhrK8">',
  },
  {
    question: "Need You Tonight was released by which band?",
    answers: ["U2", "Tears for Fears", "Foreigner", "INXS"],
    correct: "INXS",
    gif:
      '<iframe src="https://giphy.com/embed/6bdjnre6TByWhIdT8m" width="480" height="362" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/inxs-new-sensation-6bdjnre6TByWhIdT8m">',
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
      '<iframe src="https://giphy.com/embed/l4FGtFECqTZyhH8DS" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hornetapp-80s-gay-l4FGtFECqTZyhH8DS">',
  },
];

// Our game timer
let timer;

// The game, itself
let game = {
  trivia: trivia,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function () {
    this.counter--;
    $("#counter-number").text(this.counter);
    if (this.counter === 0) {
      this.timeUp();
    }
  },

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
    this.loadQuestion.bind(this)();
  },

  timeUp: function () {
    clearInterval(window.timer);

    $("#counter-number").text(this.counter);

    card.html("<h2>Out of Time!</h2>");
    card.append(
      "<h3>The Correct Answer was: " +
        trivia[this.currentQuestion].correct
    );
    card.append(trivia[this.currentQuestion].gif);

    if (this.currentQuestion === trivia.length - 1) {
      setTimeout(this.results, 3 * 1000);
    } else {
      setTimeout(this.nextQuestion, 3 * 1000);
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

  clicked: function (e) {
    clearInterval(window.timer);
    if (
      $(e.target).attr("data-name") ===
      trivia[this.currentQuestion].correct
    ) {
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },

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
      setTimeout(this.results.bind(this), 3 * 1000);
    } else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  answeredCorrectly: function () {
    clearInterval(window.timer);

    this.correct++;

    card.html("<h2>Correct!</h2>");
    card.append(trivia[this.currentQuestion].gif);

    if (this.currentQuestion === trivia.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    } else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
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

$(document).on("click", "#start-btn", function () {
  $(".row").prepend(
    "<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>"
  );
  game.loadQuestion.bind(game)();
});
