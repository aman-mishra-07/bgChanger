import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import AddTodoForm from "./AddTodoForm";
import TodoContainor from "../components/TodoContainor";
import Button from "./Button";
import {
  FaArrowLeft,
  FaArrowDown,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

const Todos = () => {
  const { dispatch } = useContext(TodoContext);
  const handleLeftBox = () => {
    dispatch({
      type: "DirectToLeft",
      direction: "right",
    });
  };
  const handleRightBox = () => {
    dispatch({
      type: "DirectToRigth",
      direction: "left",
    });
  };
  return (
    <div className="w-full min-h-screen bg-zinc-700 text-zinc-100 p-4 sm:px-20 sm:py-10 space-y-4">
      <h1 className="text-3xl font-bold">Todos</h1>
      <AddTodoForm />
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <TodoContainor heading="Incomplete tasks" direction="left" />
        <div className="space-x-4 sm:space-x-0 sm:space-y-2  text-center">
          <Button type="button" onClick={handleLeftBox}>
            <FaArrowLeft className="hidden sm:block" />
            <FaArrowUp className="sm:hidden" />
          </Button>
          <Button type="button" onClick={handleRightBox}>
            <FaArrowRight className="hidden sm:block" />
            <FaArrowDown className="sm:hidden" />
          </Button>
        </div>
        <TodoContainor heading="Completed tasks" direction="right" />
      </div>
    </div>
  );
};

export default Todos;
