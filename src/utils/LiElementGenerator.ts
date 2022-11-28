export function CreateLiELement(
  inputType: string,
  inputId: string,
  inputIsChecked: boolean,
  labelFor: string,
  labelInnerText: string
): HTMLLIElement {
  const newLiElement: HTMLLIElement = document.createElement("li");
  const newInputELement: HTMLInputElement = document.createElement("input");
  const newLabelElement: HTMLLabelElement = document.createElement("label");

  newLiElement.setAttribute("class", "option");
  newInputELement.setAttribute("type", inputType);
  newInputELement.setAttribute("id", inputId);
  newLabelElement.setAttribute("for", labelFor);

  newLabelElement.innerText = labelInnerText;

  if (inputIsChecked === true) newInputELement.setAttribute("checked", "");

  newLiElement.appendChild(newInputELement);
  newLiElement.appendChild(newLabelElement);

  return newLiElement;
}
