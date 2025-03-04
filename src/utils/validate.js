export const checkValidateData = (
  formType = "signin",
  name,
  email,
  password
) => {
  const isEmailValid = /[a-zA-Z0-9.-]+(.[a-zA-Z]{2,})+/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  let isNameValid;
  if (formType === "signup") {
    isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  }

  if (formType === "signup" && !isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
