import { Heading1 } from "@sb1/ffe-core-react";
import { Grid, GridCol, GridRow } from "@sb1/ffe-grid-react";
import { ImageCard } from "@sb1/ffe-cards-react";
import atv from "./bilder/ATV.png";
import sparegris from "./bilder/Sparegris.png";
import "./style.css";
import EiendelerKomponent from "./Eiendeler/EiendelerKomponent.jsx";

export const Oversikt = () => {
  return (
    <>
      <Heading1 className="App-heading">Min oversikt</Heading1>
      <EiendelerKomponent />
      <Grid className="">
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
                  det du ønsker deg
                </Title>
              )}
            </ImageCard>
          </GridCol>
          <GridCol sm={4}>
            <ImageCard
              imageSrc="https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg"
              imageAltText=""
            >
              {({ Title }) => <Title>Slik lander du din første jobb</Title>}
            </ImageCard>
          </GridCol>
        </GridRow>
      </Grid>
      {/*    For å få litt inspirasjon kan du se her https://design.sparebank1.no/profil/farger/ */}
      {/*    Vi har valgt ut et par komponenter vi mener er relevante

                    Her kan dere se hva slags typografi vi bruker i nettbanken: https://design.sparebank1.no/komponenter/kort/
                    Her kan dere se hvilke knapper vi har: https://design.sparebank1.no/komponenter/knapper/
                    Her kan dere se hvilke kort vi har: https://design.sparebank1.no/komponenter/kort/
                    Her kan dere se hvilke meldinger vi har: https://design.sparebank1.no/komponenter/meldinger/
                    Her finner du de ulike skjemaelementene: https://design.sparebank1.no/komponenter/skjemaelementer/
                    Grid brukes til å styre layouten på siden: https://design.sparebank1.no/komponenter/grid/
                    Dropdown brukes vi ofte for å velge konto: https://design.sparebank1.no/komponenter/dropdown/

                    På disse sidene vil det være masse eksempler som du kan kopiere og utforske. Dere må gjerne prøve å bytte farge for eksempel! :D
                */}
      {/*    Dere kan også prøve dere på å lage egne komponter og importere de. Se f.eks. bankkort-componenten under componentsmappen */}
    </>
  );
};

export default Oversikt;
