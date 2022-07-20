import React from "react";
import { ItemListUlProps } from "./types";

const ItemListUl = ({ className, children }: ItemListUlProps) => {
  return <li className={className}>{children}</li>;
};

export default ItemListUl;
