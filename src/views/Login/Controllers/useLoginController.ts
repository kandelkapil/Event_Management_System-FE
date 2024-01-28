import React, { useEffect, useState, useMemo } from "react";
import { loginService } from "../Repository/Login.remote";
import { toast } from "react-toastify";
import { useAuth } from "#hooks/useAuthHook";
import { useNavigate } from "react-router-dom";

const useSignUpController = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const [error, setError] = React.useState({
    usernameError: "",
    passwordError: "",
  });

  let timeoutId;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const memoizedLoginService = useMemo(() => loginService, []); // Memoize loginService if it has dependencies

  const handleFormSubmit = async (e) => {
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
    const login = await memoizedLoginService(formData);

    if (login) {
      setUser({ userId: login.id, profile_pic: login.profile_pic });
      timeoutId = setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
  };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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
