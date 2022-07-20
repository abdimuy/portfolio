import React from "react";
import { Container, Image, Link, Span, Text } from "../../atoms";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import AppWrapper from "../../../wrapper/AppWrapper";
import {
  headTextBlueStyles,
  headTextLineContainerStyles,
  headTextsContainerStyles,
  headTextStyles,
  textBoldProfile,
  textProfile,
} from "../About/styles";
import {
  workContentStyles,
  workItemHoverStyles,
  workItemImageContainerStyles,
  workItemImateStyles,
  workItemStyles,
} from "./styles";
import { images } from "../../../contants";
import { WHITE_COLOR } from "../../../contants/colors";
import { works } from "../../../store/works";

const Work = () => {
  return (
    <Container styles={headTextsContainerStyles}>
      <Container styles={headTextLineContainerStyles}>
        <Text styles={headTextStyles}>
          My Creative
          <Span styles={headTextBlueStyles}>Porfolio</Span>
          <Span styles={headTextStyles}>Section</Span>
        </Text>
      </Container>

      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {works.map((work) => (
          <Container
            styles={workItemStyles}
            hoverStyles={workItemHoverStyles}
            key={work.title}
          >
            <Container styles={workItemImageContainerStyles}>
              <Image src={work.imageUrl} styles={workItemImateStyles} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "0.5rem",
                  opacity: 0,
                  transition: "all 0.3s ease",
                }}
              >
                <Link to="https://github.com/abdimuy" target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.25 }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "#fff",
                      borderRadius: "50%",
                      margin: "1rem",
                      fontWeight: 800,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <AiFillEye
                      style={{
                        width: "50%",
                        height: "50%",
                        color: WHITE_COLOR,
                      }}
                    />
                  </motion.div>
                </Link>
                <Link to={work.githubUrl} target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.25 }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "#fff",
                      borderRadius: "50%",
                      margin: "1rem",
                      fontWeight: 800,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <AiFillGithub
                      style={{
                        width: "50%",
                        height: "50%",
                        color: WHITE_COLOR,
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            </Container>

            <Container styles={workContentStyles}>
              <Text styles={textBoldProfile}>{work.title}</Text>
              <Text styles={textProfile}>{work.description}</Text>
            </Container>
          </Container>
        ))}
      </motion.div>
    </Container>
  );
};

export default AppWrapper(Work, "work", { padding: "30px" });
