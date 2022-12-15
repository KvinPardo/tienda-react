import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {CartContextProvider} from "./context/cartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartContextProvider>
);
