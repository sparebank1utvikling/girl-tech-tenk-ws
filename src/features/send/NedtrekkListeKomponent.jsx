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
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    onFieldChange(!!selectedOption);
  }, [selectedOption, onFieldChange]);

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
        className="searchableDropDown nedtrekk-container"
      />
    </InputGroup>
  );
};

NedtrekkListeKomponent.propTypes = {
  label: PropTypes.string.isRequired,
  inputProps: PropTypes.string.isRequired,
  dropdownList: PropTypes.array.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default NedtrekkListeKomponent;
