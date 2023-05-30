import React, { useState } from "react";

const EditResumePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    education: [{ institute: "", year: "", degree: "" }],
    experience: [{ company: "", year: "", designation: "" }],
  });

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
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleAddField("experience")}
              >
                Add More
              </button>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditResumePage;
