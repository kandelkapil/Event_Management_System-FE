import { EventCardContainer } from "./EventCard.Styled";
import { useNavigate } from "react-router-dom";
import { useAuth } from "#hooks/useAuthHook";

const EventCard = (props: any) => {
  const {
    picture,
    venue_time,
    name,
    attendees,
    id,
    createdBy,
    eventDeleteHandler,
    eventRegisterHandler,
  } = props;
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleDetailsClick = () => {
    navigate(`/events/${id}`);
  };

  const isUserRegistered = attendees?.find((i: any) => i?.id === user?.userId);

  return (
    <EventCardContainer key={id}>
      <img className="event-picture" src={picture || ""} alt="event-picture" />

      <span className="venue_time">{venue_time}</span>

      <h3 className="name">{name}</h3>

      <div className="attendee-div">
        {attendees.length > 0 &&
          attendees
            .slice(0, 2)
            .map((attendee: any, index: number) =>
              attendee.profile_pic ? (
                <img
                  className="attendees"
                  src={attendee?.profile_pic || ""}
                  alt={`attendee-picture-${index}`}
                  key={attendee?.id}
                />
              ) : (
                <div className="attendee-fallback" key={attendee?.id} />
              )
            )}

        {attendees.length > 2 && (
          <div className="attendee-fallback">+{attendees.length - 2}</div>
        )}

        <span className="details" onClick={handleDetailsClick}>
          More details
        </span>
      </div>

      {createdBy && user?.userId === createdBy ? (
        <button className="delete-event" onClick={() => eventDeleteHandler(id)}>
          Delete Event
        </button>
      ) : !isUserRegistered ? (
        <button
          className="register-event"
          onClick={() => eventRegisterHandler(id, "register")}
        >
          {}
          Register Event
        </button>
      ) : (
        <button
          className="cancel-event"
          onClick={() => eventRegisterHandler(id, "cancel")}
        >
          {}
          Cancel Event
        </button>
      )}
    </EventCardContainer>
  );
};

export default EventCard;
