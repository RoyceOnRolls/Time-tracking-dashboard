// fetch('./data.json').then(result => result.json()).then(console.log)
let currentAmount = document.querySelectorAll(".currentAmount");
let previousAmount = document.querySelectorAll(".previousAmount");
let period = document.querySelectorAll(".period");

async function getData(period) {
  const response = await fetch("./data.json");
  const data = await response.json();
  //   console.log(data);
  //   return data;
  for (let key in currentAmount) {
    currentAmount[key].innerText = data[key]["timeframes"][period]["current"];
  }

  for (let key in previousAmount) {
    previousAmount[key].innerText = data[key]["timeframes"][period]["previous"];
  }
}

getData("weekly");
