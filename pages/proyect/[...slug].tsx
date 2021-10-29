import React from "react";
import {
  SlugContainer,
  SlugTechnologies,
  Skill,
  SlugImgContainer,
  SlugDesc,
  SlugLinks,
} from "../../assets";
const ProyectPage = ({ proyect }) => {
  console.log(proyect);
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
        <SlugDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam
          esse vitae nesciunt harum omnis rerum voluptas ipsa vero delectus ad,
          magni corporis suscipit, ut iusto dolore repellendus totam impedit.
        </SlugDesc>
        <div className="slug_link_container">
          <SlugLinks href={proyect.link} target="_blank">
            Ver proyecto
          </SlugLinks>
          <SlugLinks href={proyect.linkGitHub} target="_blank">
            Ver codigo
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
  console.log("El slug que llega por el query es", slugs);
  const res = await fetch(
    `https://portfolio-api-lucas.herokuapp.com/proyects/${slugs}`
  );
  const data = await res.json();

  console.log("el proyecto es : ", data);
  return {
    props: {
      proyect: data.proyect,
    }, // will be passed to the page component as props
  };
}

export default ProyectPage;
