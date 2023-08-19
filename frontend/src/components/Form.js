import React from "react";
import { newTodoApi } from "../service/api";
import { useDispatch } from "react-redux";
import { SetUserData } from "../features/userSlice";
const Form = ({ setInputForm,  inputForm }) => {
  const dispatch=useDispatch()
  const events = (e) => {
    setInputForm(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    const data={
      newTodo:inputForm
    }
    newTodoApi(data).then((res)=>{
      console.log(res.data);
      dispatch(SetUserData(res.data.user))
    })
    setInputForm("");
  };
  return (
    <div>
      <form>
        <input
          value={inputForm}
          onChange={events}
          type="text"
          className="todo-input"
        />
        <button className="todo-button" onClick={submit}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
