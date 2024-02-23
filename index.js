"use-strict";

const temperature = document.querySelector("#temperature");
const kelvin = document.querySelector("#kelvin");
const fahrenheit = document.querySelector("#fahrenheit");
const isNumber = /^-?\d+$/;
const alert = document.querySelector(".alert");
alert.style.display = "none";

const getKelvin = (temperature) => {
    return `${(temperature + 273.15).toFixed(2)} °K`;
};

const getFahrenheit = (temperature) => {
    return `${((temperature * 9) / 5 + 32).toFixed(2)} °F`;
};

const init = () => {
    const initValue = (temperature.value = 1);
    kelvin.textContent = getKelvin(initValue);
    fahrenheit.textContent = getFahrenheit(initValue);
};

init();

temperature.addEventListener("input", () => {
    const celsiusValue = parseFloat(temperature.value);
    alert.style.display = isNumber.test(celsiusValue) ? "none" : "block";
    kelvin.textContent = getKelvin(celsiusValue);
    fahrenheit.textContent = getFahrenheit(celsiusValue);
});
