import React, { useEffect, useState, useMemo } from "react";
import {
  getUserProfile,
  updateUserProfile,
} from "../Repository/UserProfile.remote";
import { ERROR_MESSAGE, errorHandler } from "#utils/errorHandler";
import axios from "axios";
import { apiRoutes } from "#constants/apiRoutes";
import { getLocalStorageKey, setLocalStorageKey } from "#utils/localStorage";
import { toast } from "react-toastify";
import { useAuth } from "#hooks/useAuthHook";
import { UserProfile } from "../Types/types";

const initialUser = {
  firstName: "",
  lastName: "",
  username: "",
  profile_pic: "",
  followers: 0,
  address: "",
  phone: "",
  description: "",
};

const useProfileController = () => {
  const { setUser } = useAuth();
  const [user, setUsers] = useState<UserProfile | any>(initialUser);
  const [isEditing, setEditing] = useState(false);
  const id = getLocalStorageKey("userId") || null;

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleInputChange = (field: string, value: any) => {
    setUsers((prevUser: any) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    setEditing(false);

    const updateUser = { ...user };
    delete updateUser.profile_pic;

    if (id) {
      await updateUserProfile({
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
        setLocalStorageKey("profile", imagePath);
        setUser((prev) => ({ ...prev, profile_pic: imagePath }));

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
    }
  };

  // Memoize the getUserProfile function
  const memoizedGetUserProfile = useMemo(() => getUserProfile, []);

  useEffect(() => {
    if (id) {
      const getProfile = async () => {
        const profile = await memoizedGetUserProfile({ id });
        setUsers(profile);
      };
      getProfile();
    }
  }, [id, memoizedGetUserProfile]);

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
