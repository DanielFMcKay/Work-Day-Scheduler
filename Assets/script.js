// We need questions for the question field.

var questNumber = -1;
// the current score is left undefined, as defining it happens 
// when the quiz starts and acts as a trigger for the timer
let currentScore = 0;

// temporarily hiding the parts of the page not yet needed. Which is like, most of them.

const displayScore = document.getElementById("display-score");
displayScore.style.visibility = 'hidden';
const highScores = document.getElementById("high-scores");
highScores.style.visibility = 'hidden';
const quizResult = document.getElementById("quiz-result");
quizResult.style.visibility = 'hidden';
var enterInitials = document.getElementById("enter-initials");
enterInitials.style.visibility = 'hidden';
const initialsBtn = document.getElementById("enter-initials-btn");
initialsBtn.style.visibility = 'hidden';
const initialsField = document.getElementById("initials");
initialsField.style.visibility = 'hidden';
const finalBtns = document.getElementById("final-buttons");
finalBtns.style.visibility = 'hidden';
const scoresList = document.getElementById("scores-list");
scoresList.style.visibility = 'hidden';
const homePageBtn = document.getElementById("home-page-btn");
const clearScores = document.getElementById("clear-scores-btn");

const startButton = document.getElementById("start-button");



const quizQuestion = [
  {
    currentQuestion: "var xVariable: '0' is an example of what type of variable?",
    // The choices are in an array.
    choices: ["boolean", "string", "number", "undefined"],
    // Each question has one objectively correct answer.
    rightAnswer: 1
  },
  {
    currentQuestion: "If the four buttons below are coded as an array of four elements, please click the button that corresponds to index 2 in the array.",
    choices: ["2", "let variable = [2,2,2,2]", "object", "This is a trick question, read it carefully. WAIT THE TIMER IS ALM-"],
    rightAnswer: 2
  },
  {
    currentQuestion: "Which of the following is NOT a valid event listener?",
    choices: ["dblclick", "keydown", "mouseout", "rightclick"],
    // Apple has gone too far!
    rightAnswer: 3
  },
  {
    currentQuestion: "What does Undefined + 4 return?",
    choices: ["NaN", "4", "'Undefined + 4''", "Null"],
    rightAnswer: 0
  },
];


const quizField = document.getElementById("quiz-field");
const endDisplay = document.getElementById("quiz-end");


// declares variable for the timer and what class to attach it to
let timeLeft = document.getElementById("timer");


// declares variable for time remaining and where it starts
let secondsLeft = 75;
var finalScore;

// declares the timer, which is inside the quiz field and thus only starts when the quiz does
function timerStart() {
  // Sets interval in variable
  let timerInterval = setInterval(function () {
    secondsLeft--;
    // displays time left
    timeLeft.textContent = secondsLeft + " seconds remaining.";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      return timesUp();
    }
    // Declares that each interval is exactly 1000 milliseconds, or 1 second.
  }, 1000);
}

var finalScore;
let currentQuiz;


function quizStart() {
  questNumber = -1;
  timerStart();
  document.getElementById("start-page").style.display = "none";
  document.getElementById("quiz-field").style.display = "visible";
  displayScore.style.visibility = 'visible';
  showQuestion(quizQuestion);
}


function showQuestion() {
  // showScore();
  questNumber++;
  // automatically ends quiz after five questions
  if (questNumber >= 4) {
    return quizEnd();
  } else {

    console.log(`current question is number ${questNumber}`);
    console.log(`The current score is ${currentScore}`);


    let currentQuiz = quizQuestion[questNumber];

    var questionField = document.createElement("h1");
    questionField.setAttribute("id", "question-field");
    var buttonField = document.createElement("ul");
    buttonField.setAttribute("id", "button-field");
    buttonField.addEventListener("click", function (q) {
      verify(q);
    });

    // declares the different buttons corresponding to the quiz choices
    var ch1 = document.createElement('li');
    ch1.setAttribute("id", "btn-one");
    var ch2 = document.createElement('li');
    ch2.setAttribute("id", "btn-two");
    var ch3 = document.createElement('li');
    ch3.setAttribute("id", "btn-three");
    var ch4 = document.createElement('li');
    ch4.setAttribute("id", "btn-four");


    questionField.textContent = currentQuiz.currentQuestion;
    ch1.textContent = currentQuiz.choices[0];
    ch2.textContent = currentQuiz.choices[1];
    ch3.textContent = currentQuiz.choices[2];
    ch4.textContent = currentQuiz.choices[3];

    // wipes the quiz area after each question
    quizField.innerHTML = "";
    quizField.append(questionField);
    // deploys the response buttons and links them to what they do
    questionField.append(buttonField);
    buttonField.append(ch1);
    buttonField.append(ch2);
    buttonField.append(ch3);
    buttonField.append(ch4);

    displayScore.innerHTML = `Your current score is: ${currentScore}.`;
  }

  function verify(q) {

    let currentQuiz = quizQuestion[questNumber];
    let rightAnswersCurrent = currentQuiz.rightAnswer;
    let rightAnswerText = currentQuiz.choices[rightAnswersCurrent];

    console.log(`the right answer is ${rightAnswerText}.`);

    // tells the user if they got a question right or not before moving on to the next question
    let splashResult = document.createElement("h1");
    var quizField = document.getElementById("quiz-field");
    quizField.appendChild(splashResult);
    if (q.target.textContent === rightAnswerText) {
      currentScore++;
      splashResult.textContent = "GIT R DUN!! (correct)";
      secondsLeft = secondsLeft + 3;
    } else {
      splashResult.textContent = "Dagnammit!! (wrong)";
      secondsLeft = secondsLeft - 9;
    }
    // closes the splash feedback and moves to the next question after 1 second
    setTimeout(showQuestion, 1000);
  }
}



// quiz end if the score ends due to time being up (includling if you drop below zero by getting the last question wrong)
function timesUp() {
  quizResult.style.visibility = 'visible';
  quizField.style.display = 'none';
  quizResult.innerHTML = `You answered ${currentScore} questions correctly. Also, Time's Up!`;
  displayScore.style.display = 'none';
  secondsLeft === undefined;
  // completely hides the timer
  document.getElementById("timer").style.display = "none";
  finalScore = currentScore;
  // reveals all the highscore elements
  enterInitials.style.visibility = 'visible';
  initialsBtn.style.visibility = 'visible';
  initialsField.style.visibility = 'visible';
  scoresList.style.visibility = 'visible';
}


// displays start page and hides quiz, then the opposite once the quiz has started and a starting score is defined


// quiz end if you finish the last question without running out of time
function quizEnd() {
  quizResult.style.visibility = 'visible';
  quizField.style.display = 'none';
  quizResult.innerHTML = `You answered ${currentScore} questions correctly.`;
  displayScore.style.display = 'none';
  finalScore = currentScore;
  document.getElementById("timer").style.display = "none";
  // bypasses the timer's countdown to prevent the "Time's Up!" trigger
  secondsLeft = undefined;
  // if I were to do all these same reveals in more than two different conditions, I'd just make it its own function probably. But it's just twice.
  enterInitials.style.visibility = 'visible';
  initialsBtn.style.visibility = 'visible';
  initialsField.style.visibility = 'visible';
  scoresList.style.visibility = 'visible';
}


// function below in theory loads the previous scores

// function to display scores. Still working on it.
function renderLatestScores() {

  // grabs the scores in storage, still in array form
  var highScoresList = JSON.parse(localStorage.getItem('scores'));
  console.log(highScoresList);
  console.log("is highScoresList on retrieval");

  // makes the Recent Scores title visible (formerly "High Scores")
  highScores.style.visibility = 'visible';
  // starts a for loop going through the array, and grabbing each initial and score by position
  for (var i = 0; i < highScoresList.length; i++) {
    var entry = document.createElement('li');
    // converts initials and score into variables during the course of the for loop
    var listInit = highScoresList[i].initials;
    var listScore = highScoresList[i].score;

    console.log("listInit is");
    console.log(listInit);
    console.log("listScore is")
    console.log(listScore);
    // li.textContent = playerEntry;
    // entry.textContent = `${entryDisplay}:  ${localStorage.getItem('final score')}`;

    // creates a text display each initial and score combination to display in order
    entry.textContent = `${listInit}:    ${listScore}`;

    console.log("entry.textcontent is");
    console.log(entry.textcontent)
    entry.setAttribute('id', 'scores-list');
    // adds the text, and by prepending it displays from newest to oldest
    scoresList.prepend(entry);
  } console.log(`scores should render`);
}






function storeScores() {
  var highScoresList = JSON.parse(localStorage.getItem('scores')) || [];
  console.log(highScoresList);
  console.log("is highScoresList on storage");

  var initialsStored = initialsField.value.trim();
// stores initials and scores as pairs added to an array
  var scoreEntry = {
    initials: initialsStored,
    score: finalScore
  }
  console.log(scoreEntry);
  console.log("is ScoreEntry");
  // adds new initials and score into highScoresList array
  highScoresList.push(scoreEntry);
  localStorage.setItem('scores', JSON.stringify(highScoresList));
}



// this button runs the functions that store and render the scores
initialsBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // shows Home Page and Clear Scores buttons
  finalBtns.style.visibility = 'visible';
  var initialsStored = initialsField.value.trim();

// if no initials are submitted, nothing happens
  if (initialsStored === "") {
    return;
  } else {
    // stores score and initials to local storage
    localStorage.setItem('initials', initialsStored);
    localStorage.setItem('final score', finalScore);

    storeScores();
    renderLatestScores();
    console.log(`errorfield2`);
  }
});




// returns you to the home page if you wish, regardless of whether you wish to enter your initials and submit your score
const reloadPage = function () {
  location.reload();
}
homePageBtn.addEventListener('click', reloadPage);



clearScores.addEventListener("click", function () {
  localStorage.clear();
  scoresList.innerHTML = "";
});



// loads scores if there's previous scores
function quizDataInit() {
  var checkIfScoresDefined = JSON.parse(localStorage.getItem('scores'));
  if (checkIfScoresDefined !== undefined) {
    renderLatestScores();
    console.log(`scores array defined`);
  }
}


// in the end, calling the above function caused the list to render twice, and was also unnecessary

quizDataInit();

