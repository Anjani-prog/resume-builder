import React from "react";
import { Field, reduxForm } from "redux-form";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
  handleFieldChange,
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input
        {...input}
        type={type}
        className="form-control"
        value={input.value || ""} // Set the value of the input field
        onChange={(e) => handleFieldChange(input.name, e.target.value)}
      />
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
);

let Form = ({ handleSubmit, handleFieldChange, values }) => (
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <Field
        name="name"
        component={renderField}
        type="text"
        label="Name"
        handleFieldChange={handleFieldChange}
      />
    </div>
    <div className="mb-3">
      <Field
        name="email"
        component={renderField}
        type="email"
        label="Email"
        handleFieldChange={handleFieldChange}
      />
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
);

Form = reduxForm({
  form: "myForm",
})(Form);

export default Form;
