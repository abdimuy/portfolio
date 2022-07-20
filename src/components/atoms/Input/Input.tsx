import React from "react";
import { InputProps } from "./types";

const Input = ({
  type,
  value,
  name,
  placeHolder,
  onChange,
  className,
}: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeHolder}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;
