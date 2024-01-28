import axiosInstance from "#utils/axiosInstance"; // Assuming you have an axios instance configured
import { apiRoutes } from "#constants/apiRoutes"; // Assuming you have an object containing API routes
import { errorHandler, ERROR_MESSAGE } from "#utils/errorHandler"; // Your error handling logic
import { LoginPayload } from "#views/UserProfile/Types/types";
import { setLocalStorageKey } from "#utils/localStorage";

export const loginService = async (payload: LoginPayload) => {
  try {
    const result = await axiosInstance.post(apiRoutes.login, payload);

    if (result) {
      // Assuming your server responds with a token in the response
      const token = result.data.accessToken;
      const id = result.data.id;
      const profile_pic = result.data.profile_pic;
      setLocalStorageKey("token", token);
      setLocalStorageKey("userId", id);
      setLocalStorageKey("profile", profile_pic);

      // Handle success (optional)
      errorHandler({ response: result }, ERROR_MESSAGE.SUCCESS);
    }

    return result?.data;
  } catch (error) {
    // Handle errors
    errorHandler(error, ERROR_MESSAGE.ERROR);
  }
};
