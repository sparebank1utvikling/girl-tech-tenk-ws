import { InputGroup } from "@sb1/ffe-form-react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./SendStyle.css";
import { AccountSelector } from "@sb1/ffe-account-selector-react";

const NedtrekkListeKomponent = ({
  label,
  dropdownList,
  inputProps,
  onFieldChange,
  showBalance,
  id,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    onFieldChange(!!selectedOption);
  }, [selectedOption, onFieldChange]);

  return (
    <InputGroup label={label} className="elementContainer-riktig">
      <AccountSelector
        id={id}
        accounts={dropdownList}
        locale="nb"
        onAccountSelected={(val) => setSelectedOption(val)}
        onReset={() => setSelectedOption(null)}
        selectedAccount={selectedOption}
        ariaInvalid={false}
        inputProps={inputProps}
        className="searchableDropDown-riktig nedtrekk-container"
        showBalance={showBalance}
      />
    </InputGroup>
  );
};

NedtrekkListeKomponent.propTypes = {
  label: PropTypes.string.isRequired,
  inputProps: PropTypes.string.isRequired,
  dropdownList: PropTypes.array.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  showBalance: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default NedtrekkListeKomponent;
