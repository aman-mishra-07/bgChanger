import React from "react";

const TodoContainor = ({ children, heading }) => {
  return (
    <div className="w-full max-w-xl h-fit rounded-md p-4 border text-zinc-100 space-y-1 ">
      <h2 className="text-xl font-semibold">{heading}</h2>
      {children}
    </div>
  );
};

export default TodoContainor;
