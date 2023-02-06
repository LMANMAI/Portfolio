import React from "react";
import {
  SlugContainer,
  SlugTechnologies,
  Skill,
  SlugImgContainer,
  SlugDesc,
  SlugLinks,
} from "../../assets";
interface IProyectProp {
  name: string;
  link: string;
  linkGitHub: string;
  technologies: Array<string>;
  image: string;
  height: number;
  proyectType: string;
  desc: string;
}
const ProyectPage = (props: { proyect: IProyectProp }) => {
  const { proyect } = props;
  return (
    <>
      <h2>{proyect.name}</h2>
      <SlugContainer>
        <SlugImgContainer>
          <img src={proyect.image} alt={proyect.name} />
        </SlugImgContainer>
        <SlugTechnologies>
          {proyect.technologies.map((elemento, index) => (
            <Skill key={index}>{elemento}</Skill>
          ))}
        </SlugTechnologies>
        <SlugDesc>{proyect.desc}</SlugDesc>
        <div className="slug_link_container">
          <SlugLinks href={proyect.link} target="_blank">
            Go to Proyect
          </SlugLinks>
          <SlugLinks href={proyect.linkGitHub} target="_blank">
            See the Code
          </SlugLinks>
        </div>
      </SlugContainer>
    </>
  );
};
export async function getServerSideProps({ query }) {
  let slugs;
  if (query == {} || !query?.slug) {
    slugs = "";
  } else {
    const _slugs = query.slug;
    slugs = _slugs.join("_");
  }
  const res = await fetch(
    `https://portfolio-api-rest.vercel.app/proyects/${slugs}`
  );
  const data = await res.json();

  return {
    props: {
      proyect: data.proyect,
    }, // will be passed to the page component as props
  };
}

export default ProyectPage;
