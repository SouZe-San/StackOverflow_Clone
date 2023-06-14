import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://stack-overflow-eight.vercel.app/",
});

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("Profile")) {
//     req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`;
//   }
//   return req;
// });

// Authentication

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);