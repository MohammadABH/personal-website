import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";
import { AiFillGithub } from "react-icons/all";

import avatar from "../images/avatar.jpg";

const NavBar = () => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  return (
    <Segment inverted>
      <Menu pointing secondary inverted size="massive">
        <Container>
          <Menu.Item name="avatar">
            <img
              src={avatar}
              alt="avatar"
              style={{
                borderRadius: "50%",
              }}
            />
          </Menu.Item>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={() => setActiveItem("home")}
            as={Link}
            to="/"
          />
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={() => setActiveItem("about")}
            as={Link}
            to="/about"
          />
          <Menu.Item
            name="extra"
            active={activeItem === "extra"}
            onClick={() => setActiveItem("extra")}
          />
          <Menu.Item
            name="github"
            position="right"
            as={Link}
            to={{ pathname: "https://github.com/MohammadABH/" }}
            target="_blank"
          >
            <AiFillGithub />
          </Menu.Item>
        </Container>
      </Menu>
    </Segment>
  );
};

export default NavBar;
