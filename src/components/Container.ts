import { InputBox } from "./InputBox";
import { PasswordLength } from "./PasswordLength";
import { PasswordSettings } from "./PasswordSettings";

const containerElement: HTMLElement = document.createElement("section");
const passwordIndicator: HTMLElement = document.createElement("section");
const buttonGenerate: HTMLButtonElement = document.createElement("button");

containerElement.setAttribute("class", "container");
passwordIndicator.setAttribute("class", "pass-indicator");
buttonGenerate.setAttribute("class", "generate-btn");

buttonGenerate.innerText = "Generate Password";

containerElement.appendChild(InputBox);
containerElement.appendChild(passwordIndicator);
containerElement.appendChild(PasswordLength);
containerElement.appendChild(PasswordSettings);
containerElement.appendChild(buttonGenerate);

export const Container: HTMLElement = containerElement;
export const passIndicator: HTMLElement = passwordIndicator;
export const generateBtn: HTMLButtonElement = buttonGenerate;
