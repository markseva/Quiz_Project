let score = 0;
let count = 0;
let numQuest = document.getElementById("questNum"); numQuest.innerText = 4;
let num = document.getElementById("progress"); num.innerText = 0;



let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let right;




let createQuestion = function (questionText, choice0, choice1, choice2, choice3 , rightChoice) {

    let question = document.getElementById("question");
    question.innerText = questionText;

    let answer0 = document.getElementById("choice0");
    answer0.innerText = choice0;


    let answer1 = document.getElementById("choice1");
    answer1.innerText = choice1;


    let answer2 = document.getElementById("choice2");
    answer2.innerText = choice2;


     let answer3 = document.getElementById("choice3");
    answer3.innerText = choice3;

     right = rightChoice;

};


let DoTheeThings = function(){

    btn0.onclick = function () {checkCorrect(this)};
    btn1.onclick = function () {checkCorrect(this)};
    btn2.onclick = function () {checkCorrect(this)};
    btn3.onclick = function () {checkCorrect(this)};

    if(count === 0){
        createQuestion("huh", "who", "when", "die", "help", "when");


    }else if(count === 1){
        createQuestion("a", "a", "ap", "a", "a", "ap");
    }else if(count === 2){
        createQuestion("al", "al", "apl", "al", "al", "apl");
    }else if(count === 3){
    createQuestion("al", "al", "apl", "al", "al", "apl");
}



    };


let checkCorrect = function (button) {
    if(button.innerText === right){
        score++;
        num++;
        alert("aaaaaaaaaaaaaaaaaa");
    }
    count++;
    DoTheeThings();

};
















