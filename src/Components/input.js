import React, { Fragment } from "react";

export const myInput = (props) => {
  const { input, type, meta } = props;
  return (
    <Fragment>
      <input
        className="form-control"
        {...props.input}
        type={props.type}
        placeholder={props.placeholder}
      />
      {meta.error && meta.touched && (
        <div className="alert alert-danger">{meta.error}</div>
      )}
    </Fragment>
  );
};
