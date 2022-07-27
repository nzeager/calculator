const Button0 = document.getElementById("num0");
const Button1 = document.getElementById("num1");
const Button2 = document.getElementById("num2");
const Button3 = document.getElementById("num3");
const Button4 = document.getElementById("num4");
const Button5 = document.getElementById("num5");
const Button6 = document.getElementById("num6");
const Button7 = document.getElementById("num7");
const Button8 = document.getElementById("num8");
const Button9 = document.getElementById("num9");
const ButtonC = document.getElementById("c");
const ButtonDec = document.getElementById("dec");
const ButtonEq = document.getElementById("eq");
const ButtonAdd = document.getElementById("add");
const ButtonSubt = document.getElementById("subt");
const ButtonMult = document.getElementById("mult");
const ButtonDiv = document.getElementById("div");

Button0.addEventListener("mousedown",colorChange);
Button0.addEventListener("mouseup",colorRevert);
Button1.addEventListener("mousedown",colorChange);
Button1.addEventListener("mouseup",colorRevert);
Button2.addEventListener("mousedown",colorChange);
Button2.addEventListener("mouseup",colorRevert);
Button3.addEventListener("mousedown",colorChange);
Button3.addEventListener("mouseup",colorRevert);
Button4.addEventListener("mousedown",colorChange);
Button4.addEventListener("mouseup",colorRevert);
Button5.addEventListener("mousedown",colorChange);
Button5.addEventListener("mouseup",colorRevert);
Button6.addEventListener("mousedown",colorChange);
Button6.addEventListener("mouseup",colorRevert);
Button7.addEventListener("mousedown",colorChange);
Button7.addEventListener("mouseup",colorRevert);
Button8.addEventListener("mousedown",colorChange);
Button8.addEventListener("mouseup",colorRevert);
Button9.addEventListener("mousedown",colorChange);
Button9.addEventListener("mouseup",colorRevert);
ButtonC.addEventListener("mousedown",colorChange);
ButtonC.addEventListener("mouseup",colorRevert);
ButtonDec.addEventListener("mousedown",colorChange);
ButtonDec.addEventListener("mouseup",colorRevert);
ButtonEq.addEventListener("mousedown",colorChange);
ButtonEq.addEventListener("mouseup",colorRevert);
ButtonAdd.addEventListener("mousedown",colorChange);
ButtonAdd.addEventListener("mouseup",colorRevertOp);
ButtonSubt.addEventListener("mousedown",colorChange);
ButtonSubt.addEventListener("mouseup",colorRevertOp);
ButtonMult.addEventListener("mousedown",colorChange);
ButtonMult.addEventListener("mouseup",colorRevertOp);
ButtonDiv.addEventListener("mousedown",colorChange);
ButtonDiv.addEventListener("mouseup",colorRevertOp);

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