import React, { useState } from "react";
import { loginService } from "../Repository/Login.remote";
import { toast } from "react-toastify";

const useSignUpController = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const [error, setError] = React.useState({
    usernameError: "",
    passwordError: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation
    let hasError = false;
    const updatedErrors = {
      usernameError: null,
      passwordError: null,
    } as any;

    if (!formData.username.trim()) {
      const message = "Username is required";
      updatedErrors.usernameError = message;
      toast.error(message, {
        onClose: () => toast.dismiss(),
      });
      hasError = true;
    }

    if (!formData.password.trim()) {
      const message = "Password is required";
      updatedErrors.passwordError = message;
      toast.error(message, {
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

    // Continue with login service if no errors
    loginService(formData);
  };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return {
    handleInputChange,
    formData,
    handleFormSubmit,
    showPassword,
    handlePasswordToggle,
    error,
  };
};
export default useSignUpController;
