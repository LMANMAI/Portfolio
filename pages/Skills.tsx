import React from "react";
import { GetServerSideProps } from "next";
import { PanelContainer, Panel } from "../assets";
const skills_Array = [
  { nombre: "JavaScript", category: "FE" },
  { nombre: "TypeScript", category: "FE" },
  { nombre: "React.js", category: "FE" },
  { nombre: "Next.js", category: "FE" },
  { nombre: "Node.js", category: "BE" },
  { nombre: "Exprees", category: "BE" },
  { nombre: "Nest.js", category: "BE" },
  { nombre: "MongoDB", category: "BE" },
  { nombre: "Firebase", category: "BE" },
  { nombre: "Git", category: "BE" },
  { nombre: "CSS", category: "FE" },
  { nombre: "SASS", category: "FE" },
];
const Skills = () => {
  return (
    <section>
      <h2>My Skills</h2>
      <PanelContainer>
        <Panel>
          <h3>Front End</h3>
          {skills_Array
            .filter((skill) => skill.category === "FE")
            .map((filteredSkill) => (
              <div>{filteredSkill.nombre}</div>
            ))}
        </Panel>
        <Panel>
          <h3>Back End</h3>
          {skills_Array
            .filter((skill) => skill.category === "BE")
            .map((filteredSkill) => (
              <div>{filteredSkill.nombre}</div>
            ))}
        </Panel>
      </PanelContainer>
    </section>
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
