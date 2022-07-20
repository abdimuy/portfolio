import { css } from "styled-components";
import { TextProps } from "./types";
import { validAtribute } from "../../../utils";

export default css<TextProps>`
  ${({ styles = {} }) => css`
    font-size: ${styles.fontSize || "inherit"};
    font-weight: ${styles.fontWeight || "inherit"};
    color: ${styles.color || "black"};
    text-align: ${styles.textAlign || "inherit"};
    line-height: ${styles.lineHeight || "inherit"};
    letter-spacing: ${styles.letterSpacing || "inherit"};
    text-transform: ${styles.textTransform || "inherit"};
    text-align-vertical: ${styles.textAlignVertical || "inherit"};
    text-decoration: ${styles.textDecoration || "none"};
    transition: ${styles.transition || "none"};
    gap: ${styles.gap || "0px"};
    margin: 0;
    display: flex;
    flex-direction: row;
  `}

  &:hover {
    ${({ stylesHover = {} }) => css`
      ${validAtribute([
        { attr: "font-size", val: stylesHover.fontSize, valDef: "inherit" },
        { attr: "font-weight", val: stylesHover.fontWeight, valDef: "inherit" },
        { attr: "color", val: stylesHover.color, valDef: "black" },
        { attr: "text-align", val: stylesHover.textAlign, valDef: "inherit" },
        { attr: "line-height", val: stylesHover.lineHeight, valDef: "inherit" },
        {
          attr: "letter-spacing",
          val: stylesHover.letterSpacing,
          valDef: "inherit",
        },
        {
          attr: "text-transform",
          val: stylesHover.textTransform,
          valDef: "inherit",
        },
        {
          attr: "text-align-vertical",
          val: stylesHover.textAlignVertical,
          valDef: "inherit",
        },
        {
          attr: "text-decoration",
          val: stylesHover.textDecoration,
          valDef: "none",
        },
        { attr: "transition", val: stylesHover.transition, valDef: "none" },
      ])}
    `}
  }
`;
