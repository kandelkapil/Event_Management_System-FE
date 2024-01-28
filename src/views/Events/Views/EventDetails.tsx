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
                <p className="venue-time">{event?.venue_time}</p>
                <p className="attendees">
                  No. of attendees: {" "}
                  {event?.attendees ? event.attendees.length : 0}
                </p>
                <h3 className="name">{event?.name}</h3>
                <p className="desc">{event?.description}</p>
              </div>

              <div className="image-container">
                <p className="venue-time-sm">{event?.venue_time}</p>
                <p className="attendees-sm">
                  No. of attendees: {" "}
                  {event?.attendees ? event.attendees.length : 0}
                </p>
                <h3 className="name-sm">{event?.name}</h3>
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
