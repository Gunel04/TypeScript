var text = document.querySelector("h1");
var btn = document.querySelector("button");
btn.onclick = function () {
    text.style.color = "purple";
    text.innerHTML = "TypeScript - DOM is fun!";
};
