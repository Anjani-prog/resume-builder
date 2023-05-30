import React from "react";

export const Input = ({ name, value, onChange }) => {
  return (
    <input
      type="text"
      className="form-control"
      id={name}
      name={name}
      //   value={value}
      //   onChange={onChange}
      required
    />
  );
};
