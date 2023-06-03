import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialize } from "redux-form";
import Form from "./BasicForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import { SkillsForm } from "./SkillsForm";
import { updatePersonalInfo, updateMenu } from "../../Redux/reducer";
import { toast } from "react-custom-alert";
const alertError = (message) => toast.error(message);
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
  const menu = useSelector((state) => state);

  const dispatch = useDispatch();
  const [tags, setTags] = React.useState([{ id: "react", text: "react" }]);

  const eductionData = {
    education: [{}],
  };

  const experienceData = {
    experience: [{}],
  };

  useEffect(() => {
    dispatch(initialize("education", eductionData));
    dispatch(initialize("experience", experienceData));
  }, []);

  const SubmitBasic = (inputs) => {
    dispatch(updatePersonalInfo(inputs));
    dispatch(updateMenu(1));
  };
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  const SubmitEducation = (inputs) => {
    if (!isObjectEmpty(inputs)) {
      // dispatch(updateEducation(inputs));
      dispatch(updateMenu(2));
    } else {
      alertError("Add atleast one Education Details");
    }
  };

  const SubmitExperience = (inputs) => {
    if (!isObjectEmpty(inputs)) {
      //  dispatch(updateEducation(inputs));
      dispatch(updateMenu(3));
    } else {
      alertError("Add atleast one Experience Details");
    }
  };

  const MENUS = [
    { name: "Basic", component: <Form onSubmit={SubmitBasic} />, id: 0 },
    {
      name: "Education",
      component: <EducationForm onSubmit={SubmitEducation} />,
      id: 1,
    },
    {
      name: "Experience",
      component: <ExperienceForm onSubmit={SubmitExperience} />,
      id: 2,
    },
    {
      name: "Skills",
      component: (
        <SkillsForm tags={tags} setTags={setTags} onSubmit={SubmitBasic} />
      ),
      id: 3,
    },
  ];

  const buildResume = () => {
    console.log(menu.form);
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
        Submit Details and View Resume
      </button>
    </div>
  );
}
