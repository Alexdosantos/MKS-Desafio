import axios from "axios";

export const api = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data,"
    Authorization: `Bearer ${"AUTH_TOKEN"}`,
  },
});
