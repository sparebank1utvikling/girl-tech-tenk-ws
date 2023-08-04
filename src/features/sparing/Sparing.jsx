import ChartDonut from "@sb1/ffe-chart-donut-react";
import {
  Heading1,
  Heading2,
  Paragraph,
  SmallText,
  StrongText,
} from "@sb1/ffe-core-react";
import SparemaalKort from "./sparemaal/SparemaalKort.jsx";
import Konfirmant from "../../bilder/Konfirmant.svg";
import Russetid from "../../bilder/Russetid.svg";
import skeptiskHund from "../../bilder/skeptisk-hund.gif";
import "./sparemaal/sparemaal.css";
import "./sparing.css";
import { formatNumber } from "@sb1/ffe-formatters";
import { TaskButton } from "@sb1/ffe-buttons-react";
import { PlussIkon } from "@sb1/ffe-icons-react";
import { Grid, GridCol, GridRow } from "@sb1/ffe-grid-react";

const Sparing = () => {
  const fond = 5000;
  const sparekonto = 9000;
  const prosent = (fond / (fond + sparekonto)) * 100;

  return (
    <>
      <Grid>
        <GridRow margin="md">
          <GridCol centerText={true} className="sparing-firkant">
            <Heading1>Min sparing</Heading1>
            <div className="sparing-firkant-fordeling">
              <ChartDonut
                firstLabel="Sparekonto"
                lastLabel="Fond"
                name="Fordeling"
                percentage={prosent}
              />
              <div className="sparing-firkant-fordeling-totalt">
                <Paragraph lead={true}>
                  Totalt {formatNumber(fond + sparekonto)} kr
                </Paragraph>
                <div className="sparing-firkant-fordeling-tall">
                  <StrongText>Sparekonto </StrongText>
                  <SmallText>{formatNumber(sparekonto)} kr</SmallText>
                </div>
                <div className="sparing-firkant-fordeling-tall">
                  <StrongText>Fond </StrongText>
                  <SmallText>{formatNumber(fond)} kr</SmallText>
                </div>
              </div>
            </div>
          </GridCol>
        </GridRow>
      </Grid>
      <Grid>
        <GridRow>
          <GridCol>
            <Heading2 className="sparing-sparemaal-heading">
              Mine sparemål
            </Heading2>
            <div className="sparing-sparemaal-kort">
              <SparemaalKort
                bilde={Konfirmant}
                sparemaalNavn={"Bunad"}
                maal={10000}
              />
              <SparemaalKort
                bilde={skeptiskHund} //bildet er byttet ut med en gif
                sparemaalNavn={"Ønsker meg hund"}
                maal={500}
              />
              <SparemaalKort
                bilde={Russetid}
                sparemaalNavn={"Russetid"}
                maal={30000}
              />
              <TaskButton
                icon={<PlussIkon />}
                className="sparing-sparemaal-knapp"
              >
                Opprett sparemål
              </TaskButton>
            </div>
          </GridCol>
        </GridRow>
      </Grid>
    </>
  );
};

export default Sparing;
