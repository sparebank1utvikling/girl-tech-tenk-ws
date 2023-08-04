import { Paragraph, SmallText, StrongText } from "@sb1/ffe-core-react";
import "./minokonomi.css";
import {
  ChevronIkon,
  HandlevognIkon,
  KrPilIkon,
  LommebokIkon,
  SparegrisIkon,
} from "@sb1/ffe-icons-react";
import blue from "../../../bilder/blue-circle.svg";
import orange from "../../../bilder/orange-circle.svg";
import brown from "../../../bilder/brown-circle.svg";
import pink from "../../../bilder/pink-circle.svg";

const MinOkonomi = () => (
  <div className="min-okonomi-komponent-riktig">
    <Paragraph className="min-okonomi__title-riktig">Min økonomi</Paragraph>
    <div className="progress-bar-riktig"></div>
    <ul className="min-okonomi-list__container-riktig">
      <li className="min-okonomi-list-riktig">
        <div className="list-content__wrapper-riktig">
          <KrPilIkon className="content__ikon-riktig" />
          <img type="image" src={blue} alt="blue" />
          <Paragraph className="content__description-riktig">
            Faste utgifter
          </Paragraph>
          <div className="content__details-riktig">
            <StrongText>47%</StrongText>
            <SmallText>23 654 kr</SmallText>
          </div>
          <ChevronIkon className="content__chevron-riktig" />
        </div>
      </li>
      <li className="min-okonomi-list-riktig">
        <div className="list-content__wrapper-riktig">
          <HandlevognIkon className="content__ikon-riktig" />
          <img type="image" src={orange} alt="orange" />
          <Paragraph className="content__description-riktig">
            Dagligvare
          </Paragraph>
          <div className="content__details-riktig">
            <StrongText>26%</StrongText>
            <SmallText>23 654 kr</SmallText>
          </div>
          <ChevronIkon className="content__chevron-riktig" />
        </div>
      </li>
      <li className="min-okonomi-list-riktig">
        <div className="list-content__wrapper-riktig">
          <LommebokIkon className="content__ikon-riktig" />
          <img type="image" src={brown} alt="brown" />
          <Paragraph className="content__description-riktig">
            Personlig bruk
          </Paragraph>
          <div className="content__details-riktig">
            <StrongText>22%</StrongText>
            <SmallText>17 787 kr</SmallText>
          </div>
          <ChevronIkon className="content__chevron-riktig" />
        </div>
      </li>
      <li className="min-okonomi-list-riktig">
        <div className="list-content__wrapper-riktig">
          <SparegrisIkon className="content__ikon-riktig" />
          <img type="image" src={pink} alt="pink" />
          <Paragraph className="content__description-riktig">Sparing</Paragraph>
          <div className="content__details-riktig">
            <StrongText>4%</StrongText>
            <SmallText>7 000 kr</SmallText>
          </div>
          <ChevronIkon className="content__chevron-riktig" />
        </div>
      </li>
    </ul>
  </div>
);

export default MinOkonomi;
