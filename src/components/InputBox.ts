const inputBox: HTMLElement = document.createElement("section");
const passIndicator: HTMLElement = document.createElement("section");
const inputElement: HTMLInputElement = document.createElement("input");
const spanElement: HTMLSpanElement = document.createElement("span");

inputBox.setAttribute("class", "input-box");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("disabled", "");
spanElement.setAttribute("class", "material-symbols-rounded");
passIndicator.setAttribute("class", "pass-indicator");

spanElement.innerText = "copy_all";

export const InputBox: HTMLElement = inputBox;
export const PassIndicator: HTMLElement = passIndicator;
