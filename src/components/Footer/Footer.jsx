import React from "react";
import Section from "./Section";
import { sections } from "./data";
import Logo from "../Header/Logo";

function Footer() {
  return (
    <footer className="flex pl-5 bg-gray-900 py-12 gap-10 text-white flex-col">
      <Logo />

      <div className="sections flex flex-wrap gap-5 justify-center min-lg:justify-start">
        {sections.map((section, index) => (
          <Section header={section.header} desc={section.desc} key={index} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
