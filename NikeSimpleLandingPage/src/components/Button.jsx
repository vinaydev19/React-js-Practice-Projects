import React from "react";

function Button({ text, className = "" }) {
  return (
    <button
      className={` hover:cursor-pointer rounded-sm text-base	 text-white p-2 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
