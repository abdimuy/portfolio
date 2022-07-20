import React from "react";
import { ListUlProps } from "./types";

const ListUl = ({ className, children }: ListUlProps) => {
  return <ul className={className}>{children}</ul>;
};

export default ListUl;
