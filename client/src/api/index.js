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

// Authentication Routes
export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

// Routes for Question
export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);

// Routes for answers
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
  API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });
