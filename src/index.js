import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import {AccountDetails} from "./components/ExampleOverview/AccountDetails";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from "./App";
import Oversikt from "./features/oversikt/Oversikt";
import Sparing from "./features/sparing/Sparing";
import Navigation from "./components/navigation";
import Betaling from "./features/betaling/Betaling";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="App">
        <Navigation/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/sparing" element={<Sparing/>}/>
                <Route path="/oversikt" element={<Oversikt/>}/>
                <Route path="/betaling" element={<Betaling/>}/>
                <Route path="/betaling/:accountNumber" element={<AccountDetails/>}/>

                {/*Overfør blir ikke brukt*/}
                {/*<Route path="/overfor" element={<Overfor/>}/>*/}
            </Routes>
        </BrowserRouter>
    </div>
);
