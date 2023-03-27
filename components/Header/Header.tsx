import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SocialButton } from "assets";
import { NavContainer, Navigation, ButtonDownloadContainer } from "./styles";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const [menuvalue, setMenuValue] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMenuValue(false);
  }, []);
  const handleClickMenu = () => {
    setMenuValue(!menuvalue);
  };
  const mesage = `I haven't had an experience with it yet, but I'd really appreciate it if you would give me a chance! Thank you 🤟`;

  const handleJob = () => {
    setOpen(!open);
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

      <Navigation>
        <ul>
          <Link href="/">
            <li onClick={() => handleClickMenu()}>Home</li>
          </Link>
          <Link href="#experience">
            <li onClick={() => handleJob()}>Experience</li>
          </Link>
          <Link href="/#skills">
            <li onClick={() => handleClickMenu()}>Skills</li>
          </Link>
          <Link href="/#proyects">
            <li onClick={() => handleClickMenu()}>Portfolio</li>
          </Link>
          <Link href="/#contact">
            <li onClick={() => handleClickMenu()}>Contact</li>
          </Link>
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
      </ButtonDownloadContainer>
    </NavContainer>
  );
};

export default Header;
