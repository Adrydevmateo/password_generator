import "./style.css";
import { Container } from "./components/Container";

const app = document.querySelector<HTMLDivElement>("#app");

app?.appendChild(Container);
