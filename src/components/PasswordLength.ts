const passwordLength: HTMLElement = document.createElement("section");
const detailsElement: HTMLElement = document.createElement("section");
const labelElement: HTMLLabelElement = document.createElement("label");
const spanElement: HTMLSpanElement = document.createElement("span");
const inputElement: HTMLInputElement = document.createElement("input");

passwordLength.setAttribute("class", "pass-length");
detailsElement.setAttribute("class", "details");
labelElement.setAttribute("class", "title");
inputElement.setAttribute("type", "range");
inputElement.setAttribute("min", "1");
inputElement.setAttribute("max", "30");
inputElement.setAttribute("value", "15");
inputElement.setAttribute("step", "1");

labelElement.innerText = "Password Length";

passwordLength.appendChild(detailsElement);
passwordLength.appendChild(inputElement);
detailsElement.appendChild(labelElement);
detailsElement.appendChild(spanElement);

export const PasswordLength: HTMLElement = passwordLength;
