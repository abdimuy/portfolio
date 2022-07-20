import React from "react";
import { Container } from "../components/atoms";
import { ContainerStyles } from "../components/atoms/Container/types";
import { NavigationDots } from "../components/molecules";
import { SocialMedia } from "../components/organisms";
import { AppWrapperParams } from "./types";

const AppWrapper =
  (
    Component: any,
    idName: string,
    styles: ContainerStyles,
    stylesLarge: ContainerStyles = {},
    bgColor?: "white" | "blueLigth"
  ) =>
  () => {
    return (
      <Container
        id={idName}
        styles={{
          width: "100%",
          // height: "100vh",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: bgColor === "white" ? "#fef4f5" : "edf2f8",
        }}
        stylesLarge={{ minHeight: "100vh" }}
      >
        <SocialMedia />
        <Container
          styles={{ width: "100%", ...styles }}
          stylesLarge={stylesLarge}
        >
          <Component />
        </Container>
        <NavigationDots active={idName} />
      </Container>
    );
  };
export default AppWrapper;
