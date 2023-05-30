import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./BasicForm";
import { updatePersonalInfo, updateMenu } from "../../Redux/reducer";

const withAccordion = (WrappedComponent) => {
  return function AccordionWrapper(props) {
    const menu = useSelector((state) => state.resume.menu);
    const dispatch = useDispatch();

    const isItemOpen = (itemId) => {
      return menu === itemId;
    };

    const handleItemClick = (itemId) => {
      dispatch(updateMenu(itemId));
    };

    return (
      <WrappedComponent
        {...props}
        isItemOpen={isItemOpen}
        handleItemClick={handleItemClick}
      />
    );
  };
};

const Accordion = ({ item, isItemOpen, handleItemClick }) => {
  return (
    <div className="card">
      <div
        className={`card-header ${
          isItemOpen(item?.id) ? "bg-primary" : "bg-secondary"
        }`}
        id={`heading${item?.id}`}
        onClick={() => handleItemClick(item?.id)}
      >
        <h5 className="mb-0">
          <button
            className="btn btn-link text-white font-weight-bold"
            data-toggle="collapse"
            data-target={`#collapse${item?.id}`}
            aria-expanded={isItemOpen(item?.id) ? "true" : "false"}
            aria-controls={`collapse${item?.id}`}
          >
            {item?.name}
          </button>
        </h5>
      </div>

      <div
        id={`collapse${item?.id}`}
        className={`collapse ${isItemOpen(item?.id) ? "show" : ""}`}
        aria-labelledby={`heading${item?.id}`}
        data-parent="#accordion"
      >
        <div className="my-3">{item?.component}</div>
      </div>
    </div>
  );
};

const EnhancedAccordion = withAccordion(Accordion);

export default function EditResume() {
  const dispatch = useDispatch();

  const SubmitBasic = (inputs) => {
    console.log("Submit Basic Info");
    dispatch(updatePersonalInfo(inputs));
    dispatch(updateMenu(1));
  };

  const SubmitEducation = (inputs) => {
    console.log("Submit Education Info");
    dispatch(updatePersonalInfo(inputs));
    dispatch(updateMenu(2));
  };

  const MENUS = [
    { name: "Basic", component: <Form onSubmit={SubmitBasic} />, id: 0 },
    {
      name: "Education",
      component: <Form onSubmit={SubmitEducation} />,
      id: 1,
    },
    { name: "Experience", component: <Form onSubmit={SubmitBasic} />, id: 2 },
    { name: "Skills", component: <Form onSubmit={SubmitBasic} />, id: 3 },
  ];

  const buildResume = () => {
    console.log("dhsag");
  };
  return (
    <div className="mx-3" id="accordion">
      {MENUS.map((item, index) => (
        <EnhancedAccordion key={index} item={item} />
      ))}
      <button
        type="submit"
        label="submit"
        className="btn btn-primary btn-block my-4 font-weight-bold"
        onClick={() => buildResume()}
      >
        Submit Details
      </button>
    </div>
  );
}
