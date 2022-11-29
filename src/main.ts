// * Import Statements
import "./style.css";
import { Container } from "./components/Container";
import { PasswordGenerator } from "./components/PasswordGenerator";

const app = document.querySelector<HTMLDivElement>("#app");

app?.appendChild(Container);

// ? Function to generate passwords
PasswordGenerator();
