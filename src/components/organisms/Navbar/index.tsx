import React, { useState } from "react";
import { Image, Nav, ItemListUl, ListUl, Container } from "../../atoms";
import { images } from "../../../contants";
import Link from "../../atoms/Link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  stylesListUl,
  NavbarStyles,
  stylesImage,
  stylesImageLarge,
  linkStyles,
  linkStylesHover,
  pointStyles,
  pointStylesAditional,
  NavbarItemStyles,
  navbarMenuIcon,
  stylesListNavbar,
} from "./styles";
import { LIGTHGRAY_COLOR } from "../../../contants/colors";

const navbarItems = ["home", "about", "work", "skills", "footer"];

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <Nav styles={NavbarStyles}>
      <Image
        src={images.logo}
        alt="Logo"
        styles={stylesImage}
        stylesLarge={stylesImageLarge}
      />
      <ListUl styles={stylesListUl} stylesLarge={{ display: "flex" }}>
        {navbarItems.map((item) => (
          <ItemListUl
            styles={NavbarItemStyles}
            aditionalStyles={pointStylesAditional}
            key={item}
          >
            <Container styles={pointStyles} />
            <Link
              styles={linkStyles}
              stylesHover={linkStylesHover}
              to={`#${item}`}
            >
              {item}
            </Link>
          </ItemListUl>
        ))}
      </ListUl>

      <Container>
        {!toggle && (
          <Container
            styles={navbarMenuIcon}
            stylesLarge={{ display: "none" }}
            onClick={() => setToggle(true)}
          >
            <HiMenuAlt4 style={{ color: "white" }} />
          </Container>
        )}
        {toggle && (
          // <Container styles={stylesListNavbar}>
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              justifyContent: "flex-start",
              position: "fixed",
              width: "80%",
              zIndex: "5",
              top: "0",
              right: "0",
              bottom: "0",
              backgroundSize: "cover",
              backgroundRepeat: "repeat",
              backgroundColor: "gray",
              height: "100vh",
              background: LIGTHGRAY_COLOR,
            }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ListUl styles={stylesListNavbar}>
              {navbarItems.map((item) => (
                <ItemListUl
                  // styles={stylesListNavbar}
                  // aditionalStyles={pointStylesAditional}
                  key={item}
                >
                  <Container styles={pointStyles} />
                  <Link
                    styles={linkStyles}
                    stylesHover={linkStylesHover}
                    to={`#${item}`}
                  >
                    {item}
                  </Link>
                </ItemListUl>
              ))}
            </ListUl>
          </motion.div>
          // </Container>
        )}
      </Container>
    </Nav>
  );
};

export default Navbar;
