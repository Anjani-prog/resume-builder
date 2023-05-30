import React, { Component, useEffect } from "react";
import { Field, reduxForm, FieldArray } from "redux-form";
import { myInput } from "../../Components/input";
import { requiredInput } from "../../Validation/index";
import { useSelector, useDispatch } from "react-redux";

import "react-redux";
import "redux";

const renderEducation = ({ fields }) => (
  <div>
    {fields.map((field, index) => (
      <div key={index}>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="custom-text-primary font-weight-bold my-3">
            Education {" " + (index + 1)}
          </h5>
          <div className="d-flex justify-content-end my-3">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => fields.remove(index)}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="form-group">
          <label
            className="text-primary font-weight-bold"
            htmlFor={`course-${index}`}
          >
            Course:
          </label>
          <Field
            name={`${field}.course`}
            component={myInput}
            type="text"
            placeholder="Course"
            validate={[requiredInput]}
          />
        </div>
        <div className="form-group">
          <label
            className="text-primary font-weight-bold"
            htmlFor={`institute-${index}`}
          >
            Institute:
          </label>
          <Field
            name={`${field}.institute`}
            component={myInput}
            type="text"
            placeholder="Institute"
            validate={[requiredInput]}
          />
        </div>
        <div className="form-group">
          <label
            className="text-primary font-weight-bold"
            htmlFor={`year-${index}`}
          >
            Year:
          </label>
          <Field
            name={`${field}.year`}
            component={myInput}
            type="text"
            placeholder="Year"
            validate={[requiredInput]}
          />
        </div>
      </div>
    ))}
    <div className="d-flex justify-content-end">
      <button
        type="button"
        className="btn btn-secondary btn-fab"
        onClick={() => fields.push({})}
      >
        <span className="fab-label">+</span>
      </button>
    </div>
  </div>
);

const EducationForm = (props) => {
  const { handleSubmit, submitting } = props;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <FieldArray name="education" component={renderEducation} />
            {/* <div>
              <button
                disabled={submitting}
                type="submit"
                label="submit"
                className="btn btn-primary btn-block my-4 font-weight-bold"
              >
                Proceed Next
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "education", // a unique identifier for this form
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  updateUnregisteredFields: true,
})(EducationForm);
