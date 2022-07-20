import {
  BACK_COLOR,
  GRAY_COLOR,
  SECONDARY_COLOR,
} from "../../../contants/colors";
import { ContainerStyles } from "../../atoms/Container/types";
import { ImageStyles } from "../../atoms/Image/types";
import { TextStyles } from "../../atoms/Text/types";

export const headTextsContainerStyles: ContainerStyles = {
  alignItems: "center",
  width: "-webkit-fill-available",
  margin: "40px 0 0 0",
};

export const headTextLineContainerStyles: ContainerStyles = {
  flexDirection: "row",
  gap: "10px",
  justifyContent: "center",
};

export const headTextStyles: TextStyles = {
  fontSize: "2.5rem",
  fontWeight: "600",
  textAlign: "center",
  color: BACK_COLOR,
  textTransform: "capitalize",
  gap: "10px",
};

export const headTextBlueStyles: TextStyles = {
  ...headTextStyles,
  color: SECONDARY_COLOR,
};

export const profilesContainerStyles: ContainerStyles = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
  margin: "2rem 0 0 0",
};

export const imageProfileStyles: ImageStyles = {
  width: "100%",
  height: "170px",
  borderRadius: "15px",
  objectFit: "cover",
};

export const textBoldProfile: TextStyles = {
  fontSize: "1rem",
  fontWeight: "700",
  color: BACK_COLOR,
  textAlign: "left",
};

export const textProfile: TextStyles = {
  fontSize: "0.8rem",
  textAlign: "left",
  color: GRAY_COLOR,
  lineHeight: "1.5",
};
