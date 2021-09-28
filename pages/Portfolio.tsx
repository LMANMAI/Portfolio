import React, { useState } from "react";
import {
  PortfolioContainer,
  SkillsNavContainer,
  ProyectsContainer,
  Proyect,
  ProyectName,
} from "../assets";
import { useRouter } from "next/router";
interface IProyects {
  height: Number;
  proyectType: String;
  name: String;
  image: String;
  link: String;
  linkGitHub: String;
  technologies: [String];
}
const ProyectsPage = ({ proyectsPortfolio }) => {
  console.log("desde el navegador", proyectsPortfolio.proyects);
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
    <PortfolioContainer>
      <SkillsNavContainer>
        <button onClick={() => handleClick("all")}>All</button>
        <button onClick={() => handleClick("FE")}>Front End</button>
        <button onClick={() => handleClick("BE")}>Back End</button>
        <button onClick={() => handleClick("challenge")}>Challenges</button>
      </SkillsNavContainer>
      <ProyectsContainer>
        {React.Children.toArray(
          items.map((proyecto) => (
            <Proyect
              key={proyecto.name}
              height={proyecto.height}
              onClick={() => router.push(`/proyect/${proyecto._id}`)}
            >
              <img src={proyecto.image} alt={proyecto.name} />
              <ProyectName>{proyecto.name}</ProyectName>
            </Proyect>
          ))
        )}
      </ProyectsContainer>
    </PortfolioContainer>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch("https://portfolio-api-lucas.herokuapp.com/proyects");
  const data = await res.json();
  console.log("lo que llega de la api es: ", data);
  return {
    props: {
      proyectsPortfolio: data,
    },
  };
};

export default ProyectsPage;
