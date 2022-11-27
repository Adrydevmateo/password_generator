const containerElement: HTMLElement = document.createElement("section");
const passIndicator: HTMLElement = document.createElement("section");
const buttonGenerate: HTMLButtonElement = document.createElement("button");

passIndicator.setAttribute("class", "pass-indicator");
buttonGenerate.setAttribute("class", "generate-btn");

buttonGenerate.innerText = "Generate Password";

export const Container: HTMLElement = containerElement;
