import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  menu: 0,
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  },
  education: [],
  experience: [],
  skills: [],
};

// Reducer slice
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateMenu: (state, action) => {
      state.menu = action.payload;
    },
    updatePersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    // addEducation: (state, action) => {
    //   state.education.push(action.payload);
    // },
    // updateEducation: (state, action) => {
    //   const { index, education } = action.payload;
    //   state.education[index] = education;
    // },
    // deleteEducation: (state, action) => {
    //   const index = action.payload;
    //   state.education.splice(index, 1);
    // },
    // addExperience: (state, action) => {
    //   state.experience.push(action.payload);
    // },
    // updateExperience: (state, action) => {
    //   const { index, experience } = action.payload;
    //   state.experience[index] = experience;
    // },
    // deleteExperience: (state, action) => {
    //   const index = action.payload;
    //   state.experience.splice(index, 1);
    // },

    // addSkill: (state, action) => {
    //   state.experience.push(action.payload);
    // },
    // updateSkill: (state, action) => {
    //   const { index, experience } = action.payload;
    //   state.experience[index] = experience;
    // },
    // deleteSkill: (state, action) => {
    //   const index = action.payload;
    //   state.experience.splice(index, 1);
    // },
  },
});

// Actions
export const {
  updatePersonalInfo,
  updateMenu,
  //   addEducation,
  //   updateEducation,
  //   deleteEducation,
  //   addExperience,
  //   updateExperience,
  //   deleteExperience,
} = resumeSlice.actions;

// Reducer
export default resumeSlice.reducer;
