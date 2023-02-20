// "use strict";
// //structured reperesentation of html doc
// //connection btn html and js as well as css
// //All the dom related part are not includes in JS
// //DOM and DOM methods are part of Web API(Application Programming Interface) basically the libraries written
// //in JS and are available to us which is interactable in JS
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='🎉Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);
'use strict';
// const sec_number = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').value = sec_number;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔No Number!';
//   }
//   if (guess == sec_number) {
//     document.querySelector('.message').textContent = '🎉Correct Number!';
//     document.querySelector('.number').textContent = sec_number;
//   } else if (guess != sec_number) {
//     if (guess > sec_number) {
//       document.querySelector('.message').textContent = 'TOO HIGH⬆️';
//     } else if (guess < sec_number) {
//       document.querySelector('.message').textContent = 'TOO LOW⬇️';
//     }
//   }
// });

let sec_num = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').value = sec_num;
let score_var = 20;
let highscore=0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number!';
  } else if (guess != sec_num) {
    if (guess > sec_num) {
      document.querySelector('.message').textContent = 'TOO HIGH⬆️';
    } else if (guess < sec_num) {
      document.querySelector('.message').textContent = 'TOO LOW⬇️';
    }
    if (score_var > 1) {
      score_var--;
      document.querySelector('.score').textContent = score_var;
    } else {
      document.querySelector('.score').textContent = score_var - 1;
      document.querySelector('.message').textContent = 'You Lost The Game!👎';
    }
  } else if (guess == sec_num) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = sec_num;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.Width = '30rem';
    if(score_var>highscore){
      highscore=score_var
      document.querySelector('.highscore').textContent=highscore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score_var=20;
  document.querySelector('.score').textContent = score_var;
  document.querySelector('.guess').value = '';
  sec_num = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.Width = '15rem';
  document.querySelector('.number').textContent = '?';
});
