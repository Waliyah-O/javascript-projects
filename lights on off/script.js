/*****************IF STATEMENTS ********/

// let billHasBeenPaid = true;

// if(!billHasBeenPaid){
//     console.log('Please pay your bills');
// } else{
//     console.log('Your bills has been paid');
// }

/*****************IF ELSE STATEMENTS ********/
// let num = 10

// if (num % 2 === 0 && num > 3) {
//     console.log(num, "is an even number");
//     console.log(num, "is greater than 3");
//  }

/***************** ELSE IF STATEMENTS ********/

// let x = 10;
// let y = 20;

// if(x>y){
//     console.log('x is greater than y');
// } else if(x<y){
//     console.log('y is greater than x');
// } else{
//     console.log('x and y are equal');
// }

// let x = 10;
// let y = 20;

// if (x > y) {
//    console.log("x is greater than y");
// } else if (x < y) {
//    console.log("x is less than y");
// } else if (x % 5 === 0) {
//    console.log("x is divisible by 5");
// } else if (x % 2 === 0) {
//    console.log("x is even");
// }

/***************** NESTED IF STATEMENTS ********/
// let num = 6;
// // if(num % 2 === 0){
// //     console.log('EVEN');
// // }

// // if(num > 0){
// //     console.log('POSITIVE');
// // }

// if (num % 2 ===0){
//     console.log('EVEN');

//     if (num > 0){
//         console.log('POSITIVE');
//     }
// }

/**************Exercises: Booleans and Conditionals **************/

// let engineIndicatorLight = "red blinking";
// let spaceSuitsOn = true;
// let shuttleCabinReady = true;
// let crewStatus = spaceSuitsOn && shuttleCabinReady;
// let computerStatusCode = 200;
// let shuttleSpeed = 15000;

// if (engineIndicatorLight === "green") {
//   console.log("engines have started");
// } else if (engineIndicatorLight === "green blinking") {
//   console.log("engines are preparing to start");
// } else {
//   console.log("engines are off");
// }

// if (crewStatus === true) {
//   console.log("Crew Ready");
// } else {
//   console.log("Crew not ready");
// }

// if (computerStatusCode === 200) {
//   console.log("Please stand by. Computer is rebooting.");
// } else if (computerStatusCode === 400) {
//   console.log("Success! Computer Online.");
// } else {
//   console.log("ALERT: Computer offline");
// }

// if (shuttleSpeed > 17500) {
//   console.log("ALERT: Escape velocity reached!");
// } else if (shuttleSpeed < 8000) {
//   console.log("ALERT: Cannot maintain orbit!");
// } else {
//   console.log("Stable speed");
// }

// if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
//   console.log("all systems go");
// } else {
//   console.log("WARNING, Not ready");
// }

// if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
//   console.log("WARNING, Not ready");
// } else {
//   console.log("all systems go");
// }

// fuelLevel = 21000;
// engineTemperature = 2500;

// if (
//   fuelLevel < 1000 ||
//   engineTemperature > 3500 ||
//   !engineIndicatorLight !== "red blinking"
// ) {
//   console.log("ENGINE FAILURE IMMINENT!");
// } else if (fuelLevel > 20000 && engineTemperature <= 2500) {
//   console.log("Full tank. Engines good");
// } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
//   console.log("Fuel level is above 50%. Engine good.");
// } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
//   console.log("Check fuel level. Engine running hot.");
// } else if (fuelLevel >= 5000 && engineTemperature <= 2500) {
//   console.log("Fuel level is above 25%. Engine good.");
// } else {
//   console.log("Fuel and engine status pending....");
// }

// commandOverride = true || false;

// if (commandOverride === false) {
//   console.log("Launch if the fuel engine check are ok");
// } else if (commandOverride === true) {
//   console.log("Launch regardless of the fuel and engine status");
// }

// if (
//   (fuelLevel > 20000 && engineIndicatorLight != "red blinking") ||
//   commandOverride === true
// ) {
//   console.log("Cleared to launch!");
// } else {
//   console.log("Launch scrubbed!");
// }

// let engineIndicatorLight = "red blinking";
// let spaceSuitsOn = true;
// let shuttleCabinReady = true;
// let crewStatus = spaceSuitsOn && shuttleCabinReady;
// let computerStatusCode = 200;
// let shuttleSpeed = 15000;
// let fuelLevel = 30000;
// let engineTemperature = 1200;

// if (engineIndicatorLight === "green") {
//   console.log("engines have started");
// } else if (engineIndicatorLight === "green blinking") {
//   console.log("engines are preparing to start");
// } else {
//   console.log("engines are off");
// }

// if (crewStatus) {
//   console.log("Crew Ready");
// } else {
//   console.log("Crew Not Ready");
// }

// if (computerStatusCode === 200) {
//   console.log("Please stand by. Computer is rebooting");
// } else if (computerStatusCode === 400) {
//   console.log("Success! Computer online");
// }

// if (shuttleSpeed > 17500) {
//   console.log("ALERT: Escape velocity reached!");
// } else if (shuttleSpeed < 8000) {
//   console.log("ALERT: Cannot maintain orbit!");
// } else {
//   console.log("Stable speed");
// }

// if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
//   console.log("all systems go");
// } else {
//   console.log("WARNING. Not ready");
// }

// if ((!crewStatus && computerStatusCode !== 200) || !spaceSuitsOn) {
//   console.log("WARNING: Not ready");
// } else {
//   console.log("all systems go");
// }

// if (fuelLevel > 20000 && engineTemperature <= 2500) {
//   console.log("Full tank. Engines good");
// } else if (
//   fuelLevel < 1000 ||
//   engineTemperature > 3500 ||
//   engineIndicatorLight !== "red blinking"
// ) {
//   console.log("ENGINE FAILURE IMMINENT!!");
// } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
//   console.log("Fuel level above 50%. Engines good.");
// } else if (fuelLevel > 5000 && engineTemperature <= 2500) {
//   console.log("Fuel level above 25%. Engines good.");
// } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
//   console.log("Check fuel level. Engine running hot.");
// } else {
//   console.log("Fuel and engine status pending.....");
// }

// let commandOverride = false;

// if (commandOverride === false) {
//   if (
//     fuelLevel > 20000 &&
//     engineTemperature < 2500 &&
//     engineIndicatorLight !== "red blinking"
//   ) {
//     console.log("Begin Launch Sequence!");
//   } else {
//     console.log("Fuel and engine checks incomplete. Launch Denied");
//   }
// } else if (commandOverride === false) {
//   console.log("Begin Launch Sequence");
// } else {
//   console.log("Launch Scrubbed");
// }

// if (
//   (fuelLevel > 20000 && engineIndicatorLight !== "red blinking") ||
//   commandOverride === true
// ) {
//   console.log("Cleared to launch!");
// } else {
//   console.log("Launch scrubbed!");
// }

/**********FUNCTIONS ******** */

// let stringValue = String(42);
// console.log(String(42));

// function sub(num1, num2) {
//     return num1 - num2;
// }
// var result = sub(5, 5);
//  function sub(num1, num2)

// function greet() {
//     console.log("Hello");
// }

// greet();

// var greet2 = greet;
// greet2();

// var greet = new Function("console.log(\"Hello\");");
// var greet = new Function('console.log("Hello");');
// greet();
// var greet2 = greet;
// greet2();

/***********STRING INTERPOLATION *******/
// function hello(name = "World") {
//     return `${name}!`;
// }

// console.log(hello());
// console.log(hello("Lamar"))

// function hello(name = "World") {
//   return `${name}!`;
// }

// console.log(hello());
// console.log(hello("Lamar"));

/**********CONCATENATION ***************/
// function repeater(str) {
//   let repeated = str + str;
//   console.log(repeated);
// }

// repeater('Red')

/**************OVERLOADING *********
 *
 * ABility of a function to have multiple signatures
 * a fn signature is made up of a function name and the number and types of parameters the function expects
 */

// function sayMessage(message) {
//     console.log(message)
// }
// function sayMessage() {
//     console.log("Default message")
// }

// sayMessage("Hello!")

// let jsCreator = "Brendan Eich";
// // let firstInitial = jsCreator[0];
// // let lastInitial = jsCreator[8];

// console.log(jsCreator[-1]);
// console.log(jsCreator[42]);
// let phrase = "Javascript rocks!";
// console.log(phrase.length);
// console.log(phrase[phrase.length - 8]);

// let nonProfit = "LaunchCode";

// console.log(nonProfit.toLocaleLowerCase());
// console.log(nonProfit);
// console.log(nonProfit.toUpperCase());

// let stringName = "Waliyah ";

// console.log(stringName.indexOf("a"));
// console.log(stringName.lastIndexOf("a"));
// console.log(stringName.toUpperCase());
// console.log(stringName.toLowerCase());
// console.log(stringName.trim());
// console.log(stringName.replace("iyah", "e"));
// console.log(stringName.slice(5));
// console.log(stringName.slice(1, 5));

// let word = "Javascript"
// console.log(word.toUpperCase);
// console.log(word.slice(4).toLowerCase);

// let language = "JavaScript";
// language.replace('J', 'Q');
// language.slice(0,5);
// console.log(language);

/******************SLICE ***********/
// let language = "JavaScript";
// console.log(language.slice(1,6));

// COMBINING STRING METHODS IS CALLED METHOD CHAINING
// let stringName2 = stringName.replace("iyah", "e");
// console.log(stringName2);

// let org = " The LaunchCode Foundation ";
// console.log('Launch\nCode');
// console.log('Launch\n\tCode');

// let trimmed = org.trim();
// console.log(trimmed);

/*******TEMPLATE LITERALS *********/
// let name = "Jack";
// let currentAge = 8;

// console.log(`Next year, ${name} will be ${currentAge + 1}.`);

// let poem = `The mind chases happiness.
// The heart creates happiness.
// The soul is happiness
// And it spreads happiness
// All-where.

// – Sri Chinmoy`;

// console.log(poem);

// let pluralNoun = 'data types';
// let name = 'us';
// let verb = "play";
// let adjective = 'great';
// let color = 'red';

// document.write(`JavaScript provides a  ${color} collection of tools — including  ${adjective}  syntax and   ${pluralNoun}  — that allows  ${name} to  ${verb} with strings.`)

// let stringName = "Waliyah ";

// console.log(stringName.indexOf('a'));
// console.log(stringName.lastIndexOf('a'));
// console.log(stringName.toUpperCase());
// console.log(stringName.toLowerCase());
// console.log(stringName.trim());
// console.log(stringName.replace('iyah', 'e'));

/************ARRAY METHODS *********/
// let javascriptFrameworks = ["React", "Angular", "Ember"];
// let cssFrameworks = ['CSS', 'SCSS', 'Bootstraps']
// console.log(javascriptFrameworks.includes('Vue'));
// console.log(javascriptFrameworks.indexOf('Ember'));
// console.log(javascriptFrameworks.reverse());
// console.log(javascriptFrameworks.sort());
// console.log(javascriptFrameworks.pop());
// console.log(javascriptFrameworks)
// console.log(javascriptFrameworks.push('React','Vue'));
// console.log(javascriptFrameworks)
// console.log(javascriptFrameworks.shift());
// console.log(javascriptFrameworks);
// console.log(javascriptFrameworks.unshift('Angular'));
// console.log(javascriptFrameworks);
// console.log(javascriptFrameworks.splice(1,2,'Tailwind','Dotnet'));
// console.log(javascriptFrameworks);
// console.log(javascriptFrameworks.concat(javascriptFrameworks, cssFrameworks));

// let charles = ['coder', 'Tech', 47, 23, 359];
// charles.sort();
// console.log(charles);

/*******CONVERTING STRINGS INTO ARRAYS *******/
// str = 'LaunchCode students rock!'
// console.log(str.join(" "));
// console.log(str.split(" "));
// console.log(str.join(""));
// console.log(str.split(""))

// let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
// let selectedItems = [];

// selectedItems = groceryBag.slice(2, 5).sort();
// console.log(selectedItems)

// let shuttleCrews = [
//   ["Robert Gibson", "Mark Lee", "Mae Jemison"],
//   ["Kent Rominger", "Ellen Ochoa", "Bernard Harris"],
//   ["Ellen Collins", "Winston Scott", "Catherin Coleman"],
// ];

// console.log(shuttleCrews[0][2]);
// console.log(shuttleCrews[1][1]);
// console.log(shuttleCrews[2][1]);

// let school = [
//   ['science', 'computer', 'art'],
//   ['Jones', 'Willoughby', "Rhodes"]
//   ];

// add "dance" to the array at school[0]

//  add "Holmes" to the array at school[1]

// let num = 123.45;

// let stringNum = String(num);
// // console.log(stringNum)
// // console.log(stringNum.length)
// // console.log(stringNum.replace('.','' ).length)

// if (stringNum.includes(".")) {
//   console.log(stringNum.replace(".", "").length);
// } else {
//   console.log(stringNum.length);
// }

// if (stringNum.indexOf(".") != -1) {
//   console.log(stringNum.replace(".", "").length);
// } else {
//   console.log(stringNum.length);
// }

/****************
 * 7.9.2. Part Two
Remember, strings are immutable. Consider a string that represents a strand of DNA: dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ". There are some typos in the string that we would like to fix:

Use the trim() method to remove the leading and trailing whitespace, and then print the results.

Change all of the letters in the dna string to UPPERCASE and print the result.

Note that if you try console.log(dna) after applying the methods, the original, flawed string is displayed. To fix this, you need to reassign the changes back to dna. Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
 */
// let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    "
//
// // console.log(dna.trim());
// // console.log(dna.toUpperCase());
// dna = dna.trim().toUpperCase();
// console.log(dna)

/************TEMPLATE LITERALS *******/

// let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    "

// console.log(dna.trim());
// console.log(dna.toUpperCase());
// dna = dna.trim().toUpperCase();
// console.log(dna)

// console.log(dna.replace('GCT', 'AGG'));

// if (dna.indexOf('CAT') != 1 ) {
//   console.log('CAT found')
// } else {
//   console.log('CAT NOT found')
// }

// let dnaArray = dna.split('-')[4]
// console.log(dnaArray)

// console.log(`the DNA strand is ${dna.length} characters long`)

// let str = 'JavaScript'

// console.log(str.slice(0, 1) + str.slice(4,5));

// let camelCasing = 'title case'

// console.log(camelCasing.replace('t', 'T').replace('c', 'C'))

// 1
// A & B
// let practiceFile = [273.15]
// console.log(practiceFile.push(42));
// console.log(practiceFile.push('hello'));
// console.log(practiceFile);

// // C
// console.log(practiceFile.push(false, -4.6, '87'));
// console.log(practiceFile);
/************* ARRAYS LENGTH**********/
// let emptyArray = [];
// console.log(emptyArray.length)

// let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
// console.log(programmingLanguages.length)

/********VARRYING DATA TYPES ******/
// JavaScript arrays can hold a mixture of values of any type. For example, you can have an array that contains strings, numbers, and booleans.

// let grabBag = ["A string value", true, 99. 105.5];

// let emptyArray = [];
// console.log(emptyArray.length)

// let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
// console.log(programmingLanguages.length)

/**************** LOOPS ************/
/*****FOR LOOP **************/
// prints 0 - 50
// for (i = 0; i < 51; i++) {
//   console.log(i);
// }

// // prints 1 fifty times
// for (i = 0; i < 51; i++) {
//     console.log(1);
//   }

//   Iterating on strings
// let name = "LaunchCode";
// for (let i = 0; i < name.length; i++) {
//   console.log(name[1]);
// }
// iterating on arrays
// let name = "LaunchCode";
// for (let i = 0; i < name.length; i++){
//   console.log(name[i])
// }

// let languages = ['Java', 'JS', 'C#', 'Python']
// for (let i = 0; i < languages.length; i++){
//   console.log(languages[i])
// }

// let reactFamily = [
//   "Wale",
//   "Brown",
//   "Taiwo",
//   "Damola",
//   "Precious",
//   "Theo",
//   "Toyin",
//   "Lanre",
// ];
// for (let i = 0; i < reactFamily.length; i++) {
//   console.log(reactFamily[i]);
// }

// let phrase = "LaunchCode's LC101";
// for (let i = 0; i < phrase.length - 1; i = i + 3) {
//   console.log(phrase[i]);
// }

// let n = 6;
// let total = 0;

// for (let i = 1; i <= n; i++) {
//   total += i;
// }
// console.log(total)

// let str = "blue";
// let reversed = "";

// for (let i = 0; i < str.length; i++){
//   reversed = str[i] + reversed
// }

// console.log(reversed)

// let numbers = [2, -5, 13, 42];
// let total = 0;

// for (i = 0; i < numbers.length; i++){
//   total += numbers[i]
// }

// console.log(total);

/***
**first loop
*total = total + numbers at position zero
*total = 0 + 2
*total = 2

**second loop
* total is now starting with a value of 2
* total = total + numbers at position 1
* total = 2 + -5
* total = -3
* 
**third loop




********/

/***********WHILE LOOPS **********/
// for (i = 0; i < 51; i++){
//   console.log(i)
// }

// let i = 0;

// while (i < 51) {
//   console.log(i);
//   i++
// }

// let n = 10;
// let answer = 1;

// while (n > 0) {
//   answer = answer + n;
//   n = n + 1;
// }

// console.log(answer)

// let numbers = [13, 46, 91, 374, 37, 42, 283, 193];
// let searchVal = 42;
// let i = 0;

// while (i < numbers.length){
//   if (numbers[i] === searchVal) {
//     break;
//   }
//   i++;
// }

// if (i < numbers.length) {
//   console.log("The value", searchVal, "was located at index", i)
// } else {
//   console.log("the value", searchVal, "is not in the array.")
// }

// EXERCICES

// 1A

// for (let i = 0; i < 100; i++) {
//   console.log("Repition is a good thing")
// }

// for (let i = 0; i < 21; i++) {
//   console.log(i)
// }

// 1B
// for (let i = 3; i < 30; i = i +2){
//   console.log(i)
// }

// let even = [12, 13, 14, 15];
// let results = []

// for (let i = 0; i < even.length; i++){
//   results = even[1] + results
// }
// console.log(results)

// let numbers = [12, 13, 14, 15];

// for (let i = numbers.length - 2; i > -1; i -= 2){
//   console.log(numbers[i])
// }

//  1C
// for (let i = 12; i > -15; i -= 2){
//   console.log(i)
// }

// for (let i =12; i > -15; i -= 2){
//   console.log(i)
// }

// 1D

// for (i = 50; i > 20 ; i--){
//   if (i % 3 === 0) {
//     console.log(i)
//   }
// }

// 2
// let str = "LaunchCode";
// let arr = [1, 5, "LC101", "blue", 42];

// // 2 A
// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// 2B

// for (i = str.length - 1; i > -1; i--){
//   console.log(str[i])
// }

// 3

// let parentArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
// let evenArr = [];
// let oddArr = [];

// for (i = 0; i < parentArr.length; i ++){
//   if (parentArr[i] % 2 === 0) {
//     evenArr.push(parentArr[i])
//   } else {
//     oddArr.push(parentArr[i])
//   }
// }
// console.log(evenArr);
// console.log(oddArr);

// let startingFuelLevel = 0;
// let astroOnboard = 0;
// let altitude = 0;

// while (
//   typeof startingFuelLevel === Number ||
//   startingFuelLevel < 5000 ||
//   startingFuelLevel > 30000
// ) {
//   startingFuelLevel = prompt("Enter fuel level: ");
// }

// while (astroOnboard < 1 || astroOnboard > 7) {
//   astroOnboard = prompt("Enter Number of Astronauts on board:");
// }

// let fuelStatus = () => {
//   while (startingFuelLevel - 100 * astroOnboard >= 0) {
//     altitude += 50;
//     startingFuelLevel -= 100 * astroOnboard;
//   }
// };

// let output = `The shuttle gained an altitude of ${altitude} km.`;

// if (altitude >= 2000) {
//   alert(output + " Orbit achieved!");
// } else {
//   alert(output + " Failed to reach orbit.");
// }

///******** HOW TO DECLARE FUNCTIONS  ***********/
// newAge = function() {

// }

// let newAge = function(){

// }

// let newDay = () => {

// }

/******* OBJECT DECLARATION  ************/
// let tortoiseOne = {
//   species:
//     "Galapagos Tortoise" /**Species is the key. :Galapagos Tortoise is the value of species */,
//   name: "Pete",
//   weight: 919,
//   age: 85,
//   diet: ["pumpkins", "lettuce", "cabbage"],
//   sign: function () {
//     return this.name + " is a " + this.species;
//   },
// };
