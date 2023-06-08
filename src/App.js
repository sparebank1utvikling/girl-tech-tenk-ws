import {Heading1, Heading2, Paragraph} from "@sb1/ffe-core-react";
import {Grid, GridCol, GridRow} from "@sb1/ffe-grid-react";
import tristMann from "./trist-mann.svg";

function App() {
    return (
        <div className="App">
            <Heading1 className="App-heading">Hjelp! <br/> Noen har ødelagt nettbanken 😱</Heading1>
            <Grid>
                <GridRow>
                    <GridCol sm={{cols: 8, offset: 2}} lg={{cols: 6, offset: 3}}>
                        <div className="App-wrapper">
                            <Paragraph textLeft={true} subLead={true}>
                                Noen har tullet til koden i nettbanken vår! Kan du hjelpe oss med fikse det? Hjelp oss
                                gjøre nettbanken vår tilgjengelig for mennesker igjen.
                            </Paragraph>
                        </div>
                        <div className="App-wrapper">
                            <Heading2 lookLike={4}>Tips</Heading2>
                            <Paragraph textLeft={true}>
                                Det er gjort en del endringer i designet i nettbanken. Du finner alt av designkode i
                                filene som heter "style.css".
                                <br/>
                                Under "Slik skal du se ut" kan du se hvordan nettbanken faktisk skal se ut.
                            </Paragraph>
                        </div>
                    </GridCol>
                </GridRow>
            </Grid>
            <div className="App-trist-mann">
                <img src={tristMann} alt="Trist mann"/>
            </div>
        </div>
    );
}

export default App;
