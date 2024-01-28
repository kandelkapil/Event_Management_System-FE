import { apiRoutes } from "#constants/apiRoutes";
import axiosInstance from "#utils/axiosInstance";
import { ERROR_MESSAGE, errorHandler } from "#utils/errorHandler";
import { removeItemFromLocalStorage } from "#utils/localStorage";

export const logOutService = async () => {
  try {
    const result = await axiosInstance.post(apiRoutes.logOut);

    if (result) {
      removeItemFromLocalStorage("token");
      removeItemFromLocalStorage("userId");
      removeItemFromLocalStorage("profile");
      errorHandler({ response: result }, ERROR_MESSAGE.SUCCESS);
    }

    return result;
  } catch (error) {
    // Handle errors
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};
