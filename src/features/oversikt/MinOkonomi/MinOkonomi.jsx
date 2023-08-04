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
  <div className="min-okonomi-komponent">
    <Paragraph className="min-okonomi__title">Min økonomi</Paragraph>
    <div className="progress-bar"></div>
    <ul className="min-okonomi-list__container">
      <li className="min-okonomi-list">
        <div className="list-content__wrapper">
          <KrPilIkon className="content__ikon" />
          <img type="image" src={blue} alt="blue" />
          <Paragraph className="content__description">Faste utgifter</Paragraph>
          <div className="content__details">
            <StrongText>47%</StrongText>
            <SmallText>23 654 kr</SmallText>
          </div>
          <ChevronIkon className="content__chevron" />
        </div>
      </li>
      <li className="min-okonomi-list">
        <div className="list-content__wrapper">
          <HandlevognIkon className="content__ikon" />
          <img type="image" src={orange} alt="orange" />
          <Paragraph className="content__description">Dagligvare</Paragraph>
          <div className="content__details">
            <StrongText>26%</StrongText>
            <SmallText>23 654 kr</SmallText>
          </div>
          <ChevronIkon className="content__chevron" />
        </div>
      </li>
      <li className="min-okonomi-list">
        <div className="list-content__wrapper">
          <LommebokIkon className="content__ikon" />
          <img type="image" src={brown} alt="brown" />
          <Paragraph className="content__description">Personlig bruk</Paragraph>
          <div className="content__details">
            <StrongText>22%</StrongText>
            <SmallText>17 787 kr</SmallText>
          </div>
          <ChevronIkon className="content__chevron" />
        </div>
      </li>
      <li className="min-okonomi-list">
        <div className="list-content__wrapper">
          <SparegrisIkon className="content__ikon" />
          <img type="image" src={pink} alt="pink" />
          <Paragraph className="content__description">Sparing</Paragraph>
          <div className="content__details">
            <StrongText>4%</StrongText>
            <SmallText>7 000 kr</SmallText>
          </div>
          <ChevronIkon className="content__chevron" />
        </div>
      </li>
    </ul>
  </div>
);

export default MinOkonomi;
