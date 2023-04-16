/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let number;

const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const meterFeetNumber = document.getElementById("conversion-meters-feet");
const literGallonNumber = document.getElementById("conversion-liter-gallon");
const kiloPoundNumber = document.getElementById("conversion-kilo-pound");

function formulaMeterToFeet(value) {
  return value * 3.281;
}
function formulafeetToMeter(value) {
  return value / 3.281;
}

function formulaLiterToGallon(value) {
  return value * 0.264;
}
function formulaGallontoLiter(value) {
  return value / 0.264;
}
function formulaKilogramtopound(value) {
  return value * 2.204;
}
function formulaPoundtoKilogram(value) {
  return value / 2.204;
}

convertBtn.addEventListener("click", function () {
  number = inputEl.value;
  const calculationMeterFeet = formulaMeterToFeet(number);
  const calculationFeetMeter = formulafeetToMeter(number);
  const calculationliterGallon = formulaLiterToGallon(number);
  const calculationGallonliter = formulaGallontoLiter(number);
  const calculationkiloPound = formulaKilogramtopound(number);
  const calculationPoundKilo = formulaPoundtoKilogram(number);
  meterFeetNumber.innerHTML = `<p>
      ${number} meters = ${calculationMeterFeet.toFixed(
    3
  )} feet | ${number} feet = ${calculationFeetMeter.toFixed(3)} meters
    </p>`;
  literGallonNumber.innerHTML = `<p> ${number} liter = ${calculationliterGallon.toFixed(
    3
  )} gallon | ${number} gallon = ${calculationGallonliter.toFixed(
    3
  )} liters</p>`;
  kiloPoundNumber.innerHTML = ` <p>${number} kilo = ${calculationkiloPound.toFixed(
    3
  )} pounds | ${number} pound = ${calculationPoundKilo.toFixed(3)} kilo</p>`;
});
