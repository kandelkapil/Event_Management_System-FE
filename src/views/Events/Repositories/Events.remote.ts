import axiosInstance from "#utils/axiosInstance";
import { ERROR_MESSAGE, errorHandler } from "#utils/errorHandler";
import { apiRoutes } from "#constants/apiRoutes";
import { CreateEventPayload } from "../Types/types";
import { eventListMapper, eventMapper } from "../DataMapper/mapper";

export const getEventsList = async () => {
  try {
    const result = await axiosInstance.get(`${apiRoutes.events}`);
    // errorHandler({ response: result }, ERROR_MESSAGE.SUCCESS);
    const eventsMapper = eventListMapper(result?.data?.events);
    return eventsMapper;
  } catch (error) {
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};

export const createEvent = async (payload: CreateEventPayload) => {
  try {
    const result = await axiosInstance.post(`${apiRoutes.events}`, {
      ...payload,
    });

    errorHandler({ response: result }, ERROR_MESSAGE.SUCCESS);
    return result;
  } catch (error) {
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};

export const getEventById = async (
  id: number | string,
  dateStringToDate = false
) => {
  try {
    const result = await axiosInstance.get(`${apiRoutes.events}/${id}`);
    errorHandler({ response: result }, ERROR_MESSAGE.SUCCESS);
    const eventsMapper = eventMapper(result?.data?.event, dateStringToDate);
    return eventsMapper;
  } catch (error) {
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};

export const registerEvent = async ({
  eventId,
  userId,
  action,
}: {
  eventId: number;
  userId: number;
  action: string;
}) => {
  try {
    const result = await axiosInstance.post(
      `${apiRoutes.events}/${eventId}/register`,
      {
        userId,
        action,
      }
    );
    errorHandler({ response: result }, ERROR_MESSAGE.SUCCESS);
    return result.data;
  } catch (error) {
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};

export const removeEvent = async (id: number) => {
  try {
    const result = await axiosInstance.delete(`${apiRoutes.events}/${id}`);
    errorHandler({ response: result }, ERROR_MESSAGE.SUCCESS);
    return result;
  } catch (error) {
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};

export const updateEvent = async (id: number, payload: CreateEventPayload) => {
  try {
    const result = await axiosInstance.patch(`${apiRoutes.events}/${id}`, {
      ...payload,
    });

    errorHandler({ response: result }, ERROR_MESSAGE.SUCCESS);
    return result;
  } catch (error) {
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};
