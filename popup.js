let selectPrd = document.getElementsByClassName("product-box");
let container = document.getElementById("container");
let popup = document.getElementById("popup");
let btnExit = document.getElementById("btn-exit-popup");
console.log(btnExit);
for (let i = 0; i < selectPrd.length; i++) {
    selectPrd[i].addEventListener("click", _popup);
}
btnExit.addEventListener("click", _exitPopup);

function _popup() {
    container.style.position = "absolute";
    container.style.left = "50%";
    container.style.transform = "translateX(-50%)"
    container.style.zIndex = "-999";
    popup.style.display = "block";
    popup.style.transition = "all 1s ease"
}
function _exitPopup() {
    container.style.position = "";
    container.style.left = "";
    container.style.transform = "";
    container.style.zIndex = "";
    popup.style.display = "none";
}