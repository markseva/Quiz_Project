let score = 0;

let pie = document.getElementById("questNum"); pie.innerText = "4";

btn0 = document.getElementById("btn0");




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

    rightChoice = document.getElementById("rightChoice");

};

let bumpQ = function (Number){
    let num = document.getElementById("progress");

    num.innerText = Number;
};


    let Quest1 = function() {

    createQuestion("who" , "what", "where", "how", "huh", "maybe");

    bumpQ("1");

    btn0.onclick = Quest2();

};

let Quest2 = function() {

    createQuestion("o" , "wt", "wre", "hw", "h", "mbe");

    bumpQ("2");

};










