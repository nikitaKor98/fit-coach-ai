import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";

import App from "./app/App";
import { SettingsProvider } from "./app/SettingsProvider/SettingsProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </StrictMode>,
);
