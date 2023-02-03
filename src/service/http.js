import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:8082/",
  headers: { "Content-type": "application/json" },
});
