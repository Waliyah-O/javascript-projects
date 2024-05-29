let baseUrl = "https://api.adviceslip.com/advice";

let adviceID = document.getElementById("advice-id"),
  adviceWords = document.getElementById("advice-statement"),
  diceBtn = document.getElementById("dice-btn");

//   fetch advice from API
const generateAdvice = async () => {
  try {
    const response = await fetch(baseUrl);
    let responseJson = await response.json();
    // console.log(responseJson);
    adviceWords.innerText = `"${responseJson.slip.advice}"`;
    adviceID.innerText = `ADVICE #${responseJson.slip.id}`;
  } catch (error) {
    console.log(error);
  }
};

diceBtn.addEventListener("click", generateAdvice);
