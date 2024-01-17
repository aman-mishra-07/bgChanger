import React, { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Todo = ({ task }) => {
  const [completed, setCompleted] = useState(false);
  const { dispatch } = useContext(TodoContext);

  const handleStatusChange = (e) => {
    setCompleted(!completed);
    dispatch({
      type: "change",
      id: task.id,
      completed: e.target.checked,
    });
  };
  return (
    <>
      <div className="flex items-center gap-4 px-4 py-2 bg-zinc-600 rounded">
        <input
          type="checkBox"
          checked={task.completed}
          onChange={handleStatusChange}
        />
        <h3 className="flex-1">{task.taskName}</h3>
        <span className="self-end">{task.completed ? "✔" : "😑"}</span>
      </div>
    </>
  );
};

export default Todo;
