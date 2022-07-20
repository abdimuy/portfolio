import { PRIMARY_COLOR, WHITE_COLOR } from "../../../contants/colors";
import { ContainerStyles } from "../../atoms/Container/types";
import { ImageStyles } from "../../atoms/Image/types";
import { InputStyles } from "../../atoms/Input/types";

export const footerCardContainerStyles: ContainerStyles = {
  width: "60%",
  justifyContent: "center",
  alignItems: "center",
  margin: "4rem 2rem 2rem",
};

export const footerCardStyles: ContainerStyles = {
  minWidth: "290px",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: "1rem 0",
  padding: "1rem",
  borderRadius: "10px",
  cursor: "pointer",
  backgroundColor: "#fef4f5",
  transition: "all 0.2s ease-in-out",
};

export const footerCardHoverStyles: ContainerStyles = {
  boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
};

export const cardImageStyles: ImageStyles = {
  width: "40px",
  height: "40px",
  margin: "0 0.7rem",
};

export const footerFormStyles: ContainerStyles = {
  width: "60%",
  flexDirection: "column",
  margin: "1rem 2rem",
  justifyContent: "center",
  alignItems: "center",
};

export const footerInputContainerStyles: ContainerStyles = {
  width: "100%",
  margin: "0.75rem 0",
  borderRadius: "10px",
  cursor: "pointer",
  backgroundColor: PRIMARY_COLOR,
  transition: "all 0.3s ease-in-out",
};

export const footerInputStyles: InputStyles = {
  width: "100%",
  padding: "0.95rem",
  border: "none",
  borderRadius: "7px",
  backgroundColor: WHITE_COLOR,
};
