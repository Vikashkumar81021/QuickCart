import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./context/Shopcontext.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
