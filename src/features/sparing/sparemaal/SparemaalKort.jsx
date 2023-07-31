import { CardBase } from "@sb1/ffe-cards-react";
import { Heading3, Paragraph } from "@sb1/ffe-core-react";
import PropTypes from "prop-types";
import { formatNumber } from "@sb1/ffe-formatters";

const SparemaalKort = ({ bilde, sparemaalNavn, maal }) => (
  <CardBase href="">
    <img src={bilde} alt="" height={200} width={100} />
    <Heading3 lookLike={4}>{sparemaalNavn}</Heading3>
    <Paragraph lead={true}>{formatNumber(maal)} kr</Paragraph>
  </CardBase>
);

SparemaalKort.propTypes = {
  bilde: PropTypes.node.isRequired,
  sparemaalNavn: PropTypes.string.isRequired,
  maal: PropTypes.number.isRequired,
};

export default SparemaalKort;
