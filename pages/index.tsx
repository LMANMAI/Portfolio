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
          Soy técnico en Informática ,poseo conocimiento y formación sobre
          distintas tecnologías y lenguajes de programación, me interesa poder
          trabajar en una empresa que me permita seguir desarrollándome en este
          área. Me gusta trabajar en equipo, y creo que es importante para crear
          entre todos un buen ambiente laboral.
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
    </AboutMeContainer>
  );
}
