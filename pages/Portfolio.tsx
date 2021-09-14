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
    img: "https://3.bp.blogspot.com/-74nn-cQOCLo/W0fid6SoaMI/AAAAAAAAbUA/IjWIC1muWvAPKW2fcd01KnAPuG9MHXEBACLcBGAs/s1600/pp%2B%25282%2529.jpg",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 250,
    proyectType: "FE",
    name: "ToDo App",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/ToDo.png?alt=media&token=26c2ed0c-6f3d-4043-acec-8ccdd374c152",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 235,
    proyectType: "FE",
    name: "Wallet Dashboard",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/wallet.webp?alt=media&token=3bb4dba3-14a9-4d9a-ae8e-ca3f26457d6d",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 205,
    proyectType: "FE",
    name: "Sneakers Commerce",
    img: "https://media.gq.com.mx/photos/5ec6fb6f8f66c26af399afd9/16:9/w_1920,c_limit/COVER%20SNEAKERS.jpg",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 190,
    proyectType: "FE",
    name: "Disney + Clone",
    img: "https://prod-static.disney-plus.net/assets/product/disneyplus/images/share-default.14fadd993578b9916f855cebafb71e62.png",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 225,
    proyectType: "FE",
    name: "Clima",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/clima.jpg?alt=media&token=c0528c92-15b0-4397-86b8-74866429fe17",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 300,
    proyectType: "FE",
    name: "Netflix Clone",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/netflix.png?alt=media&token=bfa8db95-11ea-40b3-94a5-cec5d8a0774b",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 275,
    proyectType: "BE",
    name: "ToDo API",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/apirest.jpg?alt=media&token=79ee2e43-9bf3-4e32-9765-7ae364118924",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 246,
    proyectType: "BE",
    name: "Sneaker API",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/sneakers.jpg?alt=media&token=c5338523-f3a2-4349-aae6-9a0d4d910944",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 200,
    proyectType: "BE",
    name: "Burger Api",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/burgerapi.png?alt=media&token=a50aff8f-7852-4ae5-baf7-db4e231b4577",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 375,
    proyectType: "FE",
    name: "Images App",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/images.png?alt=media&token=b4ff9183-6eed-4597-b61d-3fb793eb245e",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 275,
    proyectType: "challenge",
    name: "MeLi Challenge",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/challenge.jpg?alt=media&token=a9760e2f-1bb5-41d9-8d18-a28e170ce28c",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 150,
    proyectType: "challenge",
    name: "Basement Challenge",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/challenge.jpg?alt=media&token=a9760e2f-1bb5-41d9-8d18-a28e170ce28c",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 450,
    proyectType: "FE",
    name: "Burger Landing",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/burger.jpg?alt=media&token=0da81932-cdb0-4f91-b7fe-b70a0d8615b6",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 175,
    proyectType: "challenge",
    name: "AeroLab Challenge",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/challenge.jpg?alt=media&token=a9760e2f-1bb5-41d9-8d18-a28e170ce28c",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 150,
    proyectType: "challenge",
    name: "RealTrends Challenge",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/challenge.jpg?alt=media&token=a9760e2f-1bb5-41d9-8d18-a28e170ce28c",
    link: "",
    linkGitHub: "",
    technologies: "",
  },
  {
    height: 225,
    proyectType: "challenge",
    name: "Quorum Challenge",
    img: "https://firebasestorage.googleapis.com/v0/b/portfoliodb-b259d.appspot.com/o/challenge.jpg?alt=media&token=a9760e2f-1bb5-41d9-8d18-a28e170ce28c",
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
              <img src={proyecto.img} alt={proyecto.name} />
              <p>{proyecto.name}</p>
            </Proyect>
          ))
        )}
      </ProyectsContainer>
    </PortfolioContainer>
  );
};

export default ProyectsPage;
