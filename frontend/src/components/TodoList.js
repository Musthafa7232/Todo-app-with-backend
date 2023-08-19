import React from "react";
import Todos from "./Todos";
const TodoList = ({ todos,dispatch }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos?.map((items) => (
          !items.isDeleted&&(
              <Todos
          dispatch={dispatch}
            key={items._id}
            todo={items}
          />
          )
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
