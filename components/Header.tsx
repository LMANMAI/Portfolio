import React, { useState } from "react";
import Link from "next/link";
import { HeaderElement, MenuContainer, MenuHeader, MenuLinks } from "../assets";
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
        <p> Lucas Maidana {"</>"}</p>

        <button onClick={() => handleClickMenu()}>
          <FiGrid />
        </button>
      </MenuHeader>

      <MenuContainer>
        <button onClick={() => handleClickMenu()}>
          <FiX />
        </button>
        <MenuLinks {{props:menuvalue}}>
          <Link href="/">
            <li>
              <FiHome /> Home
            </li>
          </Link>
          <Link href="/Proyects">
            <li>
              <FiUser />
              About
            </li>
          </Link>
          <Link href="/Contact">
            <li>
              <FiCode />
              Skills
            </li>
          </Link>
          <Link href="/Contact">
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
    </HeaderElement>
  );
};

export default Header;
