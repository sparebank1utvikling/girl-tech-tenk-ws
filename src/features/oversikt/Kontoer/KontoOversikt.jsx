import { Heading1, Heading6, SmallText, StrongText } from "@sb1/ffe-core-react";
import { ButtonGroup, TertiaryButton } from "@sb1/ffe-buttons-react";
import {
  BsuIkon,
  LommebokIkon,
  PlussIkon,
  SparegrisIkon,
  TannhjulIkon,
} from "@sb1/ffe-icons-react";
import { formatNumber } from "@sb1/ffe-formatters";
import "./kontoer.css";

const KontoOversikt = () => (
  <>
    <div className="kontooversikt">
      <Heading1>Kontoer</Heading1>
      <ButtonGroup inline={true} className="kontoer-knapper">
        <TertiaryButton leftIcon={<PlussIkon />}>Legg til</TertiaryButton>
        <TertiaryButton leftIcon={<TannhjulIkon />}>
          Innstillinger
        </TertiaryButton>
      </ButtonGroup>
    </div>
    <div>
      <div className="kontoprodukt-liste__heading">
        <Heading6>Totalt</Heading6>
        <SmallText>{formatNumber(156 + 14980 + 1500)} kr</SmallText>
      </div>
      <ul className="kontoprodukt-liste">
        <li className="kontoprodukt-liste__container">
          <div className="kontoprodukt-ikon">
            <LommebokIkon />
          </div>
          <dl className="kontoprodukt-description-list">
            <dt>
              <div className="kontoprodukt-liste-informasjon">
                <StrongText>{"Brukskonto"}</StrongText>
                <SmallText>{"1234 56 789101"}</SmallText>
              </div>
            </dt>
            <dd>
              <SmallText>{formatNumber(156)} kr</SmallText>
            </dd>
          </dl>
        </li>
        <li className="kontoprodukt-liste__container">
          <div className="kontoprodukt-ikon">
            <SparegrisIkon />
          </div>
          <dl className="kontoprodukt-description-list">
            <dt>
              <div className="kontoprodukt-liste-informasjon">
                <StrongText>{"Sparekonto"}</StrongText>
                <SmallText>{"2234 56 789102"}</SmallText>
              </div>
            </dt>
            <dd>
              <SmallText>{formatNumber(14980)} kr</SmallText>
            </dd>
          </dl>
        </li>
        <li className="kontoprodukt-liste__container">
          <div className="kontoprodukt-ikon">
            <BsuIkon />
          </div>
          <dl className="kontoprodukt-description-list">
            <dt>
              <div className="kontoprodukt-liste-informasjon">
                <StrongText>{"BSU"}</StrongText>
                <SmallText>{"1253 47 789102"}</SmallText>
              </div>
            </dt>
            <dd>
              <SmallText>{formatNumber(1500)} kr</SmallText>
            </dd>
          </dl>
        </li>
        <li className="kontoprodukt-liste__container">
          <div className="kontoprodukt-ikon">
            <LommebokIkon />
          </div>
          <dl className="kontoprodukt-description-list">
            <dt>
              <div className="kontoprodukt-liste-informasjon">
                <StrongText>{"Russekonto"}</StrongText>
                <SmallText>{"1253 47 789122"}</SmallText>
              </div>
            </dt>
            <dd>
              <SmallText>{formatNumber(0)} kr</SmallText>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </>
);

export default KontoOversikt;
