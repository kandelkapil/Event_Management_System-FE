import axiosInstance from "#utils/axiosInstance";
import React, { useEffect, useState } from "react";
import { eventsAPI } from "../Repositories/Events.remote";

const useEventsControllers = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const getEventsList = async () => {
      const data = await eventsAPI({});

      console.log(data, "data dat");
    };

    getEventsList();
  }, []);

  return {
    eventsData,
  };
};

export default useEventsControllers;
