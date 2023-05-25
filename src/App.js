import {Heading1, Heading2, Paragraph} from "@sb1/ffe-core-react";
import {Grid, GridCol, GridRow} from "@sb1/ffe-grid-react";
import katten from "./katten.svg";

function App() {
    return (
        <div className="App">
            <Heading1 className="App-heading">Hjelp, noen har ødelagt nettbanken!</Heading1>
            <Grid>
                <GridRow>
                    <GridCol sm={{cols: 8, offset: 2}} lg={{cols: 6, offset: 3}}>
                        <div className="App-wrapper">
                            <Heading2 lookLike={4}>Bakgrunn</Heading2>
                            <Paragraph textLeft={true}>
                                Noen har rotet til koden i nettbanken vår. Hjelp oss fikse det.
                                Vi har noen bilder av hvordan det skal se ut som du kan bruke til hjelp.
                            </Paragraph>
                        </div>
                        <div className="App-wrapper">
                            <Heading2 lookLike={4}>Tips</Heading2>
                            <Paragraph textLeft={true}>
                                Det er gjort en del endringer i designet i nettbanken. Du finner alt av designkode i
                                filene som heter "style.css".
                                Kanskje det til og med er lagt igjen et par spor.

                                Noe mer her?
                            </Paragraph>
                        </div>
                    </GridCol>
                </GridRow>
            </Grid>
            <img src={katten} alt="Katten" className="App-katten"/>
        </div>
    );
}

export default App;
