import React from "react";
import { Container } from "../../atoms";
import { NavigationDotsProps } from "./types";
import { Link } from "../../atoms";
import { GRAY_COLOR, SECONDARY_COLOR } from "../../../contants/colors";
import { pointersNavContainer } from "./styles";

const NavigationDots = ({ active }: NavigationDotsProps) => {
  return (
    <Container styles={pointersNavContainer}>
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <Link
          to={`#${item}`}
          key={item + index}
          styles={{
            color: active === item ? SECONDARY_COLOR : GRAY_COLOR + "55",
            fontSize: active === item ? "30px" : "20px",
          }}
        >
          ●
        </Link>
      ))}
    </Container>
  );
};

export default NavigationDots;
