import React, { FunctionComponent, useState, ChangeEvent, useEffect } from "react";

import { InputProps } from "../../types/Forms.intf";

const Input: FunctionComponent<InputProps> = ({
  label = "Label",
  name = "inputName",
  errorMessage = "Erreur message",
  error = false,
  onChange,
  disabled = false,
}: InputProps) => {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [valueIsEmpty, setValueIsEmpty] = useState<boolean>(true);
  const [errorStatus, setErrorStatus] = useState<boolean>(error);

  useEffect(() => {
    setErrorStatus(error);
  }, [error]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (valueIsEmpty && event.target.value !== "") {
      setValueIsEmpty(false);
    } else {
      setValueIsEmpty(true);
    }
    onChange(event.target.value);
  };

  const handleOnFocus = () => {
    setOnFocus(true);
  };

  const handleOnBlur = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value === "" ? setValueIsEmpty(true) : setValueIsEmpty(false);
    setOnFocus(false);
  };

  return (
    <div
      className={`input ${!valueIsEmpty ? "input--active" : ""} ${onFocus ? "input--focus" : ""} ${
        errorStatus ? "input--error" : ""
      }`}
    >
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleChange}
        disabled={disabled}
      />
      {errorStatus && (
        <p className="input__error-message text--caption text--pink">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
