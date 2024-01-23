import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "globalStyles";
import theme from "theme/default";
import "reset.css";
import App from "App";

const rootElement = document.querySelector("#app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);
root.render(
  (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  ) as React.ReactNode,
);
