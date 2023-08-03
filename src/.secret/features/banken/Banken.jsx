import React, { useState } from "react";
import { Tab, TabGroup } from "@sb1/ffe-tabs-react";
import { Oversikt } from "../oversikt/Oversikt.jsx";
import Sparing from "../sparing/Sparing.jsx";
import Send from "../send/Send.jsx";
import "./style.css";

const Banken = () => {
  const side = { oversikt: "oversikt", send: "send", sparing: "sparing" };
  const [activeTabId, setActiveTabId] = useState(side.oversikt);

  return (
    <>
      <div className="banken-tab-group-riktig">
        <TabGroup>
          <Tab
            selected={activeTabId === side.oversikt}
            onClick={() => setActiveTabId(side.oversikt)}
          >
            Oversikt
          </Tab>
          <Tab
            selected={activeTabId === side.send}
            onClick={() => setActiveTabId(side.send)}
          >
            Send
          </Tab>
          <Tab
            selected={activeTabId === side.sparing}
            onClick={() => setActiveTabId(side.sparing)}
          >
            Sparing
          </Tab>
        </TabGroup>
      </div>

      {activeTabId === side.oversikt && <Oversikt />}
      {activeTabId === side.send && <Send />}
      {activeTabId === side.sparing && <Sparing />}
    </>
  );
};

export default Banken;
