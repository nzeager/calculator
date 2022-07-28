const buttons = document.querySelectorAll(".button");
const buttonOps = document.querySelectorAll(".buttonOp");
const nums = document.querySelectorAll(".num");
const Output = document.getElementById("screen");
const buttonDec = document.getElementById("dec");
const buttonEq = document.getElementById("eq");
const buttonC = document.getElementById("c");

// --------EVENT LISTENERS--------
// Changes color when you press/release buttons
for(let button of buttons) {
    button.addEventListener("mousedown",colorChange);
}

for(let buttonOp of buttonOps) {
    buttonOp.addEventListener("mousedown",colorChange);
}

for(let button of buttons) {
    button.addEventListener("mouseup",colorRevert);
}

for(let buttonOp of buttonOps) {
    buttonOp.addEventListener("mouseup",colorRevertOp);
}

// Updates output when numbered buttons are pressed
for(let num of nums) {
    num.addEventListener("mousedown",inputNum);
}

// Clears output when decimal button is pressed
buttonDec.addEventListener("mousedown",inputDec);

// Updates output when operation buttons are pressed
for(let buttonOp of buttonOps) {
    buttonOp.addEventListener("mousedown",inputOp);
}

// Calculates output when equal button is pressed
buttonEq.addEventListener("mousedown",calcOutput);

// Clears output when C button is pressed
buttonC.addEventListener("mousedown",clearOutput);

// --------FUNCTIONS--------
// makes button darker when you click down mouse
function colorChange(e) {
    e.target.style.backgroundColor = "#198E16";
}

// reverts general button color when you release mouse click
function colorRevert(e) {
    e.target.style.backgroundColor = "#61b34f";
}

// reverts operation button color when you release mouse click
function colorRevertOp(e) {
    e.target.style.backgroundColor = "#82c276";
}

// function to input numeric values
function inputNum(e) {
    if (Output.innerText === "0") {
        Output.innerText = e.target.innerText;
    } else {
        Output.innerText = Output.innerText + e.target.innerText;
    }
}

// function to input decimal 
function inputDec() {
    if (Output.innerText.charAt(Output.innerText.length - 1) === ".") {
        // doesn't allow you to put two decimals next to each other
        Output.innerText = Output.innerText;
    } else if (isNaN(Number(Output.innerText.charAt(Output.innerText.length - 1)))) {
        // adds leading 0 if decimal comes at beginning of number
        Output.innerText = Output.innerText + "0."; 
    } else {
        Output.innerText = Output.innerText + ".";
    }
}

// function to input operations
function inputOp(e) {
    if (isNaN(Number(Output.innerText.charAt(Output.innerText.length - 1)))) {
        // doesn't allow you to put operation next to other operation or decimal
        Output.innerText = Output.innerText;
    } else if (e.target.innerText !== "X") {
        // inputs operation, except for multiplication
        Output.innerText = Output.innerText + e.target.innerText;
    } else {
        // inputs correct multiplication symbol
        Output.innerText = Output.innerText + "*";
    }
}

// function to calculate input (for equal button)
function calcOutput() {
    // This returns a value with at most 6 decimal places
    Output.innerText = +parseFloat(eval(Output.innerText)).toFixed(6);
}

// function to clear output
function clearOutput() {
    Output.innerText = "0"
}