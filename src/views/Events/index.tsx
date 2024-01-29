import { useNavigate } from "react-router-dom";
import { EventListContainer } from "./EventList.Styled";
import EventCard from "./components/EventCard";
import useEventsListControllers from "./controllers/useEventsListControllers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles

const EventList = () => {
  const { events, eventDeleteHandler, eventRegisterHandler } =
    useEventsListControllers();
  const navigate = useNavigate();

  return (
    <EventListContainer>
      <ToastContainer autoClose={500} />
      <div className="wrapper">
        <button
          className="create-event"
          onClick={() => navigate("/events/create")}
        >
          Create Event
        </button>
        <div className="events-container">
          {events?.map((event: any) => (
            <EventCard
              picture={event?.picture}
              venue_time={event?.venue_time}
              name={event?.name}
              attendees={event?.attendees}
              id={event?.id}
              createdBy={event?.created_by}
              eventDeleteHandler={eventDeleteHandler}
              eventRegisterHandler={eventRegisterHandler}
            />
          ))}
        </div>
      </div>
    </EventListContainer>
  );
};

export default EventList;
