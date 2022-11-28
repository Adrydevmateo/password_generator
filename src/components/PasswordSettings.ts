import { CreateLiELement } from "../utils/LiElementGenerator";

const passwordSettings: HTMLElement = document.createElement("section");
const labelElement: HTMLLabelElement = document.createElement("label");
const ulElement: HTMLUListElement = document.createElement("ul");

passwordSettings.setAttribute("class", "pass-settings");
labelElement.setAttribute("class", "title");
ulElement.setAttribute("class", "options");

labelElement.innerText = "Password Settings";

passwordSettings.appendChild(labelElement);
passwordSettings.appendChild(ulElement);

ulElement.appendChild(
  CreateLiELement("checkbox", "lowercase", true, "lowercase", "Lowercase (a-z)")
);

ulElement.appendChild(
  CreateLiELement(
    "checkbox",
    "uppercase",
    false,
    "uppercase",
    "Uppercase (A-Z)"
  )
);

ulElement.appendChild(
  CreateLiELement("checkbox", "numbers", false, "numbers", "Numbers (0-9)")
);

ulElement.appendChild(
  CreateLiELement("checkbox", "symbols", false, "symbols", "Symbols (!-$^+)")
);

ulElement.appendChild(
  CreateLiELement(
    "checkbox",
    "exc-duplicate",
    false,
    "exc-duplicate",
    "Exclude Duplicate"
  )
);

ulElement.appendChild(
  CreateLiELement("checkbox", "spaces", false, "spaces", "Include Spaces")
);

export const PasswordSettings: HTMLElement = passwordSettings;
export const options: NodeListOf<ChildNode> = ulElement.childNodes;
