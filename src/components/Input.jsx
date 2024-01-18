import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        {...props}
        className={`block w-full max-w-xl rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:leading-6 ${props.className}`}
      />
    </>
  );
};

export default Input;
