import React from "react";
import ReactDOM from "react-dom/client";
import "./App.less";
import {AccountDetails} from "./components/ExampleOverview/AccountDetails.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from "./App";
import Oversikt from "./features/oversikt/Oversikt.jsx";
import Sparing from "./features/sparing/Sparing.jsx";
import Navigation from "./components/navigation.jsx";
import Betaling from "./features/betaling/Betaling.jsx";

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