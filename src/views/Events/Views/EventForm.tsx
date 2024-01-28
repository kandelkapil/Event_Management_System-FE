// EventForm.js
import useCreateEventsController from "../controllers/useCreateEventsController";
import { EventFormContainer } from "./EventForm.Styled";
import ImageUpload from "#components/ImageUpload";
import { ToastContainer } from "react-toastify";

const EventForm = () => {
  const { handleChange, handleSubmit, formData, handleFileSelect, eventId } =
    useCreateEventsController();

  return (
    <EventFormContainer>
      <ToastContainer autoClose={3000} newestOnTop />
      <h2>{eventId ? "Edit Event" : "Create Event"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Event Name:</label>

          <input
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleChange}
            placeholder="Event Name"
            id="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>

          <textarea
            id="description"
            name="description"
            value={formData?.description}
            onChange={handleChange}
            rows={10}
            placeholder="Event Description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>

          <input
            type="text"
            name="location"
            value={formData?.location}
            onChange={handleChange}
            placeholder="Event Location"
            id="location"
          />
        </div>
        <div className="form-group upload">
          <label>Upload Image:</label>

          <ImageUpload
            onFileSelect={handleFileSelect}
            image={formData?.picture}
          />
        </div>

        <div className="form-group">
          <label>
            Venue Time:
            <input
              type="datetime-local"
              name="venue_time"
              value={formData?.venue_time}
              onChange={handleChange}
              className="venue_time"
            />
          </label>
        </div>

        <button className="create-event" type="submit">
          {eventId ? "Update Event " : "Create Event"}
        </button>
      </form>
    </EventFormContainer>
  );
};

export default EventForm;
