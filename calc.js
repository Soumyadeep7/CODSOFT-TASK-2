let screenValue = "0";

function appendToScreen(value) {
  if (screenValue === "0") {
    screenValue = value;
  } else {
    screenValue += value;
  }
  document.getElementById("screen").innerText = screenValue;
}

function clearScreen() {
  screenValue = "0";
  document.getElementById("screen").innerText = screenValue;
}

function operate(operator) {
  screenValue += operator;
  document.getElementById("screen").innerText = screenValue;
}

function calculate() {
  try {
    screenValue = eval(screenValue);
    document.getElementById("screen").innerText = screenValue;
  } catch (error) {
    document.getElementById("screen").innerText = "Error";
  }
}
