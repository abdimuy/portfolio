import {
  LIGTHGRAY_COLOR,
  WHITE_COLOR,
  SECONDARY_COLOR,
} from "../../../contants/colors";
import { ContainerStyles } from "../../atoms/Container/types";

export const iconSocialStyles: ContainerStyles = {
  width: "40px",
  height: "40px",
  margin: "margin: 0.25rem 0",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: WHITE_COLOR,
  borderRadius: "50%",
  border: `1px solid ${LIGTHGRAY_COLOR}`,
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
};

export const iconSocialStylesHover: ContainerStyles = {
  backgroundColor: SECONDARY_COLOR,
  border: SECONDARY_COLOR,
};
