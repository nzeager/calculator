const buttons = document.querySelectorAll(".button");
const buttonOps = document.querySelectorAll(".buttonOp");
const nums = document.querySelectorAll(".num");
const Output = document.getElementById("screen");

// const Button0 = document.getElementById("num0");
// const Button1 = document.getElementById("num1");
// const Button2 = document.getElementById("num2");
// const Button3 = document.getElementById("num3");
// const Button4 = document.getElementById("num4");
// const Button5 = document.getElementById("num5");
// const Button6 = document.getElementById("num6");
// const Button7 = document.getElementById("num7");
// const Button8 = document.getElementById("num8");
// const Button9 = document.getElementById("num9");
// const ButtonC = document.getElementById("c");
// const ButtonDec = document.getElementById("dec");
// const ButtonEq = document.getElementById("eq");
// const ButtonAdd = document.getElementById("add");
// const ButtonSubt = document.getElementById("subt");
// const ButtonMult = document.getElementById("mult");
// const ButtonDiv = document.getElementById("div");

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
    num.addEventListener("mousedown",calcInputNum);
}

// FUNCTIONS
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

// functions to input numeric values
function calcInputNum(e) {
    if (Output.innerText === "0") {
        Output.innerText = e.target.innerText;
    } else {
        Output.innerText = Output.innerText + e.target.innerText;
    }
}