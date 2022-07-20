import { HTMLInputTypeAttribute } from "react";
import { ContainerStyles } from "../Container/types";

export interface InputProps {
  value?: string | number;
  type?: HTMLInputTypeAttribute;
  name?: string;
  placeHolder?: string;
  onChange?: () => void;
  styles?: ContainerStyles;
  className?: string;
}

export interface InputStyles extends ContainerStyles {}
