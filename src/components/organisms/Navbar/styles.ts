import { ListUlStyles } from "../../atoms/ListUl/types";
import { NavStyles } from "../../atoms/Nav/types";
import { ImageStyles } from "../../atoms/Image/types";
import { LinkStyles } from "../../atoms/Link/types";
import { GRAY_COLOR, SECONDARY_COLOR } from "../../../contants/colors";
import { ContainerStyles } from "../../atoms/Container/types";

export const NavbarStyles: NavStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "-webkit-fill-available",
  height: "70px",
  alignItems: "center",
  padding: "1rem 2rem",
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  position: "fixed",
  zIndex: "2",
};

export const NavbarItemStyles: ListUlStyles = {
  alignItems: "center",
  flexDirection: "column",
};

export const stylesListUl: ListUlStyles = {
  display: "none",
  flexDirection: "row",
  flex: "1",
  justifyContent: "space-around",
  maxWidth: "600px",
};
export const stylesListNavbar: ContainerStyles = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  // background: url("../../../assets/bgWhite.png"),
};

export const stylesImage: ImageStyles = {
  width: "90px",
  height: "40px",
};

export const stylesImageLarge: ImageStyles = {
  width: "180px",
  height: "40px",
};

export const linkStyles: LinkStyles = {
  textTransform: "uppercase",
  fontWeight: "500",
  transition: "all 0.3s ease-in-out",
  color: GRAY_COLOR,
};

export const linkStylesHover: LinkStyles = {
  color: SECONDARY_COLOR,
};

export const pointStyles: ContainerStyles = {
  backgroundColor: "transparent",
  width: "5px",
  height: "5px",
  borderRadius: "50%",
  margin: "0 0 5px 0",
};

export const pointStylesAditional: string =
  "&:hover {div{background-color: blue} a {div {background-color: transparent}}}";

export const navbarMenuIcon: ContainerStyles = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: SECONDARY_COLOR,
};
