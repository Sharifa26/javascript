const btnEl = document.querySelector(".btn");
const bodyEl = document.querySelector("body");

var colors = ["green", "blue", "red", "orange", "yellow", "violet", "aqua", "burlywood", "salmon", "crimson", "cadetblue", "khaki"];

bodyEl.style.background = "pink";

btnEl.addEventListener("click", addColor);

function addColor() {
    console.log("clicked");
    var color = parseInt(Math.random() * colors.length);
    bodyEl.style.background = colors[color];
}