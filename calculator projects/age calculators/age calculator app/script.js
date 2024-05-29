// labels
let labelDay = document.getElementById("label-day");
let labelMonth = document.getElementById("label-month");
let labelYear = document.getAnimations("label-year");

// inputs
let inputDay = document.getElementById("input-day");
let inputMonth = document.getElementById("input-month");
let inputYear = document.getElementById("input-year");

// error messages
let paraDay = document.getElementById("paragraph-day");
let paraMonth = document.getElementById("paragraph-month");
let paraYear = document.getElementById("paragraph-year");

// outputs
let spanYear = document.getElementById("span-years");
let spanMonth = document.getElementById("span-months");
let spanDay = document.getElementById("span-days");

// submit button
let submitButton = document.getElementById("submit-btn");

// current date
let currentDate = new Date();
// console.log(currentDate.getFullYear())
let date = new Date(0);
// console.log(date)

// month array
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let validateInput = () => {
  const regex = new RegExp(/[^0-9]/, "g");
  if (inputDay.value === "") {
    paraDay.innerHTML = "Enter a valid day";
    inputDay.className = "inputError";
    paraDay.className = "paraError";
    labelDay.className = "paraError";
  } else if (
    inputDay.value < 1 ||
    inputDay.value > 31 ||
    inputDay.value.match(regex)
  ) {
    paraDay.innerHTML = "Must be a valid day";
    inputDay.className = "inputError";
    paraDay.className = "paraError";
    labelDay.className = "paraError";
  } else if (inputDay.value > currentDate.getDate()) {
    spanDay.value = inputDay.value - currentDate.getDate();
    spanDay.innerHTML = spanDay.value;
  } else if (!inputDay.value.match(regex)) {
    spanDay.innerHTML = currentDate.getDate() - inputDay.value;
    // console.log(currentDate.getDate())
    paraDay.innerHTML = "";
  } else {
    paraDay.innerHTML = "";
    inputDay.className = "";
    paraDay.className = "";
    labelDay.className = "";
  }
  if (inputMonth.value === "") {
    paraMonth.innerHTML = "Enter a valid month";
    inputMonth.className = "inputError";
    paraMonth.className = "paraError";
    labelMonth.className = "paraError";
  } else if (
    inputMonth.value < 1 ||
    inputMonth.value > 12 ||
    inputMonth.value.match(regex)
  ) {
    paraMonth.innerHTML = "Must be a valid month";
    inputMonth.className = "inputError";
    paraMonth.className = "paraError";
    labelMonth.className = "paraError";
  } else if (inputMonth.value <= 1 + currentDate.getMonth()) {
    // spanMonth.innerHTML = (((1 + currentDate.getMonth()) - inputMonth.value )- 12)
    spanMonth.value = 1 + currentDate.getMonth() - inputMonth.value - 12 + 12;
    spanMonth.innerHTML = spanMonth.value;
    // console.log(spanMonth.value);
  } else if (!inputMonth.value.match(regex)) {
    spanMonth.innerHTML = 1 + currentDate.getMonth() - inputMonth.value + 12;
    paraDay.innerHTML = "";
  } else {
    paraMonth.innerHTML = "";
    inputMonth.className = "";
    paraMonth.className = "";
    labelMonth.className = "";
  }
  if (inputYear.value === "") {
    paraYear.innerHTML = "Enter a valid year";
    inputYear.className = "inputError";
    paraYear.className = "paraError";
    labelYear.className = "paraError";
  } else if (
    inputYear.value > currentDate.getFullYear() ||
    inputYear.value.length != 4 ||
    inputYear.value.match(regex)
  ) {
    paraYear.innerHTML = "Must be a valid year";
    inputYear.className = "inputError";
    paraYear.className = "paraError";
    labelYear.className = "paraError";
  } else if (!inputYear.value.match(regex)) {
    spanYear.innerHTML = currentDate.getFullYear() - inputYear.value;
    // console.log((currentDate.getFullYear() - inputYear.value))
    paraYear.innerHTML = "";
  } else {
    paraYear.innerHTML = "";
    inputYear.className = "";
    paraYear.className = "";
    labelYear.className = "";
  }
  let dateString = `${inputYear.value}-${inputMonth.value}-${inputDay.value}`;
  let dateStringValue = new Date(dateString);
  console.log(dateStringValue);
};

submitButton.addEventListener("click", validateInput);

// let x = [1, 2, 3];
// let y = [...x];
// let z = y.map((val) => val);
// z[1] = 4;
// console.log(z)