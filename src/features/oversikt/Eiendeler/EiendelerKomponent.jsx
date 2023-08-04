import { Heading1, Heading6, Paragraph } from "@sb1/ffe-core-react";
import { formatCurrency } from "@sb1/ffe-formatters";
import "./eiendeler.css";
import HusIkon from "@sb1/ffe-icons-react/lib/hus-ikon";
import CampingvognIkon from "@sb1/ffe-icons-react/lib/campingvogn-ikon";
import MopedIkon from "@sb1/ffe-icons-react/lib/moped-ikon";
import ChevronIkon from "@sb1/ffe-icons-react/lib/chevron-ikon";

const EiendelerKomponent = () => {
  return (
    <div className="ting-jeg-eier-komponent">
      <Heading1 className="eiendeler-heading">Ting jeg eier</Heading1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem nisi,
      varius quis lectus id, volutpat placerat elit. Praesent et tincidunt
      metus, ut condimentum nunc. Sed efficitur quam non mauris lobortis
      efficitur. Sed sit amet nibh non turpis volutpat vulputate et nec metus.
      Nulla gravida, felis sit amet placerat imperdiet, felis risus euismod
      diam, id tempor ligula enim ac libero. Cras nec nisl nec ante facilisis
      varius. Duis et metus turpis. Suspendisse aliquam mi diam. Pellentesque ex
      arcu, finibus eu massa ut, cursus consequat tortor. Maecenas feugiat non
      enim sit amet faucibus. Mauris non urna egestas lacus pulvinar eleifend.
      <ul className="eiendeler-liste">
        <li>
          <div className="eiendel-kort">
            <CampingvognIkon className="eiendel-kort__ikon" />
            <div className="eiendel-kort__innhold">
              <Heading6 className="eiendel-kort__heading ffe-h6">
                Campingvogn
              </Heading6>
              <Paragraph className="eiendel-kort__sub-heading">
                {formatCurrency(30000, { prefix: "", postfix: " kr" })}
              </Paragraph>
            </div>
            <ChevronIkon className="eiendel-kort__chevron" />
          </div>
        </li>
        <li>
          <div className="eiendel-kort">
            <HusIkon className="eiendel-kort__ikon" />
            <div className="eiendel-kort__innhold">
              <Heading6 className="eiendel-kort__heading ffe-h6">Hus</Heading6>
              <Paragraph className="eiendel-kort__sub-heading">
                {formatCurrency(2500000, { prefix: "", postfix: " kr" })}
              </Paragraph>
            </div>
            <ChevronIkon className="eiendel-kort__chevron" />
          </div>
        </li>
        <li>
          <div className="eiendel-kort">
            <MopedIkon className="eiendel-kort__ikon" />
            <div className="eiendel-kort__innhold">
              <Heading6 className="eiendel-kort__heading ffe-h6">
                Scooter
              </Heading6>
              <Paragraph className="eiendel-kort__sub-heading">
                {formatCurrency(18000, { prefix: "", postfix: " kr" })}
              </Paragraph>
            </div>
            <ChevronIkon className="eiendel-kort__chevron" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EiendelerKomponent;
