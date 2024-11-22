import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Cmd from "./cmd";
import { TorBrowser } from "./torBrowser";
import "./index.css";
import { Page } from "./page";

const ruta = "";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path={ruta} element={<TorBrowser />} />
        <Route path={ruta + "/services/page"} element={<Page />} />
        <Route path={ruta + "/services/page/app"} element={<App />} />{" "}
        {/* Ruta para TorBrowser */}
        {/* Ruta para el componente Cmd */}
        <Route path={ruta + "/cmd"} element={<Cmd />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
