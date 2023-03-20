const nextQuestionBttn = document.getElementById('bttnNextQuestion');
const startQuizBttn = document.getElementById('bttnStart')
const finishQuizBttn = document.getElementById('bttnFinishQuiz')
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionContent')
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const characterPhoto = document.getElementById('characterPhoto');


const runNextQuestionAnimation = function () {
        questionNumber.classList.remove("animateQuestionNumber");
    setTimeout(function(){
        questionNumber.classList.add("animateQuestionNumber");
    }, 10);

    questionText.style.visibility="hidden";
    questionText.classList.remove("animateQuestionText");
    setTimeout(function() {
        questionText.style.visibility="visible";
        questionText.classList.add("animateQuestionText");
    }, 50); 

    answer1.style.visibility = "hidden";
    answer1.classList.remove("animateAnswer");
    setTimeout(function() {
        answer1.style.visibility="visible";
        answer1.classList.add("animateAnswer");
    }, 150);

    answer2.style.visibility = "hidden";
    answer2.classList.remove("animateAnswer");
    setTimeout(function() {
        answer2.style.visibility="visible";
        answer2.classList.add("animateAnswer");
    }, 250);

    answer3.style.visibility = "hidden";
    answer3.classList.remove("animateAnswer");
    setTimeout(function() {
        answer3.style.visibility="visible";
        answer3.classList.add("animateAnswer");
    }, 250);
    
    
}

const runFinalResultsAnimation = function () {
    characterPhoto.style.visibility = 'hidden';
   setTimeout(function() {
    characterPhoto.style.visibility = 'visible';
    characterPhoto.classList.add('animateCharacterPhoto');
   }, 80) 
    
}

nextQuestionBttn.addEventListener('click', runNextQuestionAnimation);
startQuizBttn.addEventListener('click', runNextQuestionAnimation);
finishQuizBttn.addEventListener('click', runFinalResultsAnimation);

// NextQuestionBttn.addEventListener('click', document.querySelector('div').innerHTML = `Hello everyone`);
