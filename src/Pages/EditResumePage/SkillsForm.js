import React, { Component } from "react";

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

export const SkillsForm = ({ tags, setTags }) => {
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

    setTags(newTags);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <ReactTags
            tags={tags}
            suggestions={skillsuggestions}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            // handleTagClick={handleTagClick}
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
      </div>
    </div>
  );
};
