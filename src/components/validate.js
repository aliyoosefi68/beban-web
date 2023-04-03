export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "E-mail required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "E-mail is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "password requierd";
  } else if (data.password.length < 6) {
    errors.password = "password length must mor than 6 charcter";
  } else {
    delete errors.password;
  }

  if (type === "SignUp") {
    if (!data.name.trim()) {
      errors.name = "name requierd";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "confirmpssword requierd";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "confirm password not matched";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulations";
    }
  }
  return errors;
};
