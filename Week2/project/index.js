/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

"use strict";
const increment = document.getElementById("increment");
let lengthOfSession = document.getElementById("lengthOfSession")
const decrement = document.getElementById("document");
let minute = document.getElementById("minute");
let semicolon = document.getElementById("semicolon");
let second = document.getElementById("second");
const play = document.getElementById("play");
const stop = document.getElementById("stop");

let timer;
lengthOfSession.innerText = minute.innerText;


// I found these solutions to add or decrease a number.
const increase = () => {
  minute.innerText++;
  lengthOfSession.innerHTML = minute.innerText;
};

const decrease = () => {
  minute.innerHTML--;
  lengthOfSession.innerText = minute.innerText;
}

//I couldn't find a solution for pause and stop. Also when play is clicked the arrows work too. 
// I couldn't find a solution for prevent to change the length of session. Sorry, but I get confused to finish this project.