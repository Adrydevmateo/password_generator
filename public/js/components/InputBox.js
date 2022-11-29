const inputBox = document.createElement("section");
const inputElement = document.createElement("input");
const spanElement = document.createElement("span");
inputBox.setAttribute("class", "input-box");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("disabled", "");
spanElement.setAttribute("class", "material-symbols-rounded");
spanElement.innerText = "copy_all";
inputBox.appendChild(inputElement);
inputBox.appendChild(spanElement);
export const InputBox = inputBox;
export const passwordInput = inputElement;
export const copyIcon = spanElement;
