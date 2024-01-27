import React, { useEffect, useState } from "react";
import {
  getUserProfile,
  updateUserProfile,
} from "../Repository/UserProfile.remote";
import { ERROR_MESSAGE, errorHandler } from "#utils/errorHandler";
import axios from "axios";
import { apiRoutes } from "#constants/apiRoutes";
import axiosInstance from "#utils/axiosInstance";
import { getLocalStorageKey } from "#utils/localStorage";
import { toast } from "react-toastify";

const initialUser = {
  name: "",
  username: "",
  profile_pic: "",
  followers: 0,
  address: "",
  phone: "",
  description: "",
};

const useProfileController = () => {
  const [user, setUser] = useState<any>(initialUser);
  const [isEditing, setEditing] = useState(false);
  const id = getLocalStorageKey("userId") || null;

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleInputChange = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    setEditing(false);

    const updateUser = { ...user };
    delete updateUser.profile_pic;

    if (id) {
      const data = await updateUserProfile({
        ...updateUser,
        id,
      });
    }
  };

  const handleFileSelect = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${apiRoutes.imageUpload}`,
        formData
      );

      const imagePath = response?.data?.path;
      if (imagePath) {
        toast.success(response?.data?.message);
        if (id) {
          await updateUserProfile({
            id,
            profile_pic: imagePath,
          });
        }
      }

      // Handle the response from the backend as needed
    } catch (error) {
      errorHandler(error, ERROR_MESSAGE.ERROR);
      console.error("Error posting image to backend:", error);
    }
  };

  useEffect(() => {
    if (id) {
      const getProfile = async () => {
        const profile = await getUserProfile({ id });
        setUser(profile);
      };
      getProfile();
    }
  }, [id]);

  return {
    handleEditClick,
    handleFileSelect,
    handleInputChange,
    handleSubmit,
    isEditing,
    user,
  };
};
export default useProfileController;
