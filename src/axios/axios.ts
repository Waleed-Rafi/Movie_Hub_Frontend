import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,

  headers: {
    common: {
      Accept: "application/json",
    },
  },
});

export default axiosInstance;
