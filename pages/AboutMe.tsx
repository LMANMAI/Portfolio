import React from "react";
import { AboutMeContainer, Circle, Presentiation } from "../assets";
const AboutMePage: React.FC = () => {
  return (
    <AboutMeContainer>
      <Presentiation>
        <p>
          Hi there I'am <span>Lucas</span>
        </p>
        <h2>Front End Developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minus
          praesentium facere quam omnis aliquid quas dolor esse animi et, ullam
          minima pariatur sit recusandae. Expedita fugit enim laudantium itaque!
        </p>
      </Presentiation>
      <Circle>{/* <img src="" alt="Profile" /> */}</Circle>
    </AboutMeContainer>
  );
};

export default AboutMePage;
