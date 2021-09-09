import React from "react";
import {
  PortfolioContainer,
  SkillsNavContainer,
  ProyectsContainer,
  Proyect,
} from "../assets";
const proyectsPortfolio = [
  {
    height: 150,
    name: "Pokedex",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 250,
    name: "ToDo App",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 235,
    name: "Wallet Dashboard",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 205,
    name: "Sneakers Commerce",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 190,
    name: "Disney + Clone",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 300,
    name: "Netflix Clone",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 275,
    name: "ToDo API",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 246,
    name: "Sneaker API",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 200,
    name: "Burger Api",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 375,
    name: "Images App",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 175,
    name: "Pokedex",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 150,
    name: "ToDo App",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
];
const ProyectsPage: React.FC = () => {
  const handleClick = (message: string) => {
    alert(message);
  };
  return (
    <PortfolioContainer>
      <SkillsNavContainer>
        <button onClick={() => handleClick("all")}>All</button>
        <button onClick={() => handleClick("Front End")}>Front End</button>
        <button onClick={() => handleClick("Back End")}>Back End</button>
        <button onClick={() => handleClick("Challenges")}>Challenges</button>
      </SkillsNavContainer>
      <ProyectsContainer>
        {React.Children.toArray(
          proyectsPortfolio.map((proyecto) => (
            <Proyect key={proyecto.name} data-height={proyecto.height}>
              <p>{proyecto.name}</p>
            </Proyect>
          ))
        )}
      </ProyectsContainer>
    </PortfolioContainer>
  );
};

export default ProyectsPage;
