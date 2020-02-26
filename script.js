let score = 0;
let count = 0;
let numQuest = 4;





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
        createQuestion("What is my name", "Evan", "Mark", "Eve", "Winter", "Evan");
    }else if(count === 1){
        createQuestion("How old am I?", "16", "17", "18", "15", "18");
    }else if(count === 2 ){
        createQuestion("What day was this finished?", "Monday", "Tuesday", "Friday", "Sunday", "Tuesday");
    }else if(count === 3 ){
    createQuestion("Did I do good?", "YES", "YES", "YES", "NO", "YES");
    }else{

        let countPE = document.getElementById("ending");
        countPE.innerText = "You got " + score + " correct out of " + numQuest;

        document.getElementById("question").innerHTML = " ";
        document.getElementById("btn0").innerHTML = " ";
        document.getElementById("btn1").innerHTML = " ";
        document.getElementById("btn2").innerHTML = " ";
        document.getElementById("btn3").innerHTML = " ";
        document.getElementById("progress").innerText = " ";
    }
    document.getElementById("progress").innerText = "Question " + (score + 0) + " of " + numQuest;

    };


let checkCorrect = function (button) {
    if(button.innerText === right) {
        score++;
    }
    count++;
    DoTheeThings();

};
















