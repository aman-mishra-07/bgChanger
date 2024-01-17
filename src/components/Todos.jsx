import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import AddTodoForm from "./AddTodoForm";
import TodoContainor from "../components/TodoContainor";
import TodoItem from "./TodoItem";
import Button from "./Button";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const handleLeftBox = () => {
    dispatch({
      type: "DirectToLeft",
      direction: 'right',
    });
  };
  const handleRightBox = () => {
    dispatch({
      type: "DirectToRigth",
      direction : 'left',
    });
  };
  return (
    <div className="w-full min-h-screen bg-zinc-700 text-zinc-100 p-4 sm:px-20 sm:py-10 space-y-4">
      <h1 className="text-3xl font-bold">Todos</h1>
      <AddTodoForm />
      <div className="flex justify-between gap-2">
        <TodoContainor heading="Incomplete tasks">
          <ul className="space-y-1">
            {todos &&
              todos.map((task) => {
                return (
                  task.direction === "left" && (
                    <li key={task.id}>
                      <TodoItem task={task} />
                    </li>
                  )
                );
              })}
          </ul>
        </TodoContainor>
        <div className="space-y-2">
          <Button type="button" onClick={handleLeftBox}>
            <FaArrowLeft />
          </Button>
          <Button type="button" onClick={handleRightBox}>
            <FaArrowRight />
          </Button>
        </div>
        <TodoContainor heading="Completed tasks">
          <ul className="space-y-1">
            {todos &&
              todos.map((task) => {
                return (
                  task.direction === "right" && (
                    <li key={task.id}>
                      <TodoItem task={task} />
                    </li>
                  )
                );
              })}
          </ul>
        </TodoContainor>
      </div>
    </div>
  );
};

export default Todos;
