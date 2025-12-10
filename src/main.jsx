import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// 1. react-router-dom se BrowserRouter import kiya gaya hai 
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // 2. <App /> component ko <BrowserRouter> se wrap kiya gaya hai 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);