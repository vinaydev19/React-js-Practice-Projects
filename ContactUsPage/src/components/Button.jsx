import React from "react";

function Button({ className = "", label, icone }) {
  return (
    <button className={`${className}`}>
      {icone}
      {label}
    </button>
  );
}

export default Button;
