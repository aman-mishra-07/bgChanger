import React, {useReducer } from "react";
import Todos from "./components/Todos";
import { todosReducer } from "./reducers/todosReducer";
import { TodoContext } from "./contexts/TodoContext";

function App() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  return (
    <>
      <TodoContext.Provider value={{todos, dispatch}}>
        <Todos />
      </TodoContext.Provider>
    </>
  );
}

export default App;

