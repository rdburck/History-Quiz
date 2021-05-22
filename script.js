const store = {
    questions: [
    {
      question: "Who was the first human to journey to outerspace?",
      answers: [
        "Neil Armstrong", 
        "Sally K Ride",
        "Yuri Gagarin", 
        "Ellison Onizuka",
      ],
      correctAnswer: "Yuri Gagarin"
    },
    
    {
      question: "When did South Sudan become a nation?",
      answers: [
        "July 4, 1776",
        "July 9, 2011",
        "January 1, 1956",
        "November 9, 1989",
      ],
      correctAnswer: "July 9, 2011"
    },
    {
      question: "To which US President the phrase 'speak softly and carry a big stick' attributed?",
     answers: [
        "Theodore Roosevelt",
        "Donald Trump",
        "Andrew Jackson",
        "Franklin Roosevelt",
      ],
      correctAnswer: "Theodore Roosevelt" 
    },
    {
      question: "Which 19th US Navy commodore was instrumental in opening Japan to trade with the West?",
      answers: [
        "Dudley W Knox",
        "Richard Dale", 
        "Edward Preble",
        "Matthew C Perry",
     ],
      correctAnswer: "Matthew C Perry"
    },
    {
      question: "Mahatma Gandhi's non-violent methods of resistance helped India achieve independence from which Empire?",
      answers: [
        "the British Empire",
        "the Japanese Empire",
        "the French Empire",
        "the US Empire",
     ],
     correctAnswer: "the British Empire"
    }, 
    {
      question: "Why did Gail Halvorsen become known as the Candy Bomber?",
      answers: [
        "As Santas first helper, he 'bombed' chimneys with candy.",
        "He built explosives into Jawbreakers.",
        "The FDA claimed his unhealthy candy 'bombed' the intestines of anyone who ate it.",
        "He 'bombed' German children with candy during the Berlin Airlift from 1948 to 1949.",
     ],   
      correctAnswer: "He 'bombed' German children with candy during the Berlin Airlift from 1948 to 1949."
    }
 ]
}

let shuffledQuestion; 
let currentQuestionIndex;
let correctAnswerScore;
let wrongAnswerScore;

const startButton = $('#start-btn');
const nextButton = $('.next-btn');
const restartButton = $('#restart-btn')
const answerButton = $('#answer-btn button')
const questionContainerElement = $('#question-container');
const questionElement = store.questions[currentQuestionIndex];
console.log(questionElement);
// const questionElement = $('#question').text(store.questions[currentQuestionIndex]);
const answerButtonElement = $('#answer-btn');
const ans1 = $('#ans1');
const ans2 = $('#ans2');
const ans3 = $('#ans3');
const ans4 = $('#ans4');
const correct = 'Correct!'
const wrong = 'Wrong! Correct answer:' + ' '


// nextButton.addClass('hide');
// $('#game-over').addClass('hide');

//document.ready function that allows player to start the quiz
$(document).ready(() => {
    $('body').html(
        `
        <h1>History Quiz</h1>
        <p>Test your knowledge of modern history with this short quiz.</p>
        <button class="start-btn" id="start-btn">Start Quiz</button>
        `
    )
    startQuiz();
    })

//function that listens for the start button click and then displays the first question
function startQuiz(){
    currentQuestionIndex = 0;
    correctAnswerScore = 0;
    wrongAnswerScore = 0;
    $('#start-btn').on('click', () => {
        console.log('start btn clicked');
        displayQuestions();
        //checkAnswer();
        
    })
}

//function that displays questions
function displayQuestions(){
    currentQuestionIndex;
        $('body').html(
            `
            <div class="quizEl" id="quizEl">
            <div class="question id="question">
            <h2>${store.questions[currentQuestionIndex].question}</h2>
            </div>
            <div class="answers" id="answers">
            <button id="ans1" class="ans-btn">${store.questions[currentQuestionIndex].answers[0]}</button>
            <button id="ans2" class="ans-btn">${store.questions[currentQuestionIndex].answers[1]}</button>
            <button id="ans3" class="ans-btn">${store.questions[currentQuestionIndex].answers[2]}</button>
            <button id="ans4" class="ans-btn">${store.questions[currentQuestionIndex].answers[3]}</button>
            </div>
            <div class="scoreEl" id="scoreEl">
            <h3>Score</h3>
            <h4> Right: ${correctAnswerScore} Wrong: ${wrongAnswerScore}</h4> 
            </div>
            </div>
            `
        )
    checkAnswer();
}

//function that checks answers
function checkAnswer(){
    currentQuestionIndex;
    console.log('check answer function running');
    $('button').click(function(){
        //check that it's working
        console.log('button clicked');
        //compare the button with correct answer
        if($(this).text() === store.questions[currentQuestionIndex].correctAnswer){
            //correctAnswerScore++
            $('#scoreEl').prepend(
                `<p>Correct!</p>
                <button id="nxt" clas="nxt">Next Question</button>
                `
            );
            correctAnswerScore++
            console.log(correctAnswerScore);
            $('h4').text(
                `Right: ${correctAnswerScore} Wrong: ${wrongAnswerScore}`
            );

        }
        else{
            wrongAnswerScore++;
            console.log(wrongAnswerScore);
            $('#scoreEl').prepend(
                `<p>Sorry. The correct answer is ${store.questions[currentQuestionIndex].correctAnswer}</p>
                 <button id="nxt" clas="nxt">Next Question</button>
                `)
            $('h4').text(
                `Right: ${correctAnswerScore} Wrong: ${wrongAnswerScore}`
            );
        }
        $('#nxt').click(function(){
            currentQuestionIndex++ 
            displayQuestions();
        })
    })
}


// function checkAnswer(){
//     currentQuestionIndex;
//     if(currentQuestionIndex <= currentQuestionIndex.length) {
//         $('#answers button').click(function() {
//             alert('clicked');
//             console.log('button clicked');
//             let clickedElement = $(event.target);
//             let targetElement = clickedElement.closest('button');
//             console.log('targetElement');
//             if(targetElement.innerText === store.questions[currentQuestionIndex].correctAnswer){
//                 console.log('correct');
//                 // $('.nextQuestion').append(store.questions[currentQuestionIndex].correctAnswer + ' ' + '--' + ' ' + correct);
//                 // currentQuestionIndex++;
//                 // correctAnswerScore++;
//                 // $('#score').addClass('hide');
//                 // // $('.nextQuestion').append(store.questions[currentQuestionIndex].correctAnswer + ' ' + '--' + ' ' + correct);
//                 // $('#container').addClass('correct');
//                 // addScore();
//                 // $(nextButton).on('click', function (e){
//                 //   console.log('clicked next button after question.')
//                 //   $('#container').removeClass('correct');
//                 //   $('.nextQuestion').text('');
//             }
//                 else {
//                     console.log('wrong');
//                     // $('#nextQuestion').append(wrong + store.questions[currentQuestionIndex].correctAnswer);
//                     // $('#container').addClass('wrong');
//                     // $(nextButton).on('click', function(e){
//                     //   $('#container').removeClass('wrong');
//                     // })
//                     // wrongAnswerScore++;
//                     // addScore();
//                     // currentQuestionIndex ++;
//                     // $(nextButton).on('click', function (e){
//                     // console.log('clicked next button after question.')
//                     // $('.nextQuestion').text('');
//                     // })
//                 }
//         })    
//     }        
//}    
    //     if(answerText === store.questions[currentQuestionIndex].correctAnswer){
    //       $('.nextQuestion').append(store.questions[currentQuestionIndex].correctAnswer + ' ' + '--' + ' ' + correct);
    //       currentQuestionIndex++;
    //       correctAnswerScore++;
    //       $('#score').addClass('hide');
    //       // $('.nextQuestion').append(store.questions[currentQuestionIndex].correctAnswer + ' ' + '--' + ' ' + correct);
    //       $('#container').addClass('correct');
    //       addScore();
    //       $(nextButton).on('click', function (e){
    //         console.log('clicked next button after question.')
    //         $('#container').removeClass('correct');
    //         $('.nextQuestion').text('');
    //       })
    //       }
    //     else {
    //       $('#nextQuestion').append(wrong + store.questions[currentQuestionIndex].correctAnswer);
    //       $('#container').addClass('wrong');
    //       $(nextButton).on('click', function(e){
    //         $('#container').removeClass('wrong');
    //       })
    //       wrongAnswerScore++;
    //       addScore();
    //       currentQuestionIndex ++;
    //       $(nextButton).on('click', function (e){
    //       console.log('clicked next button after question.')
    //       $('.nextQuestion').text('');
    //       })
    //     }
    //   }
    //   else {
    //     endQuiz(answerText);
    //   }


//function that loops through questions after player selects an answer

//functions that displays correct message if player's answer is correct and adds point to correct score

//function that displays wrong message if player's answer is wrong, shows correct answer, and then adds wrong score

//function that shows score at end of game and allows players to restart quiz. it should be the same as the function
//that listens for the start button click and then displays the first question 

/*function startGame(){
  $('#start-btn').on('click', function(){
    console.log('start button clicked');
    // $('h1').addClass('hide');
    // nextButton.removeClass('hide');
    // nextButton.addClass('show');
    // startButton.addClass('hide');
    // questionContainerElement.removeClass('hide');
    // questionContainerElement.addClass('show');
    showQuizElements(0);
    //showQuestion(0);
    //currentQuestionIndex += 1;
  })
  $('#answer-btn button').on('click', function(e){
    checkPlayerAnswer($(e.target).text());
    $('#answer-btn').addClass('hide');
  })
  
  $(nextButton).on('click', function(e) {
    //for (var i = 1; i < store.questions.length; i++){
      //showQuestion(i);
      //currentQuestionIndex += 1;
      //showQuestion(questionIndex);
      showQuizElements(questionIndex)
      $('#answer-btn').removeClass('hide');
    //}
  })
}

$(document).ready(function() {
  console.log('starting function');
  var appTitle = '<h1>History Quiz</h1>';
  
  $('body').append(appTitle);
  $('body').append('<div id="container"></div>');
  $('#container').append('<div id="controls" class="controls"></div>');
  $('#controls').append('<button id="start-btn" class="start-btn">Start</button>');
  
});

 $(startGame); 
// $(createBeginningElements());

// createBeginningElements();

function showQuizElements(questionIndex) {
  console.log('showQuizElements ran');
  console.log(store.questions[currentQuestionIndex].question);
  currentQuestionIndex;
  $('#container').append('<div id="question-container"></div>');
  $('#question-container').append('<div id="question" class="question"></div>');
  $('#question').text(store.questions[currentQuestionIndex].question);
  $('#question').append('<div id="answer-btn" class="btn-grid"></div>');
  $('#answer-btn').append(`<button id="ans1" class="btn">${store.questions[currentQuestionIndex].answers[0]}</button>`);
  $('#answer-btn').append(`<button id="ans2" class="btn">${store.questions[currentQuestionIndex].answers[1]}</button>`);
  $('#answer-btn').append(`<button id="ans3" class="btn">${store.questions[currentQuestionIndex].answers[2]}</button>`);
  $('#answer-btn').append(`<button id="ans1" class="btn">${store.questions[currentQuestionIndex].answers[1]}</button>`);
  $('#question').append('<div id="nextQuestion" class = "nextQuestion"></div>');

  $('#controls').append('<button id="next-btn" class="next-btn">Next</button>');
  $('#start-btn').remove();
  $('body').append('<footer id="score" class="score"><h3>Score</h3></footer>')
  $('footer').append('Correct:', ' ', correctAnswerScore, ' ', 'Incorrect:', ' ', wrongAnswerScore)
}



// showScoreElements();


//function showQuestion(questionIndex) {
  //console.log('show question');
  // showQuizElements();
  // const question = store.questions[questionIndex];
  // // questionElement.text(question.question);
  // const AnswerText1 = question.answers[0];
  // const AnswerText2 = question.answers[1];
  // const AnswerText3 = question.answers[2];
  // const AnswerText4 = question.answers[3];
  // //ans#
  // ans1.text(AnswerText1);
  // ans2.text(AnswerText2);
  // ans3.text(AnswerText3);
  // ans4.text(AnswerText4); 
//}

$('#answer-btn button').on('click', function(e){
  console.log(e);
  // checkPlayerAnswer('');
})

function checkPlayerAnswer(answerText){
  showQuizElements(currentQuestionIndex);
  console.log('current question index', currentQuestionIndex);
  if (currentQuestionIndex < 5) {
    $('#game-over').addClass('hide')
    if(answerText === store.questions[currentQuestionIndex].correctAnswer){
      $('.nextQuestion').append(store.questions[currentQuestionIndex].correctAnswer + ' ' + '--' + ' ' + correct);
      currentQuestionIndex++;
      correctAnswerScore++;
      $('#score').addClass('hide');
      // $('.nextQuestion').append(store.questions[currentQuestionIndex].correctAnswer + ' ' + '--' + ' ' + correct);
      $('#container').addClass('correct');
      addScore();
      $(nextButton).on('click', function (e){
        console.log('clicked next button after question.')
        $('#container').removeClass('correct');
        $('.nextQuestion').text('');
      })
      }
    else {
      $('#nextQuestion').append(wrong + store.questions[currentQuestionIndex].correctAnswer);
      $('#container').addClass('wrong');
      $(nextButton).on('click', function(e){
        $('#container').removeClass('wrong');
      })
      wrongAnswerScore++;
      addScore();
      currentQuestionIndex ++;
      $(nextButton).on('click', function (e){
      console.log('clicked next button after question.')
      $('.nextQuestion').text('');
      })
    }
  }
  else {
    endQuiz(answerText);
  }
}

function addScore() {
//if user answers question correctly (see if statement in checkPlayerAnswer)
//adds number of correct answers to corect score in the footer.
//Will need to set a correctAnswer variable to 0.
//When answer is correct, then correctAnswer++.
//Maybe it will look like 'Correct: correctAnswer++'.
//This function will probably need to run in checkPlayerAnswer function.
  //$('#score').append('Correct: ' + correctAnswerScore + 'Incorrect: ' + wrongAnswerScore);
  $('#score').text('Correct: ' + correctAnswerScore + 'Incorrect: ' + wrongAnswerScore);
  $(nextButton).on('click', function(e){
    console.log('click next within add score function');
    $('#score').removeClass('hide');
  })
};

function endQuiz(answerText){
  //if last question, will do showResults() function
  if(currentQuestionIndex === 5){
      console.log(answerText);
      console.log(store.questions[currentQuestionIndex].correctAnswer)
    if(answerText === store.questions[currentQuestionIndex].correctAnswer){
        //currentQuestionIndex++;
        //currentQuestionIndex++;
        $('.nextQuestion').append(store.questions[currentQuestionIndex].correctAnswer + ' ' + '--' + ' ' + correct);
        $('#container').addClass('correct')
        correctAnswerScore++;
         //$('#score').addClass('hide');
         addScore();
        // $(nextButton).on('click', function (e){
        //   console.log('clicked next button after question.')
        //   $('.nextQuestion').text('');
        // })
      }
      else {
        // $('#container').append(wrong).addClass('wrong');
        $('#nextQuestion').append(wrong + store.questions[currentQuestionIndex].correctAnswer);
        $('#container').addClass('wrong');
        wrongAnswerScore++;
        addScore();
      //   currentQuestionIndex ++;
      //     $(nextButton).on('click', function (e){
      //     console.log('clicked next button after question.')
      //     $('.nextQuestion').text('');
      //    })
       }
  $(nextButton).on('click', function(e) {
      $('#score').addClass('hide');
      $('#next-btn').addClass('hide');
      $(questionContainerElement).addClass('hide');
      $(questionContainerElement).removeClass('show');
      $('#controls').addClass('hide');
      $('#game-over').removeClass('hide')
      $('#game-over').html('<h2>Score</h2> <h3></h3> <button id="restart-btn">Restart</button>');
      $('#game-over h3').html('Correct: ' + correctAnswerScore + ' ' + 'Incorrect: ' + wrongAnswerScore);
      retakeQuiz();
      // $('#container').html('<h2>Score</h2> <h3></h3> <button id="restart-btn">Start</button>');
      // $('#container h3').html('Correct: ' + correctAnswerScore + 'Incorrect: ' + wrongAnswerScore);
      // $(startButton).removeClass('hide');
      // $(startButton).addClass('show');
      // $(restartButton).on('click', function(e){
      //   currentQuestionIndex === 0;
      //   correctAnswerScore === 0;
      //   wrongAnswerScore === 0;
      //   location.reload();
      //   return false;
      // })
  })     
  }
}

function retakeQuiz(){
  $('#game-over button').on('click', function(e){
    console.log('restart button clicked');
    currentQuestionIndex === 0;
    correctAnswerScore === 0;
    wrongAnswerScore === 0;
    window.location.reload();
  })
   }
  

// function showResults(){};
// //Ends quiz. Knows that there are no more questions to display. 
// //After last question (i = 5), footer content is removed and replaces body content.
// //Next button takes user back to startGame page.
// //What if I changed my for loop to a while loop and made another while loop so that while var is greater than
// // 5, it runs this function.
// if (currentQuestionIndex > 5) {
//   $('#container h2').text('Score');
//   $('#container').text(CorrectAnswerScore + WrongAnswerScore);
//
*/