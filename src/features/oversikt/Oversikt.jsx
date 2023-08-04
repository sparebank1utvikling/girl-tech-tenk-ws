import { Grid, GridCol, GridRow } from "@sb1/ffe-grid-react";
import { ImageCard } from "@sb1/ffe-cards-react";
import atv from "../../bilder/ATV.png";
import sparegris from "../../bilder/Sparegris.png";
import "./style.css";
import EiendelerKomponent from "./Eiendeler/EiendelerKomponent.jsx";
import KontoOversikt from "./Kontoer/KontoOversikt.jsx";
import MinOkonomi from "./MinOkonomi/MinOkonomi";

export const Oversikt = () => {
  return (
    <>
      <Grid>
        <GridRow>
          <GridCol sm="6">
            <KontoOversikt />
          </GridCol>
          <GridCol lg={{ cols: 4, offset: 7 }} sm="6">
            <MinOkonomi />
          </GridCol>
        </GridRow>
      </Grid>
      <Grid>
        <GridRow margin="3xl">
          <GridCol sm="1">
            <EiendelerKomponent />
          </GridCol>
        </GridRow>
      </Grid>
      <Grid>
        <GridRow className="oversikt-kort-container">
          <GridCol sm={4}>
            <ImageCard
              imageSrc={sparegris}
              imageAltText=""
              className="oversikt-kort-bilde-kort"
            >
              {({ Title }) => <Title>Spar til noe nytt</Title>}
            </ImageCard>
          </GridCol>
          <GridCol sm={4}>
            <ImageCard imageSrc={atv} imageAltText="">
              {({ Title }) => (
                <Title>
                  Lær hvordan du kan spare til
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  det du ønsker deg
                </Title>
              )}
            </ImageCard>
          </GridCol>
          <GridCol sm={4}>
            <ImageCard
              //imageSrc="https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg"
              imageSrc="https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif"
              imageAltText=""
            >
              {({ Title }) => <Title>Slik lander du din første jobb</Title>}
            </ImageCard>
          </GridCol>
        </GridRow>
      </Grid>
    </>
  );
};

export default Oversikt;
