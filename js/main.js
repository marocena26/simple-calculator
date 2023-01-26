"use strict";

//CONSTANT
const numberOne = document.querySelector(".js-number-1");
const numberTwo = document.querySelector(".js-number-2");
const result = document.querySelector(".js-result");
const btn = document.querySelector(".js-btn");
const select = document.querySelector(".js-select");

//FUNCTIONS

let inputOne = "";
let inputTwo = "";
let selectInput = "choose";

//function to obtain the result according to the operator
function calculate(numberOneValue, numberTwoValue, selectValue) {
  let result = "";
  if (selectValue === "+") {
    result = numberOneValue + numberTwoValue;
  } else if (selectValue === "-") {
    result = numberOneValue - numberTwoValue;
  } else if (selectValue === "*") {
    result = numberOneValue * numberTwoValue;
  } else if (selectValue === "/") {
    result = numberOneValue / numberTwoValue;
  } else if (selectValue === "%") {
    result = numberOneValue % numberTwoValue;
  }

  return result;
}

//function to render the result
function resultText(numberResult) {
  console.log(result);
  result.innerHTML = `${numberResult}`;
}

//event handler function
function handleClick(ev) {
  ev.preventDefault();

  if (isNaN(numberOne.value) || isNaN(numberTwo.value)) {
    console.log("entra");
    result.innerHTML = "Es necesario introducir dos números válidos";
  } else {
    const numberOneValue = parseInt(numberOne.value);
    const numberTwoValue = parseInt(numberTwo.value);
    const selectValue = select.value;
    const numberResult = calculate(numberOneValue, numberTwoValue, selectValue);
    resultText(numberResult);
    console.log(numberResult);
  }
}

//EVENTS
btn.addEventListener("click", handleClick);
