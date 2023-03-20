

// Declare most of the variables we will need throughout.
const landingContainer = document.getElementById('landingPageSection');
const quizContainer = document.getElementById('quizContainerSection');
const resultsContainer = document.getElementById('resultsContainerSection');
const finishQuizContainer = document.getElementById('finishQuizSection');
const bttnStartQuiz = document.getElementById('bttnStart');
const bttnNextQuestion = document.getElementById('bttnNextQuestion');
const bttnFinishQuiz = document.getElementById('bttnFinishQuiz');
const bttnEndQuiz = document.getElementById('bttnEndQuiz');
const bttnRetakeQuiz01 = document.getElementById('retakeQuiz01');
const bttnRetakeQuiz02 = document.getElementById('retakeQuiz02');

let currentQuestion = 0;
const totalQuestions = 6;
//This array needs to have the same amount of numbers in it as there are questions.
let answersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const questionText1 = document.getElementById("questionContent");

const optionText1 = document.getElementById("textOption1");
const optionText2 = document.getElementById('textOption2');
const optionText3 = document.getElementById('textOption3');

const questionValue1 = document.getElementById("radioOption1");
const questionValue2 = document.getElementById("radioOption2");
const questionValue3 = document.getElementById("radioOption3");


//This is the array we eventually are going to put into the whatCharacterAmI function.
let valueArray = [];




// on load, quizContainer and finish button are set to display none.
document.onload = quizContainer.style.display = 'none';
document.onload = resultsContainer.style.display = 'none';
document.onload = finishQuizContainer.style.display = 'none';

//The landing page container generates a random quote upon loading a random quote.
// This function comes from the random-quotes.js script.
document.onload = generateQuoteRandom();





//Function to generate question
const generateQuestion = function (index) {
    
    const selectedQuestion = questions[index];
    questionText1.innerHTML = `${selectedQuestion.questionText}`;
    optionText1.innerHTML = `${selectedQuestion.answer1}`;
    optionText2.innerHTML = `${selectedQuestion.answer2}`;
    optionText3.innerHTML = `${selectedQuestion.answer3}`;
    questionValue1.setAttribute("value", selectedQuestion.value1);
    questionValue2.setAttribute("value", selectedQuestion.value2);
    questionValue3.setAttribute("value", selectedQuestion.value3);

}


// This funtion will randomly select a question.
const generageRandomQuestion = function () {
        
    let getRandomIndex = answersArray[Math.floor(Math.random() * answersArray.length)];

    generateQuestion (getRandomIndex); 

    // Here we run a loop over the whole index and splice out the index that we just ran if it is the same as the random number.
    for (let i = 0; i < answersArray.length; i++) {
        if (answersArray[i] === getRandomIndex) {
            answersArray.splice(i, 1);
        }
    }

   
}


// When the "Start Quiz" button is clicked, the landing page is hidden, currentQuestion is incremented, and the first question is shown.
const startQuiz = function () {
    landingContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    currentQuestion++;
    document.getElementById('questionNumber').innerHTML = `<h1>Question ${currentQuestion}</h1>`;

        //run generate question function
    generageRandomQuestion();
    
}

//When the 'Next Question' button is clicked, this function is run.
const nextQuestion = function () {
    
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select an answer!')
    } else {

      currentQuestion++;
      const questionDisplay = document.getElementById('questionNumber');
    questionDisplay.innerHTML = `<h1>Question ${currentQuestion}</h1>`;

      //Get the value of the selected radio button
    const selectedAnswer = selectedOption.getAttribute('value');
    valueArray.push(selectedAnswer);
    console.log('Value array currently = ' + valueArray);

    // If we haven't reached the total questions yet, we generate a random question. If we have reached the total, we change the button to 'finish' and run the whatCharacterAmI program.
    if (currentQuestion <= totalQuestions) {
        generageRandomQuestion(); 
    } else {
        // If the current question is not <= total questions, then we are going to hide the current question, show text, and change the button to 'complete.'
        quizContainer.style.display = 'none';
        finishQuizContainer.style.display = 'block';
    }

    //This unchecks the radio button for the next question.
    selectedOption.checked = false;
    }
    
    
}


const finalAnswer = function() {

    const finalCharacter = whatCharacterAmI(...valueArray);
    const characterPhoto = document.getElementById("characterPhoto");
    const resultQuote = document.getElementById('resultQuote');
    const resultQuoteSpeaker = document.getElementById('resultQuoteSpeaker');

    let textToDisplay;

    switch (finalCharacter) {
        case 'Jim':
        textToDisplay = 'Jim Halpert!';
        characterPhoto.innerHTML = `<img src="media/character-images/jim-halpert.jpg">`;
        resultQuote.innerHTML = `"Last week, Dwight found half a joint in the parking lot. And as it turns out, Dwight finding drugs is more dangerous than most people using drugs."`;
        resultQuoteSpeaker.innerHTML = `—Jim Halpert`;
         break;
       case 'Dwight':
         textToDisplay = 'Dwight Schrute!'; 
         characterPhoto.innerHTML = `<img src="media/character-images/dwight-schrute.jpg">`
         resultQuote.innerHTML = `"There’s too many people on this earth. We need a new plague."`;
        resultQuoteSpeaker.innerHTML = `—Dwight Schrute`;
         break;
       case 'Pam':
         textToDisplay = 'Pam Halpert!';
         characterPhoto.innerHTML = `<img src="media/character-images/pam-beesly.jpg">`
         resultQuote.innerHTML = `"I suggested we flip a coin, but Angela said she doesn't like to gamble."`;
        resultQuoteSpeaker.innerHTML = `—Pam Halpert`;

         break;
       case 'Michael':
         textToDisplay = 'Michael Scott!';
         characterPhoto.innerHTML = `<img src="media/character-images/michael-scott.jpg">`
         resultQuote.innerHTML = `"I’m not superstitious, but I am a little stitious."`;
        resultQuoteSpeaker.innerHTML = `—Michael Scott`;
 
         break;
       case 'Andy':
         textToDisplay = 'Andy Bernard!';
         characterPhoto.innerHTML = `<img src="media/character-images/andy-bernard.jpg">`
         resultQuote.innerHTML = `"Andy Bernard Does Not Lose Contests. He Wins Them. Or He Quits Them, Because They’re Unfair."`;
        resultQuoteSpeaker.innerHTML = `—Andy Bernard`;

         break;
       case 'Ryan':
         textToDisplay = 'Ryan Howard!';
         characterPhoto.innerHTML = `<img src="media/character-images/ryan-howard.jpg">`
         resultQuote.innerHTML = `"I’m such a perfectionist that I'd kinda rather not do it at all than do a crappy version."`;
        resultQuoteSpeaker.innerHTML = `—Ryan Howard`;

         break;
       default:
         textToDisplay = 'Sorry, something went wrong.'
     }

     document.getElementById('finalCharacter').innerHTML = `<h1>${textToDisplay}</h1>`;

     bttnFinishQuiz.style.display = 'none';

     finishQuizContainer.style.display = 'none';

     resultsContainer.style.display = 'block';

    } 


const leaveQuiz = () => {
  location.reload();
}

bttnStartQuiz.addEventListener('click', startQuiz);
bttnNextQuestion.addEventListener('click', nextQuestion);
bttnFinishQuiz.addEventListener('click', finalAnswer);
bttnEndQuiz.addEventListener('click', leaveQuiz);
bttnRetakeQuiz01.addEventListener('click', leaveQuiz);
bttnRetakeQuiz02.addEventListener('click', leaveQuiz);
