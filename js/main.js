"use strict";

//CONSTANT
const numberOne = document.querySelector(".js-number-1");
const numberTwo = document.querySelector(".js-number-2");
const result = document.querySelector(".js-result");
const btn = document.querySelector(".js-btn");
const reset = document.querySelector(".js-btn-reset");
const select = document.querySelector(".js-select");

//FUNCTIONS

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
  const numberOneValue = parseInt(numberOne.value);
  const numberTwoValue = parseInt(numberTwo.value);
  const selectValue = select.value;
  const numberResult = calculate(numberOneValue, numberTwoValue, selectValue);

  if (isNaN(numberOne.value) || isNaN(numberTwo.value)) {
    console.log("entra");
    result.innerHTML = "Two valid numbers must be entered";
  } else if (numberOne.value === "" || numberTwo.value === "") {
    result.innerHTML = "All fields must be filled in";
  } else if (numberResult < 0) {
    console.log("Error :(");
    result.innerHTML = "Error :(";
  } else if (
    (selectValue === "%" && numberOneValue === 0) ||
    numberTwoValue === 0
  ) {
    console.log("It’s over 9000!");
    result.innerHTML = "It’s over 9000!";
  } else {
    resultText(numberResult);
    console.log(numberResult);
  }
}

function handleReset(ev) {
  ev.preventDefault(ev);
  numberOne.value = "";
  numberTwo.value = "";
  result.innerHTML = "";
  select.value = "choose";
}

//EVENTS
btn.addEventListener("click", handleClick);
reset.addEventListener("click", handleReset);
