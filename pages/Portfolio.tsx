import React from "react";
import {
  PortfolioContainer,
  SkillsNavContainer,
  ProyectsContainer,
  Proyect,
} from "../assets";
const proyectsPortfolio = [
  {
    height: "150px",
    name: "Pokedex",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: "250px",
    name: "ToDo App",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: "235px",
    name: "Wallet Dashboard",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: "205px",
    name: "Sneakers Commerce",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: "190px",
    name: "Disney + Clone",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: "300px",
    name: "Netflix Clone",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: "275px",
    name: "ToDo API",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: "246px",
    name: "Sneaker API",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: "200px",
    name: "Burger Api",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: "375px",
    name: "Images App",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: "175px",
    name: "Pokedex",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: "150px",
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
        <button onClick={() => handleClick("Front end proyects")}>
          Front End
        </button>
        <button onClick={() => handleClick("Back End proyects")}>
          {" "}
          Back End
        </button>
      </SkillsNavContainer>
      <ProyectsContainer>
        {React.Children.toArray(
          proyectsPortfolio.map((proyecto) => (
            <Proyect key={proyecto.name} heigth={proyecto.height}>
              {proyecto.name}
            </Proyect>
          ))
        )}
      </ProyectsContainer>
    </PortfolioContainer>
  );
};

export default ProyectsPage;
