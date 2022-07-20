import React from "react";
// import { ContainerProps } from "../Container/types";
import { NavProps } from "./types";

const Nav = ({ className, children }: NavProps) => {
  return <nav className={className}>{children}</nav>;
};

export default Nav;
