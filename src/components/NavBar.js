import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import { AiFillGithub } from "react-icons/all";

import avatar from "../images/avatar.jpg";

const NavBar = () => {
  const [active, setActive] = useState("home");
  return (
    <Menu pointing secondary size="massive">
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
          active={active === "home"}
          onClick={() => setActive("home")}
					as={Link}
					to="/"
        />
        <Menu.Item
          name="about"
          active={active === "about"}
          onClick={() => setActive("about")}
					as={Link}
					to="/about"
        />
        <Menu.Item
          name="extra"
          active={active === "extra"}
          onClick={() => setActive("extra")}
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
  );
};

export default NavBar;
