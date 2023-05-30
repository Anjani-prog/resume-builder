import { WithContext as ReactTags } from "react-tag-input";
import { skills, skills as suggestions } from "./skills";
import { Field, reduxForm } from "redux-form";

const skillsuggestions = suggestions.map((skill) => {
  return {
    id: skill,
    text: skill,
  };
});
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const EditResumePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    education: [{ institute: "", year: "", degree: "" }],
    experience: [{ company: "", year: "", designation: "" }],
  });

  const [tags, setTags] = React.useState([{ id: "react", text: "react" }]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleAddField = (section) => {
    const obj =
      section === "education"
        ? { institute: "", year: "", degree: "" }
        : {
            company: "",
            year: "",
            designation: "",
          };
    const updatedFormData = { ...formData };
    updatedFormData[section].push(obj);
    setFormData(updatedFormData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <h3 className=" text-primary">Basic</h3>
            <hr className="my-4 bg-secondary" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            {/* Experience Fields */}
            <div className="section">
              <hr className="my-4 bg-secondary" />
              <h3 className=" text-primary">Education</h3>
              <hr className="my-4 bg-secondary" />

              {formData.education.map((edu, index) => (
                <div key={index} className="form-group">
                  {formData.education.length > 1 && (
                    <h5 className="custom-text-primary font-weight-bold">
                      Education {" " + (index + 1)}
                    </h5>
                  )}
                  <label htmlFor={`course-${index}`}>Course</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`course-${index}`}
                    name="course"
                    value={edu.course}
                    onChange={(e) => handleChange(e, "education", index)}
                    required
                  />
                  <label htmlFor={`company-${index}`}>Institute</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`institute-${index}`}
                    name="institute"
                    value={edu.institute}
                    onChange={(e) => handleChange(e, "education", index)}
                    required
                  />
                  <label htmlFor={`year-${index}`}>Year</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`year-${index}`}
                    name="year"
                    value={edu.year}
                    onChange={(e) => handleChange(e, "education", index)}
                    required
                  />
                </div>
              ))}
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary "
                  onClick={() => handleAddField("education")}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="section">
              <hr className="my-4 bg-secondary" />
              <h3 className="text-primary">Experience</h3>
              <hr className="my-4 bg-secondary" />

              {formData.experience.map((exp, index) => (
                <div key={index} className="form-group">
                  {formData.experience.length > 1 && (
                    <h5 className="custom-text-primary font-weight-bold">
                      Experience {" " + (index + 1)}
                    </h5>
                  )}

                  <label htmlFor={`company-${index}`}>Company</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`company-${index}`}
                    name="company"
                    value={exp.company}
                    onChange={(e) => handleChange(e, "experience", index)}
                    required
                  />
                  <label htmlFor={`year-${index}`}>Year</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`year-${index}`}
                    name="year"
                    value={exp.year}
                    onChange={(e) => handleChange(e, "experience", index)}
                    required
                  />
                  <label htmlFor={`designation-${index}`}>Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`designation-${index}`}
                    name="designation"
                    value={exp.designation}
                    onChange={(e) => handleChange(e, "experience", index)}
                    required
                  />
                </div>
              ))}
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAddField("experience")}
                >
                  Add
                </button>
              </div>
            </div>

            <div>
              <hr className="my-4 bg-secondary" />
              <h3 className=" text-primary">Skills</h3>
              <hr className="my-4 bg-secondary" />
              <ReactTags
                tags={tags}
                suggestions={skillsuggestions}
                delimiters={delimiters}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                handleTagClick={handleTagClick}
                inputFieldPosition="bottom"
                autocomplete
                editable
                classNames={{
                  tagInputField: "form-control w-100",
                  selected: "badge",
                  tag: "badge badge-primary mr-1 mb-1 py-2 px-2",
                  remove: "badge badge-light ml-1",
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block my-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
// https://stackblitz.com/edit/react-tag-input-1nelrc?file=countries.js
export default EditResumePage;
