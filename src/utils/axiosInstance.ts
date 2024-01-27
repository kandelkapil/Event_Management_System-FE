import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiRoutes } from "#constants/apiRoutes";
import { getLocalStorageKey, setLocalStorageKey } from "#utils/localStorage";

const baseURL: string = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

// Utility function to set Bearer token in request headers
const setBearerToken = (token: string | null) => {
  axiosInstance.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : null;
};

// Intercept requests to attach Bearer token
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
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
    const originalRequest = error.config;

    // Check if the error is due to an expired token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Attempt to refresh the token
      try {
        const refreshToken = getLocalStorageKey("token");

        // Check if refreshToken is available and not expired
        if (refreshToken) {
          const refreshResponse = await axiosInstance.get(
            apiRoutes.refreshToken
          );

          // Update the new tokens in local storage
          setLocalStorageKey("token", refreshResponse.data.accessToken);

          // Retry the original request with the new token
          originalRequest.headers["Authorization"] =
            "Bearer " + refreshResponse.data.accessToken;
          return axiosInstance(originalRequest);
        } else {
          // If refreshToken is expired or not available, redirect to login
          // You may want to customize this based on your application logic
          // console.log(window.location.href,'location');
          // window.location.href = "/login";
        }
      } catch (refreshError) {
        // Handle error during token refresh (e.g., redirect to login)
        console.error("Error refreshing token:", refreshError);
        // window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
