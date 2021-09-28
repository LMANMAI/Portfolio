import React from "react";

const ProyectPage = ({ proyect }) => {
  return (
    <section>
      <h2>{proyect.name}</h2>
      <h3>Tecnologias</h3>
      {proyect.technologies.map((elemento) => (
        <li>{elemento}</li>
      ))}
      <div>
        <img src={proyect.image} alt={proyect.name} />
      </div>
    </section>
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
