import React from "react";
import { ImageProps } from "./types";

const Image = ({ alt, src, className }: ImageProps) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Image;
