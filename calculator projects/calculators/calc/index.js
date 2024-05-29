// const clearOne = document.getElementById("clearOne"),
//       division = document.getElementById("division"),
//       multiplication = document.getElementById("multiplication"),
//       clear = document.getElementById("clear"),
//       seven = document.getElementById("seven"),
//       eight = document.getElementById("eight"),
//       nine = document.getElementById("nine"),
//       minus= document.getElementById(" minus"),
//       four = document.getElementById("four"),
//       five = document.getElementById("five"),
//       six = document.getElementById("six"),
//       plus = document.getElementById("plus"),
//       one = document.getElementById("one"),
//       two = document.getElementById("two"),
//       three = document.getElementById("three"),
//       modulus= document.getElementById("modulus"),
//       zero = document.getElementById("zero"),
//       bracketOpen = document.getElementById("bracketOpen"),
//       bracketClosed = document.getElementById("bracketClosed"),
//       equalTo = document.getElementById("equalTo"),
//       pi = document.getElementById("pi"),
//       point = document.getElementById("point"),
//       squareRoot = document.getElementById("squareRoot"),
//       allOperators = document.querySelectorAll("");

var newValue ="";

function displayValue(value) {
    newValue += value;
    document.getElementById("screen").value = newValue;
}

function ISequalTo() {
    let screen = eval(newValue);
    document.getElementById("screen").value = screen;
    //newValue = screen.toString();
}

function clearAll() {
    newValue ="";
    document.getElementById("screen").value = "";
} 

function clearOne() {
    newValue ="";
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1);
}

