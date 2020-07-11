import React from "react";

import "./formInput.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="formInput" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : " "
          }formInputLabel`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
