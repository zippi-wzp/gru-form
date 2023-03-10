const locize = {
  userName: "Username",
  notFound: "Not found",
  taxIdentifier: "Tax identifier",
  country: "Country",
  submit: "Sumbit",
  createUserProfileErr: "Sorry, but can't create user profile. Try again...",
  createUserProfileSuccess: "Your profile was created with success.",
  usa: "The USA",
  canada: "Canada",
};

locize.get = function (key) {
  return this[key];
};

export default locize;
