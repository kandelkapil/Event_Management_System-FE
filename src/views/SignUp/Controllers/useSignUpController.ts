import React, { useEffect } from "react";
import { signUpService } from "../Repository/Signup.remote";
import { toast } from "react-toastify";

const useSignUpController = () => {
  const [checkbox, setCheckbox] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = React.useState({
    usernameError: null,
    emailError: null,
    passwordError: null,
  });

  const validateUsername = (username: string) => {
    const regex = /^[a-zA-Z0-9_]{3,20}$/; // Allow letters, numbers, and underscores, 3 to 20 characters
    return regex.test(username);
  };

  const handleFormSubmit = (e) => {
    console.log("running");

    e.preventDefault();
    let hasError = false;
    const updatedErrors = {
      usernameError: null,
      emailError: null,
      passwordError: null,
    } as any;

    if (!formData.username.trim()) {
      const emptyUsername = "Username is required";
      updatedErrors.usernameError = emptyUsername;
      toast.error(emptyUsername, {
        onClose: () => toast.dismiss(),
      });
      hasError = true;
    } else if (!validateUsername(formData.username)) {
      const userNameValidation =
        "Username must be less than or equal to 20 characters and can only contain letters, numbers, and underscores";
      updatedErrors.usernameError = userNameValidation;
      toast.error(userNameValidation, {
        onClose: () => toast.dismiss(),
      });
      hasError = true;
    }

    if (!formData.email.trim()) {
      const emailError = "Email is required";
      updatedErrors.emailError = emailError;
      toast.error(emailError, {
        onClose: () => toast.dismiss(),
      });
      hasError = true;
    }

    if (!formData.password.trim()) {
      const emptyPassword = "Password is required";
      updatedErrors.passwordError = emptyPassword;
      toast.error(emptyPassword, {
        onClose: () => toast.dismiss(),
      });
      hasError = true;
    } else if (formData.password.length < 8) {
      const passwordLengthError = "Password must be at least 8 characters";
      updatedErrors.passwordError = passwordLengthError;
      toast.error(passwordLengthError, {
        onClose: () => toast.dismiss(),
      });
      hasError = true;
    } else if (
      !/[A-Z]/.test(formData.password) ||
      !/[0-9]/.test(formData.password) ||
      !/[^A-Za-z0-9]/.test(formData.password)
    ) {
      const passwordValidationError =
        "Password must contain at least one uppercase letter, one number, and one special character";
      updatedErrors.passwordError = passwordValidationError;
      toast.error(passwordValidationError, {
        onClose: () => toast.dismiss(),
      });
      hasError = true;
    }

    // Update errors state
    setError(updatedErrors);

    // If there are errors, stop further processing
    if (hasError) {
      return;
    }

    // Continue with signup service if no errors
    signUpService(formData);

    // Reset errors to null if all conditions are met
    setError({
      usernameError: null,
      emailError: null,
      passwordError: null,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleCheckbox = () => {
    setCheckbox((prev) => !prev);
  };

  return {
    handleInputChange,
    formData,
    handleFormSubmit,
    toggleCheckbox,
    checkbox,
    error,
  };
};
export default useSignUpController;
