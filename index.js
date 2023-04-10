/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let number = "";

const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const meterFeetNumber = document.getElementById("conversion-meters-feet");
console.log(meterFeetNumber);

convertBtn.addEventListener("click", function () {
  number = inputEl.value;
  const calculationMeterFeet = number * 3.281;
  const calculationFeetMeter = number / 3.281;
  meterFeetNumber.innerHTML = `<p>
      ${number} meters = ${calculationMeterFeet} feet | ${number} feet = ${calculationFeetMeter} meters
    </p>`;
});
