import React, { useState } from "react";
import Link from "next/link";
import {
  HeaderElement,
  MenuContainer,
  MenuHeader,
  MenuLinks,
  Button,
} from "../assets";
import {
  FiHome,
  FiUser,
  FiCode,
  FiGrid,
  FiFolder,
  FiSend,
  FiX,
  FiImage,
} from "react-icons/fi";
interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const [menuvalue, setMenuValue] = useState(false);

  const handleClickMenu = () => {
    setMenuValue(!menuvalue);
  };

  return (
    <HeaderElement>
      <MenuHeader>
        <p> Lucas_Maidana</p>

        <Button onClick={() => handleClickMenu()}>
          <FiGrid />
        </Button>

        <MenuContainer menuvalue={menuvalue}>
          <Button onClick={() => handleClickMenu()}>
            <FiX />
          </Button>

          <MenuLinks>
            <Link href="/">
              <li>
                <FiHome /> Home
              </li>
            </Link>
            <Link href="/AboutMe">
              <li>
                <FiUser />
                About
              </li>
            </Link>
            <Link href="/Skills">
              <li>
                <FiCode />
                Skills
              </li>
            </Link>
            <Link href="/Portfolio">
              <li>
                <FiImage />
                Portfolio
              </li>
            </Link>
            <Link href="/Contact">
              <li>
                <FiSend />
                Contact
              </li>
            </Link>
            <Link href="#!">
              <li>
                <FiFolder />
                Experience
              </li>
            </Link>
          </MenuLinks>
        </MenuContainer>
      </MenuHeader>
    </HeaderElement>
  );
};

export default Header;
