import React from "react";
import { checkUncheckApi, deleteTodoApi } from "../service/api";
import { SetUserData } from "../features/userSlice";

const todos = ({ dispatch, todo }) => {
  const deleteTodo = () => {
    const data={
      id:todo._id
    }
   deleteTodoApi(data).then(res=>{
dispatch(SetUserData(res.data.user))
   })
  };
  const completeTodo = () => {
    const data=
    {
      id:todo._id,
      checked:!todo.checked
    }
   checkUncheckApi(data).then(res=>{
    dispatch(SetUserData(res.data.user))
       })
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.checked ? "completed" : ""}`}>
        {todo.todo}
      </li>
      <button className="complete-btn" onClick={completeTodo}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn " onClick={deleteTodo}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default todos;
