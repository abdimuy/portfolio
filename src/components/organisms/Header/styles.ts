import { BACK_COLOR, GRAY_COLOR, WHITE_COLOR } from "../../../contants/colors";
import { ContainerStyles } from "../../atoms/Container/types";
import { ImageStyles } from "../../atoms/Image/types";
import { TextStyles } from "../../atoms/Text/types";
import { images } from "../../../contants";

export const headerStyles: ContainerStyles = {
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  flex: "1",
  width: "100%",
  height: "100%",
  padding: "6rem 2rem 0rem",
  position: "relative",
  // background: "src/assets/bgImg.png",
  background: images.bgImg,
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
};

export const headerStylesLarge: ContainerStyles = {
  flexDirection: "row",
};

export const headerBadgesStyles: ContainerStyles = {
  width: "100%",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  flexDirection: "column",
  margin: "0 0 2.5rem 0",
};

export const badgeStyles: ContainerStyles = {
  padding: "1rem 2rem",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: WHITE_COLOR,
  borderRadius: "15px",
  flexDirection: "row",
  width: "auto",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1);",
  gap: "15px",
};

export const tagStyles: ContainerStyles = {
  ...badgeStyles,
  flexDirection: "column",
  margin: "3rem 0 0 0",
};

export const textHeaderStyles: TextStyles = {
  fontSize: "2.75rem",
  fontWeight: "600",
  textAlign: "center",
  color: BACK_COLOR,
  textTransform: "capitalize",
};

export const pTextStyles: TextStyles = {
  fontSize: "1rem",
  textAlign: "left",
  color: GRAY_COLOR,
  lineHeight: "1.5",
};

export const circleCmpStyles: ContainerStyles = {
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundColor: WHITE_COLOR,
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
};

export const circleImageStyles: ImageStyles = {
  width: "60%",
  height: "60%",
};
