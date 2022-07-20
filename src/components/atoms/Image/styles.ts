import { css } from "styled-components";
import { ImageProps } from "./types";
import { validAtribute } from "../../../utils";

export default css<ImageProps>`
  ${({ styles = {} }) => css`
    width: ${styles.width || "auto"};
    height: ${styles.height || "auto"};
    object-fit: ${styles.objectFit || "contain"};
    object-position: ${styles.objectPosition || "center"};
    border-radius: ${styles.borderRadius || "0"};
    border: ${styles.border || "none"};
    z-index: ${styles.zindex || "0"};
    border-radius: ${styles.borderRadius || "0px"};
    margin: ${styles.margin || "0px"};
  `}

  @media screen and (min-width: 1007px) {
    ${({ stylesLarge: stylar = {} }) => css`
      ${validAtribute([
        { attr: "width", val: stylar.width, valDef: "auto" },
        { attr: "height", val: stylar.height, valDef: "auto" },
      ])}
    `}
  }
`;
