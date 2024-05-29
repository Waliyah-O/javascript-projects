const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear-all");
const deleteBtn = document.getElementById("delete");
const equalsBtn = document.getElementById("equals");
const textBox = document.getElementById("results");
const resultBox = document.getElementById("input2");

let is_operator = false;
function updateDisplay(e) {
  // newInput = event.target.value;
  // textBox.value += newInput;
  // // console.log(newInput);
  // return newInput;
  if (textBox.value == "0") {
    textBox.value = e.target.value;
  } else if (textBox.value.includes(is_operator)) {
    is_operator = false;
    textBox.value = e.target.value;
  } else if (textBox.value.includes(".")) {
    textBox.value = textBox.value + "" + e.target.value.replace(".", "");
  } else {
    textBox.value = textBox.value + "" + e.target.value;
  }
}

// put the equations in an array
let equation = [];
function evaluate(e) {
  // textBox.value = eval(textBox.value);
  e.currentTarget.classList.add("active");
  switch (e.target.value) {
    case "%":
      textBox.value = parseFloat(textBox.value) / 100;
      break;
    case "invert":
      textBox.value = parseFloat(textBox.value) * -1;
      break;
    case "=":
      equation.push(textBox.value);
      resultBox.value = eval(equation.join(""));
      equation = [];
      break;
    default:
      let lastItem = equation[equation.length - 1];
      if (["/", "*", "+", "-"].includes(lastItem) && is_operator) {
        equation.pop();
        equation.push(e.target.value);
      } else {
        equation.push(textBox.value);
        equation.push(e.target.value);
      }
      operator = true;
      break;
  }
}

function clearDisplay() {
  textBox.value = "";
}
function clearAll() {
  textBox.value = "";
  resultBox.value = "0";
}

function deleteInput() {
  // textBox.value = textBox.value.substr(0, textBox.value.length - 1)
  textBox.value = textBox.value.slice(0, -1);
}

function numberButtonListener(btn) {
  btn.addEventListener("click", updateDisplay);
}

function operatorButtonListener(btn) {
  btn.addEventListener("click", evaluate);
}

numberButtons.forEach(numberButtonListener);
operatorButtons.forEach(numberButtonListener);
equalsBtn.addEventListener("click", evaluate);
clearButton.addEventListener("click", clearDisplay);
clearButton.addEventListener("dblclick", clearAll);

deleteBtn.addEventListener("click", deleteInput);

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
