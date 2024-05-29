const output = document.getElementById("output");
const results = document.getElementById("result")
const form = document.getElementById("calc_form");
const operand_btns = document.querySelectorAll(
  "button[data-type=operand]"
); /**selects all the specified buttons and put them in a NodeList i.e. an array with node items */

const operator_btns = document.querySelectorAll("button[data-type=operator]");

// prevent form from submitting whenever a button it clicked otherwise the page keeps reloading whenever you click a button
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// ***************display the value of the operands when buttons are clicked *************/

// iterate over each button
// add eventListener
// the if else statement
// check is the decimal value is part of the output value, if there is do not add anymore decimal value, instead add an empty string
// check to see if an operator button has been clicked. if it has been clicked, set it to false, then restart value from new value.

let is_operator = false;

operand_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (output.value == "0") {
      output.value = e.target.value;
    } else if (is_operator) {
      is_operator = false;
      output.value = e.target.value;
    } else if (output.value.includes(".")) {
      output.value = output.value + "" + e.target.value.replace(".", "");
    } else {
      output.value = output.value + "" + e.target.value;
    }
  });
});

// operator buttons
// parsefloat picks the longest substring starting from the beginning that generates a valid number literal i.e. is parses a value as a string and returns the first number. if the first character cannot be converted, NaN is returned
// documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// practice code: https://www.w3schools.com/jsref/jsref_parsefloat.asp
// Syntax-wise, parseFloat() parses a subset of the syntax that the Number() function accepts. Namely, parseFloat() does not support non-decimal literals with 0x, 0b, or 0o prefixes but supports everything else. However, parseFloat() is more lenient than Number() because it ignores trailing invalid characters, which would cause Number() to return NaN.

// Similar to number literals and Number(), the number returned from parseFloat() may not be exactly equal to the number represented by the string, due to floating point range and inaccuracy. For numbers outside the -1.7976931348623158e+308 – 1.7976931348623158e+308 range (see Number.MAX_VALUE), -Infinity or Infinity is returned.

// switch statement accepts e.target.value as its condition
// for each "case" the value is checked
// the values should correspond to what's in the html code
// and since we're working on the operators chose that
// the "default" cose runs if any of the of the operator buttons not listed is clicked
// if previous button clicked was an operator, delete is with equation.pop() from the equation
// if the last array itm was not an operator, add the output.value and the value of the button we clicked into the equation array
// set the value of is_operator to true anytime we click on any operator button

let equation = [];
operator_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.currentTarget.classList.add("active");

    switch (e.target.value) {
      case "%":
        output.value = parseFloat(output.value) / 100;
        break;
      case "invert":
        output.value = parseFloat(output.value) * -1;
        break;
      case "=":
        equation.push(output.value);
        output.value = eval(equation.join(""));
        equation = [];
        break;
      default:
        let last_item = equation[equation.length - 1];
        if (["/", "*", "+", "-"].includes(last_item) && is_operator) {
          equation.pop();
          equation.push(e.target.value);
        } else {
          equation.push(output.value);
          equation.push(e.target.value);
        }
        is_operator = true;
        break;
    }
  });
});

// active button remains active after clicking

const remove_active = () => {
  operand_btns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

// call above function before adding active class to any btn

operand_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    remove_active();
    e.currentTarget.classList.add("active");
  });
});

// remove the active class from the operators when an operand button is clicked

operand_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    remove_active();
  });
});
