import { Container, Image, Span, Text } from "../../atoms";
import { motion } from "framer-motion";
import { images } from "../../../contants";
import {
  headTextStyles,
  headTextLineContainerStyles,
  headTextBlueStyles,
  headTextsContainerStyles,
  profilesContainerStyles,
  imageProfileStyles,
  textBoldProfile,
  textProfile,
} from "./styles";
import AppWrapper from "../../../wrapper/AppWrapper";
import { abouts } from "../../../store/abouts";

const About = () => {
  return (
    <Container
      id="about"
      styles={{ alignItems: "center", width: "-webkit-fill-available" }}
    >
      <Container styles={headTextsContainerStyles}>
        <Container styles={headTextLineContainerStyles}>
          <Text styles={headTextStyles}>
            I Know That <Span styles={headTextBlueStyles}>Good apps</Span>
          </Text>
        </Container>
        <Container styles={headTextLineContainerStyles}>
          <Text styles={headTextStyles}>
            means <Span styles={headTextBlueStyles}>Good business</Span>
          </Text>
        </Container>
      </Container>
      <Container styles={profilesContainerStyles}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            key={about.title + index}
            style={{
              width: 190,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              margin: "2rem",
              gap: 10,
            }}
          >
            <Image styles={imageProfileStyles} src={about.imageUrl} />
            <Text styles={textBoldProfile}>{about.title}</Text>
            <Text styles={textProfile}>{about.description}</Text>
          </motion.div>
        ))}
      </Container>
    </Container>
  );
};

export default AppWrapper(
  About,
  "about",
  { padding: "30px 0 0 0" },
  {},
  "white"
);
