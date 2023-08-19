import axios from "./Axios";

const headers = {
  headers: {
    "auth-token": JSON.parse(localStorage.getItem("authorization.user")),
  },
};
console.log(headers,'=>from api');

export const registerApi = (data) => axios.post("/signup", data, headers);
export const loginApi = (data) => axios.post("/signin", data, headers);
export const userDataApi=()=>axios.get('/getUserData',headers)
export const newTodoApi = (data) => axios.post("/newTodo", data, headers);
export const checkUncheckApi = (data) => axios.patch("/checkUncheck", data, headers);
export const deleteTodoApi = (data) => axios.patch("/deleteTodo", data, headers);
