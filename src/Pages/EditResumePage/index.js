import React, { useState } from "react";
import UserForm from "./BasicForm";
import { useSelector, useDispatch } from "react-redux";
import Form from "./BasicForm";
import { updateField, resetForm } from "../../Redux/reducers/basicSlice";

export default function EditResume() {
  const [openItem, setOpenItem] = useState(0);

  const handleItemClick = (itemIndex) => {
    if (openItem === itemIndex) {
      // Clicked on already open item, close it
      setOpenItem(null);
    } else {
      // Clicked on a different item, open it
      setOpenItem(itemIndex);
    }
  };

  const isItemOpen = (itemIndex) => {
    return openItem === itemIndex;
  };

  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    // Handle form submission here, e.g., dispatch an action or make an API call
    console.log(values);
    dispatch(resetForm());
  };

  const handleFieldChange = (field, value) => {
    console.log(field, value);
    dispatch(updateField({ field, value }));
  };

  return (
    <div className="mx-3" id="accordion">
      <div className="card">
        <div
          className={`card-header ${
            isItemOpen(0) ? "bg-primary" : "bg-secondary"
          }`}
          id="headingOne"
          onClick={() => handleItemClick(0)}
        >
          <h5 className="mb-0">
            <button
              className="btn btn-link text-white font-weight-bold"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded={isItemOpen(0) ? "true" : "false"}
              aria-controls="collapseOne"
            >
              Basic
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          className={`collapse ${isItemOpen(0) ? "show" : ""}`}
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="my-3">
            <Form
              onSubmit={handleSubmit}
              handleFieldChange={handleFieldChange}
            />
          </div>
        </div>
      </div>

      <div className="card">
        <div
          className={`card-header ${
            isItemOpen(1) ? "bg-primary" : "bg-secondary"
          }`}
          id="headingTwo"
          onClick={() => handleItemClick(1)}
        >
          <h5 className="mb-0">
            <button
              className="btn btn-link text-white font-weight-bold"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded={isItemOpen(1) ? "true" : "false"}
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h5>
        </div>

        <div
          id="collapseTwo"
          className={`collapse ${isItemOpen(1) ? "show" : ""}`}
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
          <div className="card-body">Content for Accordion Item #2</div>
        </div>
      </div>

      <div className="card">
        <div
          className={`card-header ${
            isItemOpen(2) ? "bg-primary" : "bg-secondary"
          }`}
          id="headingThree"
          onClick={() => handleItemClick(2)}
        >
          <h5 className="mb-0">
            <button
              className="btn btn-link text-white font-weight-bold"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded={isItemOpen(2) ? "true" : "false"}
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h5>
        </div>

        <div
          id="collapseThree"
          className={`collapse ${isItemOpen(2) ? "show" : ""}`}
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div className="card-body">Content for Accordion Item #3</div>
        </div>
      </div>
    </div>
  );
}
