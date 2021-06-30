import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import { getSkills } from "../firebase/skills";
const Skills = () => {
  useEffect(() => {
    getSkills();
  }, []);
  return (
    <section>
      <div>
        <button>All</button>
        <button>Front End</button>
        <button> Back End</button>
      </div>

      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Exprees</li>
        <li>Nest.js</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        <li>Git</li>
        <li>CSS</li>
        <li>SASS</li>
      </ul>
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
