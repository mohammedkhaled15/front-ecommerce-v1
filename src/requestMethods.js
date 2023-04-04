import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
