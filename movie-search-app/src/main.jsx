import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import WatchLaterProvider from "./context/WatchLaterProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WatchLaterProvider>
      <App />
    </WatchLaterProvider>
  </BrowserRouter>
);
