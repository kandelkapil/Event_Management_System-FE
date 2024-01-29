import { useEffect, useState } from "react";
import { getEventsList, removeEvent } from "../Repositories/Events.remote";
import { registerEvent } from "../Repositories/Events.remote";
import { useAuth } from "#hooks/useAuthHook";
import { EventList } from "../Types/types";

const useEventsListControllers = () => {
  const [events, setEvents] = useState<EventList[] | any>([]);
  const {
    user: { userId },
  } = useAuth();

  const fetchEvents = async () => {
    const response = await getEventsList();
    setEvents(response);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const eventDeleteHandler = async (id: number) => {
    const deleteEvent = await removeEvent(id);
    if (deleteEvent) {
      fetchEvents();
    }
  };

  const eventRegisterHandler = async (id: number, type: string) => {
    switch (type) {
      case "cancel":
        // eslint-disable-next-line no-case-declarations
        const cancel = await registerEvent({
          eventId: id,
          userId,
          action: "cancel",
        });
        if (cancel) {
          fetchEvents();
        }
        break;

      case "register":
        // eslint-disable-next-line no-case-declarations
        const register = await registerEvent({
          eventId: id,
          userId,
          action: "register",
        });
        if (register) {
          fetchEvents();
        }
        break;

      default:
        break;
    }
  };

  return {
    events,
    eventDeleteHandler,
    eventRegisterHandler,
  };
};

export default useEventsListControllers;
