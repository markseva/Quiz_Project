let score = 0;
let result = " ";

let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");






let createQuestion = function (questionText, choice0, choice1, choice2, choice3) {

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

};

while(score >= 4){
     createQuestion("What is this project for?", "To test my skills", "Busy Work", "So the boss man won't fire Law", "Cash money baby!");
     if(btn3.onclick){
         score++;
     }else {
         score--;
     }
};
alert(score);


