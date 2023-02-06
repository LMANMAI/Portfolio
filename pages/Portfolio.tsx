import React, { useState } from "react";
import {
  PortfolioContainer,
  SkillsNavContainer,
  ProyectsContainer,
  Proyect,
  ProyectName,
} from "../assets";
import { useRouter } from "next/router";

//animacion
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 0.95,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const ProyectsPage = ({ proyectsPortfolio }) => {
  const [items, setLayoutItems] = useState(proyectsPortfolio.proyects);
  const handleClick = (pType: string) => {
    if (pType === "all") {
      setLayoutItems(proyectsPortfolio.proyects);
      return;
    }
    const filteredData = proyectsPortfolio.proyects.filter(
      (items) => items.proyectType === pType
    );
    setLayoutItems(filteredData);
  };
  const router = useRouter();
  return (
    <>
      <h2>Some of my work</h2>
      <PortfolioContainer>
        <SkillsNavContainer>
          <button onClick={() => handleClick("all")}>All</button>
          <button onClick={() => handleClick("FE")}>Front End</button>
          <button onClick={() => handleClick("BE")}>Back End</button>
          <button onClick={() => handleClick("challenge")}>Challenges</button>
        </SkillsNavContainer>
        <ProyectsContainer
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {React.Children.toArray(
            items.map((proyecto) => (
              <Proyect
                key={proyecto.name}
                height={proyecto.height}
                onClick={() => router.push(`/proyect/${proyecto._id}`)}
                className="item"
                variants={item}
              >
                <img src={proyecto.thumnail} alt={proyecto.name} />
                <ProyectName>{proyecto.name}</ProyectName>
              </Proyect>
            ))
          )}
        </ProyectsContainer>
      </PortfolioContainer>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://portfolio-api-rest.vercel.app/proyects");
  const data = await res.json();
  return {
    props: {
      proyectsPortfolio: data,
    },
  };
};

export default ProyectsPage;
