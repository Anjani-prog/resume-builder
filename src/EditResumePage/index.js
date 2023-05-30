import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";

const EditResumePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    education: [{ institute: "", year: "", degree: "" }],
    experience: [{ company: "", year: "", designation: "" }],
  });
  const [skills, setSkills] = useState([]);

  const handleAddSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  const handleDeleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
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
    const updatedFormData = { ...formData };
    updatedFormData[section].push({
      company: "",
      year: "",
      designation: "",
    });
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
                  <label htmlFor={`year-${index}`}>Degree</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`degree-${index}`}
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleChange(e, "education", index)}
                    required
                  />
                </div>
              ))}
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-secondary "
                  onClick={() => handleAddField("education")}
                >
                  Add More
                </button>
              </div>
            </div>
            <div className="section">
              <hr className="my-4 bg-secondary" />
              <h3 className=" text-primary">Experience</h3>
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
                  className="btn btn-secondary"
                  onClick={() => handleAddField("")}
                >
                  Add More
                </button>
              </div>
            </div>

            <div>
              <hr className="my-4 bg-secondary" />
              <h3 className=" text-primary">Skills</h3>
              <hr className="my-4 bg-secondary" />
              <ReactTags
                id="skills"
                tags={skills}
                handleAddition={handleAddSkill}
                handleDelete={handleDeleteSkill}
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
