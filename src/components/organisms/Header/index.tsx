import { Container, Image, Text } from "../../atoms";
import { motion } from "framer-motion";
import {
  headerBadgesStyles,
  badgeStyles,
  headerStyles,
  headerStylesLarge,
  tagStyles,
  textHeaderStyles,
  pTextStyles,
  circleCmpStyles,
  circleImageStyles,
} from "./styles";
import { images } from "../../../contants";
import AppWrapper from "../../../wrapper/AppWrapper";
import "./style.css";
import { WHITE_COLOR } from "../../../contants/colors";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <Container styles={headerStyles} stylesLarge={headerStylesLarge}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        style={{
          flex: 0.65,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <Container styles={headerBadgesStyles} stylesLarge={{ margin: "0" }}>
          <Container styles={badgeStyles}>
            <Text styles={{ fontSize: "40px" }}>👋</Text>
            <Container>
              <Text styles={pTextStyles}>Hello, I am</Text>
              <Text styles={textHeaderStyles}>Aldrich</Text>
            </Container>
          </Container>

          <Container styles={tagStyles}>
            <Text styles={pTextStyles}>Web developer</Text>
            <Text styles={pTextStyles}>Fullstack developer</Text>
          </Container>
        </Container>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        style={{
          flex: 0.65,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <Image
          src={images.profile}
          styles={{ objectFit: "contain", zindex: 1, height: "100%" }}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            width: "100%",
            height: "90%",
          }}
        ></motion.img>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        style={{
          flex: 0.75,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          height: "100%",
          marginLeft: "1rem",
        }}
        className="changeDirection"
      >
        <Container
          styles={{ ...circleCmpStyles, width: "100px", height: "100px" }}
        >
          <Image styles={circleImageStyles} src={images.python} alt="circle" />
        </Container>
        <Container
          styles={{
            ...circleCmpStyles,
            width: "150px",
            height: "150px",
            margin: "1.75rem",
          }}
        >
          <Image styles={circleImageStyles} src={images.react} alt="circle" />
        </Container>
        <Container
          styles={{ ...circleCmpStyles, width: "70px", height: "70px" }}
        >
          <Image styles={circleImageStyles} src={images.css} alt="circle" />
        </Container>
      </motion.div>
    </Container>
  );
};

export default AppWrapper(
  Header,
  "home",
  { backgroundColor: WHITE_COLOR },
  { height: "100vh" },
  "blueLigth"
);
