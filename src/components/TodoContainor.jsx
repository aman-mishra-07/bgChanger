import React,{ useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";


const TodoContainor = ({ heading , direction}) => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="w-full max-w-xl h-fit rounded-md p-4 border text-zinc-100 space-y-1">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <ul className="space-y-1">
        {todos &&
          todos.map((task) => {
            return (
              task.direction === direction && (
                <li key={task.id}>
                  <TodoItem task={task} />
                </li>
              )
            );
          })}
      </ul>
    </div>
  );
};

export default TodoContainor;
