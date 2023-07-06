import React from "react";
import ReactDOM from "react-dom/client";
import "./App.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Navigation from "./components/navigation.jsx";
import SlikSkalDetSeUt from "./features/slik-skal-det-se-ut/SlikSkalDetSeUt.jsx";
import Banken from "./features/banken/Banken.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/banken" element={<Banken />} />
        <Route path="/slik-skal-det-se-ut" element={<SlikSkalDetSeUt />} />
      </Routes>
    </BrowserRouter>
  </div>
);
