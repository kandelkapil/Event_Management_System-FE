import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { apiRoutes } from "#constants/apiRoutes";
import { getLocalStorageKey, setLocalStorageKey } from "#utils/localStorage";

const baseURL: string | any = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

// Utility function to set Bearer token in request headers
const setBearerToken = (token: string | null) => {
  axiosInstance.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : undefined; // Use undefined instead of null
};

// Intercept requests to attach Bearer token
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    const token = getLocalStorageKey("token");

    // Set Bearer token in request headers
    setBearerToken(token);

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Intercept responses to handle token expiration
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as
      | InternalAxiosRequestConfig<any>
      | any;

    // Check if the error is due to an expired token
    if (
      error.response?.status === 401 ||
      (error.response?.status === 403 && !originalRequest._retry)
    ) {
      originalRequest._retry = true;

      // Attempt to refresh the token
      try {
        const refreshToken = getLocalStorageKey("token");

        // Check if refreshToken is available and not expired
        if (refreshToken) {
          const refreshResponse = await axiosInstance.get<{
            accessToken: string;
          }>(apiRoutes.refreshToken);

          // Update the new tokens in local storage
          setLocalStorageKey("token", refreshResponse.data.accessToken);

          // Retry the original request with the new token
          originalRequest.headers["Authorization"] =
            "Bearer " + refreshResponse.data.accessToken;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
