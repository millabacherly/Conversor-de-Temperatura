document
  .getElementById("calculo")
  .addEventListener("click", calcularTemperatura);

function calcularTemperatura() {
  var selectTemperatura = document.querySelector("#temp").value;
  var selectTemperatura2 = document.querySelector("#temp2").value;
  var inputTemperatura = document.querySelector("#temperatura");
  var resultadoFinal = "";

  if (selectTemperatura == "celsius" && selectTemperatura2 == "fahrenheit") {
    resultadoFinal = parseFloat(inputTemperatura.value * 1.8) + 32;
  } else {
    selectTemperatura == "celsius" && selectTemperatura2 == "kelvin";
    resultadoFinal = parseFloat(inputTemperatura.value) + 273.15;
  }

  if (selectTemperatura == "fahrenheit" && selectTemperatura2 == "celsius") {
    resultadoFinal = parseFloat(inputTemperatura.value - 32) / 1.8;
  } else {
    selectTemperatura == "fahrenheit" && selectTemperatura2 == "kelvin";
    resultadoFinal =
      parseFloat(((inputTemperatura.value - 32) * 5) / 9) + 273.15;
  }

  if (selectTemperatura == "kelvin" && selectTemperatura2 == "celsius") {
    resultadoFinal = parseFloat(inputTemperatura.value) - 273.15;
  } else {
    selectTemperatura == "kelnvin" && selectTemperatura2 == "fahrenheit";
    resultadoFinal =
      parseFloat(((inputTemperatura.value - 273.15) * 9) / 5) + 32;
  }

  if (selectTemperatura == selectTemperatura2) {
    resultadoFinal = parseInt(inputTemperatura.value);
  }

  document.getElementById("resultado").innerHTML =
    "A temperatura é " + resultadoFinal + "°";
}
