/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let input = "";
let result = "";

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", function (event) {
  console.log(event.target.innerText);

  if (event.target.innerText === "C") {
    input = "";
    display.innerText = input;
    console.log(input);
    return;
  }
  if (event.target.innerText === "=") {
    input = calculateResult(input).toString();
    display.innerText = input;
    console.log(input);
    return;
  }
  if (event.target.classList.contains("button")) {
    input += event.target.innerText;
    display.innerText = input;
    console.log(input);
  }
});

/*-------------------------------- Functions --------------------------------*/
// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     console.log(button.innerText);
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     // input.push(button);
//     input += event.target.innerText;
//     display.innerText = input;
//     console.log(input);
//   });
// });
function calculateResult(enteredNum) {
  let operator;
  let num1, num2;

  if (enteredNum.includes("+")) {
    operator = "+";
  } else if (enteredNum.includes("-")) {
    operator = "-";
  } else if (enteredNum.includes("*")) {
    operator = "*";
  } else if (enteredNum.includes("/")) {
    operator = "/";
  } else {
    return input;
  }

  const parts = enteredNum.split(operator);
  num1 = parseInt(parts[0]);
  num2 = parseInt(parts[1]);

  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
}
