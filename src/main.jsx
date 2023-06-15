import React from "react";
import ReactDOM from "react-dom/client";
import "./App.less";
import {AccountDetails} from "./components/ExampleOverview/AccountDetails.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from "./App";
import Oversikt from "./features/oversikt/Oversikt.jsx";
import Navigation from "./components/navigation.jsx";
import Betaling from "./features/betaling/Betaling.jsx";
import SlikSkalDetSeUt from "./features/slik-skal-det-se-ut/SlikSkalDetSeUt.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="App">
        <Navigation/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/banken" element={<Oversikt/>}/>
                <Route path="/slik-skal-det-se-ut" element={<SlikSkalDetSeUt/>}/>
                <Route path="/betaling" element={<Betaling/>}/>
                <Route path="/betaling/:accountNumber" element={<AccountDetails/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);