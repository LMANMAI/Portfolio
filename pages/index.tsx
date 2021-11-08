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

export default function Home() {
  return (
    <AboutMeContainer>
      <Circle>{/* <img src="" alt="Profile" /> */}</Circle>

      <Presentiation>
        <p>
          Hi there I'm <span>Lucas</span>!
        </p>
        <p>
          I'm Developer based in AR, constly learning about frontend , I use the
          MERN stack with typescript, I also know Next.js and i really want to
          start working as a developer and keep learning. 🌱 I’m currently
          learning TypeScript and better practices on my code.
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
        <SocialButton href="/Contact">
          <SiMinutemailer />
        </SocialButton>
      </Social>
      <hr />
      <div className="button_download_container">
        <SocialButton className="download_btn" href="../assets/cv.pdf" download>
          Download CV
        </SocialButton>
      </div>
    </AboutMeContainer>
  );
}
