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
        <p> _LucasMaidana</p>

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
                <FiFolder />
                Portfolio
              </li>
            </Link>
            <Link href="/Contact">
              <li>
                <FiSend />
                Contact
              </li>
            </Link>
          </MenuLinks>
        </MenuContainer>
      </MenuHeader>
    </HeaderElement>
  );
};

export default Header;
