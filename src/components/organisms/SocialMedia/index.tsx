import React from "react";
import { BsGithub } from "react-icons/bs";
import { WHITE_COLOR } from "../../../contants/colors";
import { Container, Link } from "../../atoms";
import { iconSocialStyles, iconSocialStylesHover } from "./styles";

const SocialMedia = () => {
  return (
    <Container
      styles={{
        display: "flex",
        gap: "10px",
        padding: "20px",
        alignSelf: "flex-end",
      }}
      stylesLarge={{ display: "flex" }}
    >
      <Container
        styles={iconSocialStyles}
        hoverStyles={iconSocialStylesHover}
        aditionalStyles={"&:hover {color: " + WHITE_COLOR + "}"}
      >
        <Link to="https://github.com/abdimuy" target="_blank">
          <BsGithub size={17} />
        </Link>
      </Container>
    </Container>
  );
};

export default SocialMedia;
