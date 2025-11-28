let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(operator) {
  if (currentInput === "") return;
  const lastChar = currentInput.slice(-1);
  if ("+-x÷".includes(lastChar)) return;
  currentInput += operator;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}

function calculate() {
  let expression = currentInput.replace(/x/g, "*").replace(/÷/g, "/");
  try {
    let result = eval(expression);
    display.value = result;
    currentInput = result.toString();
  } catch {
    display.value = "Error";
    currentInput = "";
  }
}
