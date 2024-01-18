import React, { useState, useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import { TodoContext } from "../contexts/TodoContext";

const AddTodoForm = () => {
  const [task, setTask] = useState("");
  const { todos , dispatch } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.trim() === "") return;
    dispatch({
      type: 'Add',
      taskName : task,
    })
    setTask('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Add New task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='flex-1'
        />
        <Button type="submit">Add Task</Button>
      </form>
    </div>
  );
};

export default AddTodoForm;
