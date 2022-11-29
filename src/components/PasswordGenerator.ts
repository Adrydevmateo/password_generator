import { Characters } from "../utils/Collections";
import { passIndicator, generateBtn } from "./Container";
import { passwordInput, copyIcon } from "./InputBox";
import { lengthSlider, span } from "./PasswordLength";
import { options } from "./PasswordSettings";

const generatePassword = () => {
  let staticPassword: string = "";
  let randomPassword: string = "";
  let excludeDuplicate: boolean = false;
  let passLength: any = lengthSlider.value;

  options.forEach((option: ChildNode | any) => {
    if (option.checked) {
      if (option.id !== "exc-duplicate" && option.id !== "spaces") {
        staticPassword += Characters[option.id];
      } else if (option.id === "spaces") {
        staticPassword += `  ${staticPassword}  `;
      } else {
        excludeDuplicate = true;
      }
    }
  });

  for (let i = 0; i < passLength; i++) {
    let randomChar =
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
    if (excludeDuplicate) {
      !randomPassword.includes(randomChar) || randomChar == " "
        ? (randomPassword += randomChar)
        : i--;
    } else {
      randomPassword += randomChar;
    }
  }

  passwordInput.value = randomPassword;
};

const updatePassIndicator = () => {
  passIndicator.id =
    lengthSlider.value <= 8
      ? "weak"
      : lengthSlider.value <= 16
      ? "medium"
      : "strong";
};

const updateSlider = () => {
  span.innerText = lengthSlider.value;
  generatePassword();
  updatePassIndicator();
};
updateSlider();

const copyPassword = () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.innerText = "check";
  copyIcon.style.color = "#4285F4";
  setTimeout(() => {
    copyIcon.innerText = "copy_all";
    copyIcon.style.color = "#707070";
  }, 1500);
};

export function PasswordGenerator() {
  copyIcon.addEventListener("click", copyPassword);
  lengthSlider.addEventListener("input", updateSlider);
  generateBtn.addEventListener("click", generatePassword);
}
