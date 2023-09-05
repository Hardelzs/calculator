let output = document.getElementById('output');
let input = "";

function appendInput(value) {
  input += value;
  updateDisplay();
}

function clearOutput() {
  input = "";
  updateDisplay();
}

function addNumbers() {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  if (!isNaN(number1) && !isNaN(number2)) {
    input = (number1 + number2).toString();
  } else {
    input = "Invalid Input";
  }
  updateDisplay();
}

    function addition() {
  // Split the input by "+" to get the numbers to add
  const numbers = input.split('+');
  
  if (numbers.length === 2) {
    const result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    input = result.toString();
    updateDisplay();
  }
}

function evaluate() {
  try {
    const result = eval(input);
    input = result.toString();
    updateDisplay();
  } catch (error) {
    input = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  output.textContent = input;
}