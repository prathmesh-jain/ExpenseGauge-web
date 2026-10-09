import { defineReactSsgConfig } from "vite-plugin-react-ssg";
import { routes } from "./src/App";

export default defineReactSsgConfig({
  history: "browser",
  origin: "https://expensegauge.prathmeshjain.in",
  routes,
});