import React from "react";
import "./header.css";
import HeaderSocials from "./headerSocials";
import CTA from "./CTA";
import me from "../../assets/me.png";

const header = () => {
  return (
    <header>
      <div className="container.header__container">
        <h5>Hello I'm</h5>
        <h1>Shayda Jebbehdar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
