const inputBox: HTMLElement = document.createElement("section");
const inputElement: HTMLInputElement = document.createElement("input");
const spanElement: HTMLSpanElement = document.createElement("span");

inputBox.setAttribute("class", "input-box");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("disabled", "");
spanElement.setAttribute("class", "material-symbols-rounded");

spanElement.innerText = "copy_all";

inputBox.appendChild(inputElement);
inputBox.appendChild(spanElement);

export const InputBox: HTMLElement = inputBox;
