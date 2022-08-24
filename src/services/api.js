import axios from "axios";

const api = axios.create({
  baseURL: "https://pharm-place.herokuapp.com",
});

export default api;
