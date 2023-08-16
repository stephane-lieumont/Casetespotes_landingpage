import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import { ButtonProps } from "../types/Forms.intf";

const Button: FunctionComponent<ButtonProps> = ({
  label = "button",
  outlined = false,
  buttonLink = false,
  loading = false,
  disabled = false,
  validate = false,
  navigate = "/",
  callback,
}) => {
  if (buttonLink) {
    return (
      <div className={`button ${outlined && "button--outlined"} ${loading && "button--isloading"}`}>
        {loading && <div className="button__loader"></div>}
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={navigate}>
          {label}
        </NavLink>
      </div>
    );
  }

  return (
    <div
      className={`button ${outlined ? " button--outlined" : ""}${
        disabled ? " button--disabled" : ""
      }${loading ? " button--isloading" : ""}${validate ? " button--validate" : ""}`}
    >
      {loading && <div className="button__loader"></div>}
      <button type="button" onClick={callback}>
        {label}
      </button>
    </div>
  );
};

export default Button;
