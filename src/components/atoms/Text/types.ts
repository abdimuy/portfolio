import React from "react";

export interface TextProps {
  children?: React.ReactNode;
  className?: string;
  styles?: TextStyles;
  stylesLarge?: TextStyles;
  stylesHover?: TextStyles;
  isContainer?: boolean;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";
}

export interface TextStyles {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
  textAlignVertical?: string;
  textDecoration?: string;
  transition?: string;
  gap?: string;
}
