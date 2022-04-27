// fetch('./data.json').then(result => result.json()).then(console.log)
let currentAmount = document.querySelectorAll(".currentAmount");
let previousAmount = document.querySelectorAll(".previousAmount");
let period = document.querySelectorAll(".period");

async function getData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
}

async function displayData(period) {
  const data = await getData();
  for (let key in currentAmount) {
    currentAmount[key].innerText = data[key]["timeframes"][period]["current"];
  }

  for (let key in previousAmount) {
    previousAmount[key].innerText = data[key]["timeframes"][period]["previous"];
  }
}

displayData("weekly");
