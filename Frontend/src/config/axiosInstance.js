import axios from "axios";

// Base URL for the backend API. Comes from Vite env variable so it can be
// changed per environment (.env / .env.production) without touching code.
export const API_BASE_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
