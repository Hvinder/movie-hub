import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const api = applyCaseMiddleware(
  axios.create({
    baseURL:
      `${process.env.REACT_APP_API_BASE_URL}/api` ||
      "http://localhost:3001/api",
  })
);

export default api;
