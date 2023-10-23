"use client";

import React from "react";

const Button = ({ children }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <button
      className={visible ? "censored" : ""}
      onClick={() => setVisible(!visible)}
    >
      {children}
    </button>
  );
};

export default Button;
