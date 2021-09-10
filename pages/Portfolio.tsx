import React, { useState } from "react";
import {
  PortfolioContainer,
  SkillsNavContainer,
  ProyectsContainer,
  Proyect,
} from "../assets";
const proyectsPortfolio = [
  {
    height: 150,
    proyectType: "FE",
    name: "Pokedex",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 250,
    proyectType: "FE",
    name: "ToDo App",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 235,
    proyectType: "FE",
    name: "Wallet Dashboard",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 205,
    proyectType: "FE",
    name: "Sneakers Commerce",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 190,
    proyectType: "FE",
    name: "Disney + Clone",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 300,
    proyectType: "FE",
    name: "Netflix Clone",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 275,
    proyectType: "BE",
    name: "ToDo API",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 246,
    proyectType: "BE",
    name: "Sneaker API",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 200,
    proyectType: "BE",
    name: "Burger Api",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 375,
    proyectType: "FE",
    name: "Images App",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 175,
    proyectType: "challenge",
    name: "MeLi Challenge",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 150,
    proyectType: "challenge",
    name: "Basement Challenge",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 175,
    proyectType: "challenge",
    name: "AeroLab Challenge",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 150,
    proyectType: "challenge",
    name: "RealTrends Challenge",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
];
const ProyectsPage: React.FC = () => {
  const [items, setLayoutItems] = useState(proyectsPortfolio);
  const handleClick = (pType: string) => {
    if (pType === "all") {
      setLayoutItems(proyectsPortfolio);
      return;
    }
    const filteredData = proyectsPortfolio.filter(
      (items) => items.proyectType === pType
    );
    setLayoutItems(filteredData);
  };
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
            <Proyect key={proyecto.name} height={proyecto.height}>
              <p>{proyecto.name}</p>
            </Proyect>
          ))
        )}
      </ProyectsContainer>
    </PortfolioContainer>
  );
};

export default ProyectsPage;
