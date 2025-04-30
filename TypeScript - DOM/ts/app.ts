const text = document.querySelector("h1") as HTMLHeadingElement;
const btn = document.querySelector<HTMLButtonElement>("button")!;

btn.onclick = () => {
    text.style.color = "purple";
    text.innerHTML = "TypeScript - DOM is fun!"
};