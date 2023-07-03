import { InputGroup } from "@sb1/ffe-form-react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./SendStyle.css";
import { AccountSelector } from "@sb1/ffe-account-selector-react";

const NedtrekkListeKomponent = ({ label, dropdownList, inputProps }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <InputGroup label={label} className="elementContainer">
      <AccountSelector
        accounts={dropdownList}
        locale="nb"
        onAccountSelected={(val) => setSelectedOption(val)}
        onReset={() => setSelectedOption(null)}
        selectedAccount={selectedOption}
        ariaInvalid={false}
        inputProps={inputProps}
        className="searchableDropDown"
      />
    </InputGroup>
  );
};

NedtrekkListeKomponent.propTypes = {
  label: PropTypes.string.isRequired,
  inputProps: PropTypes.string.isRequired,
  dropdownList: PropTypes.array.isRequired,
};

export default NedtrekkListeKomponent;
