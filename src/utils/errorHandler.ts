import { toast } from "react-toastify";

export const ERROR_MESSAGE = {
  SUCCESS: "success",
  ERROR: "error",
};

const errorHandler = (data: any, type: string) => {
  const response = data.response;
  const responseData = response.data.message || "";
  
  switch (type) {
    case ERROR_MESSAGE.SUCCESS:
      toast?.success(responseData, {
        autoClose: 2000,
        onClose: () => toast.dismiss(),
      });
      break;
    case ERROR_MESSAGE.ERROR:
      toast?.error(responseData, {
        autoClose: 2000,
        onClose: () => toast.dismiss(),
      });
      break;
    default:
      "";
      break;
  }
};

export { errorHandler };
