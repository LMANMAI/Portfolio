import React from "react";
import AboutMePage from "./AboutMe";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import ContactPage from "./Contact";

export default function Home() {
  return (
    <main>
      <AboutMePage />
      <Skills />
      <Portfolio />
      <ContactPage />
    </main>
  );
}
