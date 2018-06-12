var screenOutput = "";
var reset = 0;
var oldAns = "";
var equalUsed = 0;
var valueUsed = 0;
var opUsed = 0;
var outputString = "";

function clearScreen() {
  screenOutput = "";
  document.getElementById("stored").innerHTML = 0;
  reset = 0;
  opUsed = 0;
  valueUsed = 0;
}

function reverse() {
  if (opUsed > 0) {
    alert("Cannot make an operator positive/negative!");
  }
  else {
    screenOutput = screenOutput * -1;
    document.getElementById("stored").innerHTML = screenOutput;
    reset = 0;
    opUsed = 0;
  }
}

function ans() {
  if (equalUsed > 0) {
    screenOutput = oldAns;
    document.getElementById("stored").innerHTML = screenOutput;
    opUsed = 0;
  }
}

function addValue(btnValue) {
  if (reset > 0) {
    screenOutput = "";
  }
  if(screenOutput.length > 15) {
    screenOutput = screenOutput.slice(0, 16);
    alert("Value too long!");
  }
  else {
    screenOutput += btnValue.value;
    document.getElementById("stored").innerHTML = screenOutput;
    console.log(screenOutput);
    reset = 0;
    valueUsed = 1;
    console.log(reset);
  }
}

function addOperator(btnValue) {
  screenOutput += btnValue.value;
  document.getElementById("stored").innerHTML = screenOutput;
  reset = 0;
  opUsed = 1;
}

function sqRoot() {
  if (opUsed > 0) {
    alert("Cannot square root an operator!");
  }
  else {
      if (screenOutput > 0) {
      screenOutput = Math.sqrt(screenOutput);
      document.getElementById("stored").innerHTML = screenOutput;
      reset = 0;
      opUsed = 0;
    }
    else {
      alert("Cannot square root a negative number!");
    }
  }
}

function equals() {
  if (valueUsed > 0) {
    screenOutput = eval(screenOutput);
    document.getElementById("stored").innerHTML = screenOutput;
    reset = 1;
    equalUsed = 1;
    valueUsed = 0;
    oldAns = screenOutput;
    opUsed = 0;
  }
  else {
    alert("Please enter in a value!")
  }
}

function delValue() {
  screenOutput = screenOutput.toString();
  screenOutput = screenOutput.slice(0,-1);
  document.getElementById("stored").innerHTML = screenOutput;
  reset = 0;
}

function tests() {
  arrayOutput = screenOutput.toString();
  arrayOutput = arrayOutput.split("+");
  arrayOutput = arrayOutput.toString();
  arrayOutput = arrayOutput.split("-");
  arrayOutput = arrayOutput.toString();
  arrayOutput = arrayOutput.split("*");
  arrayOutput = arrayOutput.toString();
  arrayOutput = arrayOutput.split("/");
  arrayOutput = arrayOutput.toString();
  arrayOutput = arrayOutput.split("%");
  arrayOutput = arrayOutput.toString();
  console.log(screenOutput);
  console.log(arrayOutput);
}
