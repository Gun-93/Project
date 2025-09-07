import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // .env se backend ka url aayega
  withCredentials: true, // optional, agar cookies/session chahiye toh
});

export default api;
