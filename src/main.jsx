import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; //
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// AuthProvider ko import karna lazmi hai taake login state manage ho sakay
import { AuthProvider } from "./AuthContext.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter saare pages (Women, Men, Track, etc.) ki routing handle karta hai */}
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);