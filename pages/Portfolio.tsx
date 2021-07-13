import React from "react";
import {
  PortfolioContainer,
  SkillsNavContainer,
  ProyectsContainer,
} from "../assets";
const proyectsPortfolio = [
  { name: "Pokedex", img: "", link: "", linkGitHub: "", technologies: "" },
  { name: "ToDo App", img: "", link: "", linkGitHub: "", technologies: "" },
  {
    name: "Wallet Dashboard",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    name: "Sneakers Commerce",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    name: "Disney + Clone",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    name: "Netflix Clone",
    img: "",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  { name: "ToDo API", img: "", link: "", linkGitHub: "", technologies: "" },
  { name: "Sneaker API", img: "", link: "", linkGitHub: "", technologies: "" },
  { name: "Burger Api", img: "", link: "", linkGitHub: "", technologies: "" },
  { name: "Images App", img: "", link: "", linkGitHub: "", technologies: "" },
];
const ProyectsPage: React.FC = () => {
  return (
    <PortfolioContainer>
      <SkillsNavContainer>
        <button>All</button>
        <button>Front End</button>
        <button> Back End</button>
      </SkillsNavContainer>
      <ProyectsContainer>
        {React.Children.toArray(
          proyectsPortfolio.map((proyecto) => <div>{proyecto.name}</div>)
        )}
      </ProyectsContainer>
    </PortfolioContainer>
  );
};

export default ProyectsPage;
