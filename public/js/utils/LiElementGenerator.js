/**
 * * Function to Create Li Elements
 * @param inputType
 * @param inputId
 * @param inputIsChecked
 * @param labelFor
 * @param labelInnerText
 * @returns a new list item html element
 */
export function CreateLiELement(inputType, inputId, inputIsChecked, labelFor, labelInnerText) {
    const newLiElement = document.createElement("li");
    const newInputELement = document.createElement("input");
    const newLabelElement = document.createElement("label");
    newLiElement.setAttribute("class", "option");
    newInputELement.setAttribute("type", inputType);
    newInputELement.setAttribute("id", inputId);
    newLabelElement.setAttribute("for", labelFor);
    newLabelElement.innerText = labelInnerText;
    if (inputIsChecked === true)
        newInputELement.setAttribute("checked", "");
    newLiElement.appendChild(newInputELement);
    newLiElement.appendChild(newLabelElement);
    return newLiElement;
}
