import { useNavigate } from "react-router-dom";
import useEventDetailsControllers from "../controllers/useEventDetailsControllers";
import { EventDetailsContainer } from "./EventDetails.Styled";

const EventDetails = () => {
  const { event } = useEventDetailsControllers();
  const navigate = useNavigate();

  return (
    <EventDetailsContainer>
      <div className="wrapper">
        <button
          className="edit-event"
          onClick={() => navigate(`/events/edit/${event?.id}`)}
        >
          Edit Event
        </button>
        <div className="event-detail-wrapper">
          {event && (
            <>
              <div className="contents">
                <h3 className="name">{event?.name}</h3>
                <p className="desc">{event?.description}</p>
                <p className="venue-time">{event?.venue_time}</p>
              </div>

              <div className="image-container">
                <img
                  className="event-image"
                  alt="event-picture"
                  src={event?.picture}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </EventDetailsContainer>
  );
};

export default EventDetails;
