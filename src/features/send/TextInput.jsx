import React from "react";
import { Input, InputGroup } from "@sb1/ffe-form-react";
import PropTypes from "prop-types";

const TextInput = ({ label, placeholder }) => {
  return (
    <InputGroup label={label} value={label} className="elementContainer">
      <Input placeholder={placeholder}></Input>
    </InputGroup>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
