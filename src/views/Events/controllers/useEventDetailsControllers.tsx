import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../Repositories/Events.remote";

const useEventDetailsControllers = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const fetchEventDetails = async () => {
    const data = await getEventById(id);
    setEvent(data);
  };

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  const memoizedGetEventById = useMemo(() => getEventById, []);

  return { event, getEventById: memoizedGetEventById };
};

export default useEventDetailsControllers;
