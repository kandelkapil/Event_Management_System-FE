import React, { useEffect, useState } from "react";
import { apiRoutes } from "#constants/apiRoutes";
import { formatDateTime } from "#utils/dateUtils";
import { ERROR_MESSAGE, errorHandler } from "#utils/errorHandler";
import axios from "axios";
import {
  createEvent,
  getEventById,
  updateEvent,
} from "../Repositories/Events.remote";
import { useAuth } from "#hooks/useAuthHook";
import { useNavigate, useParams } from "react-router-dom";
import { eventStateToPayloadMapper } from "../DataMapper/mapper";

const useCreateEventsController = () => {
  const initialData = {
    location: "",
    picture: "",
    description: "",
    venue_time: "",
    name: "",
  };

  const { id } = useParams();

  // 'id' will contain the value extracted from the URL
  const eventId = parseInt(id);

  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialData);
  const [dateTime, setDateTime] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "venue_time") {
      const dateTime = formatDateTime(value);
      setDateTime(dateTime);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFileSelect = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${apiRoutes.imageUpload}`,
        formData
      );

      const imagePath = response?.data?.path as string;

      if (imagePath) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          picture: imagePath,
        }));
      }
    } catch (error) {
      errorHandler(error, ERROR_MESSAGE.ERROR);
      console.error("Error posting image to backend:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = eventStateToPayloadMapper(formData, dateTime, user);
    if (eventId) {
      const update = await updateEvent(eventId, payload);
      if (update) {
        navigate("/events");
      }
    } else {
      const data = await createEvent(payload);
      if (data) {
        setFormData(initialData);
        navigate("/events");
      }
    }
  };

  useEffect(() => {
    if (eventId) {
      const getEventDetails = async () => {
        const eventDetail = await getEventById(eventId, true);
        const venueTime = formatDateTime(eventDetail?.venue_time);
        setDateTime(venueTime);
        setFormData(eventDetail);
      };

      getEventDetails();
    }
  }, [eventId]);

  return {
    handleChange,
    handleSubmit,
    formData,
    handleFileSelect,
    eventId,
  };
};

export default useCreateEventsController;
