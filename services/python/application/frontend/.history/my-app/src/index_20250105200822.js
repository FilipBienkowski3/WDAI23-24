import React from "react";
import ReactDOM from "react-dom/client"; // Import nowego API
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Użycie createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
