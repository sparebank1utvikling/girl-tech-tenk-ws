import {Heading1, Heading2, Paragraph} from "@sb1/ffe-core-react";
import {Grid, GridCol, GridRow} from "@sb1/ffe-grid-react";
import "./style.css";
import sparegris from "./bilder/sparegris.jpg";
import {ButtonGroup, TaskButton} from "@sb1/ffe-buttons-react";
import {KattIkon, KonfettiIkon, PlussIkon, SparegrisIkon} from "@sb1/ffe-icons-react";
import {formatNumber} from "@sb1/ffe-formatters";
import {IconCard, ImageCard} from "@sb1/ffe-cards-react";
import jente from "./bilder/jentemedmobil.jpg";

export const Oversikt = () => {
    return (
        <>
            <Heading1 className="App-heading">
                Min oversikt
            </Heading1>
            <Grid>
                <GridRow>
                    <GridCol sm={12} center>
                        <ButtonGroup thin={true}>
                            <TaskButton icon={<PlussIkon/>}>Spør om penger</TaskButton>
                            <TaskButton icon={<PlussIkon/>}>Gi penger til noen</TaskButton>
                            <TaskButton icon={<PlussIkon/>}>Overfør penger</TaskButton>
                        </ButtonGroup>

                        <div className="min-bank-penger">
                            <Paragraph className="min-bank-penger-tekst">
                                Såå mye penger har jeg
                            </Paragraph>
                            <Heading2 lookLike={1}>{formatNumber(10000)} kr</Heading2>
                        </div>

                        <div className="min-bank-kort-container">
                            <GridCol sm={4}>
                                <IconCard
                                    icon={<KonfettiIkon/>}
                                    condensed={true}
                                    className="min-bank-kort-contianer-kort"
                                >
                                    {({Title, Subtext}) => (
                                        <>
                                            <Title>Penger jeg kan bruke når jeg vil</Title>
                                            <Subtext>{formatNumber(100000)}</Subtext>
                                        </>
                                    )}
                                </IconCard>
                            </GridCol>
                            <GridCol sm={4}>
                                <IconCard icon={<SparegrisIkon/>} condensed={true}>
                                    {({Title, Subtext}) => (
                                        <>
                                            <Title>Sparing til iPhone</Title>
                                            <Subtext>{formatNumber(500)}</Subtext>
                                        </>
                                    )}
                                </IconCard>
                            </GridCol>
                            <GridCol sm={4}>
                                <IconCard icon={<KattIkon/>} condensed={true}>
                                    {({Title, Subtext}) => (
                                        <>
                                            <Title>Sparing til hund</Title>
                                            <Subtext>{formatNumber(2000)}</Subtext>
                                        </>
                                    )}
                                </IconCard>
                            </GridCol>
                        </div>

                        <div className="min-bank-kort-container">
                            <GridCol sm={4}>
                                <ImageCard
                                    image={
                                        <img
                                            src={sparegris}
                                            alt=""
                                            style={{position: "relative", bottom: "50px"}}
                                        />
                                    }
                                >
                                    {({Title}) => <Title>Spar til noe nytt</Title>}
                                </ImageCard>
                            </GridCol>
                            <GridCol sm={4}>
                                <ImageCard
                                    image={
                                        <img
                                            src={jente}
                                            alt=""
                                            style={{position: "relative", bottom: "50px"}}
                                        />
                                    }
                                >
                                    {({Title}) => (
                                        <Title>Hvor mye brukte jeg forrige måned</Title>
                                    )}
                                </ImageCard>
                            </GridCol>
                            <GridCol sm={4}>
                                <ImageCard
                                    image={
                                        <img
                                            src="https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg"
                                            alt=""
                                            style={{position: "relative", bottom: "50px"}}
                                        />
                                    }
                                >
                                    {({Title}) => <Title>Gjør meg rik!</Title>}
                                </ImageCard>
                            </GridCol>
                        </div>
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
