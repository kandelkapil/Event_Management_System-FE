import { useEffect, useState, useMemo } from "react";
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
import { EventDetails } from "../Types/types";

const useCreateEventsController = () => {
  const initialData = {
    location: "",
    picture: "",
    description: "",
    venue_time: "",
    name: "",
  };

  const { id } = useParams();

  const eventId = id ? parseInt(id, 10) : undefined;

  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<EventDetails | any>(initialData);
  const [dateTime, setDateTime] = useState("");

  const handleChange = (e:any) => {
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
        `${process.env.VITE_BASE_URL}${apiRoutes.imageUpload}`,
        formData
      );

      const imagePath = response?.data?.path as string;

      if (imagePath) {
        setFormData((prevFormData: any) => ({
          ...prevFormData,
          picture: imagePath,
        }));
      }
    } catch (error) {
      errorHandler(error, ERROR_MESSAGE.ERROR);
    }
  };

  const eventToPayloadMapper = useMemo(() => eventStateToPayloadMapper, []);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const payload = eventToPayloadMapper(formData, dateTime, user);
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
