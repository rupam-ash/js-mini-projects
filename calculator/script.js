// DOM ELEMENTS

let operands = document.querySelectorAll(".operands");
let output = document.querySelector(".output-filed");
let equal = document.querySelector("#equal");
let ac = document.querySelector("#ac");

// VARIABLE

let outputContext = [];
let numbers;
let result;

// BUTTONS

operands.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let key = ele.textContent;
    outputContext.push(key);
    numbers = outputContext.join("");
    output.textContent = numbers;
  });
});

// EQUAL

equal.addEventListener("click", () => {
  let result = eval(numbers);
  output.textContent = result;
});

// CLEAR

ac.addEventListener("click", () => {
  output.textContent = " ";
  outputContext = [];
});
