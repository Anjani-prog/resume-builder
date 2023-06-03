import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { myInput } from "../../Components/input";
import {
  requiredInput,
  validateEmail,
  validatePhoneNumber,
} from "../../Validation/index";

class BasicForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label
                  className="text-primary font-weight-bold"
                  htmlFor="firstName"
                >
                  First Name:
                </label>
                <Field
                  name="firstName"
                  component={myInput}
                  type="text"
                  placeholder="First Name"
                  validate={[requiredInput]}
                />
              </div>
              <div className="form-group">
                <label
                  className="text-primary font-weight-bold"
                  htmlFor="lastName"
                >
                  Last Name:
                </label>
                <Field
                  name="lastName"
                  component={myInput}
                  type="text"
                  placeholder="Last Name"
                  validate={[requiredInput]}
                />
              </div>
              <div className="form-group">
                <label
                  className="text-primary font-weight-bold"
                  htmlFor="email"
                >
                  Email:
                </label>
                <Field
                  name="email"
                  component={myInput}
                  type="email"
                  placeholder="Email"
                  validate={[validateEmail]}
                />
              </div>
              <div className="form-group">
                <label
                  className="text-primary font-weight-bold"
                  htmlFor="phoneNumber"
                >
                  Phone Number:
                </label>
                <Field
                  name="phoneNumber"
                  component={myInput}
                  type="text"
                  placeholder="Phone Number"
                  validate={[validatePhoneNumber]}
                />
              </div>
              <div className="form-group">
                <label
                  className="text-primary font-weight-bold"
                  htmlFor="phoneNumber"
                >
                  Address:
                </label>
                <Field
                  name="address"
                  component={myInput}
                  type="text"
                  placeholder="Address"
                  validate={[requiredInput]}
                />
              </div>

              <button
                type="submit"
                label="submit"
                className="btn btn-primary btn-block my-4 font-weight-bold"
              >
                Proceed Next
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

BasicForm = reduxForm({
  form: "basic",
  enableReinitialize: true,
})(BasicForm);

export default BasicForm;
