import axios from "axios";

const api = axios.create({
  baseURL:
    `${process.env.REACT_APP_API_BASE_URL}/api` || "http://localhost:3001/api",
});

export default api;
