import { ContainerStyles } from "../../atoms/Container/types";
import { ImageStyles } from "../../atoms/Image/types";

export const workItemStyles: ContainerStyles = {
  justifyContent: "center",
  alignItems: "center",
  width: "270px",
  flexDirection: "column",
  margin: "2rem",
  padding: "1rem",
  borderRadius: "0.5rem",
  backgroundColor: "#fff",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

export const workItemHoverStyles: ContainerStyles = {
  boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)",
};

export const workItemImageContainerStyles: ContainerStyles = {
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "230px",
  position: "relative",
};

export const workItemImateStyles: ImageStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "0.5rem",
  objectFit: "cover",
};

export const workContentStyles: ContainerStyles = {
  padding: "0.5rem",
  width: "100%",
  position: "relative",
  flexDirection: "column",
};
