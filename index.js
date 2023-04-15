/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let number;

const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const meterFeetNumber = document.getElementById("conversion-meters-feet");

function formulaMeterToFeet(value) {
  return value * 3.281;
}
function formulafeetToMeter(value) {
  return value / 3.281;
}

convertBtn.addEventListener("click", function () {
  number = inputEl.value;
  const calculationMeterFeet = formulaMeterToFeet(number);
  const calculationFeetMeter = formulafeetToMeter(number);
  meterFeetNumber.innerHTML = `<p>
      ${number} meters = ${calculationMeterFeet} feet | ${number} feet = ${calculationFeetMeter} meters
    </p>`;
});
