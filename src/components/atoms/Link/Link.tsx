import React from "react";
import { Text, Container } from "../../atoms";
import { LinkProps } from "./types";

const Link = ({
  children,
  to,
  className,
  styles,
  stylesLarge,
  stylesHover,
  target,
}: LinkProps) => {
  return (
    <a href={to} className={className} target={target}>
      <Text
        styles={styles}
        stylesLarge={stylesLarge}
        stylesHover={stylesHover}
        isContainer
      >
        {children}
      </Text>
    </a>
  );
};

export default Link;
