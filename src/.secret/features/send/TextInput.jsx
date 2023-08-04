import { Input, InputGroup } from "@sb1/ffe-form-react";
import PropTypes from "prop-types";

const TextInput = ({ label, placeholder, onFieldChange }) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onFieldChange(inputValue);
  };
  return (
    <InputGroup label={label} value={label} className="elementContainer-riktig">
      <Input
        placeholder={placeholder}
        className="text-input-container-riktig"
        onChange={handleInputChange}
      />
    </InputGroup>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default TextInput;
