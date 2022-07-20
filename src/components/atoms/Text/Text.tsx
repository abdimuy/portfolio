import { TextProps } from "./types";

const Text = ({ children = "", className, isContainer = false }: TextProps) => {
  if (isContainer) return <div className={className}>{children}</div>;
  return <p className={className}>{children}</p>;
};

export default Text;
