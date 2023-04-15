import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SocialButton } from "assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavContainer, Navigation, ButtonDownloadContainer } from "./styles";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const [menuvalue, setMenuValue] = useState(true);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMenuValue(false);
  }, []);
  const handleClickMenu = () => {
    setMenuValue(!menuvalue);
  };

  return (
    <NavContainer>
      <p
        onClick={() => {
          router.push("/");
        }}
      >
        {"< Lucas Manuel Maidana />"}
      </p>

      <Navigation open={open}>
        <ul>
          <li onClick={() => handleClickMenu()}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => handleClickMenu()}>
            <Link href="#experience">Experience</Link>
          </li>
          <li onClick={() => handleClickMenu()}>
            <Link href="/#skills">Skills</Link>
          </li>
          <li onClick={() => handleClickMenu()}>
            <Link href="/#proyects">Portfolio</Link>
          </li>
          <li onClick={() => handleClickMenu()}>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </Navigation>

      <ButtonDownloadContainer>
        <SocialButton
          href="lucasmaidanacv.pdf"
          download="LucasMaidanaCV.pdf"
          className="download_btn"
        >
          <button>Download Resume</button>
        </SocialButton>
        <div id="menu_boton" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </div>
      </ButtonDownloadContainer>
    </NavContainer>
  );
};

export default Header;
