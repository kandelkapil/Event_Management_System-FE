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

let isRefreshing = false;
let failedRequests: (() => void)[] = [];

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

// Function to handle the token refresh
const handleTokenRefresh = async () => {
  try {
    const refreshToken = getLocalStorageKey("token");

    // Check if refreshToken is available and not expired
    if (refreshToken) {
      const refreshResponse = await axiosInstance.get(apiRoutes.refreshToken);

      // Update the new tokens in local storage
      setLocalStorageKey("token", refreshResponse.data.accessToken);

      // Reset isRefreshing flag
      isRefreshing = false;

      // Retry the failed requests with the new token
      failedRequests.forEach((callback) => callback());
      failedRequests = [];
    } else {
      // If refreshToken is expired or not available, handle accordingly
      console.error("Refresh token is expired or not available");

    }
  } catch (refreshError) {
    console.error("Error refreshing token:", refreshError);

    // Reset isRefreshing flag
    isRefreshing = false;
  }
};

// Intercept responses to handle token expiration
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token
    if (error.response?.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;

        // Handle token refresh manually
        await handleTokenRefresh();

        // Retry the original request with the new token
        return axiosInstance(originalRequest);
      }

      // Queue the original request to be retried after token refresh
      return new Promise((resolve) => {
        failedRequests.push(() => {
          setBearerToken(getLocalStorageKey("token"));
          resolve(axiosInstance(originalRequest));
        });
      });
    }

    // If it's not a token-related error, simply reject the promise
    return Promise.reject(error);
  }
);

export default axiosInstance;
