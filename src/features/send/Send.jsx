import { Heading3, Paragraph } from "@sb1/ffe-core-react";
import NedtrekkListeKomponent from "./NedtrekkListeKomponent.jsx";
import TextInput from "./TextInput.jsx";
import "./SendStyle.css?inline";
import Datepicker from "@sb1/ffe-datepicker-react";
import { useState } from "react";
import Vingerblaa from "./bilder/Vingerblaa.svg";
import Vingeroransje from "./bilder/Vingeroransje.svg";
import {
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "@sb1/ffe-buttons-react";
import { ErrorMessage, SuccessMessage } from "@sb1/ffe-message-box-react";

const Send = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());

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
        <div className="imageContainer">
          <img src={Vingerblaa} alt="Vingerblaa" />
        </div>
        <div className="formContainer">
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
            <div className="dateContainer">
              <Datepicker
                inputProps={{ id: "datepicker--block" }}
                label="Velg dato"
                language="nb"
                onChange={setDate}
                value={date}
                fullWidth={true}
              />
            </div>
            <div className="dateContainer">
              <SecondaryButton
                onClick={() => setDate(new Date().toLocaleDateString())}
              >
                {"I dag"}
              </SecondaryButton>
            </div>
          </div>
          <TextInput
            label={"Melding"}
            placeholder={"Din melding"}
            onFieldChange={(melding) => setMelding(melding)}
          />
          <TextInput label={"Beløp"} placeholder={"0,00 kr"} />
          <Datepicker
            inputProps={{ id: "datepicker--block" }}
            label="Velg dato"
            language="nb"
            onChange={setDate}
            value={date}
            fullWidth={true}
          />
          <ButtonGroup thin={true}>
            <PrimaryButton className="buttonStyling" onClick={handleSendClick}>
              Send
            </PrimaryButton>
          </ButtonGroup>
          {isButtonClicked && allFieldsFilled ? (
            <SuccessMessage
              className="successMessageStyling"
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
        <div className="imageContainer">
          <img src={Vingeroransje} alt="Vingeroransje" />
        </div>
      </div>
    </>
  );
};

export default Send;
