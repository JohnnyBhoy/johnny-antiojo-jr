import axios from "axios";

const client = axios.create({
  baseURL: "https://tagalog-movie-review-api.onrender.com/api",
});

export default client;