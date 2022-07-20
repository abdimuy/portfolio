import { useState } from "react";
import { Container, Image, Input, Link, Text } from "../../atoms";
import { images } from "../../../contants";
import AppWrapper from "../../../wrapper/AppWrapper";
import { headTextStyles, textProfile } from "../About/styles";
import {
  cardImageStyles,
  footerCardContainerStyles,
  footerCardHoverStyles,
  footerCardStyles,
  footerFormStyles,
  footerInputContainerStyles,
  footerInputStyles,
} from "./styles";
import { textHeaderStyles } from "../Header/styles";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Text styles={headTextStyles}>Take a coffee & chat with me</Text>

      <Container styles={footerCardContainerStyles}>
        <Container
          styles={footerCardStyles}
          hoverStyles={footerCardHoverStyles}
        >
          <Image src={images.email} alt="email" styles={cardImageStyles} />
          <Link to={"mailto:abdimuy@gmail.com"} styles={textProfile}>
            abdimuy@gmail.com
          </Link>
        </Container>
      </Container>
      <Container styles={footerFormStyles}>
        <Container styles={footerInputContainerStyles}>
          <Input placeHolder="Nombre" styles={footerInputStyles} />
        </Container>
        <Container styles={footerInputContainerStyles}>
          <Input placeHolder="Correo electrónico" styles={footerInputStyles} />
        </Container>
        <Container styles={footerInputContainerStyles}>
          <Input
            placeHolder="Mensaje"
            styles={{ ...footerInputStyles, height: "300px" }}
          />
        </Container>
      </Container>
    </>
  );
};

export default AppWrapper(Footer, "footer", {
  justifyContent: "center",
  alignItems: "center",
  padding: "5rem 0 0 0",
});
