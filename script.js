function convertTemperature() {
  var temperatureInput = document.getElementById("temperature");
  var scaleFrom = document.getElementById("scale-from").value;
  var scaleTo = document.getElementById("scale-to").value;
  var resultInput = document.getElementById("result");

  if (isNaN(temperatureInput.value)) {
    alert("Please enter a valid number for temperature");
    clearFields();
    return;
  }

  var temperatureValue = parseFloat(temperatureInput.value);
  var result;

  if (scaleFrom === "celsius") {
    if (scaleTo === "fahrenheit") {
      result = (temperatureValue * 9) / 5 + 32;
    } else if (scaleTo === "kelvin") {
      result = temperatureValue + 273.15;
    } else {
      result = temperatureValue;
    }
  } else if (scaleFrom === "fahrenheit") {
    if (scaleTo === "celsius") {
      result = ((temperatureValue - 32) * 5) / 9;
    } else if (scaleTo === "kelvin") {
      result = ((temperatureValue - 32) * 5) / 9 + 273.15;
    } else {
      result = temperatureValue;
    }
  } else if (scaleFrom === "kelvin") {
    if (scaleTo === "celsius") {
      result = temperatureValue - 273.15;
    } else if (scaleTo === "fahrenheit") {
      result = ((temperatureValue - 273.15) * 9) / 5 + 32;
    } else {
      result = temperatureValue;
    }
  }

  resultInput.value = result.toFixed(2);
}

function clearFields() {
  document.getElementById("temperature").value = "";
  document.getElementById("result").value = "";
}

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var clockElement = document.getElementById("clock");
  clockElement.textContent = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;

  setTimeout(updateClock, 1000);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial clock update
updateClock();
