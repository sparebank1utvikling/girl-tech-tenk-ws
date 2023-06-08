import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from "./App";
import Oversikt from "./features/oversikt/Oversikt";
import Sparing from "./features/sparing/Sparing";
import Navigation from "./components/navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="App">
        <Navigation/>
        <BrowserRouter>
            <Routes>
                {/*todo fiks */}
                <Route path="/" element={<App/>}/>
                <Route path="/banken" element={<Sparing/>}/>
                <Route path="/slik-skal-det-se-ut" element={<Oversikt/>}/>
                {/*<Route path="/betaling" element={<Betaling/>}/>
                <Route path="/betaling/:accountNumber" element={<AccountDetails/>}/>

                {/*Overfør blir ikke brukt*/}
                {/*<Route path="/overfor" element={<Overfor/>}/>*/}
            </Routes>
        </BrowserRouter>
    </div>
);
