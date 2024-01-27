import { ERROR_MESSAGE, errorHandler } from "#utils/errorHandler";
import axios from "axios";

interface EventsPayload {
  apiKey: string;
  location: string;
  category: string;
}

export const eventsAPI = async ({
  apiKey = "76NWW4KY3QS3G6OFWWKZ",
  location = "paris",
  category,
}: EventsPayload) => {
  try {
    const accessToken = "76NWW4KY3QS3G6OFWWKZ"; // Replace with your actual access token
    const apiUrl = 'https://www.eventbriteapi.com/v3/events/search/';

    const searchParams = {
      q: 'concert', // Replace with your search query
    };

    const result = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return result;
  } catch (error) {
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};

//
