import { ContainerStyles } from "../../atoms/Container/types";

export const skillsContainerStyles: ContainerStyles = {
  margin: "3rem 0 0 0",
  flexDirection: "column",
  alignItems: "center",
};

export const skillsContainerLarge: ContainerStyles = {
  width: "90%",
  flexDirection: "row",
  alignItems: "flex-start",
};

export const skillImageContainerStyles: ContainerStyles = {
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  // backgroundColor: "#fef4f5",
  backgroundColor: "#edf2f8",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
};

export const skillImageContainerStylesHover: ContainerStyles = {
  boxShadow: "0 0 25px #fef4f5",
};

export const skillImageStyles: ContainerStyles = {
  width: "50%",
  height: "50%",
};

export const experienceContainerStyles: ContainerStyles = {
  flex: "1",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  margin: "4rem 0 0 0",
};

export const experienceYearContainerStyles: ContainerStyles = {
  margin: "0 3rem 0 0",
};
