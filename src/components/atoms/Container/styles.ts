import { css } from "styled-components";
import { ContainerProps } from "./types";
import { validAtribute } from "../../../utils";

export default css<ContainerProps>`
  ${({ styles = {} }) => css`
    display: ${styles.display || "flex"};
    flex-direction: ${styles.flexDirection || "column"};
    flex-wrap: ${styles.flexWrap || "nowrap"};
    justify-content: ${styles.justifyContent || "flex-start"};
    align-items: ${styles.alignItems || "flex-start"};
    align-content: ${styles.alignContent || "flex-start"};
    align-self: ${styles.alignSelf || "auto"};
    flex: ${styles.flex || "0 1 auto"};
    margin: ${styles.margin || "0"};
    padding: ${styles.padding || "0"};
    width: ${styles.width || "auto"};
    height: ${styles.height || "auto"};
    min-width: ${styles.minWidth || "0"};
    max-width: ${styles.maxWidth || "none"};
    min-height: ${styles.minHeight || "0"};
    max-height: ${styles.maxHeight || "none "};
    background-color: ${styles.backgroundColor || "transparent"};
    backdrop-filter: ${styles.backdropFilter || "none"};
    border: ${styles.border || "none"};
    border-radius: ${styles.borderRadius || "0"};
    box-shadow: ${styles.boxShadow || "none"};
    overflow: ${styles.overflow || "visible"};
    position: ${styles.position || "relative"};
    -webkit-backdrop-filter: ${styles.backdropFilter || "none"};
    z-index: ${styles.zIndex || "auto"};
    top: ${styles.top || "unset"};
    left: ${styles.left || "unset"};
    right: ${styles.rigth || "unset"};
    bottom: ${styles.bottom || "unset"};
    background: ${styles.background ? `url(${styles.background})` : ""};
    background-size: ${styles.backgroundSize || "cover"};
    background-repeat: ${styles.backgroundRepeat || "none"};
    box-sizing: ${styles.boxSizing || "border-box"};
    gap: ${styles.gap || "0px"};
    transition: ${styles.transition || ""};
    cursor: ${styles.cursor || "auto"};
  `}

  &:hover {
    ${({ hoverStyles = {} }) => css`
      ${validAtribute([
        { attr: "display", val: hoverStyles.display, valDef: "flex" },
        {
          attr: "flex-direction",
          val: hoverStyles.flexDirection,
          valDef: "column",
        },
        { attr: "flex wrap", val: hoverStyles.flexWrap, valDef: "nowrap" },
        {
          attr: "justify-content",
          val: hoverStyles.justifyContent,
          valDef: "flex-start",
        },
        {
          attr: "align-items",
          val: hoverStyles.alignItems,
          valDef: "flex-start",
        },
        {
          attr: "align-content",
          val: hoverStyles.alignContent,
          valDef: "flex-start",
        },
        { attr: "align-self", val: hoverStyles.alignSelf, valDef: "auto" },
        { attr: "flex", val: hoverStyles.flex, valDef: "0 1 auto" },
        { attr: "margin", val: hoverStyles.margin, valDef: "0" },
        { attr: "padding", val: hoverStyles.padding, valDef: "0" },
        { attr: "width", val: hoverStyles.width, valDef: "auto" },
        { attr: "height", val: hoverStyles.height, valDef: "auto" },
        { attr: "min-width", val: hoverStyles.minWidth, valDef: "0" },
        { attr: "max-width", val: hoverStyles.maxWidth, valDef: "none" },
        { attr: "min-height", val: hoverStyles.minHeight, valDef: "0" },
        { attr: "max-height", val: hoverStyles.maxHeight, valDef: "none" },
        {
          attr: "background-color",
          val: hoverStyles.backgroundColor,
          valDef: "transparent",
        },
        {
          attr: "backdrop-filter",
          val: hoverStyles.backdropFilter,
          valDef: "none",
        },
        { attr: "border", val: hoverStyles.border, valDef: "none" },
        { attr: "border-radius", val: hoverStyles.borderRadius, valDef: "0" },
        { attr: "box-shadow", val: hoverStyles.boxShadow, valDef: "none" },
        { attr: "overflow", val: hoverStyles.overflow, valDef: "visible" },
        { attr: "position", val: hoverStyles.position, valDef: "relative" },
        { attr: "z-index", val: hoverStyles.zIndex, valDef: "auto" },
        { attr: "gao", val: hoverStyles.gap, valDef: "0px" },
        { attr: "transition", val: hoverStyles.transition, valDef: "" },
        { attr: "cursor", val: hoverStyles.cursor, valDef: "auto" },
      ])}
    `}
  }

  @media screen and (min-width: 1007px) {
    ${({ stylesLarge = {} }) => css`
      ${validAtribute([
        { attr: "display", val: stylesLarge.display, valDef: "flex" },
        {
          attr: "flex-direction",
          val: stylesLarge.flexDirection,
          valDef: "column",
        },
        { attr: "flex wrap", val: stylesLarge.flexWrap, valDef: "nowrap" },
        {
          attr: "justify-content",
          val: stylesLarge.justifyContent,
          valDef: "flex-start",
        },
        {
          attr: "align-items",
          val: stylesLarge.alignItems,
          valDef: "flex-start",
        },
        {
          attr: "align-content",
          val: stylesLarge.alignContent,
          valDef: "flex-start",
        },
        { attr: "align-self", val: stylesLarge.alignSelf, valDef: "auto" },
        { attr: "flex", val: stylesLarge.flex, valDef: "0 1 auto" },
        { attr: "margin", val: stylesLarge.margin, valDef: "0" },
        { attr: "padding", val: stylesLarge.padding, valDef: "0" },
        { attr: "width", val: stylesLarge.width, valDef: "auto" },
        { attr: "height", val: stylesLarge.height, valDef: "auto" },
        { attr: "min-width", val: stylesLarge.minWidth, valDef: "0" },
        { attr: "max-width", val: stylesLarge.maxWidth, valDef: "none" },
        { attr: "min-height", val: stylesLarge.minHeight, valDef: "0" },
        { attr: "max-height", val: stylesLarge.maxHeight, valDef: "none" },
        {
          attr: "background-color",
          val: stylesLarge.backgroundColor,
          valDef: "transparent",
        },
        {
          attr: "backdrop-filter",
          val: stylesLarge.backdropFilter,
          valDef: "none",
        },
        { attr: "border", val: stylesLarge.border, valDef: "none" },
        { attr: "border-radius", val: stylesLarge.borderRadius, valDef: "0" },
        { attr: "box-shadow", val: stylesLarge.boxShadow, valDef: "none" },
        { attr: "overflow", val: stylesLarge.overflow, valDef: "visible" },
        { attr: "position", val: stylesLarge.position, valDef: "relative" },
        { attr: "z-index", val: stylesLarge.zIndex, valDef: "auto" },
        { attr: "gap", val: stylesLarge.gap, valDef: "0px" },
        { attr: "transition", val: stylesLarge.transition, valDef: "" },
        { attr: "cursor", val: stylesLarge.cursor, valDef: "auto" },
      ])}
    `}
  }

  ${({ aditionalStyles }) => aditionalStyles}
`;
