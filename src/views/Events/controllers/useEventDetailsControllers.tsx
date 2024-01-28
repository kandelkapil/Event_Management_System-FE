import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../Repositories/Events.remote";

const useEventDetailsControllers = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      const data = await getEventById(id);
      setEvent(data);
    };

    fetchEventDetails();
  }, [id]);
  return { event };
};

export default useEventDetailsControllers;
