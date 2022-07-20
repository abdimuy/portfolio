import React from "react";
import { TextStyles } from "../Text/types";

export interface LinkProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
  styles?: TextStyles;
  stylesLarge?: TextStyles;
  stylesHover?: TextStyles;
  target?: string;
}

export interface LinkStyles extends TextStyles {}
