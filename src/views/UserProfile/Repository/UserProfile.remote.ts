import axiosInstance from "#utils/axiosInstance";
import { ERROR_MESSAGE, errorHandler } from "#utils/errorHandler";
import { UserUpdatePayload } from "../Types/types";
import { apiRoutes } from "#constants/apiRoutes";
import { userResponseToStateMapper } from "../DataMapper/dataMapper";

export const getUserProfile = async ({ id }: { id: number }) => {
  try {
    const result = await axiosInstance.post(`${apiRoutes.user}`, { id });
    if (result) {
      const mappedData = userResponseToStateMapper(result?.data?.user);
      return mappedData;
    }
  } catch (error) {
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};

export const updateUserProfile = async (payload: UserUpdatePayload) => {
  try {
    const result = await axiosInstance.patch(`${apiRoutes.user}`, {
      ...payload,
    });
    if (result) {
      errorHandler({ response: result }, ERROR_MESSAGE.SUCCESS);
    }
    return result;
  } catch (error) {
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};
