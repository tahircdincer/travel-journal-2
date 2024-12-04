import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
