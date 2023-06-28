//various method to make api but we use axios we use api intercepter
import axios from "axios";
import { API_NOTIFICATIONS_MESSAGES, SERVICE_URL } from "../constants/config";

const API_URL = "http://localhost:9000"; //my backend running on this port

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    //stop loader here
    return processResponse(response);
  },
  function (error) {
    //stop globel loader here
    return Promise.reject(processError(error));
  }
);
const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};
const processError = (error) => {
  if (error.response) {
    //request made and server responsed with other status
    //that fall out of range around 2.a,b something
    console.log("ERROR IN RESPONSE ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATIONS_MESSAGES.responseFailure,
      code: error.response.status,
    };
  } else if (error.request) {
    //request made no response
    console.log("ERROR IN REQUEST ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATIONS_MESSAGES.responseFailure,
      code: "",
    };
  } else {
    //something happend with setting up

    console.log("ERROR IN NETWORK ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATIONS_MESSAGES.networkError,
      code: "",
    };
  }
};

const API = {};

for (const [key, value] of Object.entries(SERVICE_URL)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) =>
    axiosInstance({
      method: value.method(),
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    });
}

export { API };
//https://cdn.pixabay.com/photo/2012/05/07/18/57/blog-49006_960_720.png
