"use strict";
let score = 20;
let rvalue = Math.trunc(Math.random() * 20) + 1;
let y = 0;
let maxScore = 0;
console.log(rvalue, typeof rvalue);
document.querySelector(".check").addEventListener("click", function () {
  y = document.querySelector(".guess").value;
  console.log(y);
  if (rvalue == y) {
    document.querySelector(".state").textContent = "right number";
    document.querySelector(".number").textContent = `${rvalue}`;
    if(score > maxScore){
        maxScore=score;
        document.querySelector('.max').textContent=`maximum score = ${maxScore}`
    }
  } else if (rvalue < y) {
    document.querySelector(".state").textContent = "too high";
    score--;
    document.querySelector(".score").textContent = `score:${score}`;
  } else {
    document.querySelector(".state").textContent = "too low";
    score--;
    document.querySelector(".score").textContent = `score:${score}`;
  }
  //   console.log(y);
});

document.querySelector(".again").addEventListener("click", function () {
    rvalue = Math.trunc(Math.random() * 20) + 1;
    console.log(rvalue);
    document.querySelector(".guess").value = 0;
    document.querySelector(".state").textContent = "guess number";
    document.querySelector(".number").textContent = `?`;
    score = 20;
    document.querySelector(".score").textContent = `score:${score}`;
});
