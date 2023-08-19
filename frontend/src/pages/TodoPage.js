import "bootstrap/dist/css/bootstrap.min.css";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Clear_user } from "../features/AuthSlice";
import { ClearUserData, SetUserData } from "../features/userSlice";
import { userDataApi } from "../service/api";
import { useNavigate } from "react-router-dom";
function TodoPage() {
  const user = useSelector((state) => state.user.user);
  const [inputForm, setInputForm] = useState("");
  const dispatch = useDispatch();
const navigate=useNavigate()
  useEffect(() => {
    if(user){

    }else{
        userDataApi().then((res) => {
        console.log(res,'=>from useEffect');
      dispatch(SetUserData(res.data.user));
    }); 
    }
  }, []);

  useEffect(() => {
    console.log(user,'user is here');
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("authorization.user");
    dispatch(ClearUserData());
    dispatch(Clear_user());
    navigate('/login')
  };
  return (
    <div className="App py-5">
      {" "}
      <Box
        sx={{ display: "flex", justifyContent: "end", alignContent: "start" }}
      >
        <Button variant="outlined" onClick={handleLogout} sx={{ mr: 10 }}>
          Logout
        </Button>
      </Box>
      <h1 className="text-center">Todo </h1>
      <Form
        inputForm={inputForm}
        setInputForm={setInputForm}
      />
      <TodoList dispatch={dispatch} todos={user?.todos} />
    </div>
  );
}

export default TodoPage;
