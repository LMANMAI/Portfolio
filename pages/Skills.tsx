import React from "react";
import {
  PanelContainer,
  Panel,
  Separador,
  Skill,
  SkillContainer,
  CircleBackground,
  CircleBackgroundRight,
  CircleBackground3,
} from "../assets";
const skills_Array = [
  {
    certificate: true,
    curso: ["Udemy", "YouTube", "Platzi"],
    nombre: "JavaScript",
    category: "FE",
  },
  {
    certificate: true,
    curso: ["Udemy", "codigo facilito", "Documentation"],
    nombre: "TypeScript",
    category: "FE",
  },
  {
    certificate: false,
    curso: ["Udemy", "Youtube", "Twicht", "Documentation"],
    nombre: "React.js",
    category: "FE",
  },
  {
    certificate: false,
    curso: ["Udemy", "Youtube", "Twicht", "Documentation"],
    nombre: "Next.js",
    category: "FE",
  },
  {
    certificate: false,
    curso: ["Udemy", "Platzi"],
    nombre: "Node.js",
    category: "BE",
  },
  { certificate: false, curso: ["Udemy"], nombre: "Exprees", category: "BE" },
  { certificate: false, curso: ["YouTube"], nombre: "Nest.js", category: "BE" },
  {
    certificate: false,
    curso: ["Udemy", "YouTube", "Documentation"],
    nombre: "MongoDB",
    category: "BE",
  },
  { certificate: false, curso: ["Udemy"], nombre: "Firebase", category: "BE" },
  {
    certificate: false,
    curso: ["Platzi", "Udemy"],
    nombre: "Git",
    category: "BE",
  },
  {
    certificate: true,
    curso: ["Udemy", "Youtube"],
    nombre: "CSS",
    category: "FE",
  },
  { certificate: true, curso: ["Udemy"], nombre: "SASS", category: "FE" },
];
import { BiBadgeCheck } from "react-icons/bi";
const Skills = () => {
  return (
    <PanelContainer id="skils">
      <h2>Some of my Skills</h2>
      <Panel>
        {skills_Array.map((skill, index) => (
          <Skill key={index}>
            <div className="skil_tittle">
              <p>{skill.nombre}</p>
              {skill.certificate && <BiBadgeCheck />}
            </div>
            <Separador></Separador>
            <SkillContainer>
              {skill.curso.map((curso) => (
                <p className="skil_name">{curso}</p>
              ))}
            </SkillContainer>
          </Skill>
        ))}
      </Panel>
      <CircleBackground />
      <CircleBackgroundRight />
      <CircleBackground3 />
    </PanelContainer>
  );
};

export default Skills;
