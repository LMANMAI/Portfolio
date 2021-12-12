import React from "react";
import {
  AboutMeContainer,
  Circle,
  Presentiation,
  Social,
  SocialButton,
} from "../assets";
import { SiMinutemailer } from "react-icons/si";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import Skills from "./Skills";
import Contact from "./Contact";
export default function Home() {
  return (
    <>
      <AboutMeContainer id="/">
        <Circle>
          <img src="../assets/image.jpg" alt="Profile Picture" loading="lazy" />
        </Circle>
        <Presentiation>
          <p>
            Hi there I'm <span className="name">Lucas</span>!
          </p>
          <p>
            I'm Developer based in AR, constly learning about frontend , I use
            the MERN stack with typescript, I also know Next.js and i really
            want to start working as a developer and keep learning. 🌱 I’m
            currently learning TypeScript and better practices for my code.
          </p>
        </Presentiation>
        <hr />
        <Social>
          <SocialButton
            href="https://www.linkedin.com/in/lucas-maidana13/"
            target="_blank"
          >
            <TiSocialLinkedin />
          </SocialButton>
          <SocialButton href="https://github.com/LMANMAI" target="_blank">
            <TiSocialGithub />
          </SocialButton>
          <SocialButton href="#contact">
            <SiMinutemailer />
          </SocialButton>
        </Social>
        <hr />
        <div className="button_download_container">
          <SocialButton
            href="lucasmaidanacv.pdf"
            download="LucasMaidanaCV.pdf"
            className="download_btn"
          >
            <button>Download Resume</button>
          </SocialButton>
          <SocialButton
            className="download_btn"
            href="https://calendly.com/lucasmaidana/meeting"
            target="_blank"
          >
            Set Meeting
          </SocialButton>
        </div>
      </AboutMeContainer>
      <Skills />
      <Contact />
    </>
  );
}
