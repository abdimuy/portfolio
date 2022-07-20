import React from "react";
import { SpanProps } from "./types";

const Span = ({ children, className }: SpanProps) => {
  return <span className={className}>{children}</span>;
};

export default Span;
