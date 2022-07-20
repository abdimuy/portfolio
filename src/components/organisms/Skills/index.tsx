import React from "react";
import { Container, Image, Text } from "../../atoms";
import { motion } from "framer-motion";
import AppWrapper from "../../../wrapper/AppWrapper";
import "./styles.css";
import {
  headTextLineContainerStyles,
  headTextStyles,
  textBoldProfile,
  textProfile,
} from "../About/styles";
import {
  experienceContainerStyles,
  experienceYearContainerStyles,
  skillImageContainerStyles,
  skillImageContainerStylesHover,
  skillImageStyles,
  skillsContainerLarge,
  skillsContainerStyles,
} from "./styles";
import { skills } from "../../../store/skills";
import { images } from "../../../contants";
import { SECONDARY_COLOR } from "../../../contants/colors";
import { experiences } from "../../../store/experience";

const Skills = () => {
  return (
    <>
      <Container styles={headTextLineContainerStyles}>
        <Text styles={headTextStyles}>Skills & Experience</Text>
      </Container>

      <Container
        styles={skillsContainerStyles}
        stylesLarge={skillsContainerLarge}
      >
        <motion.div className="listSkills">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                margin: "1rem",
                transition: "all 0.3s ease-in-out",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
              key={skill.name}
            >
              <Container
                styles={{
                  ...skillImageContainerStyles,
                }}
                hoverStyles={skillImageContainerStylesHover}
              >
                <Image
                  styles={skillImageStyles}
                  src={skill.imageUrl}
                  alt={skill.name}
                />
              </Container>
              <Text
                styles={{
                  ...textProfile,
                  textAlign: "center",
                  lineHeight: "1",
                  fontWeight: "500",
                }}
              >
                {skill.name}
              </Text>
            </motion.div>
          ))}
        </motion.div>
        <Container
          styles={experienceContainerStyles}
          stylesLarge={{ margin: "1rem 0 0 0" }}
        >
          {experiences.map((experience) => (
            <motion.div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                margin: "1rem 0",
              }}
              key={experience.year}
            >
              <Container styles={experienceYearContainerStyles}>
                <Text styles={{ color: SECONDARY_COLOR, fontWeight: "700" }}>
                  {experience.year}
                </Text>
              </Container>
              <motion.div style={{ flex: 1 }}>
                {experience.works.map((work) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.7 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                      cursor: "poiner",
                    }}
                    key={work.name}
                  >
                    <Text styles={textBoldProfile}>{work.name}</Text>
                    <Text styles={textProfile}>{work.company}</Text>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default AppWrapper(
  Skills,
  "skills",
  {
    justifyContent: "center",
    alignItems: "center",
  },
  {},
  "white"
);
