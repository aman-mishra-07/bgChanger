import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        {...props}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;