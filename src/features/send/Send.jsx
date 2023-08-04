import { Heading3, Paragraph } from "@sb1/ffe-core-react";
import NedtrekkListeKomponent from "./NedtrekkListeKomponent.jsx";
import TextInput from "./TextInput.jsx";
import "./SendStyle.css?inline";
import Datepicker from "@sb1/ffe-datepicker-react";
import { useState } from "react";
import DancingDogs from "../../bilder/DancingDogs.gif";
import Simpson from "../../bilder/Simpson.gif";
import {
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "@sb1/ffe-buttons-react";
import { ErrorMessage, SuccessMessage } from "@sb1/ffe-message-box-react";
import formatDate from "@sb1/ffe-formatters/lib/formatDate";

const Send = () => {
  const [date, setDate] = useState(formatDate(new Date()));

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [fraValgt, setFraValgt] = useState(null);
  const [tilValgt, setTilValgt] = useState(null);
  const [belop, setBelop] = useState("");
  const [melding, setMelding] = useState("");

  const handleSendClick = () => {
    setIsButtonClicked(true);
    setAllFieldsFilled(fraValgt && tilValgt && belop && melding);
  };

  const myAccounts = [
    {
      name: "Min brukskonto",
      accountNumber: "2234 56 789102",
      currencyCode: "NOK",
      balance: 300,
    },
    {
      name: "Sparekonto",
      accountNumber: "1234 56 789101",
      currencyCode: "NOK",
      balance: 90000,
    },
    {
      name: "Mikrospar",
      accountNumber: "1234 56 789102",
      currencyCode: "NOK",
      balance: 5000,
    },
  ];

  const myPaymentRecipients = [
    {
      name: "Min brukskonto",
      accountNumber: "2234 56 789102",
    },
    {
      name: "Mamma",
      accountNumber: "1234 56 789103",
    },
    {
      name: "Pappa",
      accountNumber: "1234 56 789143",
    },
  ];

  return (
    <>
      <div className="sendContainer">
        <div className="bildeContainer">
          <img src={DancingDogs} alt="DancingDogs" />
        </div>
        <div className="skjemaContainer">
          <Heading3 className="App-heading">
            Send penger til noen eller til deg selv
          </Heading3>
          <NedtrekkListeKomponent
            label={"Fra"}
            inputProps={{ placeholder: "Velg konto" }}
            onFieldChange={() => setFraValgt(true)}
            dropdownList={myAccounts}
            showBalance={true}
            id="fra-konto"
          />
          <NedtrekkListeKomponent
            label={"Til"}
            inputProps={{ placeholder: "Fyll inn kontonummer eller navn" }}
            onFieldChange={() => setTilValgt(true)}
            dropdownList={myPaymentRecipients}
            showBalance={false}
            id="mottaker"
          />
          <TextInput
            label={"Beløp"}
            placeholder={"0,00 kr"}
            onFieldChange={(belop) => setBelop(belop)}
          />
          <div className="row-container">
            <div className="datoContainer">
              <Datepicker
                inputProps={{ id: "datepicker--block" }}
                label="Velg dato"
                language="nb"
                onChange={setDate}
                value={date}
                fullWidth={true}
              />
            </div>
            <SecondaryButton
              onClick={() => setDate(formatDate(new Date()))}
              isLoading={true}
            >
              {"I dag"}
            </SecondaryButton>
          </div>
          <TextInput
            label={"Melding"}
            placeholder={"Din melding"}
            onFieldChange={(melding) => setMelding(melding)}
          />
          <ButtonGroup thin={true}>
            <PrimaryButton className="knappStyling" onClick={handleSendClick}>
              Send
            </PrimaryButton>
          </ButtonGroup>
          {isButtonClicked && allFieldsFilled ? (
            <SuccessMessage
              className="suksessMeldingStyling"
              title="Betalingen ble gjennomført"
            >
              <Paragraph>Nå har du sendt penger! Hurra!</Paragraph>
            </SuccessMessage>
          ) : isButtonClicked && !allFieldsFilled ? (
            <ErrorMessage title="Betalingen ble ikke gjennomført">
              <Paragraph>
                Du må fylle ut alle felt før du kan gjennomføre betalingen.
              </Paragraph>
            </ErrorMessage>
          ) : null}
        </div>
        <div className="bildeContainer">
          <img src={Simpson} alt="Simpson" />
        </div>
      </div>
    </>
  );
};

export default Send;
