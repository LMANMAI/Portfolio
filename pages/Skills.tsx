import React from "react";
import { GetServerSideProps } from "next";
import {
  PanelContainer,
  Panel,
  Separador,
  Skill,
  SkillContainer,
} from "../assets";
const skills_Array = [
  {
    certificate: true,
    curso: ["Udemy"],
    nombre: "JavaScript",
    category: "FE",
  },
  {
    certificate: true,
    curso: ["Udemy", "codigo facilito"],
    nombre: "TypeScript",
    category: "FE",
  },
  {
    certificate: false,
    curso: ["Udemy", "Youtube", "Twicht"],
    nombre: "React.js",
    category: "FE",
  },
  {
    certificate: false,
    curso: ["Udemy", "Youtube", "Twicht"],
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
    curso: ["Udemy", "YouTube"],
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
    <PanelContainer>
      <h2>My Skills</h2>
      <Panel>
        {React.Children.toArray(
          skills_Array.map((skill) => (
            <Skill>
              <div>
                {skill.nombre}
                {skill.certificate && <BiBadgeCheck />}
              </div>
              <Separador></Separador>
              <SkillContainer>
                {skill.curso.map((curso) => (
                  <p>{curso}</p>
                ))}
              </SkillContainer>
            </Skill>
          ))
        )}
      </Panel>
    </PanelContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...

  return {
    props: {
      //data: skills,
    },
  };
};
export default Skills;
