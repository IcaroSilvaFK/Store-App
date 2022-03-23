import { StrictMode } from "react";
import { render } from "react-dom";

import { RoutesApplication } from "./routes/routes";

import "./styles/global.scss";

render(
  <StrictMode>
    <RoutesApplication />
  </StrictMode>,
  document.getElementById("root")
);
