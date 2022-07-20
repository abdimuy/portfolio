import React from "react";
import { ContainerProps } from "./types";

const Container = ({ className, children, onClick, id }: ContainerProps) => {
  return (
    <div id={id} className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Container;
