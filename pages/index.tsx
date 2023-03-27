import React from "react";

import { Skills, Contact, Proyects, Experience, About} from 'containers/Views'
export default function Home({proyectsPortfolio}) {
  return (
    <>
      <About />
      <Experience />
      <Skills />
      <Proyects proyectsPortfolio={proyectsPortfolio} />
      <Contact />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://portfolio-api-rest.vercel.app/proyects");
  const data = await res.json();
  return {
    props: {
      proyectsPortfolio: data,
    },
  };
};