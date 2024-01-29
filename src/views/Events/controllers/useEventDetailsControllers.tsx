import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../Repositories/Events.remote";
import { EventDetails } from "../Types/types";

const useEventDetailsControllers = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<EventDetails | any>([]);

  const fetchEventDetails = async () => {
    const data = await getEventById(Number(id));
    setEvent(data);
  };

  useEffect(() => {
    if (id) {
      fetchEventDetails();
    }
  }, [id]);

  const memoizedGetEventById = useMemo(() => getEventById, []);

  return { event, getEventById: memoizedGetEventById };
};

export default useEventDetailsControllers;
