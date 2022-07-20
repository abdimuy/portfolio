import React from "react";
import { ContainerStyles } from "../Container/types";

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  styles?: ContainerStyles;
}
