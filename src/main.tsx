import React from "react";
import ReactDOM from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import App from "@/App.tsx";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "theme"}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
