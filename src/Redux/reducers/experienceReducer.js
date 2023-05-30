import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: {
      experience: [{ company: "", year: "", designation: "" }],
    },
  },
  reducers: {
    addExperience: (state) => {
      state.formData.experience.push({
        company: "",
        year: "",
        designation: "",
      });
    },
    updateExperience: (state, action) => {
      const { index, field, value } = action.payload;
      state.formData.experience[index][field] = value;
    },
  },
});

export const { addExperience, updateExperience } = formSlice.actions;
export default formSlice.reducer;
