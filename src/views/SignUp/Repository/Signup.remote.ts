import axiosInstance from "#utils/axiosInstance";
import { ERROR_MESSAGE, errorHandler } from "#utils/errorHandler";
import { SignUpPayload } from "../Types/types";
import { apiRoutes } from "#constants/apiRoutes";

export const signUpService = async (payload: SignUpPayload) => {
  try {
    const result = await axiosInstance.post(`${apiRoutes.signUp}`, payload);
    errorHandler({ response: result }, ERROR_MESSAGE.SUCCESS);
    return result;
  } catch (error) {
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};
