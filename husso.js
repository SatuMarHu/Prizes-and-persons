/**
 * Name: Satu Husso
 */

let allPrizes = new Array();
let allPersons = new Array();

function newPrize() {
  let prize = document.getElementById("prize").value;
  allPrizes.push(prize);
  printPrizes.innerHTML = allPrizes;

  document.getElementById("prize").value = "";

  document.getElementById("prizes").innerHTML += prize + "</br>";
  document.getElementById("prize").focus();
}

function newPerson() {
  let person = document.getElementById("person").value;
  allPersons.push(person);
  printPersons.innerHTML = allPersons;

  document.getElementById("person").value = "";

  document.getElementById("persons").innerHTML += person + "</br>";
  document.getElementById("prize").focus();
}

function printPrizes() {
  document.getElementById("prizes").innerHTML = "";
  for (let i = 0; i < allPrizes.length; i++) {
    document.getElementById("prizes").innerHTML +=
      "<li>" + allPrizes[1] + "<li>";
  }
}

function printPersons() {
  document.getElementById("persons").innerHTML = "";
  for (let i = 0; i < allPersons.length; i++) {
    document.getElementById("persons").innerHTML +=
      "<li>" + allPersons[1] + "<li>";
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toPerson() {
  let randomPrize = allPrizes[Math.floor(Math.random() * allPrizes.length)];
  let randomPerson = allPersons[Math.floor(Math.random() * allPersons.length)];

  if (allPrizes.length === 0 && allPersons.length > 0) {
    alert("No more prizes");
  } else if (allPersons.length === 0 && allPrizes.length > 0) {
    alert("No more persons.");
  } else {
    // getRndInteger(0, allPersons.length - 1);

    document.getElementById("personAndPrice").innerHTML +=
      "<li>" + randomPrize + " " + ":" + " " + randomPerson + "</li>";

    const prizeIndex = allPrizes.indexOf(randomPrize);
    if (prizeIndex > -1) {
      allPrizes.splice(prizeIndex, 1);
    }
    const personIndex = allPersons.indexOf(randomPerson);
    if (personIndex > -1) {
      allPersons.splice(personIndex, 1);
    }
  }
}
