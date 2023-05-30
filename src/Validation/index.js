export const requiredInput = (input, props) =>
  input ? undefined || "" : `Input is required`;

export const validateEmail = (input) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(input) ? undefined : "Invalid email address";
};

export const validatePhoneNumber = (input) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(input)
    ? undefined
    : "Invalid phone number (10 digits maximum)";
};
